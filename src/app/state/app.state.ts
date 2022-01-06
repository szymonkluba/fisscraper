import { IFile } from "../models/file.model";
import { Folder } from "../models/folder.model";

export interface AppState {
  files: ReadonlyArray<IFile>,
  folders: ReadonlyArray<Folder>
}
