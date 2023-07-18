import { ProductRepository } from '@/domain/repositories/product.repository.ts';
import { productRepository } from '@/infrastruct/repositories/product.repository.ts';
import { fakestoreClient } from '@/infrastruct/instances/fakestore.client.ts';
import { productService } from '@/domain/service/product.service.ts';

export function useProductService(): ProductRepository {
  return productService(productRepository(fakestoreClient));
}
