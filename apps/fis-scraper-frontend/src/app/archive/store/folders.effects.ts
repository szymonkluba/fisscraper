import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ScraperService } from '@services/scraper.service';
import { addRaceToFolder, FoldersAction, loadFolders } from './folders.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { Folder } from '@shared/models/folder.model';

@Injectable({ providedIn: 'any' })
export class FoldersEffects {
  addRaceToFolder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addRaceToFolder),
      map(({ race }) => {
        const folder: Folder = {
          name: race.tournament.name,
          entries: [race],
        };
        return {
          type: FoldersAction.ADD_FOLDER,
          folder,
        };
      })
    )
  );

  loadFolders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadFolders),
      mergeMap(() =>
        this.scraperService.listRaces().pipe(
          map(folders => ({
            type: FoldersAction.LOAD_FOLDERS_SUCCESS,
            folders,
          })),
          catchError(error =>
            of({
              type: FoldersAction.LOAD_FOLDERS_FAILURE,
              error,
            })
          )
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly scraperService: ScraperService
  ) {}
}
