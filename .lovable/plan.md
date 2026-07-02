## Halaman Publikasi (`/publikasi`)

Membuat halaman katalog publikasi BPPK dengan gaya konsisten dengan halaman lain (hero gelap, aksen kuning, navbar/footer via `SiteChrome`).

### Struktur halaman

1. **Navbar** (`SiteNavbar`) + tambahkan menu **"Publikasi"** ke dropdown yang sesuai (di `SiteChrome.tsx`).
2. **Hero pendek** — mengikuti pola `/profil` & `/jejak-karya`:
   - Breadcrumb: Beranda / Publikasi
   - Eyebrow: "KATALOG BPPK"
   - Judul: "Publikasi *BPPK*"
   - Sub-teks singkat tentang publikasi Rumah Belajar Kemenkeu.
3. **Toolbar filter + search**:
   - Tab kategori: **Semua · Buku · Jurnal · Majalah · Laporan** (styling sama dengan tab di homepage/`/informasi`).
   - Input search (opsional, filter berdasarkan judul).
   - Dropdown urutan: Terbaru / Judul A–Z.
4. **Grid katalog** — 4 kolom di desktop, 2 di tablet, 1 di mobile.
   - Card: cover publikasi (rasio 3:4), badge kategori (kuning), judul, tahun, tagline pendek.
   - Hover: sedikit lift + border kuning, cover zoom halus (konsisten dengan card berita).
5. **Modal detail** (Radix Dialog) saat card diklik:
   - Kiri: cover besar.
   - Kanan: badge kategori, judul, penulis/penerbit, tahun, sinopsis, meta (halaman, ISSN/ISBN bila ada).
   - CTA utama: **"Baca di KMS"** (link eksternal ke KMS Kemenkeu).
   - CTA sekunder: **"Unduh PDF"** (opsional per item) atau untuk buku yang punya flipbook internal: **"Buka Preview Flipbook"** → link ke `/jejak-karya`.
6. **Footer** (`SiteFooter`).

### Data contoh

File baru `src/data/publikasi.ts` berisi type + 12 item dummy tersebar di 4 kategori:

- **Buku (3)**: *Jejak, Karya, dan Transformasi BPPK* (dengan `internalUrl: "/jejak-karya"`), *Pembelajaran Sepanjang Hayat di Kemenkeu*, *Corporate University Kemenkeu*.
- **Jurnal (3)**: *Jurnal BPPK* Vol. 17 No. 1 / No. 2 (2025), *Jurnal Info Artha*.
- **Majalah (3)**: *Majalah Edukasi Keuangan* Ed. 78, 79, 80.
- **Laporan (3)**: *Laporan Kinerja BPPK 2024*, *Laporan Tahunan BPPK 2024*, *Laporan Reformasi Birokrasi 2024*.

Setiap item: `id, slug, kategori, judul, tahun, penulis/penerbit, sinopsis, cover (pakai asset yang sudah ada — cover-buku, cover-jurnal, edukasi-cover, jejak-cover — sisanya reuse), kmsUrl, downloadUrl?, internalUrl?`.

### File yang dibuat / diubah

- **Buat** `src/data/publikasi.ts` — type + data dummy.
- **Buat** `src/routes/publikasi.tsx` — route baru dengan hero, tab filter, grid, modal detail.
- **Ubah** `src/styles.css` — tambah kelas untuk `.pub-*` (hero-short reuse, card, modal, tab).
- **Ubah** `src/components/SiteChrome.tsx` — tambahkan link "Publikasi" pada dropdown yang relevan (kemungkinan di "Informasi Publik" atau menu utama, disamakan pola).
- **Ubah** `src/routes/__root.tsx` — tidak perlu (metadata di route).

### Head metadata

Title: "Publikasi — BPPK Kementerian Keuangan"
Description: katalog buku, jurnal, majalah, dan laporan BPPK.
og:image: `jejak-cover` (aset publikasi paling representatif).

### Catatan

- Tanpa backend — semua statis di `publikasi.ts`.
- Semua tautan KMS placeholder `https://kms.kemenkeu.go.id/` (bisa diperbarui saat data final tersedia).
- Warna & tipografi mengikuti design system yang sudah ada — tidak menambah token baru.
