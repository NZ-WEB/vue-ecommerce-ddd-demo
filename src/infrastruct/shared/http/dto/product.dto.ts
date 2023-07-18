import { Product } from '@/domain/models/product.ts';
import { CreateProductParams } from '@/domain/repositories/product.repository.ts';

export type ProductDTO = Product;
export type CreateProductDTO = CreateProductParams;
