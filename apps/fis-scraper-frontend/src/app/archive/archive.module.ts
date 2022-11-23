import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';
import { ArchiveComponent } from './archive/archive.component';
import { ArchiveRaceDetailsComponent } from './archive-race-details/archive-race-details/archive-race-details.component';
import { ArchiveRoutingModule } from './archive-routing.module';
import { CapitalizeModule } from '../shared/utils/capitalize/capitalize.module';
import { FileSpinnerModule } from '../shared/file-spinner/file-spinner.module';
import { LoadingSpinnerModule } from '../shared/loading-spinner/loading-spinner.module';
import { NestedValueModule } from '@shared/utils/nested-value/nested-value.module';
import { RemovePrefixModule } from '@shared/utils/remove-prefix/remove-prefix.module';
import { FolderTableCellComponent } from './folder-table-cell/folder-table-cell.component';

@NgModule({
  declarations: [
    ArchiveComponent,
    ArchiveRaceDetailsComponent,
    FolderTableCellComponent,
  ],
  imports: [
    AngularMaterialModule,
    ArchiveRoutingModule,
    CapitalizeModule,
    CommonModule,
    FileSpinnerModule,
    LoadingSpinnerModule,
    NestedValueModule,
    RemovePrefixModule,
  ],
})
export class ArchiveModule {}
