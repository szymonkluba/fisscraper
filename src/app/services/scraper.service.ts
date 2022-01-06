import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Race } from "../models/race.model";
import { IFile } from "../models/file.model";
import { Store } from "@ngrx/store";
import { addFile } from "../state/files.actions";
import { FileStatuses } from "../models/file-statuses.model";

@Injectable({
  providedIn: 'root'
})
export class ScraperService {

  constructor(
    private http: HttpClient,
    private store: Store
  ) {}

  scrapRace(data: Race) {

    const tempFile: IFile = {
      ...data as IFile,
      status: FileStatuses.PROGRESS
    }

    this.store.dispatch(addFile({ file: tempFile }))
    const url = "http://127.0.0.1:8000/scrap_race/"
    return this.http.post<IFile>(url, data)
  }
}
