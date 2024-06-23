import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../pages/Home";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../pages/Home/Home.vue"),
  },
  {
    path: "/download-cv",
    name: "download-cv",
    component: () => import("../pages/DownloadCv/DownloadCv.vue"),
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
