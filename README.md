# ez-OPR — Penjana One Page Report

PWA untuk menjana One Page Report (OPR) sekolah yang seragam. Guru masukkan
maklumat asas dan 4 gambar; AI menulis objektif, butiran, kekuatan, kelemahan
dan penambahbaikan. Hasilnya satu halaman A4 yang boleh dicetak atau dimuat
turun sebagai PDF.

Direka untuk kekal dalam **pelan Firebase percuma (Spark)**: gambar tidak
dimuat naik ke Cloud Storage, hanya disimpan dalam IndexedDB peranti.

---

## 1. Sediakan Firebase (5 minit)

1. Buka <https://console.firebase.google.com> → **Add project**.
2. **Build → Authentication → Get started → Sign-in method → Google → Enable**
   (pilih e-mel sokongan projek → Save).
3. **Build → Firestore Database → Create database → Start in production mode**.
4. **Firestore → Rules** → tampal isi fail `firestore.rules` → **Publish**.
5. **Project settings → Your apps → Web (`</>`)** → daftar app → salin objek config.
6. Buka `config.js`, gantikan nilai `window.EZOPR_FIREBASE` dengan config tadi.
7. Kod sekolah sudah ditetapkan kepada `dba2164` dalam `config.js`.
   Jika mahu hadkan kepada akaun MOE sahaja, isi
   `window.EZOPR_DOMAIN_DIBENARKAN = ["moe-dl.edu.my"];`

## 2. Sediakan kunci AI percuma

1. Buka <https://aistudio.google.com/apikey> → **Create API key**.
2. Salin kunci (bermula `AIza…`).
3. Dalam app: tab **Tetapan → Penjana AI** → tampal kunci →
   tekan **Muat senarai model** → pilih model → **Simpan tetapan**.

Butang *Muat senarai model* bertanya terus kepada Google model mana yang
tersedia untuk kunci anda. Google kerap menamatkan model lama (contohnya
tier percuma `gemini-2.5-flash` ditutup pada April 2026), jadi jangan
bergantung pada nama model yang ditaip sendiri. Jika model tersimpan
ditamatkan semasa app sedang digunakan, app akan cari ganti dan tukar
sendiri secara automatik.

Jika mahu guna ChatGPT, tukar penyedia kepada OpenAI dan masukkan kunci dari
<https://platform.openai.com>. OpenAI berbayar mengikut penggunaan.

## 3. Hos di GitHub Pages

1. Cipta repositori baharu, muat naik semua fail dalam folder ini.
2. **Settings → Pages → Source: Deploy from a branch → main / (root)**.
3. Tunggu seminit, buka `https://namaanda.github.io/nama-repo/`.
4. Kembali ke Firebase → **Authentication → Settings → Authorized domains** →
   **Add domain** → masukkan `namaanda.github.io`.

## 4. Guna app

**Pentadbir (guru pertama):**
1. Buka app → **Log masuk dengan Google** menggunakan akaun MOE / DELIMa anda.
   Tiada pendaftaran; profil dicipta secara automatik.
   Akaun **pertama** yang log masuk menjadi pentadbir sekolah `dba2164`.
2. Tab **Tetapan** → isi nama sekolah, alamat, logo, warna, senarai unit,
   tiga pengesah, dan kunci API → **Simpan tetapan**.

**Guru lain:** cukup tekan **Log masuk dengan Google**. Mereka terus masuk ke
sekolah yang sama dan mewarisi logo, warna dan nama pengesah — jadi semua
laporan sekolah keluar seragam.

**Buat laporan:** Baru → isi maklumat → tambah 4 gambar → **Jana dengan AI** →
semak dan sunting ayat → **Simpan** → **Lihat pratonton** → **Muat turun PDF**.

**Gambar:** selepas memilih fail, editor terbuka. Seret untuk gerakkan, cubit
dua jari atau guna gelangsar untuk zum, dan *Putar 90°* untuk gambar yang
terbalik. *Muat penuh* memaparkan seluruh gambar dengan jalur putih; *Isi
bingkai* memenuhkan bingkai dengan memotong tepi. Gambar menegak dibuka pada
*Muat penuh* secara automatik. Ketik gambar yang sudah ada untuk melaraskannya
semula — potongan tidak merosakkan fail asal.

**Pengesah:** setiap guru ada senarai *Disediakan / Disemak / Disahkan oleh*
sendiri di tab Tetapan. Ia tidak bercampur dengan guru lain. Pentadbir boleh
menetapkan templat sekolah yang menjadi nilai permulaan bagi guru baharu.

## 5. Pasang di telefon

- **Android (Chrome):** menu ⋮ → *Add to Home screen*.
- **iPhone (Safari):** butang Kongsi → *Add to Home Screen*.

---

## Nota penting tentang gambar

Gambar aktiviti **tidak disimpan di pelayan**. Ia kekal dalam peranti yang
digunakan untuk memuat naiknya. Kesannya:

- Buka laporan yang sama di telefon lain → ruangan gambar kosong, tetapi semua
  teks tetap ada.
- Padam data pelayar → gambar hilang. Simpan PDF sebagai salinan kekal.

Ini pertukaran yang disengajakan supaya app kekal percuma sepenuhnya.

## Struktur data Firestore

```
pengguna/{uid}              → nama, emel, foto, sekolahId, peranan
sekolah/{kod}               → nama, alamat, logo, warna, unit[], pengesah[],
                              aiProvider, aiModel, aiKey
sekolah/{kod}/laporan/{id}  → tajuk, tarikh, masa, tempat, sasaran, unit, bil,
                              objektif[], butiran[], kekuatan[], kelemahan[],
                              penambahbaikan[], olehUid, olehNama
```

## Fail

| Fail | Fungsi |
|---|---|
| `index.html` | Keseluruhan app |
| `config.js` | Konfigurasi Firebase — **fail ini yang perlu anda ubah** |
| `manifest.json`, `sw.js` | Tetapan PWA dan cache luar talian |
| `firestore.rules` | Peraturan keselamatan untuk ditampal di Firebase Console |
| `icon-*.png`, `logo.png` | Ikon app |

## Kemas kini app

Selepas mengubah mana-mana fail, naikkan nombor `EZOPR_VERSI` dalam `config.js`
dan `CACHE` dalam `sw.js` supaya pengguna menerima versi baharu.
