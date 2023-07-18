export type NotificationsType = 'success' | 'error';
export enum NOTIFICATIONS_TYPES {
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface NotificationsProviderParams {
  type: NotificationsType;
  title: string;
  description?: string;
}

export interface NotificationsProvider {
  notify(params: NotificationsProviderParams): void;
}
