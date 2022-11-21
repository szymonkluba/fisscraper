import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FileSpinnerComponent } from './file-spinner.component';

@NgModule({
  declarations: [FileSpinnerComponent],
  exports: [FileSpinnerComponent],
  imports: [CommonModule, AngularMaterialModule],
})
export class FileSpinnerModule {}
