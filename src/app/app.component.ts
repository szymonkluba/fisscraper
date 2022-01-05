import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from "@angular/material/sidenav";
import { RouteInterface, routerPaths } from "./models/routes.model";
import { DropboxService } from "./services/dropbox.service";
import { Store } from "@ngrx/store";
import { retrieveFilesList } from "./state/files.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  navLinks: RouteInterface[] = [
    routerPaths.SCRAPER,
    routerPaths.ARCHIVE
  ]

  close() {
    this.sidenav.close();
  }

  constructor(
    private dropboxService: DropboxService,
    private store: Store
  ) {
  }

  ngOnInit() {
    this.dropboxService
      .getFiles()
      .subscribe(
        (files) => {
          console.log(files)
          return this.store.dispatch(retrieveFilesList({ files }))
        }
      )
  }
}
