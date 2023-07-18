import { Product, ProductId } from '@/domain/models/product';

export type CreateProductParams = Omit<Omit<Product, 'id'>, 'rating'>;

export interface ProductRepository {
  getById(id: number): Promise<Product>;
  getAll(): Promise<Product[]>;
  create(params: CreateProductParams): Promise<ProductId>;
}
