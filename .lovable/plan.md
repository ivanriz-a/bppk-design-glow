## Tujuan
Membuat halaman **Profil Lembaga** di route `/profil` dengan tampilan yang konsisten dengan homepage (palet biru-tua + aksen emas, tipografi Amulya/Poppins, gaya editorial dengan bingkai tipis dan kartu-kartu halftone yang sudah dipakai di section literasi & sinergi).

## Struktur Halaman

### 1. Hero — "Foto Gedung BPPK + Judul Besar"
- Full-width image gedung BPPK (overlay gradient gelap dari kiri-bawah ke kanan-atas).
- Breadcrumb tipis di atas: `Beranda / Profil Lembaga`.
- Judul besar dua baris: **"Profil"** lalu *"Lembaga"* (italic display, gaya sama dengan hero homepage).
- Tagline 1 baris: "Mengenal Badan Pendidikan dan Pelatihan Keuangan."
- Eyebrow kecil "TENTANG BPPK" di atas judul (kapital, tracking lebar, warna emas).
- Tinggi ±60vh, tombol scroll-down kecil di tengah-bawah (style sama dgn homepage) menuju section konten.

### 2. Layout Konten — Sticky Sidebar Kiri + Konten Kanan
Grid 2 kolom (≥ lg):
- **Kolom kiri (sticky, top ±100px, lebar ±280px)**
  - Daftar 5 tab sebagai vertical nav:
    1. Sejarah BPPK
    2. Visi dan Misi
    3. Tugas dan Fungsi
    4. Kemenkeu Corpu
    5. Learning Organization
  - Item aktif: garis vertikal emas di kiri + teks bold + nomor besar di kiri (01–05).
  - Item non-aktif: nomor & teks muted, hover memunculkan garis.
  - Smooth scroll ke section saat diklik; aktif otomatis via `IntersectionObserver` saat scroll.
  - Di mobile (<lg): sidebar berubah jadi horizontal scroll chip-tab di atas konten, sticky di bawah header.

- **Kolom kanan (konten)**
  - Tiap section punya `id` (`#sejarah`, `#visi-misi`, dst), padding besar antar section, judul section gaya editorial: nomor besar berwarna outline + label kecil + heading display.

### 3. Section 1 — Sejarah BPPK (Timeline vertikal interaktif)
- Pendahuluan singkat 2–3 paragraf.
- Timeline vertikal: garis tengah dengan node bulat (emas) per milestone, kartu konten bergantian kiri-kanan (di desktop) / semua kanan (di mobile).
- Milestone (contoh, dapat diisi placeholder yang masuk akal):
  - 1975 — Cikal bakal Pusdiklat Keuangan
  - 1995 — Pembentukan BPPK
  - 2007 — Reformasi birokrasi & transformasi diklat
  - 2015 — Kemenkeu Corporate University dicanangkan
  - 2020 — Digital Learning Center
  - 2025 — Menuju Learning Organization
- Animasi: setiap milestone fade-in + slide-up saat masuk viewport (IntersectionObserver, CSS transition).
- Foto/ilustrasi placeholder di sebagian milestone (gradient block + ikon Lucide-like SVG, konsisten gaya halftone yang sudah ada).

### 4. Section 2 — Visi dan Misi
- Dua kartu besar berdampingan (grid 2 kolom).
- **Kartu Visi**: background gelap (biru tua, sama dgn footer), aksen emas, ikon mata/kompas, satu kalimat visi besar.
- **Kartu Misi**: background terang, list bernomor 1–4, tiap item dengan ikon kecil.
- Di bawahnya: 3 "Nilai" sebagai kartu kecil (Integritas, Profesionalisme, Sinergi, Pelayanan, Kesempurnaan — Kemenkeu Satu) dalam strip horizontal.

### 5. Section 3 — Tugas dan Fungsi
- Paragraf pembuka tentang tugas (dasar hukum: Permenkeu).
- Grid kartu fungsi (2 kolom × 3 baris atau 3×2): tiap kartu berisi nomor besar, judul fungsi singkat, deskripsi.
- Daftar fungsi (placeholder yang masuk akal & dapat diedit):
  1. Perumusan kebijakan pengembangan SDM
  2. Penyelenggaraan pendidikan & pelatihan
  3. Sertifikasi kompetensi
  4. Penjaminan mutu pembelajaran
  5. Pengelolaan pengetahuan
  6. Pembinaan jabatan fungsional
