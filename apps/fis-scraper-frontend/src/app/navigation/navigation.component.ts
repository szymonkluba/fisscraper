import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

import { MenuDisplayState } from './store/nav-menu.reducer';
import { Observable } from 'rxjs';
import { SideRailPortal } from '@shared/models/portal.model';
import { Store } from '@ngrx/store';
import { trackByIndex } from '@shared/utils/track-by/track-by';
import {
  Destination,
  RouteInterface,
  routerPaths,
} from '@shared/models/routes.model';

import * as sideRailActions from '@shared/siderail/store/side-rail.actions';
import * as navMenuSelectors from './store/nav-menu.selectors';
import * as navMenuActions from './store/nav-menu.actions';

enum NavigationIcon {
  SCRAPER = 'scraper',
  ARCHIVE = 'archive',
  SINGLE_RACE = 'single_race',
  MULTI_RACE = 'multi_race',
  RANGE_RACE = 'range_race',
  RAW_DATA = 'raw_data',
  SCRAP_TABLE = 'scrap_table',
}

const NAVIGATION_ICONS_NAMESPACE = 'navigation';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('showHide', [
      state(MenuDisplayState.COLLAPSED, style({ width: '0' })),
      state(MenuDisplayState.EXPANDED, style({ width: '*' })),
      transition('collapsed <=> expanded', [animate('150ms ease-in-out')]),
    ]),
  ],
})
export class NavigationComponent {
  readonly menuDisplayState$: Observable<MenuDisplayState> = this.store.select(
    navMenuSelectors.selectNavMenuState
  );

  readonly activeLink$: Observable<Destination> = this.store.select(
    navMenuSelectors.selectActiveLink
  );

  readonly expandedGroup$: Observable<Destination> = this.store.select(
    navMenuSelectors.selectExpandedGroup
  );
  readonly scraperNavLinks: RouteInterface[] = [
    {
      ...routerPaths[Destination.SINGLE_RACE],
      action: () => {
        this.store.dispatch(
          navMenuActions.navigate({ activeLink: Destination.SINGLE_RACE })
        );
        this.store.dispatch(sideRailActions.openSideRail());
        this.store.dispatch(
          sideRailActions.changeSideRailContent({
            portal: SideRailPortal.SINGLE_RACE_PORTAL,
          })
        );
      },
      icon: `${NAVIGATION_ICONS_NAMESPACE}:${NavigationIcon.SINGLE_RACE}`,
    },
    {
      ...routerPaths[Destination.MULTI_RACE],
      action: () => {
        this.store.dispatch(
          navMenuActions.navigate({ activeLink: Destination.MULTI_RACE })
        );
        this.store.dispatch(sideRailActions.openSideRail());
        this.store.dispatch(
          sideRailActions.changeSideRailContent({
            portal: SideRailPortal.MULTIPLE_RACES_PORTAL,
          })
        );
      },
      icon: `${NAVIGATION_ICONS_NAMESPACE}:${NavigationIcon.MULTI_RACE}`,
    },
    {
      ...routerPaths[Destination.RANGE_RACE],
      action: () => {
        this.store.dispatch(
          navMenuActions.navigate({ activeLink: Destination.RANGE_RACE })
        );
        this.store.dispatch(sideRailActions.openSideRail());
        this.store.dispatch(
          sideRailActions.changeSideRailContent({
            portal: SideRailPortal.RANGE_OF_RACES_PORTAL,
          })
        );
      },
      icon: `${NAVIGATION_ICONS_NAMESPACE}:${NavigationIcon.RANGE_RACE}`,
    },
    {
      ...routerPaths[Destination.RAW_DATA],
      action: () => {
        this.store.dispatch(
          navMenuActions.navigate({ activeLink: Destination.RAW_DATA })
        );
        this.store.dispatch(sideRailActions.openSideRail());
        this.store.dispatch(
          sideRailActions.changeSideRailContent({
            portal: SideRailPortal.RAW_DATA_PORTAL,
          })
        );
      },
      icon: `${NAVIGATION_ICONS_NAMESPACE}:${NavigationIcon.RAW_DATA}`,
    },
    {
      ...routerPaths[Destination.SCRAP_TABLE],
      action: () => {
        this.store.dispatch(
          navMenuActions.navigate({ activeLink: Destination.SCRAP_TABLE })
        );
        this.store.dispatch(sideRailActions.openSideRail());
        this.store.dispatch(
          sideRailActions.changeSideRailContent({
            portal: SideRailPortal.SCRAP_TABLE_PORTAL,
          })
        );
      },
      icon: `${NAVIGATION_ICONS_NAMESPACE}:${NavigationIcon.SCRAP_TABLE}`,
    },
  ];
  readonly navLinks: RouteInterface[] = [
    {
      ...routerPaths[Destination.SCRAPER],
      action: () => {
        this.store.dispatch(
          navMenuActions.navigate({ activeLink: Destination.SCRAPER })
        );
        this.store.dispatch(sideRailActions.openSideRail());
        this.store.dispatch(
          sideRailActions.changeSideRailContent({
            portal: SideRailPortal.SINGLE_RACE_PORTAL,
          })
        );
      },
      icon: `${NAVIGATION_ICONS_NAMESPACE}:${NavigationIcon.SCRAPER}`,
      children: this.scraperNavLinks,
    },
    {
      ...routerPaths[Destination.ARCHIVE],
      action: () => {
        this.store.dispatch(
          navMenuActions.navigate({ activeLink: Destination.ARCHIVE })
        );
        this.store.dispatch(sideRailActions.closeSideRail());
      },
      icon: `${NAVIGATION_ICONS_NAMESPACE}:${NavigationIcon.ARCHIVE}`,
    },
  ];
  trackByIndex = trackByIndex;
  MenuDisplayStates = MenuDisplayState;

