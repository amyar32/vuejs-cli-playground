import { createApp } from 'vue';

// import vuex
import { createStore } from 'vuex';

import App from './App.vue';

// store application store
const store = createStore({
  // bit like data in component
  // one store per application
  // di component bisa diakses dengan $store.state.counter
  // tapi ada cara lebih better ketika mengkases state/data di bawah ini, yakni dengan getter
  state() {
    return {
      counter: 0
    };
  },

  // mutation = defined methods which have logic to update the state
  // payload = passing data ke mutation method
  mutations: {
    increment(state, payload) {
      state.counter = state.counter + payload.value;
    }
  },

  // ada cara lain selain langung mengakses state dengan this.$store.state di component
  // yakni dengan getters
  getters: {
    getCounter(state) {
      return state.counter;
    },
    getModCounter(_, getters) {
      const currentState = getters.getCounter;
      if (currentState > 5) {
        return 5;
      }
      return currentState;
    }
  },

  // async code ketika memanggil mutations
  actions: {
    increment(context, payload) {
      setTimeout(function() {
        context.commit('increment', payload);
      }, 3000);
    }
  }
});

const app = createApp(App);

// register store
app.use(store);

app.mount('#app');
