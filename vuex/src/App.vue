<template>
  <base-container title="Vuex"></base-container>
  <h3>{{ counter }}</h3>
  <h3>{{ modCounter }}</h3>
  <button @click="increment">Add</button>
  <map-getters></map-getters>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import MapGetters from './MapGetters.vue';

export default {
  components: {
    BaseContainer,
    MapGetters
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

      // memanggil langsung mutation
      // this.$store.commit({ type: 'increment', value: 1 });

      // memanggil mutation lewat action, async code
      this.$store.dispatch('increment', { value: 19 });
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
