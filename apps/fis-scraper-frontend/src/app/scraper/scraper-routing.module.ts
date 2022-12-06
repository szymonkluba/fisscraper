import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScraperComponent } from './scraper/scraper.component';
import { Paths, RouterPaths, routerPaths } from '@shared/models/routes.model';

const routes: Routes = [
  {
    path: RouterPaths.EMPTY,
    redirectTo: routerPaths[Paths.SCRAPER].routerPath,
    pathMatch: 'prefix',
  },
  {
    path: RouterPaths.EMPTY,
    component: ScraperComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScraperRoutingModule {}
