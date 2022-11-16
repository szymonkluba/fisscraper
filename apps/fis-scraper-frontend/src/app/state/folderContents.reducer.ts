import { IFile } from '../models/file.model';
import { createReducer, on } from '@ngrx/store';
import { retrievedFolderContent } from './folderContents.actions';

export const initialState: ReadonlyArray<IFile> = [];

export const folderContentReducer = createReducer(
  initialState,
  on(retrievedFolderContent, (state, { folderContents }) => folderContents)
);
