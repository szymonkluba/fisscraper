import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from '@shared/angular-material/angular-material.module';
import { ArchiveComponent } from './archive/archive.component';
import { ArchiveRaceDetailsComponent } from './archive-race-details/archive-race-details.component';
import { ArchiveRoutingModule } from './archive-routing.module';
import { CapitalizeModule } from '@shared/utils/capitalize/capitalize.module';
import { EffectsModule } from '@ngrx/effects';
import { FileSpinnerModule } from '@shared/file-spinner/file-spinner.module';
import { FolderTableCellComponent } from './folder-table-cell/folder-table-cell.component';
import { FoldersEffects } from '@archive/store/folders.effects';
import { LoadingSpinnerModule } from '@shared/loading-spinner/loading-spinner.module';
import { NestedValueModule } from '@shared/utils/nested-value/nested-value.module';
import { RemovePrefixModule } from '@shared/utils/remove-prefix/remove-prefix.module';
import { StoreModule } from '@ngrx/store';
import { foldersReducer } from './store/folders.reducer';
import { RacesEffects } from '@scraper/store/races.effects';
import { raceDetailsReducer } from '@archive/store/raceDetails.reducer';

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
    AngularMaterialModule,
    ArchiveRoutingModule,
    CapitalizeModule,
    CommonModule,
    FileSpinnerModule,
    LoadingSpinnerModule,
    NestedValueModule,
    RemovePrefixModule,
    STORE_MODULES,
  ],
})
export class ArchiveModule {}
