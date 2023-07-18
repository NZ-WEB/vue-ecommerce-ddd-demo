import { Http } from "@/domain/repositories/HTTP";
import { ProductRepository } from "@/domain/repositories/product.repository";
import { ProductDTO } from "@/infrastruct/dto/product.dto";

export const productRepository = (client: Http): ProductRepository => ({
  async getAll(): Promise<ProductDTO[]> {
    return await client.get("products");
  },
  async getById(id: number): Promise<ProductDTO> {
    return await client.get(`products${id}`);
  },
});
