<template>
  <div :class="darkMode">
    <nav-bar></nav-bar>
    <div
      class="h-screen w-screen bg-gray-100 dark:bg-black transition duration-400 ease-out overflow-auto"
    >
      <dark-toggler
        :isDark="isDark"
        message="Mode"
        @toggle-dark="toggleDark"
      ></dark-toggler>
      <my-form></my-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDark: false,
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
