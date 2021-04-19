<template>
  <div :class="darkMode">
    <div
      class="h-screen w-screen bg-blue-500 dark:bg-gray-800 transition duration-400 ease-out overflow-auto absolute"
    >
      <dark-toggler :isDark="isDark" @toggle-dark="toggleDark"></dark-toggler>
      <todo-list
        title="Holy Todo List"
        sub-title="Todo list app by using VueJs and Tailwind CSS"
      ></todo-list>
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
    toggleDark(isDark) {
      this.isDark = isDark;
    },
  },
};
</script>

<style></style>
