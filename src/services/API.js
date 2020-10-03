import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

import { API_BASE_URL } from "@/config/Constants";

Vue.use(VueAxios, axios);

Vue.axios.defaults.baseURL = API_BASE_URL;

export default {
  get(url, request) {
    return Vue.axios
      .get(url, request)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  },
};
