<script setup lang="ts">
import AppCard from '@/infrastruct/shared/ui/AppCard.vue';
import { useCreateProductForm } from '@/infrastruct/features/product/createProduct/use/createProuctForm.ts';
import { useCreateProduct } from '@/infrastruct/features/product/createProduct/use/createProduct.ts';

const { title, description, price, category, handleCreateDto } =
  useCreateProductForm();
const { handleCreateProduct } = useCreateProduct();
</script>

<template>
  <AppCard>
    <form
      class="create-product-form"
      @submit.prevent="handleCreateProduct(handleCreateDto())"
    >
      <label for="title">
        Title
        <input id="title" v-model="title" placeholder="Title" type="text" />
      </label>

      <label for="description">
        Description
        <textarea id="description" v-model="description"></textarea>
      </label>

      <label for="category">
        Category
        <input id="category" v-model="category" placeholder="Cat" type="text" />
      </label>

      <label for="price">
        Price
        <input id="price" v-model="price" placeholder="200" type="number" />
      </label>

      <button>Create</button>
    </form>
  </AppCard>
</template>

<style scoped>
.create-product-form {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  color: #000;
  justify-content: start;
  text-align: start;
}

.create-product-form input,
.create-product-form textarea {
  width: 100%;
  display: block;
}
</style>
