import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Notification } from '../../shared/models/notification.model';
import { selectNotifications } from '../../shared/state/notifications.selectors';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationsComponent implements OnInit {
  constructor(private readonly store: Store) {}

  notifications$?: Observable<ReadonlyArray<Notification>>;

  ngOnInit(): void {
    this.notifications$ = this.store.select(selectNotifications);
  }
}
