import { createRouter, createWebHashHistory } from "vue-router";
import Home from '@/views/Home.vue'
import Cart from '@/views/Cart.vue'

const routes = [
    { path: '/', name: "home", component: Home },
    { path: '/cart', name: "cart", component: Cart },
];

export default createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});
