<template>
  <div class="container w-11/12 sm:w-9/12 mt-8">
    <h1 class="font-bold text-white text-5xl mb-1">HISAB-IN</h1>
    <p class="text-white mb-6">
      Dibuat oleh A. Y. Firdaus, masih dalam tahap experimental
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
          Tinggi Matahari :
        </h4>
        <div class="text-center">
          <input type="number" v-model="tinggiMatahari[0]" />
          <input type="number" v-model="tinggiMatahari[1]" />
          <input type="number" v-model="tinggiMatahari[2]" />
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
      <div class="m-4">
        <h4 class="font-semibold text-gray-900 text-base mb-1">
          Sudut Waktu : {{ sudWak }}
        </h4>
        <h4 class="font-semibold text-gray-900 text-base mb-1">
          Meridian Pass : {{ merPass }}
        </h4>
        <h4 class="font-semibold text-gray-900 text-base mb-1">
          Penjumlahan Sudut : {{ penSudut }}
        </h4>
        <h4 class="font-semibold text-gray-900 text-base mb-1">
          Selisih Bujur : {{ seSudut }}
        </h4>
        <h4 class="font-semibold text-gray-900 text-base mb-1">
          Waktu Sholat Maghrib : {{ waktuMaghrib }}
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
import {
  degToDec,
  sudutWaktu,
  meridianPass,
  penjumlahanSudut,
  selisihSudut,
  waktuSholat,
} from "../util/prayUtil";
export default {
  data() {
    return {
      // Derajat
      lintangTempat: [],
      deklinasiMatahari: [],
      tinggiMatahari: [],
      eot: [],
      bujurTempat: [],
      bujurDaerah: [],
      ikhtiyat: [],

      // Desimal

      // Hasil
      sudWak: 0,
      merPass: 0,
      penSudut: 0,
      seSudut: 0,
      waktuMaghrib: 0,
    };
  },

  updated() {
    let lt = degToDec(...this.lintangTempat.map((x) => parseFloat(x)));
    let dm = degToDec(...this.deklinasiMatahari.map((x) => parseFloat(x)));
    let tm = degToDec(...this.tinggiMatahari.map((x) => parseFloat(x)));
    let et = degToDec(...this.eot.map((x) => parseFloat(x)));
    let bt = degToDec(...this.bujurTempat.map((x) => parseFloat(x)));
    let bd = degToDec(...this.bujurDaerah.map((x) => parseFloat(x)));
    let ik = degToDec(...this.ikhtiyat.map((x) => parseFloat(x)));
    this.sudWak = sudutWaktu(lt, dm, tm);
    this.merPass = meridianPass(et);
    this.penSudut = penjumlahanSudut(this.sudWak, this.merPass);
    this.seSudut = selisihSudut(bt, bd);
    this.waktuMaghrib = waktuSholat("maghrib", this.penSudut, this.seSudut, ik);
  },
};
</script>

<style lang="postcss">
input[type="number"] {
  @apply w-20 mx-1 rounded-md shadow-md;
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
