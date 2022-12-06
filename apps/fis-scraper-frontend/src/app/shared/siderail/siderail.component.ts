import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectSideRailState } from '@shared/state/siderail.selectors';
import { closeSideRail } from '@shared/state/siderail.actions';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-siderail',
  templateUrl: './siderail.component.html',
  styleUrls: ['./siderail.component.scss'],
})
export class SideRailComponent {
  sideRailState$ = this.store.select(selectSideRailState);

  constructor(private readonly store: Store) {}

  close() {
    this.store.dispatch(closeSideRail());
  }
}
