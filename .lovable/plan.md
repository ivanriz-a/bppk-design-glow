## Halaman /jejak-karya

Buat route baru `src/routes/jejak-karya.tsx` yang menampilkan preview buku "Jejak, Karya, dan Transformasi BPPK" lengkap dengan flipbook interaktif dan deskripsi.

### Struktur Halaman

1. **Hero / Header**
   - Judul: "Jejak, Karya, dan Transformasi BPPK"
   - Subjudul singkat: "Rumah Belajar Kementerian Keuangan"
   - Breadcrumb / kembali ke beranda

2. **Flipbook Preview**
   - Komponen flipbook interaktif menggunakan library `react-pageflip` (ringan, populer, mendukung mouse/touch)
   - Sumber PDF: link resmi BPPK (`https://bppk.kemenkeu.go.id/.../Buku_Jejak_Karya_dan_Transformasi_BPPK.pdf`)
   - Karena PDF lintas-domain mungkin diblokir CORS untuk render langsung, halaman ini akan menampilkan flipbook dari **gambar cover + halaman teaser** (gambar yang sudah ter-extract dari dokumen sebagai cover) dan menyediakan tombol **"Buka PDF Lengkap"** yang membuka URL PDF di tab baru. Ini realistis tanpa perlu meng-host ulang PDF.
   - Kontrol: tombol Prev/Next, indikator halaman.

3. **Deskripsi Buku** (verbatim sesuai dokumen, dua paragraf)
   - Paragraf 1: tentang Rumah Belajar, transformasi BPPK menjadi Kemenkeu Corpu & leaders factory, adaptasi VUCA, manusia sebagai panglima.
   - Paragraf 2: tentang pembentukan ASN cerdas-etis-berintegritas, Kemenkeu Corpu sebagai DNA budaya, transformasi menuju Indonesia Emas 2045.
   - Penekanan (bold/italic) sesuai dokumen.

4. **CTA** — tombol "Unduh / Baca PDF Lengkap" → URL resmi BPPK.

### File yang dibuat / diubah

- **Baru**: `src/routes/jejak-karya.tsx` — route + komponen halaman, head meta SEO.
- **Baru**: aset gambar cover via `lovable-assets create` dari gambar yang ter-extract dokumen (`page_1.jpg`).
- **Edit**: `src/routes/__root.tsx` — tambah link nav "Jejak Karya" jika ada navigasi utama.
- **Edit**: `src/styles.css` — kelas styling halaman (`.jejak-*`).
- **Dependency**: `bun add react-pageflip`.

### Catatan teknis

- `react-pageflip` adalah komponen client-only; gunakan tanpa SSR khusus (komponen biasa di route file aman karena di-render di client setelah hidrasi; jika muncul masalah `window`, bungkus dengan `useEffect` mount guard atau dynamic import).
- Flipbook menggunakan 2-3 halaman gambar (cover + halaman teaser placeholder yang bertuliskan deskripsi singkat). Jika nanti tersedia gambar halaman lain, tinggal menambahkan ke array.
- Tidak menambah backend.

### Pertanyaan singkat sebelum implementasi

1. Apakah cukup menggunakan **gambar cover + halaman teaser** untuk flipbook (dengan tombol buka PDF lengkap), atau Anda ingin saya mencoba render PDF langsung halaman-per-halaman? (Render PDF langsung butuh pdf.js + bisa lambat & terkadang kena CORS.)
2. Apakah halaman ini perlu ditambahkan ke menu navigasi utama?
