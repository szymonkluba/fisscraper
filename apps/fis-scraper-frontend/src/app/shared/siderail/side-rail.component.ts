import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';

import {
  SideRailPortalComponents,
  SideRailService,
} from '@services/side-rail.service';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';

import * as sideRailSelectors from './store/side-rail.selectors';
import * as sideRailActions from './store/side-rail.actions';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-side-rail',
  templateUrl: './side-rail.component.html',
  styleUrls: ['./side-rail.component.scss'],
})
export class SideRailComponent {
  readonly portal$: Observable<ComponentPortal<SideRailPortalComponents>> =
    this.store
      .select(sideRailSelectors.selectPortal)
      .pipe(map(portal => this.sideRailService.getPortal(portal)));

  readonly opened$: Observable<boolean> = this.store.select(
    sideRailSelectors.selectOpened
  );

  constructor(
    private readonly store: Store,
    private readonly sideRailService: SideRailService
  ) {}

  close() {
    this.store.dispatch(sideRailActions.closeSideRail());
  }
}
