import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RaceDetails } from '../models/race.model';

export const selectAllRaceDetails =
  createFeatureSelector<ReadonlyArray<RaceDetails>>('raceDetails');

export const selectRaceDetails = (props: { uuid: string }) =>
  createSelector(
    selectAllRaceDetails,
    (raceDetails: ReadonlyArray<RaceDetails>) => {
      return raceDetails.find((race: RaceDetails) => race.uuid === props.uuid);
    }
  );
