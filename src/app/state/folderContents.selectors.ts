import { createFeatureSelector } from "@ngrx/store";
import { IFile } from "../models/file.model";

export const selectFolderContent = createFeatureSelector<ReadonlyArray<IFile>>("folderContents")
