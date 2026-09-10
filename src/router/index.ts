import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import HowToContactMe from "../views/HowToContactMe.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/contacts",
      name: "how-it-works",
      component: HowToContactMe,
    },
  ],
});

export default router;
