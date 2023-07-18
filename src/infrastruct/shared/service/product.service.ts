import { productRepository } from '@/infrastruct/shared/repositories/product.repository.ts';
import { fakestoreClient } from '@/infrastruct/shared/instances/fakestore.client.ts';
import { productService } from '@/domain/service/product.service.ts';
import { useNotifierService } from '@/infrastruct/shared/service/notofier.ts';

export function useProductService() {
  const notificationsService = useNotifierService();

  return productService(
    productRepository(fakestoreClient),
    notificationsService
  );
}
