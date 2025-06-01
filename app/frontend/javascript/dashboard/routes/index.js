import { createRouter, createWebHistory } from "vue-router";
import dashboard from './dashboard/dashboard.routes';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...dashboard.routes
  ]
})

export default router;
