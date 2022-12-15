import { createReducer, on } from '@ngrx/store';
import { RaceDetails } from '@shared/models/race.model';

import * as racesActions from './races.actions';

export interface RacesState {
  races: ReadonlyArray<RaceDetails>;
  progress: number;
  overallProgress: number;
  hasError: boolean;
}

export const initialState: RacesState = {
  races: [],
  progress: 0,
  overallProgress: 0,
  hasError: false,
};

export const racesReducer = createReducer(
  initialState,
  on(racesActions.retrieveRacesList, (state, { races }) => ({
    ...state,
    races,
  })),
  on(racesActions.deleteRace, (state, { race }) => ({
    ...state,
    races: state.races.filter(raceInState => raceInState.uuid !== race.uuid),
  })),
  on(racesActions.addRace, (state, { race }) => {
    if (state.races.findIndex(element => element.uuid === race.uuid) > -1) {
      return {
        ...state,
        races: [
          ...state.races.filter(raceInState => raceInState.uuid !== race.uuid),
          race,
        ],
        progress: state.progress + 1,
      };
    }
    return {
      ...state,
      races: [...state.races, race],
      progress: state.progress + 1,
    };
  }),
  on(racesActions.setOverallProgress, (state, { overallProgress }) => ({
    ...state,
    progress: 0,
    hasError: false,
    overallProgress,
  })),
  on(racesActions.scrapRaceFailure, state => ({
    ...state,
    progress: state.progress + 1,
    hasError: true,
  }))
);
