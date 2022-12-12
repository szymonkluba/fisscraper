import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SideRailState } from './siderail.reducer';
import { Portals } from 'apps/fis-scraper-frontend/src/app/shared/models/portal.model';
import { SingleRaceComponent } from 'apps/fis-scraper-frontend/src/app/scraper/single-race/single-race.component';
import { MultiRacesComponent } from 'apps/fis-scraper-frontend/src/app/scraper/multi-races/multi-races.component';
import { RangeRacesComponent } from 'apps/fis-scraper-frontend/src/app/scraper/range-races/range-races.component';
import { UnprocessedDataComponent } from 'apps/fis-scraper-frontend/src/app/scraper/unprocessed-data/unprocessed-data.component';
import { ScrapTableComponent } from 'apps/fis-scraper-frontend/src/app/scraper/scrap-table/scrap-table.component';
import { ComponentPortal, ComponentType, Portal } from '@angular/cdk/portal';

const portals = new Map<Portals, ComponentType<unknown>>([
  [Portals.SINGLE_RACE_PORTAL, SingleRaceComponent],
  [Portals.MULTIPLE_RACES_PORTAL, MultiRacesComponent],
  [Portals.RANGE_OF_RACES_PORTAL, RangeRacesComponent],
  [Portals.RAW_DATA_PORTAL, UnprocessedDataComponent],
  [Portals.SCRAP_TABLE_PORTAL, ScrapTableComponent],
]);

export const selectSideRail = createFeatureSelector<SideRailState>('sideRail');
export const selectSideRailState = createSelector(
  selectSideRail,
  (state: SideRailState) => ({
    ...state,
    portal:
      state.portal !== null
        ? (new ComponentPortal(portals.get(state.portal)!) as Portal<any>)
        : null,
  })
);
