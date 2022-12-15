import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScraperComponent } from './scraper/scraper.component';
import {
  Destination,
  RouterPath,
  routerPaths,
} from '@shared/models/routes.model';

const routes: Routes = [
  {
    path: RouterPath.EMPTY,
    redirectTo: routerPaths[Destination.SCRAPER].routerPath,
    pathMatch: 'prefix',
  },
  {
    path: RouterPath.EMPTY,
    component: ScraperComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScraperRoutingModule {}
