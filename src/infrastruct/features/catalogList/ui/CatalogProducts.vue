<script setup lang="ts">
import { AppProductCard } from '@/infrastruct/entities/product';
import { useCatalogProducts } from '../use/catalogProducts.ts';

const { products, handleFetchProducts } = useCatalogProducts();
await handleFetchProducts();
</script>

<template>
  <div class="catalog-products">
    <AppProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<style>
.catalog-products {
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr 1fr;
}
</style>
