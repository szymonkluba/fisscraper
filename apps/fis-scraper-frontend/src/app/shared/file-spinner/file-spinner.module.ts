import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileSpinnerComponent } from './file-spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [FileSpinnerComponent],
  exports: [FileSpinnerComponent],
  imports: [CommonModule, MatProgressSpinnerModule],
})
export class FileSpinnerModule {}
