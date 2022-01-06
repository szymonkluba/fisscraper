import { IFile } from "../models/file.model";
import { createReducer, on } from "@ngrx/store";
import { addFile, deleteFile, retrieveFilesList } from "./files.actions";

export const initialState: ReadonlyArray<IFile> = []

export const filesReducer = createReducer(
  initialState,
  on(retrieveFilesList, (state, { files }) => files),
  on(deleteFile, (state, { file }) => state.filter((fileInState) => fileInState.fis_id !== file.fis_id)),
  on(addFile, (state, { file }) => {
    if (state.findIndex((element) => element.fis_id === file.fis_id) > -1) {
      console.log(state)
      return [...state.filter((fileInState) => fileInState.fis_id !== file.fis_id), file];
    }
    return [...state, file];
  })
);
