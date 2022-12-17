import { Injectable } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';

import { MultiRacesComponent } from '@scraper/multi-races/multi-races.component';
import { RangeRacesComponent } from '@scraper/range-races/range-races.component';
import { ScrapTableComponent } from '@scraper/scrap-table/scrap-table.component';
import { SideRailPortal } from '@shared/models/portal.model';
import { SingleRaceComponent } from '@scraper/single-race/single-race.component';
import { UnprocessedDataComponent } from '@scraper/unprocessed-data/unprocessed-data.component';

export type SideRailPortalComponents =
  | SingleRaceComponent
  | MultiRacesComponent
  | RangeRacesComponent
  | UnprocessedDataComponent
  | ScrapTableComponent;

@Injectable({
  providedIn: 'root',
})
export class SideRailService {
  getPortal(
    portal: SideRailPortal | null
  ): ComponentPortal<SideRailPortalComponents> {
    switch (portal) {
      case SideRailPortal.SINGLE_RACE_PORTAL:
        return new ComponentPortal<SingleRaceComponent>(SingleRaceComponent);
      case SideRailPortal.MULTIPLE_RACES_PORTAL:
        return new ComponentPortal<MultiRacesComponent>(MultiRacesComponent);
      case SideRailPortal.RANGE_OF_RACES_PORTAL:
        return new ComponentPortal<RangeRacesComponent>(RangeRacesComponent);
      case SideRailPortal.RAW_DATA_PORTAL:
        return new ComponentPortal<UnprocessedDataComponent>(
          UnprocessedDataComponent
        );
      case SideRailPortal.SCRAP_TABLE_PORTAL:
        return new ComponentPortal<ScrapTableComponent>(ScrapTableComponent);
      default:
        return new ComponentPortal<SingleRaceComponent>(SingleRaceComponent);
    }
  }
}
