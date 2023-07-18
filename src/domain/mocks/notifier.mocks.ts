import { NotificationsProvider } from '@/domain/providers/notifications.provider.ts';

export const notificationsProviderMock: NotificationsProvider = {
  notify(): void {
    console.log();
  },
};
