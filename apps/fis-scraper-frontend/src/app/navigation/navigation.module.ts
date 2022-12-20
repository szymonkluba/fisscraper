import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { RouterModule } from '@angular/router';
import { LocalStorageService } from '@services/local-storage.service';
import { localStorageMetaReducerFactory } from '@store/localstorage.metareducer';
import { StoreModule } from '@ngrx/store';
import { navMenuReducer } from './store/nav-menu.reducer';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';

import * as navigationTokens from './navigation.tokens';

const MATERIAL_MODULES = [
  MatExpansionModule,
  MatListModule,
  MatTooltipModule,
  MatIconModule,
  MatButtonModule,
];

const STORE_MODULES = [
  StoreModule.forFeature(
    'navMenu',
    navMenuReducer,
    navigationTokens.NAVIGATION_CONFIG_TOKEN
  ),
];

@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MATERIAL_MODULES,
    RouterModule,
    STORE_MODULES,
  ],
  exports: [NavigationComponent],
  providers: [
    {
      provide: navigationTokens.NAVIGATION_LOCAL_STORAGE_KEY,
      useValue: '__fis_scraper_navigation__',
    },
    {
      provide: navigationTokens.NAVIGATION_STORAGE_KEYS,
      useValue: ['displayState', 'activeLink', 'expandedGroup'],
    },
    {
      provide: navigationTokens.NAVIGATION_CONFIG_TOKEN,
      deps: [
        navigationTokens.NAVIGATION_STORAGE_KEYS,
        navigationTokens.NAVIGATION_LOCAL_STORAGE_KEY,
        LocalStorageService,
      ],
      useFactory: localStorageMetaReducerFactory,
    },
  ],
})
export class NavigationModule {}
