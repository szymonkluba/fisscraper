import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScraperComponent } from "./scraper/scraper.component";
import { SingleRaceComponent } from "./single-race/single-race.component";

const routes: Routes = [
  {
    path: '',
    component: ScraperComponent,
    children: [
      {
        path: 'single-race',
        component: SingleRaceComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScraperRoutingModule { }
