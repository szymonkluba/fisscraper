import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideRailComponent } from './siderail.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { RouterModule } from '@angular/router';
import { PortalModule } from '@angular/cdk/portal';

@NgModule({
  declarations: [SideRailComponent],
  imports: [CommonModule, AngularMaterialModule, RouterModule, PortalModule],
  exports: [SideRailComponent],
})
export class SiderailModule {}
