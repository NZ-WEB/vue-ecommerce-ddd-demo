import {
  CreateProductParams,
  ProductRepository,
} from '@/domain/repositories/product.repository';
import { Product } from '@/domain/models/product.ts';
import { NotifierService } from '@/domain/service/notifier.service.ts';
import { NOTIFICATIONS_TYPES } from '@/domain/providers/notifications.provider.ts';

export const SUCCESS_NOTIFY_MESSAGE_TITLE = 'Post was successfully created';
export const ERROR_NOTIFY_MESSAGE_TITLE = 'Could not create product';

export const productService = (
  repository: ProductRepository,
  notifier: NotifierService
) => {
  const getById = (id: number) => repository.getById(id);
  const getAll = () => repository.getAll();

  const create = async (
    params: CreateProductParams
  ): Promise<Product | null> => {
    try {
      const id = await repository.create(params);

      notifier.notify({
        type: NOTIFICATIONS_TYPES.SUCCESS,
        title: SUCCESS_NOTIFY_MESSAGE_TITLE,
      });

      return { ...params, id, rating: { count: 0, rate: 0 } };
    } catch (e) {
      notifier.notify({
        type: NOTIFICATIONS_TYPES.ERROR,
        title: ERROR_NOTIFY_MESSAGE_TITLE,
      });

      return null;
    }
  };

  return {
    getById,
    getAll,
    create,
  };
};
