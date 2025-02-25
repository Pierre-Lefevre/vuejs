import App_1 from "./App_1.vue";
import App_2 from "./App_2.vue";
import App_3 from "./App_3.vue";

export const routes = [
  { path: "/", component: App_1, name: "home" },
  { path: "/blog", component: App_2, name: "posts.index" },
  { path: "/contact", component: App_3, name: "contact" },
];
