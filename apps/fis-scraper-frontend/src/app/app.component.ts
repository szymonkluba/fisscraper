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
import { Subject, takeUntil } from 'rxjs';
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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('collapseExpand', [
      state(
        'false',
        style({
          width: '15rem',
        })
      ),
      state(
        'true',
        style({
          width: '4rem',
        })
      ),
      transition('true <=> false', [animate('150ms ease-in-out')]),
    ]),
  ],
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  readonly title = 'FIS Scraper';
  readonly subtitle = 'Ski jumping results scraper';

  menuCollapsed: boolean = false;

  readonly subscriptionEndSubject = new Subject();
  readonly subscriptionEnd$ = this.subscriptionEndSubject.asObservable();

  constructor(
    private readonly changeDetector: ChangeDetectorRef,
    private readonly router: Router,
    private readonly scraperService: ScraperService,
    private readonly store: Store
  ) {}

  ngOnInit() {
    this.store
      .select(selectNavMenuState)
      .pipe(takeUntil(this.subscriptionEnd$))
      .subscribe(state => (this.menuCollapsed = state));
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
