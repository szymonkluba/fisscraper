import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SideRailState } from './side-rail.reducer';

export const selectSideRail = createFeatureSelector<SideRailState>('sideRail');

export const selectPortal = createSelector(
  selectSideRail,
  ({ portal }) => portal
);

export const selectOpened = createSelector(
  selectSideRail,
  ({ opened }) => opened
);
