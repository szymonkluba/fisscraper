import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArchiveRoutingModule } from './archive-routing.module';
import { ArchiveComponent } from './archive/archive.component';
import { SharedModule } from '../shared/shared.module';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { ArchiveRaceDetailsComponent } from './archive-race-details/archive-race-details/archive-race-details.component';
import { CapitalizeModule } from '../utils/capitalize/capitalize.module';

@NgModule({
  declarations: [ArchiveComponent, ArchiveRaceDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    AngularMaterialModule,
    ArchiveRoutingModule,
    MatTableModule,
    MatExpansionModule,
    CapitalizeModule,
  ],
})
export class ArchiveModule {}
