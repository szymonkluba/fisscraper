import { IFile } from "../models/file.model";
import { createReducer, on } from "@ngrx/store";
import { addFile, deleteFile, retrieveFilesList } from "./files.actions";

export const initialState: ReadonlyArray<IFile> = []

export const filesReducer = createReducer(
  initialState,
  on(retrieveFilesList, (state, { files }) => files),
  on(deleteFile, (state, { file }) => state.filter((fileInState) => fileInState.id !== file.id)),
  on(addFile, (state, { file }) => {
    if (state.findIndex((element) => element.id === file.id) > -1) {
      return state;
    }

    return [...state, file];
  })
);
