import { ChangeDetectionStrategy, Component } from '@angular/core';

enum ScraperTabs {
  SINGLE_RACE = 'SINGLE_RACE',
  MULTIPLE_RACES = 'MULTIPLE_RACES',
  RANGE_OF_RACES = 'RANGE_OF_RACES',
  RAW_DATA = 'RAW_DATA',
  SCRAP_TABLE = 'SCRAP_TABLE',
}

@Component({
  selector: 'app-scraper',
  templateUrl: './scraper.component.html',
  styleUrls: ['./scraper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScraperComponent {
  scraperTabs = ScraperTabs;
}
