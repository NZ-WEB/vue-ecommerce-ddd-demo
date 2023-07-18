<script setup lang="ts">
import AppContainer from '@/infrastruct/shared/ui/AppContainer.vue';
import { CreateProductForm } from '../features/product/createProduct';
</script>

<template>
  <AppContainer>
    <div class="product-new-page">
      <CreateProductForm />
    </div>
  </AppContainer>
</template>

<style scoped></style>
