<script setup lang="ts">
import { Product } from '@/domain/models/product.ts';
import AppCard from '@/infrastruct/shared/ui/AppCard.vue';

defineProps<{
  product: Product;
}>();
</script>

<template>
  <AppCard class="product">
    <img class="product__img" :src="product.image" />
    <h3 class="product__title">
      {{ product.title }}
    </h3>
    <p>{{ product.description }}</p>
    <span>{{ product.price }}</span>
  </AppCard>
</template>

<style>
.product {
  display: grid;
  gap: 16px;

  color: #000;
}

.product__img {
  width: 100%;
  height: calc(100vh / 6);
  object-fit: contain;
}
</style>
