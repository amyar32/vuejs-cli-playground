<template>
  <div class="container w-11/12 sm:w-9/12 mt-7">
    <h1 class="font-bold text-white text-5xl">HISAB-IN</h1>
    <p class="text-white  mb-6">
      <span class="text-lg font-semibold italic">Hitung Waktu Sholatmu! </span>
      - By A. Y. Firdaus -
      <a class="text-blue-400 italic" href="http://github.com/tikosewads"
        >Github</a
      >
      <a class="text-blue-400 italic" href="http://twitter.com/tikosewads">
        - Twitter</a
      >
      <a class="text-blue-400 italic" href="http://instagram.com/amyar32">
        - Instagram</a
      >
    </p>
    <p class="text-white text-base mb-6">
      Hisab-In, sebuah aplikasi untuk menghitung waktu sholat berdasarkan data
      awal. Diperuntungkan untuk media pembelajaran Ilmu Falak. Terinspirasi
      dari mata pelajaran Ilmu Falak di MA Persis Padalarang yang diampu
      langsung oleh Ust. Hasan Nasir.
    </p>

    <div
      class="flex flex-wrap p-4 w-full h-auto bg-blue-200 dark:bg-gray-300 filter shadow-md mb-14 rounded"
    >
      <div class="m-4">
        <h4 class="font-semibold text-gray-900 text-base mb-3">
          Lintang Tempat (φ) :
        </h4>
        <div class="text-center">
          <input type="number" v-model="lintangTempat[0]" />
          <input type="number" v-model="lintangTempat[1]" />
          <input type="number" v-model="lintangTempat[2]" />
        </div>
        <h4 class="font-semibold text-gray-900 text-base mt-5 mb-3">
          Deklinasi Matahari (δ) :
        </h4>
        <div class="text-center">
          <input type="number" v-model="deklinasiMatahari[0]" />
          <input type="number" v-model="deklinasiMatahari[1]" />
          <input type="number" v-model="deklinasiMatahari[2]" />
        </div>
        <h4 class="font-semibold text-gray-900 text-base mt-5 mb-3">
          Equation of Time :
        </h4>
        <div class="text-center">
          <input type="number" v-model="eot[0]" />
          <input type="number" v-model="eot[1]" />
          <input type="number" v-model="eot[2]" />
        </div>
        <h4 class="font-semibold text-gray-900 text-base mt-5 mb-3">
          Bujur Tempat :
        </h4>
        <div class="text-center">
          <input type="number" v-model="bujurTempat[0]" />
          <input type="number" v-model="bujurTempat[1]" />
          <input type="number" v-model="bujurTempat[2]" />
        </div>
        <h4 class="font-semibold text-gray-900 text-base mt-5 mb-3">
          Bujur Daerah :
        </h4>
        <div class="text-center">
          <input type="number" v-model="bujurDaerah[0]" />
          <input type="number" v-model="bujurDaerah[1]" />
          <input type="number" v-model="bujurDaerah[2]" />
        </div>
        <h4 class="font-semibold text-gray-900 text-base mt-5 mb-3">
          Ikhtiyat :
        </h4>
        <div class="text-center">
          <input type="number" v-model="ikhtiyat[0]" />
          <input type="number" v-model="ikhtiyat[1]" />
          <input type="number" v-model="ikhtiyat[2]" />
        </div>
      </div>
      <div class="mt-4 ml-9">
        <h4 class="font-semibold text-gray-900 text-base mb-4">
          <span class="text-lg font-bold">Rincian Waktu Maghrib :</span>
        </h4>
        <ul>
          <li
            class="list-disc list-inside"
            v-for="(value, key) in maghrib"
            :key="key"
          >
            <span class="font-semibold">{{ key }}</span>
            : {{ value }}
          </li>
        </ul>
        <h4 class="font-semibold text-gray-900 text-base mt-6 mb-4">
          <span class="text-lg font-bold">Rincian Waktu Isya :</span>
        </h4>
        <ul>
          <li
            class="list-disc list-inside"
            v-for="(value, key) in isya"
            :key="key"
          >
            <span class="font-semibold">{{ key }}</span>
            : {{ value }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { degToDec, WaktuSholat } from "../util/prayUtil";
export default {
  data() {
    return {
      // Derajat
      lintangTempat: [],
      deklinasiMatahari: [],
      eot: [],
      bujurTempat: [],
      bujurDaerah: [],
      ikhtiyat: [],

      // Hasil
      maghrib: {},
      isya: {},
    };
  },

  updated() {
    let lt = degToDec(...this.lintangTempat.map((x) => parseFloat(x)));
    let dm = degToDec(...this.deklinasiMatahari.map((x) => parseFloat(x)));
    let et = degToDec(...this.eot.map((x) => parseFloat(x)));
    let bt = degToDec(...this.bujurTempat.map((x) => parseFloat(x)));
    let bd = degToDec(...this.bujurDaerah.map((x) => parseFloat(x)));
    let ik = degToDec(...this.ikhtiyat.map((x) => parseFloat(x)));

    if (lt && dm && et && bt && bd && ik) {
      const maghrib = new WaktuSholat(lt, dm, -1, et, bt, bd, ik);
      const isya = new WaktuSholat(lt, dm, -18, et, bt, bd, ik);
      this.maghrib.sudutWaktu = maghrib.sudutWaktu();
      this.maghrib.meridianPass = maghrib.meridianPass();
      this.maghrib.penjumlahanSudut = maghrib.penjumlahanSudut();
      this.maghrib.selisihSudut = maghrib.selisihSudut();
      this.maghrib.waktuSholat = maghrib.waktuSholat();

      this.isya.sudutWaktu = isya.sudutWaktu();
      this.isya.meridiaPass = isya.meridianPass();
      this.isya.penjumlahanSudut = isya.penjumlahanSudut();
      this.isya.selisihSudut = isya.selisihSudut();
      this.isya.waktuSholat = isya.waktuSholat();
    }
  },
};
</script>

<style lang="postcss">
input[type="number"] {
  @apply w-24 mx-1 rounded-md shadow-md;
}
input[type="number"]:focus {
  @apply rounded-xl;
}
input[type="number"]:hover {
  @apply shadow-sm;
}
input[type="number"]:active {
  @apply ring-2;
}
</style>
