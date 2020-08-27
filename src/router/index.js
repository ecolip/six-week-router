import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/products',
    component: () => import('../views/Products.vue'),
  },
  {
    path: '/checkout',
    component: () => import('../views/Checkout.vue'),
  },
  {
    path: '/checkoutFinish',
    component: () => import('../views/CheckoutFinish.vue'),
  },
  {
    path: '/cart',
    component: () => import('../views/Cart.vue'),
  },
  { // 動態路由
    path: '/product/:id',
    component: () => import('../views/Product.vue'),
  },
  {
    path: '/admin',
    component: () => import('../views/dashboard/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/dashboard/Products.vue'),
      },
      {
        path: 'coupon',
        component: () => import('../views/dashboard/Coupon.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
