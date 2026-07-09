## Update Data Publikasi — pakai file yang diunggah

Reset item pada kategori **Buku**, **Majalah**, dan **Laporan** di `src/data/publikasi.ts`. Kategori **Penelitian** tidak diubah. Buku "Jejak, Karya, dan Transformasi BPPK" tetap dipertahankan (sudah ada + user re-upload PDF-nya).

### Aset baru (upload ke Lovable Assets dari `/mnt/user-uploads/`)

Buku:
- `cover-marwanto.jpg` — Marwanto Harjowiryono: Maestro Simfoni Perbendaharaan
- `cover-sumiyati.jpg` — Sumiyati: Srikandi Perubahan, Inspirasi bagi Perempuan

Majalah (Edukasi Keuangan):
- `edukasi-85.jpg` — Edisi 85/2026 "Riset Lebih Luas, Kebijakan Lebih Relevan"
- `edukasi-84.jpg` — Edisi 84/2025 "Nyala Membara Semangat Jaga Keuangan Negara"
- `edukasi-82.jpg` — Edisi 82/2024 "Kaleidoskop 2024 — BPPK Hadir untuk Negeri"

Laporan:
- `laporan-tahunan-2024.jpg` — Laporan Tahunan BPPK 2024 "Transformasi Pembelajaran Berkelanjutan"
- `laporan-kinerja-2025.jpg` — Laporan Kinerja BPPK 2025 "Clarity in Transition"
- `laporan-keuangan-2024.jpg` — Laporan Keuangan BPPK 2024 (Audited)
- `laporan-ppid-2024.jpg` — Laporan Layanan Informasi Publik PPID Tingkat I 2024

### Perubahan `src/data/publikasi.ts`

- **Buku** → hanya 3 item: Jejak BPPK (existing), Marwanto, Sumiyati.
- **Majalah** → hanya 3 item: Edisi 85, 84, 82.
- **Laporan** → hanya 4 item, satu per sub-tab:
  - tahunan → Laporan Tahunan BPPK 2024
  - kinerja → Laporan Kinerja BPPK 2025
  - keuangan → Laporan Keuangan BPPK 2024 (Audited)
  - ppid → Laporan Layanan Informasi Publik PPID Tingkat I 2024
- Judul, subtitle, tahun, dan cover mengikuti gambar. Deskripsi memakai helper `desc(...)` yang sudah ada agar gaya seragam.
- `pdfUrl` dibiarkan `"#"` (tidak ada PDF baru yang diunggah kecuali buku Jejak).

### Catatan

- Tidak ada perubahan UI/route — struktur tab & sub-tab tetap.
- File PDF `Buku_Jejak_Karya_dan_Transformasi_BPPK.pdf` yang diunggah sama isinya dengan yang sudah dipakai flipbook; tidak perlu diproses ulang.
