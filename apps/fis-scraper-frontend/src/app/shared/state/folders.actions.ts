import { createAction, props } from '@ngrx/store';
import { Folder } from '../models/folder.model';

export const retrievedFolderList = createAction(
  '[Folders Collection] Retrieve Folders',
  props<{ folders: ReadonlyArray<Folder> }>()
);

export const addFolder = createAction(
  '[Folders Collection] Folder',
  props<{ folder: Folder }>()
);
