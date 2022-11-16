import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './notifications/notifications.component';
import { SharedModule } from '../shared/shared.module';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [NotificationsComponent, NotificationComponent],
  exports: [NotificationsComponent],
  imports: [CommonModule, AngularMaterialModule, SharedModule],
})
export class NotificationsModule {}
