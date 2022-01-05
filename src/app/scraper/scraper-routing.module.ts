import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScraperComponent } from "./scraper/scraper.component";
import { SingleRaceComponent } from "./single-race/single-race.component";
import { routerPaths } from "../models/routes.model";
import { MultiRacesComponent } from "./multi-races/multi-races.component";
import { RangeRacesComponent } from "./range-races/range-races.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: routerPaths.SINGLE_RACE.routerPath
  },
  {
    path: '',
    component: ScraperComponent,
    children: [
      {
        path: routerPaths.SINGLE_RACE.routerPath,
        component: SingleRaceComponent
      },
      {
        path: routerPaths.MULTI_RACES.routerPath,
        component: MultiRacesComponent
      },
      {
        path: routerPaths.RANGE_RACES.routerPath,
        component: RangeRacesComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScraperRoutingModule { }
