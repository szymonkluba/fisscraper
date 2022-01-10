import { IFile } from "../models/file.model";
import { Folder } from "../models/folder.model";
import { Notification } from "../models/notification.model";

export interface AppState {
  files: ReadonlyArray<IFile>,
  folders: ReadonlyArray<Folder>,
  folderContents: ReadonlyArray<IFile>,
  notifications: ReadonlyArray<Notification>
}
