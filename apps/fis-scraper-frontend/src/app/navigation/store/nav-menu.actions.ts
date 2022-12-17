import { createAction, props } from '@ngrx/store';
import { Destination } from 'apps/fis-scraper-frontend/src/app/shared/models/routes.model';

export const collapseMenu = createAction('[Nav Menu] Collapse Menu');
export const expandMenu = createAction('[Nav Menu] Expand Menu');

export const navigate = createAction(
  '[Nav Menu] Navigate',
  props<{ activeLink: Destination }>()
);

export type NavMenuActions =
  | typeof collapseMenu
  | typeof expandMenu
  | typeof navigate;