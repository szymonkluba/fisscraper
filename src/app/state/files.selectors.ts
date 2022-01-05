import { createFeatureSelector } from "@ngrx/store";
import { IFile } from "../models/file.model";

export const selectFiles = createFeatureSelector<ReadonlyArray<IFile>>('files');
