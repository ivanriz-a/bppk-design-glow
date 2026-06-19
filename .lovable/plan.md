## Perbaikan Bagan Struktur Organisasi

### 1. Perkecil lebar kotak (jadi 80% dari ukuran sekarang)
Di `src/styles.css`, untuk kotak `kind-kepala`, `kind-sekretariat`, `kind-pusat`, dan `kind-blu`:
- Beri `max-width` ≈ 80% dari lebar saat ini, dan center di dalam cell-nya (`margin-inline: auto`).
- Kotak BDK (UPT) tidak diubah.
- Lebar kolom grid tetap, hanya kotaknya yang menyusut → otomatis menambah jarak visual.

### 2. Perbaiki garis dashed (bracket Sekretariat → UPT)
Di `OrgConnectors` (`src/routes/struktur-organisasi.tsx`), masalah saat ini: sisi kanan bracket turun pada `rightX = chart.clientWidth - 24`, yang masih berada DI ATAS area kartu (memotong PKN STAN dan bus solid pusdiklat). Bagian bawah bracket juga terlalu dekat sehingga tampak menumpuk dengan kartu Pusdiklat baris bawah (AP/BC/PUSBIN).

Perbaikan:
- Hitung bounding box kartu Pusdiklat+BLU (left-most & right-most), lalu set:
  - `leftX  = pusatLeftMost  - 16`
  - `rightX = pusatRightMost + 16`
  Sehingga sisi kiri/kanan bracket berada **di luar** semua kartu.
- `bracketBottomY = pusatBottomMax + 28` (jarak lebih lega supaya tidak menempel kartu baris bawah).
- Sisi kanan bracket: turun dari `setBandY` ke `bracketBottomY` di `rightX` yang sudah di luar kartu → tidak lagi memotong PKN STAN / bus solid.
- Sisi kiri tetap dari `setR.left → leftX → bracketBottomY`.
- Garis horizontal bawah `leftX → rightX` di `bracketBottomY` (di bawah seluruh blok Pusdiklat).
- Vertikal dashed ke tiap kartu BDK tetap dari `bracketBottomY` ke top kartu.

### 3. Verifikasi
Setelah edit: cek preview pada viewport saat ini, pastikan:
- Tidak ada garis dashed yang melewati kartu Pusdiklat / PKN STAN.
- Bracket benar-benar mengelilingi blok Pusdiklat dari luar.
- Kotak Pimpinan/Kantor Pusat/BLU terlihat lebih ramping; UPT tetap.

### File yang diubah
- `src/styles.css` — lebar kartu kepala/sekretariat/pusat/blu.
- `src/routes/struktur-organisasi.tsx` — logika `OrgConnectors` (leftX/rightX/bracketBottomY).
