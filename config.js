/* =====================================================================
   ez-OPR — Konfigurasi
   ===================================================================== */

/* 1. Konfigurasi Firebase
   Firebase Console → Project settings → Your apps → Web app → Config      */
window.EZOPR_FIREBASE = {
  apiKey:            "MASUKKAN_API_KEY_ANDA",
  authDomain:        "projek-anda.firebaseapp.com",
  projectId:         "projek-anda",
  storageBucket:     "projek-anda.appspot.com",
  messagingSenderId: "000000000000",
  appId:             "1:000000000000:web:xxxxxxxxxxxxxxxx"
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
window.EZOPR_VERSI = "2.1.1";
