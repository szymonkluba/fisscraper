import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from '@shared/angular-material/angular-material.module';
import { CurrentFilesComponent } from './current-files/current-files.component';
import { FileSpinnerModule } from '@shared/file-spinner/file-spinner.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiRacesComponent } from './multi-races/multi-races.component';
import { RangeRacesComponent } from './range-races/range-races.component';
import { RawDataDialogComponent } from './unprocessed-data/raw-data-dialog.component';
import { ScrapTableComponent } from './scrap-table/scrap-table.component';
import { ScrapTableDialogComponent } from './scrap-table/scrap-table-dialog.component';
import { ScraperComponent } from './scraper/scraper.component';
import { ScraperRoutingModule } from './scraper-routing.module';
import { SingleRaceComponent } from './single-race/single-race.component';
import { UnprocessedDataComponent } from './unprocessed-data/unprocessed-data.component';
import { HasErrorModule } from '@shared/utils/has-error/has-error.module';
import { CapitalizeModule } from '@shared/utils/capitalize/capitalize.module';

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
    AngularMaterialModule,
    CommonModule,
    FileSpinnerModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
    ScraperRoutingModule,
    HasErrorModule,
    CapitalizeModule,
  ],
  exports: [SingleRaceComponent],
})
export class ScraperModule {}