- Style kartu: border tipis, hover mengangkat bayangan, nomor besar outline (gaya yang sama dengan section Sinergi).

### 6. Section 4 — Kemenkeu Corpu (Diagram + Penjelasan)
- Penjelasan: apa itu Kementerian Keuangan Corporate University.
- **Diagram interaktif** (SVG buatan tangan, bukan library):
  - Layout konsentris: lingkaran pusat "Kemenkeu Corpu" (emas), dikelilingi 4 pilar sebagai segmen lingkaran luar:
    - Learning Strategy
    - Knowledge Management
    - Talent Development
    - Performance Excellence
  - Hover/klik segmen → menampilkan deskripsi pilar di panel samping kanan diagram.
  - State default: pilar pertama aktif.
- Di bawah diagram: 4 kartu mini ringkasan pilar (responsive: stack di mobile).

### 7. Section 5 — Learning Organization
- Penjelasan konsep LO (Peter Senge five disciplines, disesuaikan konteks Kemenkeu).
- **Diagram lima disiplin** sebagai 5 hexagon yang saling terhubung (SVG):
  - Personal Mastery
  - Mental Models
  - Shared Vision
  - Team Learning
  - Systems Thinking
- Hexagon aktif dapat di-hover; di samping diagram tampil deskripsi disiplin yang aktif.
- Section penutup: kartu CTA "Bergabung dengan ekosistem pembelajaran BPPK" + tombol (mengarah ke Kemenkeu Learning Center).

### 8. Navbar & Footer
- Pakai navbar & footer yang sama persis dengan homepage (komponen sudah inline di `index.tsx`).
- Navbar item "Profil" ditandai aktif saat di halaman ini.
- Submenu "Profil" di navbar akan link ke `#section-id` yang sesuai (Sejarah → `/profil#sejarah`, dst).

## Detail Teknis

- **File baru**: `src/routes/profil.tsx` (file-based route → `/profil`).
- **CSS**: tambah blok baru di akhir `src/styles.css` dengan prefix `.profil-*` (hero, sticky-nav, timeline, corpu-diagram, lo-diagram). Tidak menyentuh class homepage.
- **Token warna**: pakai variabel CSS yang sudah ada (warna primer biru tua, aksen emas, muted, dll).
- **Tipografi**: Amulya untuk display, Poppins untuk body — sudah di-load di `__root.tsx`.
- **Animasi**: `IntersectionObserver` untuk timeline reveal & scroll-spy sidebar. Tanpa library tambahan.
- **Diagram Corpu & LO**: SVG inline + state React (`useState` untuk pilar aktif), bukan library chart.
- **Mobile**: di <lg, sidebar berubah jadi sticky chip-nav horizontal (scroll-x), tinggi kompak.
- **Aksesibilitas**: heading hierarchy (h1 hero, h2 tiap section, h3 sub), `aria-current` di nav item aktif, fokus visible.
- **SEO**: `head()` route dengan title "Profil Lembaga — BPPK" dan description ringkas; og:title & og:description; tanpa og:image dulu.
- **Submenu navbar homepage**: link "Profil" sub-item diarahkan ke `/profil#<anchor>`. Update sub-menu profil di `src/routes/index.tsx` agar link sinkron.

## Yang Tidak Termasuk (sengaja diluar scope)
- Belum ada CMS / data dinamis — semua teks placeholder yang masuk akal, mudah diedit nanti.
- Tidak menambahkan foto gedung BPPK asli (akan pakai gambar hero existing sebagai placeholder; bisa diganti via upload asset di iterasi berikutnya).
- Tidak menyentuh tampilan homepage selain link submenu Profil.

## Susunan File yang Akan Diubah
- **Baru**: `src/routes/profil.tsx`
- **Edit**: `src/styles.css` (tambah blok `.profil-*` di akhir)
- **Edit kecil**: `src/routes/index.tsx` (link submenu Profil di navbar)
