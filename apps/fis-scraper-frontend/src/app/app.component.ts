import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ViewChild,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ScraperService } from '@services/scraper.service';
import { Router } from '@angular/router';
import { selectNavMenuState } from './navigation/store/nav-menu.selectors';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MenuDisplayState } from './navigation/store/nav-menu.reducer';

const MENU_ANIMATION = [
  state(
    MenuDisplayState.EXPANDED,
    style({
      width: '15rem',
    })
  ),
  state(
    MenuDisplayState.COLLAPSED,
    style({
      width: '4rem',
    })
  ),
  transition(`${MenuDisplayState.COLLAPSED} <=> ${MenuDisplayState.EXPANDED}`, [
    animate('150ms ease-in-out'),
  ]),
];

const APP_CONTENT_ANIMATION = [
  state(
    MenuDisplayState.EXPANDED,
    style({
      'margin-left': '15rem',
    })
  ),
  state(
    MenuDisplayState.COLLAPSED,
    style({
      'margin-left': '4rem',
    })
  ),
  transition(`${MenuDisplayState.COLLAPSED} <=> ${MenuDisplayState.EXPANDED}`, [
    animate('150ms ease-in-out'),
  ]),
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('collapseExpand', MENU_ANIMATION),
    trigger('widenShorten', APP_CONTENT_ANIMATION),
  ],
})
export class AppComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  readonly title = 'FIS Scraper';
  readonly subtitle = 'Ski jumping results scraper';
  readonly menuDisplayState$: Observable<MenuDisplayState> =
    this.store.select(selectNavMenuState);

  constructor(
    private readonly changeDetector: ChangeDetectorRef,
    private readonly router: Router,
    private readonly scraperService: ScraperService,
    private readonly store: Store
  ) {}
}
