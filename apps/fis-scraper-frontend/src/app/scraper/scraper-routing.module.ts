import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScraperComponent } from './scraper/scraper.component';
import { SingleRaceComponent } from './single-race/single-race.component';
import { routerPaths } from '../shared/models/routes.model';
import { MultiRacesComponent } from './multi-races/multi-races.component';
import { RangeRacesComponent } from './range-races/range-races.component';
import { UnprocessedDataComponent } from './unprocessed-data/unprocessed-data.component';
import { ScrapTableComponent } from './scrap-table/scrap-table.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: routerPaths.SINGLE_RACE.routerPath,
    pathMatch: 'prefix',
  },
  {
    path: '',
    component: ScraperComponent,
    children: [
      {
        path: routerPaths.SINGLE_RACE.routerPath,
        component: SingleRaceComponent,
      },
      {
        path: routerPaths.MULTI_RACES.routerPath,
        component: MultiRacesComponent,
      },
      {
        path: routerPaths.RANGE_RACES.routerPath,
        component: RangeRacesComponent,
      },
      {
        path: routerPaths.RAW_DATA.routerPath,
        component: UnprocessedDataComponent,
      },
      {
        path: routerPaths.SCRAP_TABLE.routerPath,
        component: ScrapTableComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScraperRoutingModule {}
