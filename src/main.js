import Vue from "vue";
import App from "./App.vue";
import { Button, Tabs, Input } from "ant-design-vue";
import ref from "vue-ref";
import router from "./router";
import Vuex from "vuex";

Vue.config.productionTip = false;

Vue.use(Button);
Vue.use(Tabs);
Vue.use(Input);
Vue.use(ref, { name: "ant-ref" });
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    increment2(state, n) {
      state.count += n;
    }
  },
  actions: {
    increment({ state }) {
      setTimeout(() => {
        state.count++;
      }, 3000);
    }
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    }
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
