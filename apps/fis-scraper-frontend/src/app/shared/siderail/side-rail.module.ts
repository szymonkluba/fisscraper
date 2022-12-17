import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature } from '@constants/store_constants';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PortalModule } from '@angular/cdk/portal';
import { RouterModule } from '@angular/router';
import { SideRailComponent } from './side-rail.component';
import { StoreModule } from '@ngrx/store';
import { sideRailReducer } from '@shared/siderail/store/side-rail.reducer';
import { LocalStorageService } from '@services/local-storage.service';
import { localStorageMetaReducerFactory } from '@store/localstorage.metareducer';
import {
  SIDE_RAIL_CONFIG_TOKEN,
  SIDE_RAIL_LOCAL_STORAGE_KEY,
  SIDE_RAIL_STORAGE_KEYS,
} from '@shared/siderail/side-rail.tokens';

const MATERIAL_MODULES = [MatButtonModule, MatIconModule, MatSidenavModule];

const STORE_MODULES = [
  StoreModule.forFeature(
    Feature.SIDE_RAIL,
    sideRailReducer,
    SIDE_RAIL_CONFIG_TOKEN
  ),
];

@NgModule({
  declarations: [SideRailComponent],
  imports: [
    CommonModule,
    MATERIAL_MODULES,
    RouterModule,
    PortalModule,
    STORE_MODULES,
  ],
  exports: [SideRailComponent],
  providers: [
    {
      provide: SIDE_RAIL_LOCAL_STORAGE_KEY,
      useValue: '__fis_scraper_side_rail__',
    },
    {
      provide: SIDE_RAIL_STORAGE_KEYS,
      useValue: ['opened', 'portal'],
    },
    {
      provide: SIDE_RAIL_CONFIG_TOKEN,
      deps: [
        SIDE_RAIL_STORAGE_KEYS,
        SIDE_RAIL_LOCAL_STORAGE_KEY,
        LocalStorageService,
      ],
      useFactory: localStorageMetaReducerFactory,
    },
  ],
})
export class SideRailModule {}
