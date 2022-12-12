import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from '@shared/angular-material/angular-material.module';
import { FileSpinnerModule } from '@shared/file-spinner/file-spinner.module';
import { NotificationComponent } from './notification/notification.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { StoreModule } from '@ngrx/store';
import { notificationsReducer } from '@notifications/store/notifications.reducer';

const STORE_MODULES = [
  StoreModule.forFeature('notifications', notificationsReducer),
];

@NgModule({
  declarations: [NotificationsComponent, NotificationComponent],
  exports: [NotificationsComponent],
  imports: [
    AngularMaterialModule,
    CommonModule,
    FileSpinnerModule,
    STORE_MODULES,
  ],
})
export class NotificationsModule {}
