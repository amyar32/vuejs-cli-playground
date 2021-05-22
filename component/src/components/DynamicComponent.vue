<template>
  <button class="btn" @click="setActiveComponent('dynamic-one')">One</button>
  <button class="btn" @click="setActiveComponent('dynamic-two')">Two</button>

  <!-- attribut `is` isinya sesuai dengan nama komponen yang akan ditampilkan -->
  <!-- keep-alive digunakan untuk menyimpan sisa component dalam cache, jadi ketika berubah tidak hilang yang sebelumnya -->
  <!-- teleport diguanakan untuk memindahkan element ke tempat yang kita mau sesuai atribut `to` menggunakan css selector -->
  <!-- fragment, fitur yang memungkinkan menulis beberapa top level html, tetapi di vue 3 tidak perlu -->
  <teleport to="body"
    ><keep-alive> <component :is="activeComponent"></component> </keep-alive
  ></teleport>
</template>

<script>
import DynamicOne from "./DynamicOne.vue";
import DynamicTwo from "./DynamicTwo.vue";
export default {
  components: { DynamicOne, DynamicTwo },
  data() {
    return { activeComponent: "dynamic-one" };
  },
  methods: {
    setActiveComponent(component) {
      this.activeComponent = component;
    },
  },
};
</script>

<style lang="postcss" scoped>
.btn {
  @apply bg-gray-200 px-4 py-1;
}
</style>
