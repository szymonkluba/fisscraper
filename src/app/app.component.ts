import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from "@angular/material/sidenav";
import { RouteInterface, routerPaths } from "./models/routes.model";
import { DropboxService } from "./services/dropbox.service";
import { Store } from "@ngrx/store";
import { retrievedFolderList } from "./state/folders.actions";
import { Folder } from "./models/folder.model";
import { Subject, takeUntil } from "rxjs";
import { ScraperService } from "./services/scraper.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  title = "FIS Scraper";
  spinnerState: boolean = true;

  subscriptionEndSubject = new Subject();
  subscriptionEnd$ = this.subscriptionEndSubject.asObservable();

  navLinks: RouteInterface[] = [
    routerPaths.SCRAPER,
    routerPaths.ARCHIVE
  ]

  close() {
    this.sidenav.close();
  }

  constructor(
    private dropboxService: DropboxService,
    private scraperService: ScraperService,
    private store: Store
  ) {
  }

  ngOnInit() {

    this.dropboxService
      .getFolders()
      .pipe(takeUntil(this.subscriptionEnd$))
      .subscribe(
        (folders: Folder[]) => {
          return this.store.dispatch(retrievedFolderList({ folders }))
        }
      )
    this.scraperService.wakeUpServer().subscribe(_ => {
      this.spinnerState = false;
    })
  }

  ngOnDestroy() {
    this.subscriptionEndSubject.next(null);
    this.subscriptionEndSubject.complete();
  }
}
