import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature } from '@constants/store_constants';
import { FileSpinnerModule } from '@shared/file-spinner/file-spinner.module';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NotificationComponent } from './notification/notification.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { StoreModule } from '@ngrx/store';
import { notificationsReducer } from '@notifications/store/notifications.reducer';

const MATERIAL_MODULES = [
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatMenuModule,
  MatSnackBarModule,
  MatTooltipModule,
];

const STORE_MODULES = [
  StoreModule.forFeature(Feature.NOTIFICATIONS, notificationsReducer),
];

@NgModule({
  declarations: [NotificationsComponent, NotificationComponent],
  exports: [NotificationsComponent],
  imports: [CommonModule, FileSpinnerModule, STORE_MODULES, MATERIAL_MODULES],
})
export class NotificationsModule {}
