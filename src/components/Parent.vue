<template>
  <div class="mt-20">
    <!-- di bawah adalah contoh penggunaan element khusus `slot` -->
    <!-- singkatnya, kita bisa menyimpan component di custom component -->
    <base-card v-for="friend in friends" :key="friend.id"
      ><child
        :id="friend.id"
        :name="friend.name"
        :phone-number="friend.phoneNumber"
        :email="friend.email"
        :favorite="friend.favorite"
        @toggle-favorite="toggleFavorite"
      ></child
    ></base-card>
  </div>
</template>

<script>
// important concept not included :
// - prop/event fallthrough
// - binding all props
// - provide + inject

// di bawah adalah penggunaan local component
// component tidak diregister secara global, tapi local
import BaseCard from "./BaseCard.vue";
import Child from "./Child.vue";

export default {
  // registering local component
  components: { Child, BaseCard },

  data() {
    return {
      friends: [
        {
          id: "amyar",
          name: "A. Y. Firdaus",
          phoneNumber: "08123456789",
          email: "some@mail.com",
          favorite: true,
        },
        {
          id: "tiko",
          name: "Tikosewads",
          phoneNumber: "08123456789",
          email: "some@tiko.com",
          favorite: false,
        },
        {
          id: "brim",
          name: "Brimstone",
          phoneNumber: "08123456789",
          email: "some@tiko.com",
          favorite: false,
        },
      ],
    };
  },
  methods: {
    toggleFavorite(id) {
      const result = this.friends.find((friend) => friend.id === id);
      result.favorite = !result.favorite;
    },
  },
};
</script>

<style>
/* style akan selalu diterapkan secara global  */

/* agar styling berlaku di satu component, maka gunakan attribute scoped */
</style>
