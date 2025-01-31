import type { RouterConfig } from "@nuxt/schema";

export default {
  // https://router.vuejs.org/api/interfaces/routeroptions.html#routes
  routes: (_routes) => [
    {
      name: "home",
      path: "/:type?",
      component: () => import("~/pages/index.vue"),
    },
  ],
} satisfies RouterConfig;
