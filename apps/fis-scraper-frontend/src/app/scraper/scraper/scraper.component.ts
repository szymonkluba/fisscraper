import { Component } from '@angular/core';
import { routerPaths } from '../../models/routes.model';
import { NavigationStart, Router } from '@angular/router';
import { filter, map, Observable } from 'rxjs';

@Component({
  selector: 'app-scraper',
  templateUrl: './scraper.component.html',
  styleUrls: ['./scraper.component.scss'],
})
export class ScraperComponent {
  links = [
    routerPaths.SINGLE_RACE,
    routerPaths.MULTI_RACES,
    routerPaths.RANGE_RACES,
    routerPaths.RAW_DATA,
    routerPaths.SCRAP_TABLE,
  ];
  activeLink$: Observable<string> = this.router.events.pipe(
    filter(event => event instanceof NavigationStart),
    map(event =>
      (event as NavigationStart).url === '/scraper'
        ? '/scraper/single-race'
        : (event as NavigationStart).url
    )
  );

  constructor(private readonly router: Router) {}
}
