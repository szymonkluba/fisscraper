import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArchiveRoutingModule } from './archive-routing.module';
import { ArchiveComponent } from './archive/archive.component';
import { SharedModule } from "../shared/shared.module";
import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { FolderContentsComponent } from './folder-contents/folder-contents.component';


@NgModule({
  declarations: [
    ArchiveComponent,
    FolderContentsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AngularMaterialModule,
    ArchiveRoutingModule
  ]
})
export class ArchiveModule { }
