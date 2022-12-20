import * as fromRouter from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { getInitialRoutingState, RoutingState } from './routing.serializer';
import { Feature } from '../../constants/store_constants';

const routerReducerState = createFeatureSelector<
  fromRouter.RouterReducerState<RoutingState>
>(Feature.ROUTER);

const routingState = createSelector(routerReducerState, state =>
  state ? state.state : getInitialRoutingState()
);

export const selectQueryParams = createSelector(
  routingState,
  state => state.queryParams || {}
);

export const selectUrl = createSelector(routingState, state =>
  state ? state.url : '/'
);
