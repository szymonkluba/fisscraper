import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Notification } from '@shared/models/notification.model';
import {
  selectNotifications,
  selectNotificationsRead,
} from '@notifications/store/notifications.selectors';
import { trackByIndex } from '@shared/utils/track-by/track-by';
import { markAsRead } from '@notifications/store/notifications.actions';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationsComponent implements OnInit, OnDestroy {
  read: number = 0;

  readonly destroySubject: Subject<void> = new Subject<void>();
  readonly destroy$: Observable<void> = this.destroySubject.asObservable();

  constructor(private readonly store: Store) {}

  readonly notifications$: Observable<ReadonlyArray<Notification>> =
    this.store.select(selectNotifications);

  trackByIndex = trackByIndex;

  ngOnInit() {
    this.store
      .select(selectNotificationsRead)
      .pipe(takeUntil(this.destroy$))
      .subscribe(read => (this.read = read !== null ? read : 0));
  }

  ngOnDestroy() {
    this.destroySubject.next();
    this.destroySubject.complete();
  }

  markAsRead() {
    this.store.dispatch(markAsRead());
  }
}
