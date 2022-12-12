import { createAction, props } from '@ngrx/store';
import { RaceDetails } from '../shared/models/race.model';

export const addRaceDetails = createAction(
  '[Race Details Collection] Add Race Details',
  props<{ raceDetails: RaceDetails }>()
);
