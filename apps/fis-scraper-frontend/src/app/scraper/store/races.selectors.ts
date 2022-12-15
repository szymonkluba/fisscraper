import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RacesState } from '@scraper/store/races.reducer';

export const selectRacesState = createFeatureSelector<RacesState>('races');

export const selectRaces = createSelector(
  selectRacesState,
  ({ races }) => races
);

export const selectOverallProgress = createSelector(
  selectRacesState,
  ({ overallProgress }) => overallProgress
);

export const selectProgress = createSelector(
  selectRacesState,
  ({ progress }) => progress
);

export const selectHasError = createSelector(
  selectRacesState,
  ({ hasError }) => hasError
);
