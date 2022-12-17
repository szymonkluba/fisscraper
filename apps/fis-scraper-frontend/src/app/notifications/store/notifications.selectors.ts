import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NotificationsState } from '@notifications/store/notifications.reducer';
import { Notification } from '@shared/models/notification.model';

export const selectNotificationsState =
  createFeatureSelector<NotificationsState>('notifications');

export const selectNotifications = createSelector(
  selectNotificationsState,
  ({ notifications }) => notifications
);

export const selectNotificationsRead = createSelector(
  selectNotificationsState,
  ({ notifications }) =>
    notifications.reduce(
      (totalRead: number, notification: Notification) =>
        notification.read ? totalRead + 1 : totalRead,
      0
    )
);
