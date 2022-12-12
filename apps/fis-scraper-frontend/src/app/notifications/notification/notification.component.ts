import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Notification } from '@shared/models/notification.model';
import { Store } from '@ngrx/store';
import { removeNotification } from '@notifications/store/notifications.actions';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationComponent {
  @Input() notification?: Notification;

  constructor(private readonly store: Store) {}

  close(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.store.dispatch(
      removeNotification({ notification: this.notification! })
    );
  }
}
