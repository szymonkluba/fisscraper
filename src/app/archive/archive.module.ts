import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArchiveRoutingModule } from './archive-routing.module';
import { ArchiveComponent } from './archive/archive.component';


@NgModule({
  declarations: [
    ArchiveComponent
  ],
  imports: [
    CommonModule,
    ArchiveRoutingModule
  ]
})
export class ArchiveModule { }
