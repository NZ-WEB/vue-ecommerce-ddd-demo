import {
  CreateProductParams,
  ProductRepository,
} from '@/domain/repositories/product.repository.ts';
import { ProductDTO } from '@/infrastruct/shared/http/dto/product.dto.ts';
import { ProductId } from '@/domain/models/product.ts';
import { Product } from '@/domain/models/product.ts';

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

export const productRepositoryMockSuccess = (): ProductRepository => ({
  async getAll(): Promise<ProductDTO[]> {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve([productMock]);
      });
    });
  },
  async getById(id: number): Promise<ProductDTO> {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve({ ...productMock, id });
      });
    });
  },

  async create(body: CreateProductParams): Promise<ProductId> {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve({ ...productMock, body });
      });
    });
  },
});

export const productRepositoryMockError = (): ProductRepository => ({
  async getAll(): Promise<ProductDTO[]> {
    return await new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error('test'));
      });
    });
  },
  async getById(id: number): Promise<ProductDTO> {
    return await new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error('test ' + id));
      });
    });
  },

  async create(body: CreateProductParams): Promise<ProductId> {
    return await new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error('test ' + body.title));
      });
    });
  },
});
