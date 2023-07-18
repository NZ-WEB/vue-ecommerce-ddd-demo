<script setup lang="ts">
import AppContainer from '@/infrastruct/shared/ui/AppContainer.vue';
import ProductInfoCard from './ProductInfoCard.vue';
</script>

<template>
  <AppContainer>
    <div class="product-info">
      <Suspense>
        <ProductInfoCard />
        <template #fallback> Loading... </template>
      </Suspense>
    </div>
  </AppContainer>
</template>

<style scoped></style>
