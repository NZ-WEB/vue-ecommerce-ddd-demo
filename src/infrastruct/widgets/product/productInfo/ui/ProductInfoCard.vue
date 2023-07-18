<script setup lang="ts">
import { AppProductCard } from '@/infrastruct/entities/product';
import { Product, ProductId } from '@/domain/models/product.ts';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useProductService } from '@/infrastruct/shared/service/product.service.ts';

const id = +useRoute().params?.id;
const productService = useProductService();

const product = ref<Product | null>(null);

const handleFetchProduct = (id: ProductId) =>
  productService.getById(id).then((r) => {
    product.value = r;
  });

await handleFetchProduct(id);
</script>

<template>
  <AppProductCard class="product-info" :product="product" />
</template>
