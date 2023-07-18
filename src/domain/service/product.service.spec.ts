import { describe, expect, it, vi } from 'vitest';
import {
  ERROR_NOTIFY_MESSAGE_TITLE,
  productService,
  SUCCESS_NOTIFY_MESSAGE_TITLE,
} from '@/domain/service/product.service.ts';
import {
  productRepositoryMockError,
  productRepositoryMockSuccess,
} from '@/domain/mocks/product.mock.ts';
import { createProductMockDTO } from '@/domain/mocks/product.ts';
import { notifierService } from '@/domain/service/notifier.service.ts';
import { notificationsProviderMock } from '@/domain/mocks/notifier.mocks.ts';
import { NOTIFICATIONS_TYPES } from '@/domain/providers/notifications.provider.ts';

function getService(success: boolean) {
  const notificationsService = notifierService(notificationsProviderMock);
  const svc = productService(
    success ? productRepositoryMockSuccess() : productRepositoryMockError(),
    notificationsService
  );

  return svc;
}

describe('productService', () => {
  describe('create', () => {
    it('should not get null response in success case', async () => {
      const svc = getService(true);

      const res = await svc.create(createProductMockDTO);

      expect(res).not.be.null;
    });

    it('should  get null response in fail case', async () => {
      const svc = getService(false);

      const res = await svc.create(createProductMockDTO);

      expect(res).be.null;
    });

    it('should call notifier anyway', async () => {
      const notificationsService = notifierService(notificationsProviderMock);
      const svc = productService(
        productRepositoryMockSuccess(),
        notificationsService
      );
      const spy = vi.spyOn(notificationsService, 'notify');

      await svc.create(createProductMockDTO);

      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should call notifier with success params if success', async () => {
      const notificationsService = notifierService(notificationsProviderMock);
      const svc = productService(
        productRepositoryMockSuccess(),
        notificationsService
      );
      const spy = vi.spyOn(notificationsService, 'notify');

      await svc.create(createProductMockDTO);

      expect(spy).toHaveBeenCalledWith({
        type: NOTIFICATIONS_TYPES.SUCCESS,
        title: SUCCESS_NOTIFY_MESSAGE_TITLE,
      });
    });

    it('should call notifier with fail params if fail', async () => {
      const notificationsService = notifierService(notificationsProviderMock);
      const svc = productService(
        productRepositoryMockError(),
        notificationsService
      );
      const spy = vi.spyOn(notificationsService, 'notify');

      await svc.create(createProductMockDTO);

      expect(spy).toHaveBeenCalledWith({
        type: NOTIFICATIONS_TYPES.ERROR,
        title: ERROR_NOTIFY_MESSAGE_TITLE,
      });
    });
  });
});
