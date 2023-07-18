import {
  CreateProductParams,
  ProductRepository,
} from '@/domain/repositories/product.repository';
import { Product } from '@/domain/models/product.ts';

export const productService = (repository: ProductRepository) => {
  const getById = (id: number) => repository.getById(id);
  const getAll = () => repository.getAll();

  const create = async (params: CreateProductParams): Promise<Product> => {
    const id = await repository.create(params);

    return { ...params, id, rating: { count: 0, rate: 0 } };
  };

  return {
    getById,
    getAll,
    create,
  };
};
