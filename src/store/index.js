import { createStore } from "vuex";
import getters from "@/modules/getters";
import state from "@/modules/state";
import mutations from "@/modules/mutations";

export default createStore({
  modules: { getters, state, mutations },
  state: state,
  getters: getters,
  mutations: mutations,
  actions: {},
});
