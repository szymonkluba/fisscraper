import { createReducer, on } from '@ngrx/store';
import { collapseMenu, expandMenu, navigate } from './nav-menu.actions';
import { Paths } from '@shared/models/routes.model';

export enum MenuDisplayStates {
  COLLAPSED = 'collapsed',
  EXPANDED = 'expanded',
}

export interface NavMenuState {
  displayState: MenuDisplayStates;
  activeLink: Paths;
}

const initialState: NavMenuState = {
  displayState: MenuDisplayStates.EXPANDED,
  activeLink: Paths.SCRAPER,
};

export const navMenuReducer = createReducer(
  initialState,
  on(collapseMenu, state => ({
    ...state,
    displayState: MenuDisplayStates.COLLAPSED,
  })),
  on(expandMenu, state => ({
    ...state,
    displayState: MenuDisplayStates.EXPANDED,
  })),
  on(navigate, (state, { activeLink }) => ({ ...state, activeLink }))
);
