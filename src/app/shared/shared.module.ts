import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileEntryComponent } from './file-entry/file-entry.component';
import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { FolderEntryComponent } from './folder-entry/folder-entry.component';
import { RouterModule } from "@angular/router";



@NgModule({
  declarations: [
    FileEntryComponent,
    FolderEntryComponent
  ],
  exports: [
    FolderEntryComponent,
    FileEntryComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule
  ]
})
export class SharedModule { }
