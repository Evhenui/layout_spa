import { createRouter, createWebHistory } from "vue-router";
import Invest from "../views/Invest.vue";

const routes = [
  {
    path: "/",
    name: "invest",
    component: Invest,
  },
  {
    path: "/cash",
    name: "cash",
    component: () => import("../views/Cash.vue"),
  },
  {
    path: "/borrow",
    name: "borrow",
    component: () => import("../views/Borrow.vue"),
  },
  {
    path: "/blog",
    name: "blog",
    component: () => import("../views/Blog.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
