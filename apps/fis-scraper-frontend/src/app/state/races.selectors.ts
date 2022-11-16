import { createFeatureSelector } from '@ngrx/store';
import { RaceDetails } from '../models/race.model';

export const selectRaces =
  createFeatureSelector<ReadonlyArray<RaceDetails>>('races');
