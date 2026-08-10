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

/* 2. Kod sekolah.
   Semua guru yang log masuk akan dimasukkan ke dalam sekolah ini.
   Untuk sekolah lain nanti, hos salinan app dengan kod berbeza
   atau tambah ?s=kodlain pada URL.                                       */
window.EZOPR_KOD_SEKOLAH = "dba2164";

/* 3. Domain e-mel yang dibenarkan log masuk.
   Biarkan [] untuk terima semua akaun Google.
   Contoh untuk kunci kepada akaun MOE sahaja:
     ["moe-dl.edu.my"]                                                     */
window.EZOPR_DOMAIN_DIBENARKAN = [];

/* 4. Versi — naikkan setiap kali fail app dikemas kini                    */
window.EZOPR_VERSI = "1.1.0";
