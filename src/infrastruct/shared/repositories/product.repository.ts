import { Http } from '@/domain/repositories/HTTP.ts';
import { ProductRepository } from '@/domain/repositories/product.repository.ts';
import { ProductDTO } from '@/infrastruct/shared/http/dto/product.dto.ts';

export const productRepository = (client: Http): ProductRepository => ({
  async getAll(): Promise<ProductDTO[]> {
    return await client.get('products');
  },
  async getById(id: number): Promise<ProductDTO> {
    return await client.get(`products${id}`);
  },
});
