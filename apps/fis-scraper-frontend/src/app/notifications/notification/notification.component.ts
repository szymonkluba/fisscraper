import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Notification } from '../../models/notification.model';
import { Store } from '@ngrx/store';
import { removeNotification } from '../../state/notifications.actions';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationComponent {
  @Input() notification?: Notification;

  constructor(private store: Store) {}

  close(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.store.dispatch(
      removeNotification({ notification: this.notification! })
    );
  }
}
