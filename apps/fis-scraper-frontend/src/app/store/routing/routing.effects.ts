import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';

import * as routerActions from './routing.actions';
import { Router } from '@angular/router';

@Injectable()
export class RoutingEffects {
  navigate = createEffect(
    () =>
      this.actions$.pipe(
        ofType(routerActions.navigate),
        tap(({ path, queryParams, extras }) => {
          this.router.navigate(path, { queryParams, ...extras });
        })
      ),
    { dispatch: false }
  );

  constructor(
    private readonly actions$: Actions,
    private readonly router: Router
  ) {}
}
