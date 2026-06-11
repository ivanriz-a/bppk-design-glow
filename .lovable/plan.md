## Masalah
Tombol `.hero-scroll-down` tidak bisa diklik karena tertutup oleh `.content-layer-1` (floating service cards) yang ber-`z-index: 10` dan menjorok ke atas (`margin-top: -180px`) hingga menimpa area tombol. Tombol sendiri hanya ber-`z-index: 5`, jadi pointer event direbut oleh kartu di atasnya.

## Perubahan
File: `src/styles.css` pada selector `.hero-scroll-down`
- Ubah `z-index: 5` → `z-index: 20` (di atas `.content-layer-1`).
- Tambahkan `pointer-events: auto;` sebagai jaminan eksplisit.

Tidak ada perubahan pada markup atau perilaku lain. Posisi visual tombol tetap sama (`bottom: 80px`, center).
