import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-scraper',
  templateUrl: './scraper.component.html',
  styleUrls: ['./scraper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScraperComponent {}
