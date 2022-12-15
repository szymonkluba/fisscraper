import { Folder } from '@shared/models/folder.model';
import { createReducer, on } from '@ngrx/store';

import * as foldersActions from './folders.actions';

export interface FoldersState {
  folders: ReadonlyArray<Folder>;
  loadFoldersSuccess: boolean;
}

export const initialState: FoldersState = {
  folders: [],
  loadFoldersSuccess: false,
};

export const foldersReducer = createReducer(
  initialState,
  on(foldersActions.loadFoldersSuccess, (state, { folders }) => {
    return {
      ...state,
      folders: [...folders],
      loadFoldersSuccess: true,
    };
  }),
  on(foldersActions.loadFoldersFailure, state => {
    return {
      ...state,
      loadFoldersSuccess: false,
    };
  }),
  on(foldersActions.addFolder, (state, { folder }) => {
    const folderInState = state.folders.find(f => f.name === folder.name);
    if (folderInState) {
      const updatedFolder = {
        name: folderInState.name,
        entries: [...folderInState.entries, ...folder.entries],
      };

      return {
        ...state,
        folders: [
          ...state.folders.filter(f => f.name !== folderInState.name),
          updatedFolder,
        ],
      };
    }

    return {
      ...state,
      folders: [...state.folders, folder],
    };
  })
);
