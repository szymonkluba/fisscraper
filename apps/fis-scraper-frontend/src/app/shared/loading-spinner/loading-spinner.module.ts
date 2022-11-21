import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './loading-spinner.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

@NgModule({
  declarations: [LoadingSpinnerComponent],
  exports: [LoadingSpinnerComponent],
  imports: [CommonModule, AngularMaterialModule],
})
export class LoadingSpinnerModule {}
