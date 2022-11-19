import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ArchiveComponent } from './archive/archive.component';
import { ArchiveRaceDetailsComponent } from './archive-race-details/archive-race-details/archive-race-details.component';
import { ArchiveRoutingModule } from './archive-routing.module';
import { CapitalizeModule } from '../utils/capitalize/capitalize.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ArchiveComponent, ArchiveRaceDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    AngularMaterialModule,
    ArchiveRoutingModule,
    CapitalizeModule,
  ],
})
export class ArchiveModule {}
