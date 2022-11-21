import { Folder } from '../models/folder.model';
import { Notification } from '../models/notification.model';
import { RaceDetails } from '../models/race.model';

export interface AppState {
  folders: ReadonlyArray<Folder>;
  notifications: ReadonlyArray<Notification>;
  spinner: boolean;
  races: ReadonlyArray<RaceDetails>;
  raceDetails: ReadonlyArray<RaceDetails>;
}
