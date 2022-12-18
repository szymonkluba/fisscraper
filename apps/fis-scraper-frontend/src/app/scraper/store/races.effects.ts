import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FoldersAction } from '@archive/store/folders.actions';
import { NotificationsService } from '@services/notifications.service';
import { Race } from '@shared/models/race.model';
import { RaceDetailsAction } from '@archive/store/raceDetails.actions';
import { RacesAction } from './races.actions';
import { ScraperService } from '@services/scraper.service';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap, of, switchMap, tap } from 'rxjs';
import { range } from '@shared/utils/range/range';

import * as racesActions from './races.actions';

// noinspection JSUnusedGlobalSymbols
@Injectable({ providedIn: 'any' })
export class RacesEffects {
  scrapRace$ = createEffect(() =>
    this.actions$.pipe(
      ofType(racesActions.scrapRace),
      mergeMap(({ race }) =>
        this.scraperService.scrapRace(race).pipe(
          tap(raceDetails =>
            this.notificationsService.handleFileReadyNotification(
              `${raceDetails.fis_id} ${raceDetails.place} ${raceDetails.hill_size}`
            )
          ),
          switchMap(raceDetails => [
            {
              type: RacesAction.ADD_RACE,
              race: raceDetails,
            },
            {
              type: FoldersAction.ADD_RACE_TO_FOLDER,
              race: raceDetails,
            },
            {
              type: RaceDetailsAction.ADD_RACE_DETAILS,
              raceDetails,
            },
          ]),
          catchError(() => of({ type: RacesAction.SCRAP_RACE_FAILURE }))
        )
      )
    )
  );

  scrapSingleRace$ = createEffect(() =>
    this.actions$.pipe(
      ofType(racesActions.scrapSingleRace),
      tap(() => {
        this.store.dispatch(
          racesActions.setOverallProgress({ overallProgress: 1 })
        );
      }),
      map(({ race }) => ({ type: RacesAction.SCRAP_RACE, race }))
    )
  );

  scrapMultipleRaces$ = createEffect(() =>
    this.actions$.pipe(
      ofType(racesActions.scrapMultipleRaces),
      tap(({ races }) => {
        this.store.dispatch(
          racesActions.setOverallProgress({ overallProgress: races.length })
        );
      }),
      switchMap(({ races }) =>
        races.map(race => ({ type: RacesAction.SCRAP_RACE, race }))
      )
    )
  );

  scrapRangeOfRaces$ = createEffect(() =>
    this.actions$.pipe(
      ofType(racesActions.scrapRangeOfRaces),
      map(({ startFisId, endFisId, details }) => {
        const races: Array<Race> = range(startFisId, endFisId, 1).map(
          (fisId: number) => ({ fis_id: fisId, details: details })
        );

        return { type: RacesAction.SCRAP_MULTI_RACES, races };
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly notificationsService: NotificationsService,
    private readonly scraperService: ScraperService,
    private readonly store: Store
  ) {}
}
