import { productRepository } from '@/infrastruct/shared/repositories/product.repository.ts';
import { fakestoreClient } from '@/infrastruct/shared/instances/fakestore.client.ts';
import { productService } from '@/domain/service/product.service.ts';

export function useProductService() {
  return productService(productRepository(fakestoreClient));
}
