import { Folder } from '../shared/models/folder.model';
import { RaceDetails } from '../shared/models/race.model';
import { SideRailState } from '../shared/siderail/store/siderail.reducer';
import { NavMenuState } from '../navigation/store/nav-menu.reducer';

export interface AppState {
  raceDetails: ReadonlyArray<RaceDetails>;
  races: ReadonlyArray<RaceDetails>;
  sideRail: Readonly<SideRailState>;
  spinner: boolean;
}
