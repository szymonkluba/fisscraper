import { createFeatureSelector } from '@ngrx/store';
import { Notification } from '../../shared/models/notification.model';

export const selectNotifications =
  createFeatureSelector<ReadonlyArray<Notification>>('notifications');
