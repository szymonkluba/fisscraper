import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Paths, RouterPaths, routerPaths } from '@shared/models/routes.model';

const routes: Routes = [
  {
    path: RouterPaths.EMPTY,
    redirectTo: routerPaths[Paths.SCRAPER].routerPath,
    pathMatch: 'full',
  },
  {
    path: routerPaths[Paths.SCRAPER].routerPath,
    loadChildren: () =>
      import('./scraper/scraper.module').then(m => m.ScraperModule),
  },
  {
    path: routerPaths[Paths.ARCHIVE].routerPath,
    loadChildren: () =>
      import('./archive/archive.module').then(m => m.ArchiveModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
