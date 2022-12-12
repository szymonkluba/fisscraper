import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideRailComponent } from './side-rail.component';
import { AngularMaterialModule } from '@shared/angular-material/angular-material.module';
import { RouterModule } from '@angular/router';
import { PortalModule } from '@angular/cdk/portal';
import { StoreModule } from '@ngrx/store';
import { sideRailReducer } from '@shared/siderail/store/siderail.reducer';

const STORE_MODULES = [StoreModule.forFeature('sideRail', sideRailReducer)];

@NgModule({
  declarations: [SideRailComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule,
    PortalModule,
    STORE_MODULES,
  ],
  exports: [SideRailComponent],
})
export class SideRailModule {}
