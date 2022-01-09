import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { name: "Play", path: "/", component: () => import("../views/Home.vue") },
  { name: "About", path: "/about", component: () => import("../views/About.vue") },
  { name: "Contact", path: "/contact", component: () => import("../views/Contact.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
