import { useProductService } from '@/infrastruct/shared/service/product.service.ts';
import { CreateProductDTO } from '@/infrastruct/shared/http/dto/product.dto.ts';
import { useRouter } from 'vue-router';
import { PRODUCT_PAGE_ROUTE } from '@/infrastruct/constants/routes.ts';

export function useCreateProduct() {
  const service = useProductService();
  const router = useRouter();

  const handleCreateProduct = (params: CreateProductDTO) =>
    service.create(params).then((r) => {
      router.push(PRODUCT_PAGE_ROUTE.replace(':id', r.id));
    });

  return {
    handleCreateProduct,
  };
}
