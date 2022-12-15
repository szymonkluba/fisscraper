import { createReducer, on } from '@ngrx/store';
import { RaceDetails } from 'apps/fis-scraper-frontend/src/app/shared/models/race.model';
import { addRaceDetails } from './raceDetails.actions';

export const initialState: ReadonlyArray<RaceDetails> = [];

export const raceDetailsReducer = createReducer(
  initialState,
  on(addRaceDetails, (state, { raceDetails }) => {
    console.log(state, raceDetails);
    if (state.findIndex(element => element.uuid === raceDetails.uuid) > -1) {
      return [
        ...state.filter(raceInState => raceInState.uuid !== raceDetails.uuid),
        raceDetails,
      ];
    }
    return [...state, raceDetails];
  })
);
