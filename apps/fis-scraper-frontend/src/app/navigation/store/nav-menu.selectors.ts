import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NavMenuState } from './nav-menu.reducer';

const selectNavMenu = createFeatureSelector<NavMenuState>('navMenu');

export const selectNavMenuState = createSelector(
  selectNavMenu,
  (state: NavMenuState) => state.displayState
);

export const selectActiveLink = createSelector(
  selectNavMenu,
  (state: NavMenuState) => state.activeLink
);
