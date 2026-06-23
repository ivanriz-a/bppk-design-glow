
## Tujuan
Saat tombol **"Informasi Lainnya"** di homepage diklik, user diarahkan ke halaman listing berita lengkap dengan tampilan sesuai mockup yang dilampirkan (hero "Informasi Terbaru", tab kategori, featured article, dan grid Latest articles).

## Halaman yang dibuat

### 1. `/informasi` — Listing berita
Route baru: `src/routes/informasi.tsx`

Struktur (mengikuti mockup + selaras dengan style homepage `/profil`, `/jejak-karya`):
- **Navbar** sama dengan homepage (re-use markup dari `index.tsx`)
- **Hero** bergaya seperti halaman profil — judul **"Informasi Terbaru"** di atas background gedung BPPK + garis aksen gradient ungu/pink
- **Section tabs**: `Berita` (default aktif) · `Pengumuman` · `Artikel` — pill style, warna mengikuti token homepage (navy aktif, outline non-aktif)
- **Featured article card** (split 2 kolom): gambar besar di kiri, judul + excerpt + chip kategori + tanggal di kanan
- **Latest articles**:
  - Header baris: judul "Artikel Terbaru" di kiri, filter kategori (`Active`, `Category`, `Category`, `Category`) di kanan
  - Grid 3 kolom × 2 baris (6 card): gambar, judul, excerpt, chip kategori, tanggal
  - Setiap card mengarah ke `/informasi/$slug`
- **Pagination** sederhana di bawah grid (opsional, ringan)
- **Footer** sama dengan homepage

Data berita di-mock dalam file route (array statis) — konsisten dengan pendekatan `newsData` di `index.tsx`. Tab `Berita/Pengumuman/Artikel` memfilter data tersebut.

### 2. `/informasi/$slug` — Detail berita (struktur dasar)
Route baru: `src/routes/informasi.$slug.tsx`

- Navbar + footer sama
- Hero compact dengan judul berita + tanggal + kategori
- Konten artikel (gambar utama + body text)
- Tombol "Kembali ke Informasi" → `/informasi`

(Halaman detail dibuat sederhana agar link dari listing tidak 404. Bisa diperluas di permintaan berikutnya.)

## Perubahan pada homepage
File: `src/routes/index.tsx`
- Tombol **"Informasi Lainnya"** (line 651) diubah dari `<a href="#">` menjadi `<Link to="/informasi">` dari `@tanstack/react-router`
- Tombol **"Baca Selengkapnya"** pada setiap news card (line 644) diubah menjadi `<Link to="/informasi/$slug" params={{ slug: n.slug }}>` — perlu menambahkan field `slug` pada item `newsData`

## Styling
- Menambahkan blok CSS baru di `src/styles.css` dengan prefix `.info-*` untuk:
  - `.info-hero` (mirip `.profil-hero`)
  - `.info-tabs`, `.info-featured`, `.info-latest-grid`, `.info-card`, `.info-pagination`
- Semua warna memakai token semantik yang sudah ada (`--navy`, `--text-gray`, `--accent`, dst). Tidak ada warna hardcoded.

## Catatan
- Konten berita mock (judul, excerpt, gambar placeholder, tanggal, kategori). Gambar memakai asset yang sudah ada di `src/assets` atau placeholder gradient.
- Tidak menyentuh logic backend — murni frontend/presentasi.
