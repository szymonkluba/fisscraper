import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Participant, Race, RaceDetails } from '@shared/models/race.model';
import { Store } from '@ngrx/store';
import { map, Observable, take, tap } from 'rxjs';
import { environment } from '@environments/environment';

import { download } from '@shared/utils/download/download';
import { Saver, SAVER } from '@shared/providers/saver.provider';
import { Download } from '@shared/models/download.model';
import { Folder } from '@shared/models/folder.model';
import { addRaceDetails } from '@archive/store/raceDetails.actions';

const options: {
  responseType: 'json';
} = {
  responseType: 'json',
};

@Injectable({
  providedIn: 'root',
})
export class ScraperService {
  constructor(
    private readonly http: HttpClient,
    private readonly store: Store,
    @Inject(SAVER) private readonly save: Saver
  ) {}

  private processFileResponse(
    response: Observable<HttpEvent<Blob>>,
    filename?: string
  ): Observable<Download> {
    return response.pipe(download((blob: Blob) => this.save(blob, filename)));
  }

  scrapRace(data: Race): Observable<RaceDetails> {
    const url = `${environment.scraperApi}/scrap_race/`;

    return this.http.post<RaceDetails>(url, data, options).pipe(take(1));
  }

  scrapRawData(data: Race): Observable<number> {
    const url = `${environment.scraperApi}/scrap_race/raw_data/`;

    return this.processFileResponse(
      this.http.post(url, data, {
        observe: 'events',
        responseType: 'blob',
      })
    ).pipe(map(_ => 1));
  }

  scrapTable(data: { url: string }): Observable<number> {
    const url = `${environment.scraperApi}/scrap_table/`;

    return this.processFileResponse(
      this.http.post(url, data, {
        observe: 'events',
        responseType: 'blob',
      })
    ).pipe(map(_ => 1));
  }

  listRaces(): Observable<Array<Folder>> {
    const url = `${environment.scraperApi}/race/`;

    return this.http.get<Array<RaceDetails>>(url).pipe(
      map((races: Array<RaceDetails>) => {
        const folders_map = new Map<string, Folder>();

        for (let race of races) {
          if (folders_map.has(race.tournament.name)) {
            const folder = folders_map.get(race.tournament.name);
            folder!.entries.push(race);
            folders_map.set(race.tournament.name, folder!);
          } else {
            folders_map.set(race.tournament.name, {
              name: race.tournament.name,
              entries: [race],
            });
          }
        }

        return Array.from(folders_map.values());
      })
    );
  }

  getRaceDetails(uuid: string): Observable<RaceDetails> {
    const url = `${environment.scraperApi}/race/${uuid}/`;
    return this.http.get<RaceDetails>(url, options).pipe(
      map((race: RaceDetails) => {
        if (race.participant_set) {
          for (let participant of race.participant_set) {
            participant.jump_1_empty =
              participant.jump_1 &&
              Object.values(participant.jump_1).every(param => param === null);
            participant.jump_2_empty =
              participant.jump_2 &&
              Object.values(participant.jump_2).every(param => param === null);
          }

          race.no_jump_1 = race.participant_set
            .map((participant: Participant) => participant.jump_1_empty)
            .every(Boolean);
          race.no_jump_2 = race.participant_set
            .map((participant: Participant) => participant.jump_2_empty)
            .every(Boolean);
        }

        return race;
      }),
      tap(raceDetails => this.store.dispatch(addRaceDetails({ raceDetails })))
    );
  }

  downloadFile(race: RaceDetails): Observable<Download> {
    const url = `${environment.scraperApi}/download/${race.uuid}/file/`;
    return this.processFileResponse(
      this.http.get(url, {
        observe: 'events',
        responseType: 'blob',
      })
    );
  }

  downloadSelectedFiles(
    uuids: Array<string>,
    filename?: string
  ): Observable<Download> {
    const url = `${environment.scraperApi}/download/files/`;

    const entries = uuids.map((uuid: string) => {
      return {
        uuid,
      };
    });
    const body = {
      entries,
    };

    return this.processFileResponse(
      this.http.post(url, body, {
        observe: 'events',
        responseType: 'blob',
      }),
      filename
    );
  }
}
