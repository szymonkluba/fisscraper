import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routerPaths } from "./models/routes.model";


const routes: Routes = [
  {
    path: routerPaths.SCRAPER.routerPath,
    loadChildren: () => import('./scraper/scraper.module').then(m => m.ScraperModule),
  },
  {
    path: routerPaths.ARCHIVE.routerPath,
    loadChildren: () => import('./archive/archive.module').then(m => m.ArchiveModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
