import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { CurrentFilesComponent } from './current-files/current-files.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiRacesComponent } from './multi-races/multi-races.component';
import { RangeRacesComponent } from './range-races/range-races.component';
import { RawDataDialogComponent } from './unprocessed-data/raw-data-dialog.component';
import { ScrapTableComponent } from './scrap-table/scrap-table.component';
import { ScrapTableDialogComponent } from './scrap-table/scrap-table-dialog.component';
import { ScraperComponent } from './scraper/scraper.component';
import { ScraperRoutingModule } from './scraper-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SingleRaceComponent } from './single-race/single-race.component';
import { UnprocessedDataComponent } from './unprocessed-data/unprocessed-data.component';

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
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
    ScraperRoutingModule,
    SharedModule,
  ],
})
export class ScraperModule {}
