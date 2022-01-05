import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs";
import { IFile } from "../models/file.model";

@Injectable({
  providedIn: 'root'
})
export class DropboxService {

  constructor(private http: HttpClient) {
  }

  headers = {
    "Authorization": "Bearer uMHq35uknPEAAAAAAAAAAdpMjglMdLfjL4SHuEqm_16A_KCLvN2sH8pycwpQyAWI",
    "Content-Type": "application/json"
  };

  getFiles() {

    const url = "https://api.dropboxapi.com/2/files/list_folder"

    const body = {
      "path": "",
      "recursive": false,
      "include_media_info": false,
      "include_deleted": false,
      "include_has_explicit_shared_members": false,
      "include_mounted_folders": true,
      "include_non_downloadable_files": true
    }

    return this.http
      .post<{ entries: IFile[] }>(url, body, { headers: this.headers })
      .pipe(
        map((files) => files.entries || [])
      )
  };
}
