import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Store } from '@ngrx/store';
import { retrievedFolderList } from '@shared/state/folders.actions';
import { Folder } from '@shared/models/folder.model';
import { Observable, Subject, takeUntil } from 'rxjs';
import { ScraperService } from '@scraper/scraper.service';
import { disableSpinner } from '@shared/state/spinner.actions';
import { Router } from '@angular/router';
import { selectNavMenuState } from '@shared/state/nav-menu.selectors';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MenuDisplayStates } from '@shared/state/nav-menu.reducer';

const MENU_ANIMATION = [
  state(
    MenuDisplayStates.EXPANDED,
    style({
      width: '15rem',
    })
  ),
  state(
    MenuDisplayStates.COLLAPSED,
    style({
      width: '4rem',
    })
  ),
  transition(
    `${MenuDisplayStates.COLLAPSED} <=> ${MenuDisplayStates.EXPANDED}`,
    [animate('150ms ease-in-out')]
  ),
];

const APP_CONTENT_ANIMATION = [
  state(
    MenuDisplayStates.EXPANDED,
    style({
      'margin-left': '15rem',
    })
  ),
  state(
    MenuDisplayStates.COLLAPSED,
    style({
      'margin-left': '4rem',
    })
  ),
  transition(
    `${MenuDisplayStates.COLLAPSED} <=> ${MenuDisplayStates.EXPANDED}`,
    [animate('150ms ease-in-out')]
  ),
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
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  readonly title = 'FIS Scraper';
  readonly subtitle = 'Ski jumping results scraper';
  readonly menuDisplayState$: Observable<MenuDisplayStates> =
    this.store.select(selectNavMenuState);
  readonly MenuDisplayStates = MenuDisplayStates;
  readonly subscriptionEndSubject = new Subject();
  readonly subscriptionEnd$ = this.subscriptionEndSubject.asObservable();

  constructor(
    private readonly changeDetector: ChangeDetectorRef,
    private readonly router: Router,
    private readonly scraperService: ScraperService,
    private readonly store: Store
  ) {}

  ngOnInit() {
    this.scraperService
      .listRaces()
      .pipe(takeUntil(this.subscriptionEnd$))
      .subscribe((folders: Folder[]) => {
        this.store.dispatch(disableSpinner());
        return this.store.dispatch(retrievedFolderList({ folders }));
      });
  }

  ngOnDestroy() {
    this.subscriptionEndSubject.next(null);
    this.subscriptionEndSubject.complete();
  }

  trackByLink(index: number) {
    return index;
  }
}
