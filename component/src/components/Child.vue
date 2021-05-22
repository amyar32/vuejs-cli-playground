<template>
  <!-- di bawah adalah contoh penggunaan element khusus `slot` -->
  <!-- singkatnya, kita bisa menyimpan component di custom component -->
  <base-card>
    <!-- contoh dari named slot, di dalam file child bisa menambahkan beberapa slot lalu dinamai -->
    <!-- di bawah merupakan contoh penggunakan slot dengan nama slot header -->
    <!-- tanda pagar merupakan shorthand -->
    <template #header>
      <h1 class="text-xl font-semibold">
        {{ name }} {{ favoriteText }}
      </h1></template
    >

    <!-- di bawah adalah penggunaan default slot yang ada di BaseCard.vue -->
    <template v-slot:default
      ><button class="bg-gray-200 px-4 py-1" @click="toggleVisible">
        {{ buttonText }}
      </button>
      <button class="bg-gray-200 px-4 py-1" @click="toggleFavorite">
        Toggle Favorite
      </button>
      <ul v-if="isVisible" class="list-disc">
        <li>Name : {{ name }}</li>
        <li>Number : {{ phoneNumber }}</li>
        <li>Email : {{ email }}</li>
      </ul></template
    >
    <!-- contoh penggunaan scoped slot, menggunakan data yang ada di dalam template slot dipakai di file ini / dapat akses -->
    <template #scoped-slot="slotProps"
      >{{ slotProps.item }} - {{ slotProps["another"] }}</template
    >
  </base-card>
</template>

<script>
import BaseCard from "./BaseCard.vue";
export default {
  components: { BaseCard },
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

  // simple version of validating custom emits
  //   emits: ["toggle-favorite"],

  //advance version
  emits: {
    // custom event di bawah harus ada {id} yang di pass
    // validasi {id} yang masuk
    "toggle-favorite": function(id) {
      if (id) {
        return true;
      } else {
        return false;
      }
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
