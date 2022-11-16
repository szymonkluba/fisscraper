import { createAction, props } from '@ngrx/store';
import { IFile } from '../models/file.model';

export const retrievedFolderContent = createAction(
  '[Folder Content] Retrieve Folder Content',
  props<{ folderContents: ReadonlyArray<IFile> }>()
);
