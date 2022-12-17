import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
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
import { collapseMenu, expandMenu, navigate } from './store/nav-menu.actions';
import { trackByIndex } from '@shared/utils/track-by/track-by';
import {
  Destination,
  RouteInterface,
  routerPaths,
} from '@shared/models/routes.model';
import {
  selectActiveLink,
  selectNavMenuState,
} from './store/nav-menu.selectors';

import * as sideRailActions from '@shared/siderail/store/side-rail.actions';

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
export class NavigationComponent implements OnInit {
  readonly menuDisplayState$: Observable<MenuDisplayState> =
    this.store.select(selectNavMenuState);

  readonly activeLink$: Observable<Destination> =
    this.store.select(selectActiveLink);
  readonly navLinks: RouteInterface[] = [
    {
      ...routerPaths[Destination.SCRAPER],
      action: () => {
        this.store.dispatch(navigate({ activeLink: Destination.SCRAPER }));
        this.store.dispatch(sideRailActions.openSideRail());
        this.store.dispatch(
          sideRailActions.changeSideRailContent({
            portal: SideRailPortal.SINGLE_RACE_PORTAL,
          })
        );
      },
      icon: 'scraper',
    },
    {
      ...routerPaths[Destination.SINGLE_RACE],
      action: () => {
        this.store.dispatch(navigate({ activeLink: Destination.SINGLE_RACE }));
        this.store.dispatch(sideRailActions.openSideRail());
        this.store.dispatch(
          sideRailActions.changeSideRailContent({
            portal: SideRailPortal.SINGLE_RACE_PORTAL,
          })
        );
      },
      icon: 'single_race',
    },
    {
      ...routerPaths[Destination.MULTI_RACE],
      action: () => {
        this.store.dispatch(navigate({ activeLink: Destination.MULTI_RACE }));
        this.store.dispatch(sideRailActions.openSideRail());
        this.store.dispatch(
          sideRailActions.changeSideRailContent({
            portal: SideRailPortal.MULTIPLE_RACES_PORTAL,
          })
        );
      },
      icon: 'multi_race',
    },
    {
      ...routerPaths[Destination.RANGE_RACE],
      action: () => {
        this.store.dispatch(navigate({ activeLink: Destination.RANGE_RACE }));
        this.store.dispatch(sideRailActions.openSideRail());
        this.store.dispatch(
          sideRailActions.changeSideRailContent({
            portal: SideRailPortal.RANGE_OF_RACES_PORTAL,
          })
        );
      },
      icon: 'range_race',
    },
    {
      ...routerPaths[Destination.RAW_DATA],
      action: () => {
        this.store.dispatch(navigate({ activeLink: Destination.RAW_DATA }));
        this.store.dispatch(sideRailActions.openSideRail());
        this.store.dispatch(
          sideRailActions.changeSideRailContent({
            portal: SideRailPortal.RAW_DATA_PORTAL,
          })
        );
      },
      icon: 'raw_data',
    },
    {
      ...routerPaths[Destination.SCRAP_TABLE],
      action: () => {
        this.store.dispatch(navigate({ activeLink: Destination.SCRAP_TABLE }));
        this.store.dispatch(sideRailActions.openSideRail());
        this.store.dispatch(
          sideRailActions.changeSideRailContent({
            portal: SideRailPortal.SCRAP_TABLE_PORTAL,
          })
        );
      },
      icon: 'table',
    },
    {
      ...routerPaths[Destination.ARCHIVE],
      action: () => {
        this.store.dispatch(navigate({ activeLink: Destination.ARCHIVE }));
        this.store.dispatch(sideRailActions.closeSideRail());
      },
      icon: 'archive',
    },
  ];
  trackByIndex = trackByIndex;
  MenuDisplayStates = MenuDisplayState;
  constructor(
    private readonly changeDetector: ChangeDetectorRef,
    private readonly store: Store,
    private readonly iconRegistry: MatIconRegistry,
    private readonly sanitizer: DomSanitizer
  ) {}

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
  }
}
