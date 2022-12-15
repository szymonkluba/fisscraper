import { createAction, props } from '@ngrx/store';
import { Race, RaceDetails } from '@shared/models/race.model';

export enum RacesAction {
  ADD_RACE = '[Races] Add Race',
  DELETE_RACE = '[Races] Remove Race',
  RETRIEVE_RACES = '[Races] Retrieve Races',
  SCRAP_MULTI_RACES = '[Races] Scrap Multiple Races',
  SCRAP_RACE = '[Races] Scrap Race',
  SCRAP_RACE_FAILURE = '[Races] Scrap Race Failure',
  SCRAP_RANGE_RACES = '[Races] Scrap Range Of Races',
  SCRAP_SINGLE_RACE = '[Races] Scrap Single Race',
  SET_OVERALL_PROGRESS = '[Races] Set Overall Progress',
}

export const scrapRace = createAction(
  RacesAction.SCRAP_RACE,
  props<{ race: Race }>()
);

export const scrapSingleRace = createAction(
  RacesAction.SCRAP_SINGLE_RACE,
  props<{ race: Race }>()
);

export const scrapMultipleRaces = createAction(
  RacesAction.SCRAP_MULTI_RACES,
  props<{ races: Race[] }>()
);

export const scrapRangeOfRaces = createAction(
  RacesAction.SCRAP_RANGE_RACES,
  props<{ startFisId: number; endFisId: number; details: boolean }>()
);

export const scrapRaceFailure = createAction(RacesAction.SCRAP_RACE_FAILURE);

export const addRace = createAction(
  RacesAction.ADD_RACE,
  props<{ race: RaceDetails }>()
);

export const deleteRace = createAction(
  RacesAction.DELETE_RACE,
  props<{ race: RaceDetails }>()
);

export const retrieveRacesList = createAction(
  RacesAction.RETRIEVE_RACES,
  props<{ races: ReadonlyArray<RaceDetails> }>()
);

export const setOverallProgress = createAction(
  RacesAction.SET_OVERALL_PROGRESS,
  props<{ overallProgress: number }>()
);
