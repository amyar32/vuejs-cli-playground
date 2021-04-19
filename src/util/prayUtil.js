// =====================
// Method Dasar Pembantu
// =====================

export const degToDec = function(d, m, s) {
  if (Object.is(d, -0)) {
    m = Math.abs(m) * -1;
    s = Math.abs(s) * -1;
  }
  return d + m / 60 + s / 3600;
};

export const decToDeg = function(decimal) {
  let sisaMinute = (decimal - Math.floor(decimal)) * 60;
  let sisaSecond = (sisaMinute - Math.floor(sisaMinute)) * 60;
  let hour = Math.floor(decimal);
  let minute = Math.floor(sisaMinute);
  let second = Math.floor(sisaSecond);

  if (second >= 30) {
    return `${hour} : ${minute + 2}`;
  } else {
    return `${hour} : ${minute + 1}`;
  }
  // return `${hour} : ${minute} : ${second}`;
};

export const getTanDeg = function(deg) {
  return Math.tan((deg * Math.PI) / 180);
};

export const getCosDeg = function(deg) {
  return Math.cos((deg * Math.PI) / 180);
};

export const getAcosDeg = function(deg) {
  return (Math.acos(deg) * 180) / Math.PI;
};

export const getSinDeg = function(deg) {
  return Math.sin((deg * Math.PI) / 180);
};

// ========================
// Pengitungan Waktu Sholat
// ========================

// 1. Mencari Sudut Waktu
// ======================
export const sudutWaktu = function(
  lintangTempat,
  deklinasiMatahari,
  tinggiMatahari
) {
  return (
    getAcosDeg(
      getTanDeg(-1 * lintangTempat) * getTanDeg(deklinasiMatahari) +
        getSinDeg(tinggiMatahari) /
          getCosDeg(lintangTempat) /
          getCosDeg(deklinasiMatahari)
    ) / 15
  );
};

// 2. Mencari Harga Meridian Pass
// ==============================
export const meridianPass = function(equationOfTime) {
  return 12 - equationOfTime;
};

// 3. Penjumlahan Sudut Waktu dengan Meridian Pass
// ===============================================
export const penjumlahanSudut = function(sudutWaktu, meridianPass) {
  return sudutWaktu + meridianPass;
};

// 4. Mencari Selisih Bujur
// ========================
export const selisihSudut = function(bujurTempat, bujurDaerah) {
  return (bujurTempat - bujurDaerah) / 15;
};

// 5. Interpolasi dan Penambahan Ikhtiyat
// ======================================
export const waktuSholat = function(
  sholat,
  penjumlahanSudut,
  selisihSudut,
  ikhtiyat
) {
  // return decToDeg(penjumlahanSudut() - selisihSudut());
  if (sholat.toLowerCase() === "maghrib") {
    return decToDeg(penjumlahanSudut - selisihSudut + ikhtiyat);
  }
};

// // ===================================
// // Data Primer Penghitung Waktu Sholat
// //====================================

// const deklinasiMatahari = degToDec(13, 55, 48);
// const equationOfTime = degToDec(0, 2, 23);
// const lintangTempat = degToDec(-7, 5, 0);
// const tinggiMatahari = degToDec(-1, 0, 0);
// const bujurTempat = degToDec(107, 34, 0);
// const bujurDaerah = degToDec(105, 0, 0);
// const ikhtiyat = degToDec(0, 1, 0);
