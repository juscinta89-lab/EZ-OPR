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
7. `window.EZOPR_KOD_SEKOLAH` dibiarkan kosong — setiap guru memilih
   sekolahnya sendiri semasa log masuk pertama. Isi hanya jika salinan ini
   khusus untuk satu sekolah.
8. Untuk simpanan ke Google Drive, aktifkan **dua** API dalam Google Cloud
   Console (projek yang sama dengan Firebase), di bawah **APIs & Services → Library**:
   - **Google Drive API** — untuk memuat naik fail
   - **Google Picker API** — untuk memilih folder Drive kongsi
9. **APIs & Services → OAuth consent screen** → **Publish app** supaya guru
   sekolah lain boleh log masuk. Skop `drive.file` tidak sensitif, jadi tiada
   proses pengesahan Google diperlukan.

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

**Pentadbir sekolah:**
1. **Log masuk dengan Google** → skrin *Sekolah anda* → **Daftar baharu** →
   isi nama sekolah dan kod (guna kod sekolah KPM, contoh `DBA2164`).
   Pendaftar menjadi pentadbir sekolah itu.
2. Tab **Settings** → isi alamat, logo, warna, senarai unit, pengesah dan
   kunci API → **Save settings**.
3. Kad **Jemput guru** → **Copy link** → hantar kepada guru lain.
   Matikan *Benarkan guru baharu menyertai* selepas semua guru mendaftar.

**Guru lain:** buka pautan jemputan → **Log masuk dengan Google** → terus masuk.
Tanpa pautan, mereka boleh taip kod sekolah pada skrin *Sekolah anda*.
Semua guru mewarisi logo, warna dan templat pengesah — laporan keluar seragam.

**Simpan ke Google Drive:** tab **Preview** → **Save to Google Drive**. Kali
pertama, Google akan meminta kebenaran. Fail masuk ke Drive akaun yang log
masuk ez-OPR — jadi log masuk dengan akaun MOE untuk menyimpan ke Drive MOE.

Secara lalai PDF disimpan dalam folder *ez-OPR — <nama sekolah>* yang dicipta
sendiri oleh app. Untuk menghantar ke **folder kongsi sekolah**:

1. Tab **Settings** → **Simpanan Google Drive** → **Choose folder**
2. Pilih folder di bawah tab **Dikongsi dengan saya**
3. Semua PDF selepas itu masuk ke folder tersebut

Setiap guru perlu melakukan ini sekali pada perantinya. Sebabnya teknikal:
app menggunakan skop `drive.file`, yang hanya membenarkan akses kepada fail
yang diciptanya sendiri atau yang **dipilih secara eksplisit** oleh pengguna.
Menampal pautan folder sahaja tidak memberi kebenaran — Google memerlukan
pemilihan melalui Picker. Ini juga bermakna app tidak pernah dapat melihat
fail lain dalam Drive anda, jadi tiada semakan keselamatan Google diperlukan
untuk menerbitkannya.

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
pengguna/{uid}              → nama, emel, foto, sekolahId, peranan, pengesah[]
sekolah/{kod}               → nama, alamat, logo, warna, unit[], pengesah[],
                              aiProvider, aiModel, aiKey, terbuka, pemilik
sekolah/{kod}/laporan/{id}  → tajuk, tarikh, masa, tempat, sasaran, unit, bil,
                              objektif[], butiran[], kekuatan[], kelemahan[],
                              penambahbaikan[], olehUid, olehNama,
                              driveId, driveLink
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


---

## Pemilik platform (untuk penjualan)

Satu akaun boleh memiliki keseluruhan pemasangan dan mengurus semua sekolah
tanpa akaun tambahan:

1. Isi `window.EZOPR_PEMILIK_EMEL = "emel-anda@gmail.com";` dalam `config.js`.
2. Tampal semula `firestore.rules` yang baharu → **Publish**.
3. Log masuk ez-OPR dengan akaun itu sekali — status pemilik dituntut secara
   automatik dan kad **Platform — pemilik** muncul dalam tab Settings.

Dari kad itu pemilik boleh, untuk setiap sekolah: mendaftarkan sekolah baharu
apabila ada pembelian, menetapkan **e-mel pentadbir** (guru dengan e-mel itu
terus menjadi pentadbir apabila log masuk kali pertama), **menambah guru
melalui e-mel** (guru itu terus masuk ke sekolah yang betul sebaik log masuk,
tanpa kod atau pautan, walaupun pendaftaran ditutup), membuka atau menutup
pendaftaran, menyalin pautan jemputan, dan melihat senarai guru — menukar
peranan mereka atau **membuang** mereka terus. Membuang guru turut menarik
kebenaran e-melnya, jadi mereka tidak boleh menyertai semula sendiri selagi
pendaftaran sekolah itu ditutup; laporan yang mereka tulis kekal.

Selepas status pemilik dituntut, pendaftaran sekolah oleh orang awam ditutup —
hanya pemilik boleh menambah sekolah. Sekolah dan data yang sedia ada tidak
terjejas; tiada migrasi diperlukan.

## Berbilang sekolah

Satu pemasangan boleh menampung seberapa banyak sekolah. Setiap sekolah ialah
satu dokumen di bawah `sekolah/{kod}` dengan laporan, tetapan dan gurunya
sendiri. Guru sekolah A tidak dapat membaca laporan sekolah B — peraturan
Firestore menyemak `sekolahId` pada setiap bacaan.

Tiga cara mengagihkan app:

| Cara | Sesuai untuk |
|---|---|
| Satu hos, banyak sekolah, pautan `?s=kod` | Menjual langganan; anda urus satu projek Firebase |
| Satu hos, `EZOPR_KOD_SEKOLAH` diisi | Pemasangan khusus satu sekolah |
| Sekolah hos sendiri dengan projek Firebase mereka | Sekolah mahu data dalam akaun mereka sendiri |

Pentadbir setiap sekolah mengawal pendaftaran melalui tetapan
*Benarkan guru baharu menyertai*. Selagi ia dimatikan, kod sekolah yang bocor
pun tidak membenarkan sesiapa masuk.
