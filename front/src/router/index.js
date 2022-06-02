import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/home/HomePage.vue'),
  },
  {
    path: '/:line',
    name: 'BarCode',
    component: () => import('@/pages/barcode/BarCodePage.vue'),
  },
  {
    path: '/qrcode',
    name: 'QrCode',
    component: () => import('@/pages/qr/QrPageLecture.vue'),
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
