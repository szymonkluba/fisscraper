import { createAction, props } from '@ngrx/store';
import { SideRailPortal } from '../../models/portal.model';

export const closeSideRail = createAction('[Side Rail] Close Side Rail');

export const openSideRail = createAction('[Side Rail] Open Side Rail');

export const changeSideRailContent = createAction(
  '[Side Rail] Change Content',
  props<{ portal: SideRailPortal }>()
);
