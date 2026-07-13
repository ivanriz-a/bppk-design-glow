## Tujuan
Menyesuaikan halaman PPID:
1. Bagian **08 Statistik**: hapus tabel dan bagan, hanya menyisakan 5 gambar statistik yang sudah ada.
2. Bagian **09 Lainnya**: tambahkan bagian baru yang memberitahu pengunjung bahwa bagian ini akan diisi informasi PPID lainnya di kemudian hari.

## Perubahan yang dilakukan

### `src/routes/ppid.tsx`
- Perbarui tipe `SectionId` dan array `sections` agar mencakup bagian `lainnya` dengan nomor `09` dan label "Lainnya".
- Di bagian **08 Statistik**: hapus:
  - grid kartu "Konsolidasi Permintaan Informasi Tahun 2025"
  - tabel "Jumlah Permintaan Informasi"
  - tabel "Jumlah Keberatan"
  - tabel "Tindak Lanjut Permintaan Informasi Tahun 2025"
  - tabel "Permintaan Informasi yang Tidak Diberikan Tahun 2025"
- Tetap pertahankan 5 gambar statistik (`stat1`–`stat5`) beserta keterangan singkat di atasnya.
- Tambahkan bagian **09 Lainnya** setelah Statistik, berisi teks penjelasan placeholder.
- Hapus import data statistik yang tidak lagi digunakan (`statKonsolidasi`, `statPermintaan`, `statKeberatan`, `statTindaklanjut`, `statTidakDiberikan`).

### `src/data/ppid.ts`
- Tidak diubah; data statistik dapat tetap ada untuk referensi meski tidak ditampilkan.

### Teks placeholder bagian 09
> **09 Lainnya**
> Bagian ini menyediakan ruang untuk informasi-informasi PPID lainnya yang diperlukan oleh publik. Saat ini konten sedang dalam penyiapan. Informasi terkait layanan, prosedur, atau dokumen PPID BPPK lainnya akan ditambahkan di sini seiring dengan ketersediaan dan kebutuhan penyampaian informasi publik.

## Hasil yang diharapkan
- Sidebar dan navigasi chip menampilkan 9 bagian termasuk "09 Lainnya".
- Bagian 08 hanya menampilkan 5 gambar statistik tanpa tabel/bagan tambahan.
- Bagian 09 muncul sebagai section kosong dengan pesan informatif.