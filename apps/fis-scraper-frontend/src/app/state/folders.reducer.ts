import { Folder } from '../models/folder.model';
import { createReducer, on } from '@ngrx/store';
import { retrievedFolderList } from './folders.actions';

export const initialState: ReadonlyArray<Folder> = [];

export const foldersReducer = createReducer(
  initialState,
  on(retrievedFolderList, (state, { folders }) => folders)
);
