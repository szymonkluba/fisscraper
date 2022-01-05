import { Component, OnInit } from '@angular/core';
import { routerPaths } from "../../models/routes.model";

@Component({
  selector: 'app-scraper',
  templateUrl: './scraper.component.html',
  styleUrls: ['./scraper.component.scss']
})
export class ScraperComponent implements OnInit {

  links = [
    routerPaths.SINGLE_RACE
  ];
  activeLink = this.links[0].path;

  constructor() { }

  ngOnInit(): void {
  }
}
