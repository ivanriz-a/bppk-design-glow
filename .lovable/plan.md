# Halaman Publikasi

Buat satu halaman `/publikasi` sebagai katalog terpadu untuk semua jenis publikasi BPPK, dengan popup preview flipbook seperti di Jejak Karya.

## Struktur halaman

1. **SiteNavbar** + hero pendek bergaya `/profil` & `/jejak-karya` (judul "Publikasi", breadcrumb Beranda / Publikasi, eyebrow "PUSTAKA BPPK").
2. **Tab utama** (gaya sama dengan tab berita di homepage — pill/underline aksen kuning): `Penelitian` · `Majalah` · `Buku` · `Laporan`.
3. Saat tab **Penelitian** aktif, muncul **sub-tab** di bawahnya: `Jurnal` · `Prosiding Kajian Akademis` · `SNKN`.
4. **Grid katalog** 3 kolom (responsif 1/2/3) berisi card publikasi.
5. **SiteFooter**.

## Card publikasi (gaya sama dengan card berita)

- Cover (aspek 3:4) dengan area putih kecil di sekelilingnya pada state default → zoom & full pada hover (samakan animasi `::before` overlay seperti card berita).
- Bawah cover: **Judul** (bold), **Subjudul/edisi** (kecil abu), CTA link "Selengkapnya ›".
- Klik card mana pun (cover, judul, CTA) → membuka popup detail.

## Popup detail (modal / dialog)

Layout dalam popup, dari atas ke bawah:

1. **Flipbook preview** — pakai `react-pageflip` (sudah terpasang) dengan 16 halaman `jejak-p01..p16` sebagai konten dummy untuk semua item. Tombol Sebelumnya/Berikutnya + indikator halaman, konsisten dengan `/jejak-karya`.
2. **Blok detail** di bawah flipbook, 2 kolom:
   - Kiri: cover publikasi (gambar besar).
   - Kanan: Judul, Subjudul/edisi/tahun, Deskripsi (2–4 paragraf), meta kecil (kategori, tahun, ISBN/ISSN jika ada).
3. **CTA** di bawah kolom kanan: tombol utama kuning **"Unduh PDF"** (href `#` placeholder) + tombol ghost **"Tutup"**.

Modal dapat ditutup via tombol X, klik backdrop, atau tombol Esc. Gunakan `Dialog` shadcn yang sudah ada, override style agar cocok dengan tema (dark accents, kuning aksen).

## Data dummy

Buat `src/data/publikasi.ts` dengan tipe:

```ts
type Publikasi = {
  id: string; slug: string;
  category: "penelitian" | "majalah" | "buku" | "laporan";
  subCategory?: "jurnal" | "prosiding" | "snkn";
  title: string; subtitle: string; description: string;
  cover: string; year: number;
  pdfUrl: string; // "#"
};
```

Isi 3–4 item per kategori/sub-kategori (total ~18):
- Jurnal (3), Prosiding (3), SNKN (3), Majalah (4), Buku (4 — salah satunya Jejak Karya asli), Laporan (3).
- Cover pakai asset yang sudah ada: `cover-buku.png`, `cover-jurnal.jpg`, `edukasi-cover.jpg`, `jejak-cover.jpg` (rotasi antar item). Tidak perlu upload asset baru.

## File yang akan dibuat / diubah

- **Baru** `src/data/publikasi.ts` — data + tipe.
- **Baru** `src/routes/publikasi.tsx` — halaman dengan tabs, sub-tabs, grid, dan modal detail (self-contained; flipbook di-lazy-load seperti di `jejak-karya.tsx`).
- **Ubah** `src/styles.css` — tambah kelas untuk tab publikasi, card katalog, dan layout modal (reuse variabel warna/animasi yang sudah ada).
- **Ubah** `src/components/SiteChrome.tsx` — dropdown Publikasi diarahkan ke `/publikasi` (Penelitian → `/publikasi?tab=penelitian`, Majalah → `?tab=majalah`, dst) sehingga item dropdown yang sudah ada menjadi fungsional.
- Route otomatis terdaftar via TanStack file-based routing.

## Detail teknis

- Tab state pakai `useState`, sinkron dengan search param `?tab=` dan `?sub=` supaya link dari navbar bisa langsung membuka tab yang benar.
- Flipbook di-`import()` dinamis (hindari SSR error) — sama pola dengan `jejak-karya.tsx`.
- Modal membungkus flipbook di dalam `Dialog` dengan `max-width` ~ 960px, scroll internal.
- CTA "Unduh PDF" pakai `href="#"` + `download` attribute (placeholder), siap diganti URL asli nanti.
- Metadata `head()`: title "Publikasi — BPPK", deskripsi, og tags (tanpa og:image di root level).

Setelah plan ini disetujui, saya lanjut implementasi.