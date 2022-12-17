import { createReducer, on } from '@ngrx/store';
import { Destination } from 'apps/fis-scraper-frontend/src/app/shared/models/routes.model';

import * as navMenuActions from './nav-menu.actions';

export enum MenuDisplayState {
  COLLAPSED = 'collapsed',
  EXPANDED = 'expanded',
}

export interface NavMenuState {
  displayState: MenuDisplayState;
  activeLink: Destination;
  expandedGroup: Destination;
}

const initialState: NavMenuState = {
  displayState: MenuDisplayState.EXPANDED,
  activeLink: Destination.SCRAPER,
  expandedGroup: Destination.EMPTY,
};

export const navMenuReducer = createReducer(
  initialState,
  on(navMenuActions.collapseGroup, state => ({
    ...state,
    expandedGroup: Destination.EMPTY,
  })),
  on(navMenuActions.expandGroup, (state, { expandedGroup }) => ({
    ...state,
    expandedGroup,
  })),
  on(navMenuActions.collapseMenu, state => ({
    ...state,
    displayState: MenuDisplayState.COLLAPSED,
  })),
  on(navMenuActions.expandMenu, state => ({
    ...state,
    displayState: MenuDisplayState.EXPANDED,
  })),
  on(navMenuActions.navigate, (state, { activeLink }) => ({
    ...state,
    activeLink,
  }))
);
