import { Inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { IFile } from "../models/file.model";
import { Folder } from "../models/folder.model";
import { environment } from "../../environments/environment";
import { download } from "../utils/download";
import { Saver, SAVER } from "../providers/saver.provider";
import { Store } from "@ngrx/store";
import { selectFolderContent } from "../state/folderContents.selectors";
import { retrievedFolderContent } from "../state/folderContents.actions";
import { NotificationsService } from "./notifications.service";

@Injectable({
  providedIn: 'root'
})
export class DropboxService {

  constructor(
    private http: HttpClient,
    private store: Store,
    private notificationService: NotificationsService,
    @Inject(SAVER) private save: Saver
  ) {
  }

  apiUrl = environment.scraperApi;

  getFiles(folderPath: string) {

    const url = `${this.apiUrl}/list_folder/${folderPath}`;

    return this.http
      .get<{ entries: IFile[] }>(url)
      .pipe(
        catchError(
          err => {
            this.notificationService.handleErrorNotification(err)
            return of(null)
          }
        ),
        map((files) => (files && files.entries) || []),
        tap((files) => this.store.dispatch(retrievedFolderContent({ folderContents: files }))),
        switchMap(_ => this.store.select(selectFolderContent)),
      );
  };

  getFolders() {
    const url = `${this.apiUrl}/list_folder`;

    return this.http
      .get<{ entries: Folder[] }>(url)
      .pipe(
        catchError(
          err => {
            this.notificationService.handleErrorNotification(err)
            return of(null)
          }
        ),
        map((folders) => (folders && folders.entries) || [])
      );
  };

  downloadFile(file: IFile) {
    const url = `${this.apiUrl}/download/file`;

    return this.http.post(url, file, {
      observe: "events",
      responseType: "blob",
    }).pipe(
      download(blob => this.save(blob, file.name))
    );
  };

  downloadFolder(folder: Folder) {
    const url = `${this.apiUrl}/download/folder`;

    return this.http.post(url, folder, {
      observe: "events",
      responseType: "blob",
    }).pipe(
      download(blob => this.save(blob, `${folder.name}.zip`))
    );
  };

  downloadCurrentFiles(entries: readonly IFile[]) {
    const url = `${this.apiUrl}/download/current`;

    return this.http.post(url, { entries }, {
      observe: "events",
      responseType: "blob"
    }).pipe(
      download(blob => this.save(blob, "current.zip"))
    );
  };
}
