import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs'
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";

const exportedModules = [
  MatTabsModule,
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...exportedModules
  ],
  exports: [
    ...exportedModules
  ]
})
export class AngularMaterialModule { }
