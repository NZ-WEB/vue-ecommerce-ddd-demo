import { ref } from 'vue';
import { CreateProductDTO } from '@/infrastruct/shared/http/dto/product.dto.ts';

export function useCreateProductForm() {
  const title = ref('');
  const description = ref('');
  const price = ref(0);
  const category = ref('');

  const handleCreateDto = (): CreateProductDTO => ({
    category: category.value,
    description: description.value,
    title: title.value,
    price: price.value,
  });

  return {
    title,
    description,
    price,
    category,
    handleCreateDto,
  };
}
