import { Product } from "@/domain/models/product";

export interface ProductRepository {
  getById(id: number): Promise<Product>;
  getAll(): Promise<Product[]>;
}
