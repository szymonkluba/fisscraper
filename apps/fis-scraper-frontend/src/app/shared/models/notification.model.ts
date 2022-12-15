export interface Notification {
  id: string;
  kind: NotificationKind;
  icon: NotificationIcon;
  color: NotificationColor;
  message: string;
}

export enum NotificationColor {
  ERROR = 'warn',
  SUCCESS = 'accent',
  INFO = 'primary',
}

export enum NotificationIcon {
  ERROR = 'error',
  INFO = 'info',
  SUCCESS = 'check',
}

export enum NotificationKind {
  ERROR = 'Error!',
  INFO = 'Info',
  SUCCES = 'Success!',
}
