import { createAction, props } from '@ngrx/store';
import { RaceDetails } from '../models/race.model';

export const addRaceDetails = createAction(
  '[Race Details Collection] Add Race Details',
  props<{ raceDetails: RaceDetails }>()
);
