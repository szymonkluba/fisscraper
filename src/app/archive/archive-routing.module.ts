import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveComponent } from "./archive/archive.component";
import { FolderContentsComponent } from "./folder-contents/folder-contents.component";

const routes: Routes = [
  {
    path: '',
    component: ArchiveComponent,
  },
  {
    path: ":folder",
    component: FolderContentsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArchiveRoutingModule { }
