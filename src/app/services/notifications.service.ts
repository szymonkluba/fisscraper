import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { NotificationColors, NotificationIcons } from "../models/notification.model";
import { addNotification, removeNotification } from "../state/notifications.actions";
import { HttpErrorResponse } from "@angular/common/http";
import { Store } from "@ngrx/store";

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(
    private snackBar: MatSnackBar,
    private store: Store
  ) { }

  handleErrorNotification(error: HttpErrorResponse) {
    const notification = {
      id: Math.random().toString(16).substring(2, 8),
      message: error.error.detail,
      icon: NotificationIcons.ERROR,
      color: NotificationColors.ERROR
    }
    this.store.dispatch(addNotification({ notification }))
    const snackbar = this.snackBar.open(notification.message, 'Close', {
      duration: 4000,
      data: notification.id
    });
    snackbar.onAction().subscribe(() => {
      this.store.dispatch(removeNotification({ notification }))
    })
  }

  handleFileReadyNotification(fileName: string) {
    const notification = {
      id: Math.random().toString(16).substring(2, 8),
      message: `${fileName} is ready`,
      icon: NotificationIcons.SUCCESS,
      color: NotificationColors.SUCCESS
    }
    this.store.dispatch(addNotification({ notification }));
    const snackbar = this.snackBar.open(notification.message, 'Close', {
      duration: 2000,
      data: notification.id
    });
    snackbar.onAction().subscribe(() => {
      this.store.dispatch(removeNotification({ notification }))
    })
  }
}
