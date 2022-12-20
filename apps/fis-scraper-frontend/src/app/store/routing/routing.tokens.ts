import { InjectionToken } from '@angular/core';
import { StoreConfig } from '@ngrx/store';
import { RoutingState } from './routing.serializer';
import { RoutingActions } from './routing.actions';
import { RouterReducerState } from '@ngrx/router-store';

export const ROUTING_STORAGE_KEYS = new InjectionToken<
  keyof RouterReducerState<RoutingState>[]
>('RoutingStorageKeys');
export const ROUTING_LOCAL_STORAGE_KEY = new InjectionToken<string[]>(
  'RoutingStorage'
);
export const ROUTING_CONFIG_TOKEN = new InjectionToken<
  StoreConfig<RouterReducerState<RoutingState>, RoutingActions>
>('RoutingConfigToken');
