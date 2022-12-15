import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArchiveComponent } from './archive/archive.component';
import { ArchiveRaceDetailsComponent } from './archive-race-details/archive-race-details.component';
import { ArchiveRoutingModule } from './archive-routing.module';
import { CapitalizeModule } from '@shared/utils/capitalize/capitalize.module';
import { EffectsModule } from '@ngrx/effects';
import { FileSpinnerModule } from '@shared/file-spinner/file-spinner.module';
import { FolderTableCellComponent } from './folder-table-cell/folder-table-cell.component';
import { FoldersEffects } from '@archive/store/folders.effects';
import { LoadingSpinnerModule } from '@shared/loading-spinner/loading-spinner.module';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NestedValueModule } from '@shared/utils/nested-value/nested-value.module';
import { RacesEffects } from '@scraper/store/races.effects';
import { RemovePrefixModule } from '@shared/utils/remove-prefix/remove-prefix.module';
import { StoreModule } from '@ngrx/store';
import { foldersReducer } from './store/folders.reducer';
import { raceDetailsReducer } from '@archive/store/raceDetails.reducer';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatExpansionModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatTooltipModule,
];

const STORE_MODULES = [
  StoreModule.forFeature('folders', foldersReducer),
  StoreModule.forFeature('raceDetails', raceDetailsReducer),
  EffectsModule.forFeature([FoldersEffects, RacesEffects]),
];

@NgModule({
  declarations: [
    ArchiveComponent,
    ArchiveRaceDetailsComponent,
    FolderTableCellComponent,
  ],
  imports: [
    ArchiveRoutingModule,
    CapitalizeModule,
    CommonModule,
    FileSpinnerModule,
    LoadingSpinnerModule,
    MATERIAL_MODULES,
    NestedValueModule,
    RemovePrefixModule,
    STORE_MODULES,
  ],
})
export class ArchiveModule {}
