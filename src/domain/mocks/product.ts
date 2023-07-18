import { Product } from '@/domain/models/product.ts';
import { CreateProductParams } from '@/domain/repositories/product.repository.ts';

export const productMock: Product = {
  category: 'test',
  description: 'test',
  id: 1,
  image: 'test',
  price: 100,
  rating: {
    count: 100,
    rate: 100,
  },
  title: 'test',
};

export const createProductMockDTO: CreateProductParams = {
  category: 'test',
  description: 'test',
  image: 'test',
  price: 100,
  title: 'test',
};
