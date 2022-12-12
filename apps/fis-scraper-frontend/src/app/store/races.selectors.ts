import { createFeatureSelector } from '@ngrx/store';
import { RaceDetails } from '../shared/models/race.model';

export const selectRaces =
  createFeatureSelector<ReadonlyArray<RaceDetails>>('races');
