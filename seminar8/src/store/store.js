import Vue from "vue";
import Vuex from "vuex";
import ProjectDetailsModule from "./modules/ProjectDetailsModule";
import BlogModule from "./modules/BlogModule";
import ProjectModule from "./modules/ProjectModule";
import BlogDetailsModule from "./modules/BlogDetailsModule";

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    ProjectDetailsModule,
    BlogModule,
    ProjectModule,
    BlogDetailsModule,
  },
});
