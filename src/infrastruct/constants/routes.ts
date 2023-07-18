import { RouteRecordRaw } from 'vue-router';

export const CREATE_PRODUCT_PAGE_ROUTE = '/product/new';
export const PRODUCT_PAGE_ROUTE = '/product/:id';
export const HOME_PAGE_ROUTE = '/';
export const CATALOG_PAGE_ROUTE = '/catalog';

export const routes: RouteRecordRaw[] = [
  { path: HOME_PAGE_ROUTE, component: () => import('../pages/HomePage.vue') },
  {
    path: CATALOG_PAGE_ROUTE,
    component: () => import('../pages/CatalogPage.vue'),
  },
  {
    path: CREATE_PRODUCT_PAGE_ROUTE,
    component: () => import('../pages/ProductNewPage.vue'),
  },
  {
    path: PRODUCT_PAGE_ROUTE,
    component: () => import('../pages/ProductPage.vue'),
  },
];
