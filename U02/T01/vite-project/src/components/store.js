// Utilizando Vuex para a comunicação entre componentes
import Vue from "vue";
import Vuex from "vuex";

vue.use(Vuex);

const store = new Vuex.Store({
  stage: {
    counter: 0
  },
  mutations: {
    increment(state) {
      state.counter++;
    }
  },
  actions: {
    increment(context, payload) {
      setTimeout(() => {
        context.commit("increment", playload);
      }, 1000);
    }
  }
})

export default store;

