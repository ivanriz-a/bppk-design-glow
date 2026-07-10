
## Perubahan pada halaman Publikasi

### 1. Tab Penelitian — semua cover pakai "Cover Jurnal" baru
- Upload `user-uploads://Cover_Jurnal-2.jpg` ke CDN sebagai `src/assets/cover-jurnal-2.jpg.asset.json`.
- Di `src/data/publikasi.ts`, seluruh item dengan `category: "penelitian"` (Jurnal j1–j3, Prosiding p1–p3, SNKN s1–s3) di-set `cover` ke URL cover jurnal baru tersebut — menggantikan pemakaian `pick(...)` yang saat ini memutar 3 gambar berbeda.

### 2. Buku "Jejak, Karya, dan Transformasi BPPK" — ganti cover
- Upload `user-uploads://Buku_-_Jejak_Karya_dan_Transformasi_BPPK.png` ke CDN sebagai `src/assets/jejak-cover-baru.png.asset.json`.
- Update item `b1` (`jejak-karya-transformasi-bppk`) agar `cover` memakai asset baru tersebut, menggantikan `coverJejak.url` yang lama.
- Catatan: halaman flipbook internal (`jejak-p01`…`p16`) tidak diubah — hanya cover pada kartu & modal detail.

### Yang tidak berubah
- Majalah, sub-tab Laporan, dan seluruh struktur tab/route tetap sama.
- File `src/routes/publikasi.tsx` tidak perlu disentuh.
