<template>
  <h3>{{ getCounter }}</h3>
  <button @click="increment({ value: 100 })">HAHA</button>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  methods: {
    ...mapActions(['increment'])
  },
  computed: {
    ...mapGetters(['getCounter'])
  }
};
</script>
