import {
  NotificationsProvider,
  NotificationsProviderParams,
} from '@/domain/providers/notifications.provider.ts';

export const notifierService = (
  provider: NotificationsProvider
): NotificationsProvider => {
  const notify = (params: NotificationsProviderParams) =>
    provider.notify(params);

  return {
    notify,
  };
};

export type NotifierService = ReturnType<typeof notifierService>;
