import { createAction, props } from '@ngrx/store';
import { RaceDetails } from 'apps/fis-scraper-frontend/src/app/shared/models/race.model';

export enum RaceDetailsAction {
  ADD_RACE_DETAILS = '[Race Details] Add Race Details',
}

export const addRaceDetails = createAction(
  RaceDetailsAction.ADD_RACE_DETAILS,
  props<{ raceDetails: RaceDetails }>()
);
