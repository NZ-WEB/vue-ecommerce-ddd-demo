<script setup lang="ts">
import CatalogProducts from './CatalogProducts.vue';
</script>

<template>
  <div class="catalog-list">
    <Suspense>
      <CatalogProducts />

      <template #fallback> Products loading... </template>
    </Suspense>
  </div>
</template>

<style scoped></style>
