import { createFeatureSelector } from '@ngrx/store';
import { Folder } from '../models/folder.model';

export const selectFolders =
  createFeatureSelector<ReadonlyArray<Folder>>('folders');
