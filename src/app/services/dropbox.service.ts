import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, switchMap, tap } from "rxjs";
import { IFile } from "../models/file.model";
import { Folder } from "../models/folder.model";
import { environment } from "../../environments/environment";
import { download } from "../utils/download";
import { Saver, SAVER } from "../providers/saver.provider";
import { Store } from "@ngrx/store";
import { selectFolderContent } from "../state/folderContents.selectors";
import { retrievedFolderContent } from "../state/folderContents.actions";

@Injectable({
  providedIn: 'root'
})
export class DropboxService {

  constructor(
    private http: HttpClient,
    private store: Store,
    @Inject(SAVER) private save: Saver
  ) {
  }

  headers = new HttpHeaders({
    "Authorization": `Bearer ${environment.dropbox.apiKey}`,
    "Content-Type": "application/json"
  });



  getFiles(folderPath: string) {

    const url = environment.dropbox.listEntriesURL;

    const body = {
      "path": folderPath,
      "recursive": false,
      "include_media_info": false,
      "include_deleted": false,
      "include_has_explicit_shared_members": false,
      "include_mounted_folders": true,
      "include_non_downloadable_files": true
    };

    return this.http
      .post<{ entries: IFile[] }>(url, body, { headers: this.headers })
      .pipe(
        map((files) => files.entries || []),
        tap((files) => this.store.dispatch(retrievedFolderContent({ folderContents: files }))),
        switchMap(_ => this.store.select(selectFolderContent)),
      );
  };

  getFolders() {
    const url = environment.dropbox.listEntriesURL;

    const body = {
      "path": "",
      "recursive": false,
      "include_media_info": false,
      "include_deleted": false,
      "include_has_explicit_shared_members": false,
      "include_mounted_folders": true,
      "include_non_downloadable_files": true
    };

    return this.http
      .post<{ entries: Folder[] }>(url, body, { headers: this.headers })
      .pipe(
        map((folders) => folders.entries.filter((entry) => entry['.tag'] === "folder") || [])
      );
  };

  downloadFile(filePath: string, fileName: string) {
    const url = environment.dropbox.downloadFile;

    const headers = new HttpHeaders({
      "Authorization": `Bearer ${environment.dropbox.apiKey}`,
      "Dropbox-API-Arg": `{"path": "${filePath}"}`
    });

    return this.http.post(url, null ,{
      headers,
      observe: "events",
      responseType: "blob",
    }).pipe(
      download(blob => this.save(blob, fileName))
    );
  }

  downloadFolder(folderPath: string, fileName: string) {
    const url = environment.dropbox.downloadZip;

    const headers = new HttpHeaders({
      "Authorization": `Bearer ${environment.dropbox.apiKey}`,
      "Dropbox-API-Arg": `{"path": "${folderPath}"}`
    });

    return this.http.post(url, null, {
      headers,
      observe: "events",
      responseType: "blob",
    }).pipe(
      download(blob => this.save(blob, `${fileName}.zip`))
    );
  }
}
