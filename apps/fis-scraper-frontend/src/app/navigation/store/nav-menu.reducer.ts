import { createReducer, on } from '@ngrx/store';
import { collapseMenu, expandMenu, navigate } from './nav-menu.actions';
import { Destination } from 'apps/fis-scraper-frontend/src/app/shared/models/routes.model';

export enum MenuDisplayState {
  COLLAPSED = 'collapsed',
  EXPANDED = 'expanded',
}

export interface NavMenuState {
  displayState: MenuDisplayState;
  activeLink: Destination;
}

const initialState: NavMenuState = {
  displayState: MenuDisplayState.EXPANDED,
  activeLink: Destination.SCRAPER,
};

export const navMenuReducer = createReducer(
  initialState,
  on(collapseMenu, state => ({
    ...state,
    displayState: MenuDisplayState.COLLAPSED,
  })),
  on(expandMenu, state => ({
    ...state,
    displayState: MenuDisplayState.EXPANDED,
  })),
  on(navigate, (state, { activeLink }) => ({ ...state, activeLink }))
);
