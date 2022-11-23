import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

import { filter, map, Observable } from 'rxjs';
import { routerPaths } from '@shared/models/routes.model';
import { trackByIndex } from '@shared/utils/track-by/track-by';

@Component({
  selector: 'app-scraper',
  templateUrl: './scraper.component.html',
  styleUrls: ['./scraper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  trackByIndex = trackByIndex;

  constructor(private readonly router: Router) {}
}
