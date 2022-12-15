import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FoldersState } from '@archive/store/folders.reducer';
import { Feature } from '@constants/store_constants';

export const selectFoldersState = createFeatureSelector<FoldersState>(
  Feature.FOLDERS
);

export const selectFolders = createSelector(
  selectFoldersState,
  ({ folders }) => folders
);

export const selectFoldersLoadStatus = createSelector(
  selectFoldersState,
  ({ loadFoldersSuccess }) => loadFoldersSuccess
);
