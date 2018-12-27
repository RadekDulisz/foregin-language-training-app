import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Database from "./views/Database.vue";
import SelectTest from "./views/SelectTest.vue";
import Test from "./views/Test.vue";
import Categories from "./views/Categories.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/database",
      name: "database",
      component: Database
    },
    {
      path: "/selectTest",
      name: "selectTest",
      component: SelectTest
    },  
    {
      path: "/test/:category",
      name: "test",
      component: Test
    },  
    {
      path: "/categories",
      name: "categories",
      component: Categories
    }
  ]
});
