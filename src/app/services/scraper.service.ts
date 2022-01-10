import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Race } from "../models/race.model";
import { IFile } from "../models/file.model";
import { Store } from "@ngrx/store";
import { addFile } from "../state/files.actions";
import { catchError, map, merge, Observable, of, scan, tap } from "rxjs";
import { environment } from "../../environments/environment";
import { range } from "../utils/range";
import { addNotification } from "../state/notifications.actions";
import { NotificationColors, NotificationIcons } from "../models/notification.model";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class ScraperService {

  constructor(
    private http: HttpClient,
    private store: Store,
    private snackBar: MatSnackBar,
  ) {}

  scrapRace(data: Race): Observable<number> {
    const url = `${environment.scraperApi}/scrap_race`

    return this.http.post<IFile>(url, data)
      .pipe(
        catchError(
          err => {

            const notification = {
              id: Math.random().toString(16).substring(2, 8),
              message: err.name,
              icon: NotificationIcons.ERROR,
              color: NotificationColors.ERROR
            }
            this.store.dispatch(addNotification({ notification }))
            this.snackBar.open(notification.message, 'Close', {
              duration: 2000
            })
            return of(null)
          }
        ),
        tap(file => {
          if (file) {
            this.store.dispatch(addFile({ file }))
            const notification = {
              id: Math.random().toString(16).substring(2, 8),
              message: `${file.name} is ready`,
              icon: NotificationIcons.SUCCESS,
              color: NotificationColors.SUCCESS
            }
            this.store.dispatch(addNotification({ notification }));
            this.snackBar.open(notification.message, 'Close', {
              duration: 2000
            });
          }
        }),
        map(_ => 1)
      )
  }

  scrapMultipleRaces(data: Race[]): Observable<number> {
    const step = Math.ceil(100 / data.length);

    return merge(
      ...data.map(
        (race) => this.scrapRace(race)
      )
    ).pipe(
      scan((progress: number, current: number) => progress + current * step, 0)
    );
  }

  scrapRangeOfRaces(data: {
    start_fis_id: number;
    end_fis_id: number;
    details: boolean
  }): Observable<number> {
    const races: Race[] = range(data.start_fis_id, data.end_fis_id, 1).map((fisId) => ({
      fis_id: fisId,
      details: data.details
    }));

    return this.scrapMultipleRaces(races);
  }
}
