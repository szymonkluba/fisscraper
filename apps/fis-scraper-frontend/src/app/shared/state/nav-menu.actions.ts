import { createAction, props } from '@ngrx/store';
import { Paths } from '@shared/models/routes.model';

export const collapseMenu = createAction('[Nav Menu] Collapse Menu');
export const expandMenu = createAction('[Nav Menu] Expand Menu');

export const navigate = createAction('[Nav Menu] Navigate', props<{ activeLink: Paths }>());
