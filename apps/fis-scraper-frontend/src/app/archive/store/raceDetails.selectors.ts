import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RaceDetails } from 'apps/fis-scraper-frontend/src/app/shared/models/race.model';

export const selectAllRaceDetails =
  createFeatureSelector<ReadonlyArray<RaceDetails>>('raceDetails');

export const selectRaceDetails = (props: { uuid: string }) =>
  createSelector(
    selectAllRaceDetails,
    (raceDetails: ReadonlyArray<RaceDetails>) => {
      return raceDetails.find((race: RaceDetails) => {
        console.log('race:', race.uuid, 'props:', props.uuid);
        return race.uuid === props.uuid;
      });
    }
  );
