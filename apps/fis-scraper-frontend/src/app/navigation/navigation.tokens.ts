import { InjectionToken } from '@angular/core';
import { NavMenuState } from './store/nav-menu.reducer';
import { NavMenuActions } from './store/nav-menu.actions';
import { StoreConfig } from '@ngrx/store';

export const NAVIGATION_STORAGE_KEYS = new InjectionToken<keyof NavMenuState[]>(
  'NaviationStorageKeys'
);
export const NAVIGATION_LOCAL_STORAGE_KEY = new InjectionToken<string[]>(
  'NaviagtionStorage'
);
export const NAVIGATION_CONFIG_TOKEN = new InjectionToken<
  StoreConfig<NavMenuState, NavMenuActions>
>('NavigationConfigToken');
