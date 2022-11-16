import { Component } from '@angular/core';
import { routerPaths } from "../../models/routes.model";

@Component({
  selector: 'app-scraper',
  templateUrl: './scraper.component.html',
  styleUrls: ['./scraper.component.scss']
})
export class ScraperComponent {

  links = [
    routerPaths.SINGLE_RACE,
    routerPaths.MULTI_RACES,
    routerPaths.RANGE_RACES,
    routerPaths.RAW_DATA
  ];
  activeLink: string = window.location.pathname;

  constructor() { }

}
