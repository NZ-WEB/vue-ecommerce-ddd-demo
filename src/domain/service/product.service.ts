import { ProductRepository } from '@/domain/repositories/product.repository';

export const productService = (
  repository: ProductRepository
): ProductRepository => {
  const getById = (id: number) => repository.getById(id);
  const getAll = () => repository.getAll();

  return {
    getById,
    getAll,
  };
};
