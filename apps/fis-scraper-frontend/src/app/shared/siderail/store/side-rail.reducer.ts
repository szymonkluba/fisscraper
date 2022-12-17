import { createReducer, on } from '@ngrx/store';
import {
  changeSideRailContent,
  closeSideRail,
  openSideRail,
} from './side-rail.actions';
import { SideRailPortal } from '@shared/models/portal.model';

export interface SideRailState {
  opened: boolean;
  portal: SideRailPortal | null;
}

export const initialState: SideRailState = {
  opened: false,
  portal: null,
};

export const sideRailReducer = createReducer(
  initialState,
  on(openSideRail, state => ({ ...state, opened: true })),
  on(closeSideRail, state => ({ ...state, opened: false })),
  on(changeSideRailContent, (state, { portal }) => ({
    ...state,
    portal: portal,
  }))
);
