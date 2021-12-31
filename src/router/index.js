import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { name: "Home", path: "/", component: () => import("../views/Home.vue") },
  { name: "About", path: "/about", component: () => import("../views/About.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
