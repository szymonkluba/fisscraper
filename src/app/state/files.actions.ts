import { createAction, props } from "@ngrx/store";
import { IFile } from "../models/file.model";

export const addFile = createAction(
  '[File Collection] Add File',
  props<{ file: IFile }>()
);

export const deleteFile = createAction(
  '[File Collection] Remove File',
  props<{ file: IFile }>()
);

export const retrieveFilesList = createAction(
  '[File Collection] Retrieve Books',
  props<{ files: ReadonlyArray<IFile> }>()
);
