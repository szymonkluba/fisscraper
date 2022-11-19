import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FileSpinnerComponent } from './file-spinner/file-spinner.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FileSpinnerComponent],
  exports: [FileSpinnerComponent],
  imports: [CommonModule, AngularMaterialModule, RouterModule],
})
export class SharedModule {}
