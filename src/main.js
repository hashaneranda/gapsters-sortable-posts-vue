import Vue from "vue";

//app componenet
import App from "./app/App.vue";

import store from "@/app/store";

import "./assets/styles/index.css";

// Vue.use(Vuex);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store: store,
}).$mount("#app");
