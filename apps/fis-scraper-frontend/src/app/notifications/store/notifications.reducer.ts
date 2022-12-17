import { createReducer, on } from '@ngrx/store';
import {
  addNotification,
  markAsRead,
  removeNotification,
} from './notifications.actions';
import { Notification } from '@shared/models/notification.model';

export interface NotificationsState {
  notifications: ReadonlyArray<Notification>;
}
export const initialState: NotificationsState = {
  notifications: [],
};

export const notificationsReducer = createReducer(
  initialState,
  on(addNotification, (state, { notification }) => {
    if (
      state.notifications.findIndex(
        notificationInState => notificationInState.id === notification.id
      ) > -1
    ) {
      return {
        ...state,
      };
    }
    return {
      ...state,
      notifications: [...state.notifications, notification],
    };
  }),
  on(removeNotification, (state, { notification }) => ({
    ...state,
    notifications: state.notifications.filter(
      notificationInState => notificationInState.id !== notification.id
    ),
  })),
  on(markAsRead, state => ({
    ...state,
    notifications: state.notifications.map(notification => ({
      ...notification,
      read: true,
    })),
  }))
);
