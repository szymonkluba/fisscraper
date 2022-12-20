import { createAction, props } from '@ngrx/store';
import { NavigationExtras, Params } from '@angular/router';

export const navigate = createAction(
  '[Router] Naviagte',
  props<{ path: string[]; queryParams?: Params; extras?: NavigationExtras }>()
);

export type RoutingActions = typeof navigate;
