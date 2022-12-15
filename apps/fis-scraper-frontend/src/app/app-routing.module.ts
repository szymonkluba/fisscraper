import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  Destination,
  RouterPath,
  routerPaths,
} from '@shared/models/routes.model';

const routes: Routes = [
  {
    path: RouterPath.EMPTY,
    redirectTo: routerPaths[Destination.SCRAPER].routerPath,
    pathMatch: 'full',
  },
  {
    path: routerPaths[Destination.SCRAPER].routerPath,
    loadChildren: () =>
      import('./scraper/scraper.module').then(m => m.ScraperModule),
  },
  {
    path: routerPaths[Destination.ARCHIVE].routerPath,
    loadChildren: () =>
      import('./archive/archive.module').then(m => m.ArchiveModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
