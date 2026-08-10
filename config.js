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
