<template>
  <base-container title="Vuex"></base-container>
  <h3>{{ counter }}</h3>
  <h3>{{ modCounter }}</h3>
  <button @click="increment">Add</button>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';

export default {
  components: {
    BaseContainer
  },
  computed: {
    counter() {
      return this.$store.getters.getCounter;
    },
    modCounter() {
      return this.$store.getters.getModCounter;
    }
  },
  methods: {
    increment() {
      // 'increment' ada di store bagian mutation, defined method di dalam mutation
      // this.$store.commit('increment', { value: 5 });
      this.$store.commit({ type: 'increment', value: 1 });
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
