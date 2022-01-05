import { IFile } from "../models/file.model";

export interface AppState {
  files: ReadonlyArray<IFile>
}
