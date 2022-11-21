import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';
import { FileSpinnerModule } from '../shared/file-spinner/file-spinner.module';
import { NotificationComponent } from './notification/notification.component';
import { NotificationsComponent } from './notifications/notifications.component';

@NgModule({
  declarations: [NotificationsComponent, NotificationComponent],
  exports: [NotificationsComponent],
  imports: [CommonModule, AngularMaterialModule, FileSpinnerModule],
})
export class NotificationsModule {}
