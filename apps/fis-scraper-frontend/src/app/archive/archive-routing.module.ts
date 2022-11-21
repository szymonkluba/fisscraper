import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveComponent } from './archive/archive.component';
import { routerPaths } from '../shared/models/routes.model';

const routes: Routes = [
  {
    path: routerPaths.EMPTY.routerPath,
    component: ArchiveComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArchiveRoutingModule {}
