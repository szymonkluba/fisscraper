import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SideRailState } from './siderail.reducer';
import { Portals } from '@shared/models/portal.model';
import { SingleRaceComponent } from '@scraper/single-race/single-race.component';
import { MultiRacesComponent } from '@scraper/multi-races/multi-races.component';
import { RangeRacesComponent } from '@scraper/range-races/range-races.component';
import { UnprocessedDataComponent } from '@scraper/unprocessed-data/unprocessed-data.component';
import { ScrapTableComponent } from '@scraper/scrap-table/scrap-table.component';
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
