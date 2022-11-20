import { Folder } from '../models/folder.model';
import { createReducer, on } from '@ngrx/store';
import { addFolder, retrievedFolderList } from './folders.actions';

export const initialState: ReadonlyArray<Folder> = [];

export const foldersReducer = createReducer(
  initialState,
  on(retrievedFolderList, (state, { folders }) => folders),
  on(addFolder, (state, { folder }) => {
    const folderInState = state.find(f => f.name === folder.name);
    if (folderInState) {
      const updatedFolder = {
        name: folderInState.name,
        entries: [...folderInState.entries, ...folder.entries],
      };

      return [
        ...state.filter(f => f.name !== folderInState.name),
        updatedFolder,
      ];
    }
    return [...state, folder];
  })
);
