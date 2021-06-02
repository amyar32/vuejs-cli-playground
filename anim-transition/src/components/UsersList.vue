<template>
  <!-- list animate is here  -->
  <transition-group tag="ul" name="user-list"
    ><li v-for="user in users" :key="user" @click="removeUser(user)">
      {{ user }}
    </li></transition-group
  >

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

.user-list-enter-from,
.user-list-leave-to {
  opacity: 0;
}

.user-list-enter-active {
  transition: all 0.2s ease-out;
}

.user-list-leave-active {
  transition: all 0.2s ease-in;
  position: absolute;
}

.user-list-enter-to,
.user-list-leave-from {
  opacity: 1;
}

/* pog  */
/* transform under the hood by vue */

.user-list-move {
  transition: transform 0.8s ease-in;
}
</style>
