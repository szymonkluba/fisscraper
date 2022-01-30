import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileEntryComponent } from './file-entry/file-entry.component';
import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { FolderEntryComponent } from './folder-entry/folder-entry.component';
import { RouterModule } from "@angular/router";
import { BackButtonComponent } from './back-button/back-button.component';
import { FileSpinnerComponent } from './file-spinner/file-spinner.component';



@NgModule({
  declarations: [
    FileEntryComponent,
    FolderEntryComponent,
    BackButtonComponent,
    FileSpinnerComponent
  ],
  exports: [
    FolderEntryComponent,
    FileEntryComponent,
    BackButtonComponent,
    FileSpinnerComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule
  ]
})
export class SharedModule { }
