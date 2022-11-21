import { createReducer, on } from '@ngrx/store';
import { addNotification, removeNotification } from './notifications.actions';
import { Notification } from '../models/notification.model';

export const initialState: ReadonlyArray<Notification> = [];

export const notificationsReducer = createReducer(
  initialState,
  on(addNotification, (state, { notification }) => {
    if (state.findIndex(element => element.id === notification.id) > -1) {
      return state;
    }
    return [...state, notification];
  }),
  on(removeNotification, (state, { notification }) =>
    state.filter(element => element.id !== notification.id)
  )
);
