import { Params, RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';

export interface RoutingState {
  url: string;
  params: Params;
  queryParams: Params;
  fragment: string;
  data: Params;
}

export function getInitialRoutingState(): RoutingState {
  return {
    url: '',
    params: {},
    queryParams: {},
    fragment: '',
    data: {},
  };
}

export class RoutingSerializer implements RouterStateSerializer<RoutingState> {
  serialize(routerState: RouterStateSnapshot): RoutingState {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const {
      url,
      root: { queryParams },
    } = routerState;
    const { params, fragment, data } = route;

    return { url, params, queryParams, fragment: fragment || '', data };
  }
}
