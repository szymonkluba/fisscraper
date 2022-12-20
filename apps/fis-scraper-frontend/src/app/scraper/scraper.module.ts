import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CapitalizeModule } from '@shared/utils/capitalize/capitalize.module';
import { CurrentFilesComponent } from './current-files/current-files.component';
import { EffectsModule } from '@ngrx/effects';
import { Feature } from '@constants/store_constants';
import { FileSpinnerModule } from '@shared/file-spinner/file-spinner.module';
import { FoldersEffects } from '@archive/store/folders.effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HasErrorModule } from '@shared/utils/has-error/has-error.module';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MultiRacesComponent } from './multi-races/multi-races.component';
import { RacesEffects } from '@scraper/store/races.effects';
import { RangeRacesComponent } from './range-races/range-races.component';
import { RawDataDialogComponent } from './unprocessed-data/raw-data-dialog.component';
import { ScrapTableComponent } from './scrap-table/scrap-table.component';
import { ScrapTableDialogComponent } from './scrap-table/scrap-table-dialog.component';
import { ScraperComponent } from './scraper/scraper.component';
import { ScraperRoutingModule } from './scraper-routing.module';
import { SingleRaceComponent } from './single-race/single-race.component';
import { StoreModule } from '@ngrx/store';
import { UnprocessedDataComponent } from './unprocessed-data/unprocessed-data.component';
import { racesReducer } from '@scraper/store/races.reducer';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatChipsModule,
  MatDialogModule,
  MatDividerModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressBarModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatTooltipModule,
];

const STORE_MODULES = [
  StoreModule.forFeature(Feature.RACES, racesReducer),
  EffectsModule.forFeature([RacesEffects, FoldersEffects]),
];
@NgModule({
  declarations: [
    CurrentFilesComponent,
    MultiRacesComponent,
    RangeRacesComponent,
    RawDataDialogComponent,
    ScrapTableComponent,
    ScrapTableDialogComponent,
    ScraperComponent,
    SingleRaceComponent,
    UnprocessedDataComponent,
  ],
  imports: [
    CapitalizeModule,
    CommonModule,
    FileSpinnerModule,
    FormsModule,
    FormsModule,
    HasErrorModule,
    HttpClientModule,
    MATERIAL_MODULES,
    ReactiveFormsModule,
    STORE_MODULES,
    ScraperRoutingModule,
  ],
  exports: [SingleRaceComponent],
})
export class ScraperModule {}
