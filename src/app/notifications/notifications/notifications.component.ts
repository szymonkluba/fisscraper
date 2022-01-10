import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Notification } from "../../models/notification.model";
import { selectNotifications } from "../../state/notifications.selectors";

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  constructor(
    private store: Store
  ) { }

  notifications$?: Observable<ReadonlyArray<Notification>>

  ngOnInit(): void {
    this.notifications$ = this.store.select(selectNotifications)
  }

}
