<template>
  <div :class="darkMode">
    <nav-bar></nav-bar>
    <div
      class="h-screen w-screen bg-gray-100 dark:bg-black transition duration-400 ease-out overflow-auto"
    >
      <!-- <dark-toggler message="Mode" @toggle-dark="toggleDark"></dark-toggler> -->
      <!-- <parent></parent> -->

      <!-- penggunaan dynamic component -->
      <!-- <dynamic-component></dynamic-component> -->

      <!-- form example di vue -->
      <!-- <forms></forms> -->
    </div>
  </div>
</template>

<script>
import DynamicComponent from "./components/DynamicComponent";
import Forms from "./components/forms/form";
export default {
  components: { DynamicComponent, Forms },
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
