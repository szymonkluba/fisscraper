import { createReducer, on } from '@ngrx/store';
import {
  changeSideRailContent,
  closeSideRail,
  openSideRail,
} from './siderail.actions';
import { Portals } from '@shared/models/portal.model';

export interface SideRailState {
  opened: boolean;
  portal: Portals | null;
}

export const initialState: SideRailState = {
  opened: false,
  portal: null,
};

export const sideRailStateReducer = createReducer(
  initialState,
  on(openSideRail, state => ({ ...state, opened: true })),
  on(closeSideRail, state => ({ ...state, opened: false })),
  on(changeSideRailContent, (state, { portal }) => ({
    ...state,
    portal: portal,
  }))
);
