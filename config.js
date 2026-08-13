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

/* 4. E-mel pemilik platform.
   Akaun Google dengan e-mel ini menjadi pemilik keseluruhan pemasangan
   apabila log masuk kali pertama selepas peraturan baharu ditampal.
   Pemilik boleh mendaftarkan sekolah, melantik pentadbir, dan mengurus guru
   dari tab Settings. Selepas dituntut, hanya pemilik boleh menambah sekolah. */
window.EZOPR_PEMILIK_EMEL = "";

/* 5. Kunci API Google untuk Google Picker (pemilih folder Drive).
   Biarkan kosong untuk guna semula apiKey Firebase di atas — biasanya memadai.
   Isi hanya jika anda mencipta kunci pelayar berasingan di Cloud Console.     */
window.EZOPR_GOOGLE_API_KEY = "";

/* 6. Versi — naikkan setiap kali fail app dikemas kini                     */
window.EZOPR_VERSI = "2.5.0";
