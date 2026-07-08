## Tambah Sub-tab pada kategori Laporan

Menambahkan baris sub-tab di bawah tab utama saat tab **Laporan** aktif, mirip pola sub-tab pada **Penelitian**.

### Sub-tab baru
- Laporan Tahunan
- Laporan Kinerja
- Laporan Keuangan
- Laporan PPID

### Perubahan file

**1. `src/data/publikasi.ts`**
- Tambahkan tipe `LaporanSub = "tahunan" | "kinerja" | "keuangan" | "ppid"`.
- Tambahkan `LAPORAN_SUB_LABEL` mapping ke label di atas.
- Perluas tipe `Publikasi.subCategory` menjadi `PenelitianSub | LaporanSub`.
- Isi `subCategory` pada 3 item laporan yang sudah ada:
  - `l1` Laporan Tahunan BPPK 2024 → `tahunan`
  - `l2` Laporan Tahunan BPPK 2023 → `tahunan`
  - `l3` LAKIN BPPK 2023 → `kinerja`
- Tambahkan 3 item dummy agar tiap sub-tab punya isi:
  - Laporan Keuangan BPPK 2024 (`keuangan`)
  - Laporan Keuangan BPPK 2023 (`keuangan`)
  - Laporan Pelayanan Informasi PPID 2024 (`ppid`)

**2. `src/routes/publikasi.tsx`**
- Import `LaporanSub`, `LAPORAN_SUB_LABEL`.
- Konstanta `LAPORAN_SUB_TABS: LaporanSub[]`.
- State baru `subLaporan` (default `"tahunan"`), disinkronkan dari URL search param `sub` saat `tab === "laporan"` (reuse param `sub` yang sudah ada — value-nya string bebas).
- `validateSearch`: longgarkan tipe `sub` menjadi `string | undefined` supaya menerima nilai laporan.
- Render baris sub-tab kedua (blok `{tab === "laporan" && ...}`) dengan struktur & class yang sama seperti sub-tab penelitian (`section-tabs section-tabs-sub`).
- `useMemo list`: saat `tab === "laporan"`, filter juga berdasarkan `p.subCategory === subLaporan`.

### Catatan
- Tidak ada perubahan styling — memakai class sub-tab yang sudah ada.
- Item dummy laporan memakai cover generik yang sudah dipakai (`pick(...)`), konsisten dengan entri laporan lain.
