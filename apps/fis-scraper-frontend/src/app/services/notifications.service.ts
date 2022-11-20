import { Injectable, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  NotificationColors,
  NotificationIcons,
  NotificationKind,
} from '../models/notification.model';
import {
  addNotification,
  removeNotification,
} from '../state/notifications.actions';
import { HttpErrorResponse } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService implements OnDestroy {
  subscriptionEndSubject = new Subject();
  subscriptionEnd$ = this.subscriptionEndSubject.asObservable();

  constructor(
    private readonly snackBar: MatSnackBar,
    private readonly store: Store
  ) {}

  handleErrorNotification(error: HttpErrorResponse) {
    const notification = {
      id: Math.random().toString(16).substring(2, 8),
      message: error.error.detail || error.statusText,
      icon: NotificationIcons.ERROR,
      color: NotificationColors.ERROR,
      kind: NotificationKind.ERROR,
    };
    this.store.dispatch(addNotification({ notification }));
    const snackbar = this.snackBar.open(notification.message, 'Close', {
      data: notification.id,
    });
    snackbar.onAction().pipe(takeUntil(this.subscriptionEnd$)).subscribe();
  }

  handleFileReadyNotification(fileName: string) {
    const notification = {
      id: Math.random().toString(16).substring(2, 8),
      message: `${fileName} is ready`,
      icon: NotificationIcons.SUCCESS,
      color: NotificationColors.SUCCESS,
      kind: NotificationKind.SUCCES,
    };
    this.store.dispatch(addNotification({ notification }));
    const snackbar = this.snackBar.open(notification.message, 'Close', {
      duration: 2000,
      data: notification.id,
    });
    snackbar
      .onAction()
      .pipe(takeUntil(this.subscriptionEnd$))
      .subscribe(() => {
        this.store.dispatch(removeNotification({ notification }));
      });
  }

  ngOnDestroy() {
    this.subscriptionEndSubject.next(null);
    this.subscriptionEndSubject.complete();
  }
}