  constructor(
    private readonly changeDetector: ChangeDetectorRef,
    private readonly store: Store,
    private readonly iconRegistry: MatIconRegistry,
    private readonly sanitizer: DomSanitizer
  ) {
    this.iconRegistry.addSvgIconInNamespace(
      NAVIGATION_ICONS_NAMESPACE,
      NavigationIcon.SCRAPER,
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/scraper.svg')
    );
    this.iconRegistry.addSvgIconInNamespace(
      NAVIGATION_ICONS_NAMESPACE,
      NavigationIcon.ARCHIVE,
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/archive.svg')
    );
    this.iconRegistry.addSvgIconInNamespace(
      NAVIGATION_ICONS_NAMESPACE,
      NavigationIcon.SINGLE_RACE,
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/single_race.svg')
    );
    this.iconRegistry.addSvgIconInNamespace(
      NAVIGATION_ICONS_NAMESPACE,
      NavigationIcon.MULTI_RACE,
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/multi_race.svg')
    );
    this.iconRegistry.addSvgIconInNamespace(
      NAVIGATION_ICONS_NAMESPACE,
      NavigationIcon.RANGE_RACE,
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/range_race.svg')
    );
    this.iconRegistry.addSvgIconInNamespace(
      NAVIGATION_ICONS_NAMESPACE,
      NavigationIcon.RAW_DATA,
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/raw_data.svg')
    );
    this.iconRegistry.addSvgIconInNamespace(
      NAVIGATION_ICONS_NAMESPACE,
      NavigationIcon.SCRAP_TABLE,
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/table.svg')
    );
  }

  collapseMenu() {
    this.store.dispatch(navMenuActions.collapseMenu());
    this.changeDetector.detectChanges();
  }

  expandMenu() {
    this.store.dispatch(navMenuActions.expandMenu());
    this.changeDetector.detectChanges();
  }

  collapseGroup() {
    this.store.dispatch(navMenuActions.collapseGroup());
  }

  expandGroup(expandedGroup: Destination) {
    this.store.dispatch(navMenuActions.expandGroup({ expandedGroup }));
  }
}
