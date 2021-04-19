<template>
  <button
    @click="toggleDark"
    class="px-6 py-1 m-2 bg-gray-800 text-white dark:bg-gray-100 dark:text-gray-800 font-bold shadow-md rounded-xl relative"
  >
    Display
  </button>
</template>

<script>
export default {
  props: {
    isDark: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      darkMode: this.isDark,
    };
  },
  methods: {
    toggleDark() {
      this.darkMode = !this.darkMode;
      this.$emit("toggle-dark", this.darkMode);
    },
  },
};
</script>
