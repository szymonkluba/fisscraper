import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { RouteInterface, routerPaths } from './models/routes.model';
import { Store } from '@ngrx/store';
import { retrievedFolderList } from './state/folders.actions';
import { Folder } from './models/folder.model';
import { filter, map, Observable, Subject, takeUntil } from 'rxjs';
import { ScraperService } from './services/scraper.service';
import { disableSpinner } from './state/spinner.actions';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  title = 'FIS Scraper';

  subscriptionEndSubject = new Subject();
  subscriptionEnd$ = this.subscriptionEndSubject.asObservable();

  navLinks: RouteInterface[] = [routerPaths.SCRAPER, routerPaths.ARCHIVE];
  activeLink$: Observable<string> = this.router.events.pipe(
    filter(event => event instanceof NavigationStart),
    map(event => (event as NavigationStart).url)
  );

  close() {
    this.sidenav.close();
  }

  constructor(
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

  isScraperPath(url: string | null): boolean {
    return Boolean(url && url.includes('scraper'));
  }
}
