import { InjectionToken } from '@angular/core';
import { SideRailState } from './store/side-rail.reducer';
import { StoreConfig } from '@ngrx/store';
import { SideRailActions } from './store/side-rail.actions';

export const SIDE_RAIL_STORAGE_KEYS = new InjectionToken<keyof SideRailState[]>(
  'SideRailStorageKeys'
);
export const SIDE_RAIL_LOCAL_STORAGE_KEY = new InjectionToken<string[]>(
  'SideRailStorage'
);
export const SIDE_RAIL_CONFIG_TOKEN = new InjectionToken<
  StoreConfig<SideRailState, SideRailActions>
>('SideRailConfigToken');
