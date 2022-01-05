import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScraperRoutingModule } from './scraper-routing.module';
import { ScraperComponent } from './scraper/scraper.component';
import { SingleRaceComponent } from './single-race/single-race.component';
import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MultiRacesComponent } from './multi-races/multi-races.component';


@NgModule({
  declarations: [
    ScraperComponent,
    SingleRaceComponent,
    MultiRacesComponent
  ],
  imports: [
    CommonModule,
    ScraperRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class ScraperModule { }
