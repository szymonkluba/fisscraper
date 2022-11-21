export interface Notification {
  id: string;
  kind: NotificationKind;
  icon: NotificationIcons;
  color: NotificationColors;
  message: string;
}

export enum NotificationColors {
  ERROR = 'warn',
  SUCCESS = 'accent',
  INFO = 'primary',
}

export enum NotificationIcons {
  ERROR = 'error',
  INFO = 'info',
  SUCCESS = 'check',
}

export enum NotificationKind {
  ERROR = 'Error!',
  INFO = 'Info',
  SUCCES = 'Success!',
}
