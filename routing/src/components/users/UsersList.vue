<template>
  <button @click="doRouting">Programatically Routing</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem
  },
  inject: ['users'],
  methods: {
    doRouting() {
      this.$router.push('/teams');
    }
  },
  // nav guard in comp

  beforeRouteUpdate() {
    // whenever reused with new data bcs route chjange
  },
  beforeRouteEnter(to, from, next) {
    console.log('before route enter');
    console.log(to, from);
    next(true);
  },
  // pas udah pindah ke nav lain, ketahan dulu sama ini
  beforeRouteLeave(to, from, next) {
    console.log(to, from);
    next(confirm('hasil dari beforeRouteLeave()'));
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
