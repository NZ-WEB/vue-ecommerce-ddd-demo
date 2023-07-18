import { useProductService } from '@/infrastruct/shared/use/service/product.service.ts';
import { ref } from 'vue';
import { Product } from '@/domain/models/product.ts';

export function useCatalogProducts() {
  const service = useProductService();
  const products = ref<Product[]>([]);

  const handleFetchProducts = () => {
    service.getAll().then((r) => {
      products.value = r;
    });
  };

  return {
    handleFetchProducts,
    products,
  };
}
