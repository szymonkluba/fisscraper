import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { RouterModule } from '@angular/router';
import {
  NAVIGATION_CONFIG_TOKEN,
  NAVIGATION_LOCAL_STORAGE_KEY,
  NAVIGATION_STORAGE_KEYS,
} from './navigation.tokens';
import { LocalStorageService } from '@services/local-storage.service';
import { localStorageMetaReducerFactory } from '@shared/../store/localstorage.metareducer';
import { StoreModule } from '@ngrx/store';
import { navMenuReducer } from './store/nav-menu.reducer';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const MATERIAL_MODULES = [
  MatListModule,
  MatTooltipModule,
  MatIconModule,
  MatButtonModule,
];

const STORE_MODULES = [
  StoreModule.forFeature('navMenu', navMenuReducer, NAVIGATION_CONFIG_TOKEN),
];

@NgModule({
  declarations: [NavigationComponent],
  imports: [CommonModule, MATERIAL_MODULES, RouterModule, STORE_MODULES],
  exports: [NavigationComponent],
  providers: [
    {
      provide: NAVIGATION_LOCAL_STORAGE_KEY,
      useValue: '__fis_scraper_navigation__',
    },
    {
      provide: NAVIGATION_STORAGE_KEYS,
      useValue: ['displayState', 'activeLink'],
    },
    {
      provide: NAVIGATION_CONFIG_TOKEN,
      deps: [
        NAVIGATION_STORAGE_KEYS,
        NAVIGATION_LOCAL_STORAGE_KEY,
        LocalStorageService,
      ],
      useFactory: localStorageMetaReducerFactory,
    },
  ],
})
export class NavigationModule {}
