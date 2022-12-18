import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  NotificationColor,
  NotificationIcon,
  NotificationKind,
} from '@shared/models/notification.model';
import {
  addNotification,
  removeNotification,
} from '@notifications/store/notifications.actions';
import { HttpErrorResponse } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  constructor(
    private readonly snackBar: MatSnackBar,
    private readonly store: Store
  ) {}

  handleErrorNotification(error: HttpErrorResponse) {
    const notification = {
      id: Math.random().toString(16).substring(2, 8),
      message: error.error.detail || error.statusText,
      icon: NotificationIcon.ERROR,
      color: NotificationColor.ERROR,
      kind: NotificationKind.ERROR,
      read: false,
    };
    this.store.dispatch(addNotification({ notification }));
    const snackbar = this.snackBar.open(notification.message, 'Close', {
      data: notification.id,
    });
    snackbar.onAction().pipe(take(1)).subscribe();
  }

  handleFileReadyNotification(fileName: string) {
    const notification = {
      id: Math.random().toString(16).substring(2, 8),
      message: `${fileName} is ready`,
      icon: NotificationIcon.SUCCESS,
      color: NotificationColor.SUCCESS,
      kind: NotificationKind.SUCCESS,
      read: false,
    };
    this.store.dispatch(addNotification({ notification }));
    const snackbar = this.snackBar.open(notification.message, 'Close', {
      duration: 2000,
      data: notification.id,
    });
    snackbar
      .onAction()
      .pipe(take(1))
      .subscribe(() => {
        this.store.dispatch(removeNotification({ notification }));
      });
  }
}
