import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScraperRoutingModule } from './scraper-routing.module';
import { ScraperComponent } from './scraper/scraper.component';


@NgModule({
  declarations: [
    ScraperComponent
  ],
  imports: [
    CommonModule,
    ScraperRoutingModule
  ]
})
export class ScraperModule { }
