import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { RouterModule } from '@angular/router';
import { BackButtonComponent } from './back-button/back-button.component';
import { FileSpinnerComponent } from './file-spinner/file-spinner.component';

@NgModule({
  declarations: [BackButtonComponent, FileSpinnerComponent],
  exports: [BackButtonComponent, FileSpinnerComponent],
  imports: [CommonModule, AngularMaterialModule, RouterModule],
})
export class SharedModule {}
