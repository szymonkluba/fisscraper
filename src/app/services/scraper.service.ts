import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Race } from "../models/race.model";
import { IFile } from "../models/file.model";

@Injectable({
  providedIn: 'root'
})
export class ScraperService {

  constructor(private http: HttpClient) {}

  scrapRace(data: Race) {

    const url = "http://127.0.0.1:8000/scrap_race/"
    return this.http.post<IFile>(url, data)
  }
}
