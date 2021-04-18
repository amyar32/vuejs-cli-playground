<template>
  <div :class="darkMode">
    <div
      class="h-screen w-screen bg-blue-500 dark:bg-gray-800 transition duration-400 ease-out overflow-auto absolute"
    >
      <button
        @click="toggleDark"
        class="px-6 py-1 m-2 bg-gray-800 text-white dark:bg-gray-100 dark:text-gray-800 font-bold shadow-md rounded-xl relative"
      >
        Display
      </button>
      <todo-list
        title="Holy Todo List"
        sub-title="Todo list app by using VueJs and Tailwind CSS"
      ></todo-list>
      <todo-list></todo-list>
      <todo-list></todo-list>
      <todo-list></todo-list>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDark: true,
    };
  },
  computed: {
    darkMode() {
      return { dark: this.isDark };
    },
  },
  methods: {
    toggleDark() {
      this.isDark = !this.isDark;
    },
  },
};
</script>

<style></style>
