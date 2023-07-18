import { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  { path: '/', component: () => import('../../pages/HomePage.vue') },
  { path: '/catalog', component: () => import('../../pages/CatalogPage.vue') },
];
