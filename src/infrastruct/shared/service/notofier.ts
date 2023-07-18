import { notifierService } from '@/domain/service/notifier.service.ts';
import { useNotification } from '@kyvg/vue3-notification';

export function useNotifierService() {
  const notificationsProvider = useNotification();

  return notifierService(notificationsProvider);
}
