import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // },
  // {
  //   path: "/brazil",
  //   name: "Brazil",
  //   component: () => import(/* webpackChunkName: "brazil" */ "../views/Brazil")
  // },
  // {
  //   path: "/hawaii",
  //   name: "Hawaii",
  //   component: () => import(/* webpackChunkName: "hawaii" */ "../views/Hawaii")
  // },
  // {
  //   path: "/jamaica",
  //   name: "Jamaica",
  //   component: () =>
  //     import(/* webpackChunkName: "jamaica" */ "../views/Jamaica")
  // },
  // {
  //   path: "/panama",
  //   name: "Panama",
  //   component: () =>
  //     import(/* webpackChunkName: "panama" */ "../views/Panama.vue")
  // },
  {
    path: "/details/:id",
    name: "DestinationDetails",
    component: () =>
      import(
        /* webpackChunkName: "DestinationDetails" */ "../views/DestinationDetails.vue"
      )
  }
];

const router = new VueRouter({
  routes
});

export default router;
