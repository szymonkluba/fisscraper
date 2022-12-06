import { createReducer, on } from '@ngrx/store';
import { collapseMenu, expandMenu, navigate } from './nav-menu.actions';
import { Paths } from "@shared/models/routes.model";


export interface NavMenuState {
  collapsed: boolean;
  activeLink: Paths;
}

const initialState: NavMenuState = {
  collapsed: false,
  activeLink: Paths.SCRAPER,
};

export const navMenuReducer = createReducer(
  initialState,
  on(collapseMenu, state => ({ ...state, collapsed: true })),
  on(expandMenu, state => ({ ...state, collapsed: false })),
  on(navigate, (state, { activeLink }) => ({...state, activeLink}))
);
