<template>
  <div class="grid grid-cols-1 justify-items-center">
    <div class="mt-20 p-8 bg-gray-400">
      <h1 class="text-xl font-semibold">Friend Contact {{ favoriteText }}</h1>
      <button @click="toggleVisible">{{ buttonText }}</button>
      <button @click="toggleFavorite">Toggle Favorite</button>
      <ul v-if="isVisible" class="list-disc">
        <li>Name : {{ name }}</li>
        <li>Number : {{ phoneNumber }}</li>
        <li>Email : {{ email }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  // prop not should be mutated (dirubah) a.k.a unidirectional dataflow
  // cara merubah :
  // 1. membiarkan parent tau, diubah datanya dari parent
  // 2. menerima data dari parent sebagai initial value, lalu dirubah disini

  // simple version of fetching prop properties
  // props: ["name", "phoneNumber", "email", "favorite"],

  // advance version
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    favorite: {
      type: Boolean,
      required: false,
      default: false,
      // validator di bawah maksudnya hanya dua data yakni false dan true yang dapat diterima
      //   validator: function(value) {
      //     return value === true || value === false;
      //   },
    },
  },
  data() {
    return {
      isVisible: false,
    };
  },
  computed: {
    favoriteText() {
      if (this.favorite) {
        return "(Favorite)";
      } else {
        return "";
      }
    },
    buttonText() {
      if (this.isVisible) {
        return "Hide";
      } else {
        return "Show";
      }
    },
  },
  methods: {
    toggleFavorite() {
      // ketika method ini dieksekusi, maka akan membuat listener yang bisa didengar oleh parent
      this.$emit("toggle-favorite", this.id);
    },
    toggleVisible() {
      this.isVisible = !this.isVisible;
    },
  },
};
</script>
