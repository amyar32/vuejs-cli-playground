<template>
  <ul>
    <li v-for="user in users" :key="user" @click="removeUser(user)">
      {{ user }}
    </li>
  </ul>
  <div>
    <input type="text" ref="userNameInput" />
    <button @click="addUser">Add</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: ['amin', 'amins', 'aamiins']
    };
  },
  methods: {
    addUser() {
      const enteredUserName = this.$refs.userNameInput.value;
      this.users.unshift(enteredUserName);
    },
    removeUser(user) {
      this.users = this.users.filter(u => u !== user);
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  border: 1px solid red;
  padding: 1rem;
  text-align: center;
}
</style>
