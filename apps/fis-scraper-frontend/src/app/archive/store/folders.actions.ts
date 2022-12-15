import { createAction, props } from '@ngrx/store';
import { Folder } from '@shared/models/folder.model';
import { RaceDetails } from '@shared/models/race.model';

export enum FoldersAction {
  ADD_FOLDER = '[Folders] Add Folder',
  ADD_RACE_TO_FOLDER = '[Folders] Add Race To Folder',
  LOAD_FOLDERS = '[Folders] Load Folders',
  LOAD_FOLDERS_FAILURE = '[Folders] Load Folders - failure',
  LOAD_FOLDERS_SUCCESS = '[Folders] Load Folders - success',
}

export const loadFolders = createAction(FoldersAction.LOAD_FOLDERS);

export const loadFoldersSuccess = createAction(
  FoldersAction.LOAD_FOLDERS_SUCCESS,
  props<{ folders: ReadonlyArray<Folder> }>()
);

export const loadFoldersFailure = createAction(
  FoldersAction.LOAD_FOLDERS_FAILURE,
  props<{ error: Error }>()
);

export const addRaceToFolder = createAction(
  FoldersAction.ADD_RACE_TO_FOLDER,
  props<{ race: RaceDetails }>()
);

export const addFolder = createAction(
  FoldersAction.ADD_FOLDER,
  props<{ folder: Folder }>()
);
