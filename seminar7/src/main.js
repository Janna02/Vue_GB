import Vue from "vue";
import App from "./App.vue";
import routes from "@/router";
import store from "./store/store";
import VueRouter from "vue-router";

Vue.config.productionTip = false;
import "./assets/style/style.scss";

Vue.use(VueRouter);
const router = new VueRouter({ mode: "history", routes });

new Vue({ store, router, render: (h) => h(App) }).$mount("#app");
