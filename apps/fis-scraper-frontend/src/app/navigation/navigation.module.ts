import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '@shared/angular-material/angular-material.module';

@NgModule({
  declarations: [NavigationComponent],
  imports: [CommonModule, AngularMaterialModule, RouterModule],
  exports: [NavigationComponent],
})
export class NavigationModule {}
