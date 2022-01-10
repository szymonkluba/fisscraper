import { Component, Input, OnInit } from '@angular/core';
import { Notification } from "../../models/notification.model";
import { Store } from "@ngrx/store";
import { removeNotification } from "../../state/notifications.actions";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  @Input() notification?: Notification

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
  }

  close(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.store.dispatch(removeNotification({ notification: this.notification! }));
  }
}
