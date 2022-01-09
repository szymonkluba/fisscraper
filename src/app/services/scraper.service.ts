import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Race } from "../models/race.model";
import { IFile } from "../models/file.model";
import { Store } from "@ngrx/store";
import { addFile } from "../state/files.actions";
import { FileStatuses } from "../models/file-statuses.model";
import { catchError, map, merge, Observable, of, scan, tap } from "rxjs";
import { getErrorMessage } from "../utils/getErrorMessage";
import { environment } from "../../environments/environment";
import { range } from "../utils/range";

@Injectable({
  providedIn: 'root'
})
export class ScraperService {

  constructor(
    private http: HttpClient,
    private store: Store
  ) {}

  scrapRace(data: Race): Observable<number> {

    const tempFile: IFile = {
      ...data as IFile,
      status: FileStatuses.PROGRESS
    }

    this.store.dispatch(addFile({ file: tempFile }))

    const url = `${environment.scraperApi}/scrap_race`

    return this.http.post<IFile>(url, data)
      .pipe(
        catchError(
          err => of({
            ...err.error,
            name: getErrorMessage(err.status),
          })
        ),
        tap(file => this.store.dispatch(addFile({ file }))),
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
