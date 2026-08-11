/* =====================================================================
   ez-OPR — Konfigurasi
   ===================================================================== */

/* 1. Konfigurasi Firebase
   Firebase Console → Project settings → Your apps → Web app → Config      */
window.EZOPR_FIREBASE = {
  apiKey: "AIzaSyCjBpS0cWNRbgX8gFjABzIO8FwMtR1tJNw",
  authDomain: "ez-opr.firebaseapp.com",
  projectId: "ez-opr",
  storageBucket: "ez-opr.firebasestorage.app",
  messagingSenderId: "245859591171",
  appId: "1:245859591171:web:fb9f708b399d94f0cb9a36",
  measurementId: "G-BS08FY456N"
};

/* 2. Kod sekolah lalai — BIARKAN KOSONG untuk pemasangan berbilang sekolah.
   Guru akan memilih sendiri: sertai sekolah sedia ada, atau daftar baharu.
   Isi hanya jika salinan ini khusus untuk satu sekolah sahaja.
   Pautan jemputan ?s=kod tetap berfungsi walaupun nilai ini kosong.        */
window.EZOPR_KOD_SEKOLAH = "";

/* 3. Domain e-mel yang dibenarkan log masuk.
   Biarkan [] untuk terima semua akaun Google.
   Contoh untuk kunci kepada akaun MOE sahaja:  ["moe-dl.edu.my"]           */
window.EZOPR_DOMAIN_DIBENARKAN = [];

/* 4. Versi — naikkan setiap kali fail app dikemas kini                     */
window.EZOPR_VERSI = "2.1.0";
