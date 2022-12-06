import { Folder } from '../models/folder.model';
import { Notification } from '../models/notification.model';
import { RaceDetails } from '../models/race.model';
import { SideRailState } from './siderail.reducer';
import { NavMenuState } from './nav-menu.reducer';

export interface AppState {
  folders: ReadonlyArray<Folder>;
  navMenu: Readonly<NavMenuState>;
  notifications: ReadonlyArray<Notification>;
  raceDetails: ReadonlyArray<RaceDetails>;
  races: ReadonlyArray<RaceDetails>;
  sideRail: Readonly<SideRailState>;
  spinner: boolean;
}
