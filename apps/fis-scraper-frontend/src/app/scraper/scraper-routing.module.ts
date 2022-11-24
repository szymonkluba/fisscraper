import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScraperComponent } from './scraper/scraper.component';
import { routerPaths } from '../shared/models/routes.model';

const routes: Routes = [
  {
    path: '',
    redirectTo: routerPaths.SCRAPER.routerPath,
    pathMatch: 'prefix',
  },
  {
    path: '',
    component: ScraperComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScraperRoutingModule {}
