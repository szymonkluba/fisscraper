import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature } from '@constants/store_constants';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PortalModule } from '@angular/cdk/portal';
import { RouterModule } from '@angular/router';
import { SideRailComponent } from './side-rail.component';
import { StoreModule } from '@ngrx/store';
import { sideRailReducer } from '@shared/siderail/store/siderail.reducer';

const MATERIAL_MODULES = [MatButtonModule, MatIconModule, MatSidenavModule];

const STORE_MODULES = [
  StoreModule.forFeature(Feature.SIDE_RAIL, sideRailReducer),
];

@NgModule({
  declarations: [SideRailComponent],
  imports: [
    CommonModule,
    MATERIAL_MODULES,
    RouterModule,
    PortalModule,
    STORE_MODULES,
  ],
  exports: [SideRailComponent],
})
export class SideRailModule {}
