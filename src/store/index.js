import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    libraries: [],
    showContent: false,
    sorts: [
      { title: "Libraries count", type: "libraries" },
      { title: "Computers count", type: "libraries_computers" },
      { title: "Visits count", type: "visits" },
    ],
    sort: {},
    chosenLibrary: [],
  },
  mutations: {
    SORT_BY(state, data) {
      state.sort = { ...data };
      const type = state.sort.sortfor;
      const value = state.sort.val;
      const newLibs = state.libraries.filter((lib) => {
        return type in lib && lib[type] > value
          ? lib
          : null;
      });
      state.libraries = newLibs;
    },
    DISCARD_CHANGES(state) {
      state.libraries = [];
    },
    CHOOSE_LIBRARY(state, id) {
        state.libraries.filter((lib) =>
          lib.order === id ? state.chosenLibrary = lib : null
        );
    }
  },
  actions: {
    async fetchData() {
      fetch("db.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((res) => res.json())
        .then((result) => {
          this.state.showContent = true;
          this.state.libraries.push(...result);
          return;
        });
    },
    discardChanges({dispatch, commit}) {
      commit('DISCARD_CHANGES')
      dispatch('fetchData')
      commit("SORT_BY", this.state.sort);
    },
    showDetails({commit},id) {
      commit("CHOOSE_LIBRARY", id);
    }
  },
  modules: {},
});
