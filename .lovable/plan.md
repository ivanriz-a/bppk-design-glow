## Perubahan pada tab Majalah — `src/data/publikasi.ts`

Update tiga item majalah (`m1`, `m2`, `m3`) — hanya field teks, tidak menyentuh cover / route / komponen.

### 1. `m1` — Edukasi Keuangan Edisi 85
- `title`: "Riset Lebih Luas, Kebijakan Lebih Relevan"
- `subtitle`: "Riset Lebih Luas, Kebijakan Lebih Relevan"
- `meta`: "Edisi 85" (sebelumnya "ISSN 2085-4110")

### 2. `m2` — Edukasi Keuangan Edisi 84
- `title`: "Nyala Membara Semangat Jaga Keuangan Negara"
- `subtitle`: "Pelatihan Pembinaan Kesadaran Bela Negara"
- `meta`: "Edisi 84"

### 3. `m3` — Edukasi Keuangan Edisi 82
- `title`: "Kaleidoskop 2024"
- `subtitle`: "BPPK Hadir untuk Negeri"
- `meta`: "Edisi 82"

### Catatan teknis
- Modal detail di `src/routes/publikasi.tsx` line 276 sudah merender `item.meta` — cukup ubah nilainya di data, tidak perlu ubah komponen.
- Kartu grid otomatis ikut update karena membaca `title`/`subtitle` yang sama.
- Kategori lain (Penelitian, Buku, Laporan) tidak diubah.
