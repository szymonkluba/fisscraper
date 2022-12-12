import { createReducer, on } from '@ngrx/store';
import { addRace, deleteRace, retrieveRacesList } from './races.actions';
import { RaceDetails } from '../shared/models/race.model';

export const initialState: ReadonlyArray<RaceDetails> = [];

export const racesReducer = createReducer(
  initialState,
  on(retrieveRacesList, (state, { races }) => races),
  on(deleteRace, (state, { race }) =>
    state.filter(raceInState => raceInState.uuid !== race.uuid)
  ),
  on(addRace, (state, { race }) => {
    if (state.findIndex(element => element.uuid === race.uuid) > -1) {
      return [
        ...state.filter(raceInState => raceInState.uuid !== race.uuid),
        race,
      ];
    }
    return [...state, race];
  })
);
