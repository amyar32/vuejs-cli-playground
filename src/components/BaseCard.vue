<template>
  <div class="w-6/12 mb-4 p-8 bg-gray-300">
    <!-- cek apabila BaseCard menerima inputan slot dengan name `header` -->
    <!-- apabila tidak maka slot di bawah tidak akan dirender -->
    <header v-if="$slots.header">
      <slot name="header"></slot>
    </header>
    <!-- slot digunakan untuk menampung component dari luar -->
    <!-- slot bisa dikasih nama -->
    <!-- apabila tidak dikasih nama, maka akan menjadi default slot -->
    <slot></slot>
    <ul>
      <li>
        <!-- scoped slot, item yang ada di sini bisa diakses di parent -->
        <slot name="scoped-slot" :item="item" another="dummy"></slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: ["Halo", "Bismillah"],
    };
  },
};
</script>
