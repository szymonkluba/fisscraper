import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';
import { ArchiveComponent } from './archive/archive.component';
import { ArchiveRaceDetailsComponent } from './archive-race-details/archive-race-details/archive-race-details.component';
import { ArchiveRoutingModule } from './archive-routing.module';
import { CapitalizeModule } from '../shared/utils/capitalize/capitalize.module';
import { FileSpinnerModule } from '../shared/file-spinner/file-spinner.module';
import { LoadingSpinnerModule } from '../shared/loading-spinner/loading-spinner.module';

@NgModule({
  declarations: [ArchiveComponent, ArchiveRaceDetailsComponent],
  imports: [
    AngularMaterialModule,
    ArchiveRoutingModule,
    CapitalizeModule,
    CommonModule,
    FileSpinnerModule,
    LoadingSpinnerModule,
  ],
})
export class ArchiveModule {}
