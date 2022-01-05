import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from "@angular/material/sidenav";
import { RouteInterface, routerPaths } from "./models/routes.model";

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
}
