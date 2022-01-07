import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveComponent } from "./archive/archive.component";
import { FolderContentsComponent } from "./folder-contents/folder-contents.component";
import { routerPaths } from "../models/routes.model";

const routes: Routes = [
  {
    path: routerPaths.EMPTY.routerPath,
    component: ArchiveComponent,
  },
  {
    path: routerPaths.FOLDER.routerPath,
    component: FolderContentsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArchiveRoutingModule { }
