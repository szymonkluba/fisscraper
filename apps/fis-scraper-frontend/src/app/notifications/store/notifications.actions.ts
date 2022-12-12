import { createAction, props } from '@ngrx/store';
import { Notification } from '../../shared/models/notification.model';

export const addNotification = createAction(
  '[Notifications] add notification',
  props<{ notification: Notification }>()
);

export const removeNotification = createAction(
  '[Notifications] remove notification',
  props<{ notification: Notification }>()
);
