import { Http } from '@/domain/repositories/HTTP.ts';
import {
  CreateProductParams,
  ProductRepository,
} from '@/domain/repositories/product.repository.ts';
import { ProductDTO } from '@/infrastruct/shared/http/dto/product.dto.ts';
import { Product, ProductId } from '@/domain/models/product.ts';

export const productRepository = (client: Http): ProductRepository => ({
  async getAll(): Promise<ProductDTO[]> {
    return await client.get('products');
  },
  async getById(id: number): Promise<ProductDTO> {
    return await client.get(`products/${id}`);
  },

  async create(body: CreateProductParams): Promise<ProductId> {
    return await client.post<Product>('products', body).then((r) => r.id);
  },
});
