import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectSideRailState } from '@shared/siderail/store/siderail.selectors';
import { closeSideRail } from '@shared/siderail/store/siderail.actions';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-side-rail',
  templateUrl: './side-rail.component.html',
  styleUrls: ['./side-rail.component.scss'],
})
export class SideRailComponent {
  sideRailState$ = this.store.select(selectSideRailState);

  constructor(private readonly store: Store) {}

  close() {
    this.store.dispatch(closeSideRail());
  }
}
