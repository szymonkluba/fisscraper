import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  Paths,
  RouteInterface,
  routerPaths,
} from '@shared/models/routes.model';
import {
  changeSideRailContent,
  closeSideRail,
  openSideRail,
} from '@shared/state/siderail.actions';
import { Portals } from '@shared/models/portal.model';
import { Store } from '@ngrx/store';
import { trackByIndex } from '@shared/utils/track-by/track-by';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, Subject, takeUntil } from 'rxjs';
import { selectActiveLink, selectNavMenuState } from '@shared/state/nav-menu.selectors';
import { collapseMenu, expandMenu, navigate } from '@shared/state/nav-menu.actions';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('showHide', [
      state('true', style({ width: '0' })),
      state('false', style({ width: '*' })),
      transition('true <=> false', [animate('150ms ease-in-out')]),
    ]),
  ],
})
export class NavigationComponent implements OnInit, OnDestroy {
  menuCollapsed: boolean = false;

  readonly activeLink$: Observable<Paths> = this.store.select(selectActiveLink);
  readonly subscriptionEndSubject = new Subject();
  readonly subscriptionEnd$ = this.subscriptionEndSubject.asObservable();
  readonly navLinks: RouteInterface[] = [
    {
      ...routerPaths[Paths.SCRAPER],
      action: () => {
        this.store.dispatch(navigate({activeLink: Paths.SCRAPER}));
        this.store.dispatch(openSideRail());
        this.store.dispatch(
          changeSideRailContent({ portal: Portals.SINGLE_RACE_PORTAL })
        );
      },
      icon: 'scraper',
    },
    {
      ...routerPaths[Paths.SINGLE_RACE],
      action: () => {
        this.store.dispatch(navigate({activeLink: Paths.SINGLE_RACE}));
        this.store.dispatch(openSideRail());
        this.store.dispatch(
          changeSideRailContent({ portal: Portals.SINGLE_RACE_PORTAL })
        );
      },
      icon: 'single_race',
    },
    {
      ...routerPaths[Paths.MULTI_RACE],
      action: () => {
        this.store.dispatch(navigate({activeLink: Paths.MULTI_RACE}));
        this.store.dispatch(openSideRail());
        this.store.dispatch(
          changeSideRailContent({ portal: Portals.MULTIPLE_RACES_PORTAL })
        );
      },
      icon: 'multi_race',
    },
    {
      ...routerPaths[Paths.RANGE_RACE],
      action: () => {
        this.store.dispatch(navigate({activeLink: Paths.RANGE_RACE}));
        this.store.dispatch(openSideRail());
        this.store.dispatch(
          changeSideRailContent({ portal: Portals.RANGE_OF_RACES_PORTAL })
        );
      },
      icon: 'range_race',
    },
    {
      ...routerPaths[Paths.RAW_DATA],
      action: () => {
        this.store.dispatch(navigate({activeLink: Paths.RAW_DATA}));
        this.store.dispatch(openSideRail());
        this.store.dispatch(
          changeSideRailContent({ portal: Portals.RAW_DATA_PORTAL })
        );
      },
      icon: 'raw_data',
    },
    {
      ...routerPaths[Paths.SCRAP_TABLE],
      action: () => {
        this.store.dispatch(navigate({activeLink: Paths.SCRAP_TABLE}));
        this.store.dispatch(openSideRail());
        this.store.dispatch(
          changeSideRailContent({ portal: Portals.SCRAP_TABLE_PORTAL })
        );
      },
      icon: 'table',
    },
    {
      ...routerPaths[Paths.ARCHIVE],
      action: () => {
        this.store.dispatch(navigate({activeLink: Paths.ARCHIVE}));
        this.store.dispatch(closeSideRail());
      },
      icon: 'archive',
    },
  ];
  trackByIndex = trackByIndex;
  constructor(
    private readonly changeDetector: ChangeDetectorRef,
    private readonly store: Store,
    private readonly iconRegistry: MatIconRegistry,
    private readonly sanitizer: DomSanitizer
  ) {}

  ngOnDestroy(): void {
    this.subscriptionEndSubject.next(null);
    this.subscriptionEndSubject.complete();
  }

  collapseMenu() {
    this.store.dispatch(collapseMenu());
    this.changeDetector.detectChanges();
  }

  expandMenu() {
    this.store.dispatch(expandMenu());
    this.changeDetector.detectChanges();
  }

  ngOnInit(): void {
    this.iconRegistry.addSvgIcon(
      'scraper',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/scraper.svg')
    );
    this.iconRegistry.addSvgIcon(
      'archive',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/archive.svg')
    );
    this.iconRegistry.addSvgIcon(
      'single_race',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/single_race.svg')
    );
    this.iconRegistry.addSvgIcon(
      'multi_race',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/multi_race.svg')
    );
    this.iconRegistry.addSvgIcon(
      'range_race',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/range_race.svg')
    );
    this.iconRegistry.addSvgIcon(
      'raw_data',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/raw_data.svg')
    );
    this.iconRegistry.addSvgIcon(
      'table',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/table.svg')
    );
    this.store
      .select(selectNavMenuState)
      .pipe(takeUntil(this.subscriptionEnd$))
      .subscribe(menuState => (this.menuCollapsed = menuState));
  }
}
