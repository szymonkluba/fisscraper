import { createAction, props } from '@ngrx/store';
import { RaceDetails } from '../shared/models/race.model';

export const addRace = createAction(
  '[Race Collection] Add Race',
  props<{ race: RaceDetails }>()
);

export const deleteRace = createAction(
  '[Race Collection] Remove Race',
  props<{ race: RaceDetails }>()
);

export const retrieveRacesList = createAction(
  '[Race Collection] Retrieve Races',
  props<{ races: ReadonlyArray<RaceDetails> }>()
);
