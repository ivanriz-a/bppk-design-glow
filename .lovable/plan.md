## Tujuan
Membuat halaman baru `/ppid` (Pejabat Pengelola Informasi dan Dokumentasi) dengan gaya visual identik halaman `/profil` — hero gelap, accent kuning, tipografi Poppins — berisi 8 pokok bahasan dari dokumen yang dilampirkan.

## Struktur halaman

```
[ SiteNavbar ]
[ Hero gelap "PPID BPPK" + breadcrumb ]
[ Sticky sidebar kiri (anchor nav) | Konten kanan scroll panjang ]
[ SiteFooter ]
```

Sidebar sticky berisi 8 anchor (mirip TOC), highlight active section saat scroll.

## 8 Pokok bahasan (urutan)

1. **Profil PPID** (`#profil`) — gambaran umum, dasar hukum (UU 14/2008, KMK 300/2025, PMK 110/2022), struktur PPID Tingkat I (pakai gambar dari DOCX), tugas (22 item), wewenang (4 item), jalur/waktu/biaya layanan.
2. **Informasi Berkala** (`#berkala`) — daftar informasi yang wajib diumumkan berkala.
3. **Informasi Serta Merta** (`#serta-merta`) — informasi yang wajib diumumkan serta merta.
4. **Informasi Setiap Saat** (`#setiap-saat`) — informasi yang wajib tersedia setiap saat.
5. **Regulasi** (`#regulasi`) — daftar peraturan & dasar hukum.
6. **Standar Layanan Informasi** (`#standar-layanan`) — SOP, jangka waktu, mekanisme.
7. **Daftar Informasi Publik** (`#dip`) — DIP BPPK.
8. **Statistik** (`#statistik`) — statistik permohonan/layanan informasi.

Konten setiap section di-parse dari 8 file DOCX terlampir; data panjang (daftar dokumen, regulasi, statistik) ditampilkan dalam tabel/list dengan style kartu konsisten `/profil`.

## Visual design
- **Hero**: gradient gelap (`#0b1d36` → `#152a4a`) + accent `#FBBF24`, judul "Pejabat Pengelola Informasi dan Dokumentasi", subjudul, breadcrumb Beranda › Informasi Publik › PPID.
- **Section card**: putih, shadow lembut, padding besar, nomor section biru muda `#7DD3FC` (sama seperti `/profil` setelah revisi terakhir).
- **CTA kontak** di bagian bawah Profil PPID: tombol email `ppidbppk@kemenkeu.go.id`, link `e-ppid.kemenkeu.go.id`, telp 134.
- **Struktur PPID**: extract `img_p1_1.png` dari DOCX 1, upload via `lovable-assets`, tampilkan sebagai gambar full-width dengan caption.

## Navigasi
- Tambahkan link "PPID" di dropdown **Informasi Publik** pada `SiteChrome.tsx`, posisikan paling atas (sesuai struktur sebelumnya: PPID, Laporan/Informasi Publik Lainnya, Peraturan, Berita dan Pengumuman).
- Tambahkan highlight `nav-active` untuk path `/ppid`.

## File yang akan dibuat/diubah

**Baru:**
- `src/routes/ppid.tsx` — halaman utama dengan 8 section + sidebar sticky.
- `src/data/ppid.ts` — konten 8 pokok bahasan (daftar item Berkala/Serta Merta/Setiap Saat/Regulasi/DIP/Statistik).
- `src/assets/ppid-struktur.png.asset.json` — gambar struktur PPID (upload via `lovable-assets`).

**Diubah:**
- `src/components/SiteChrome.tsx` — tambah link PPID di dropdown Informasi Publik + flag isInformasi/isPpid untuk active state.
- `src/styles.css` — tambah style `.ppid-*` (hero, sidebar sticky, section card, tabel daftar informasi). Reuse pola `.profil-*` agar konsisten.

## Catatan teknis
- Sidebar sticky pakai `position: sticky; top: 96px` di kolom kiri dengan grid 2-kolom (240px | 1fr) untuk desktop; di mobile collapse jadi dropdown anchor di atas konten.
- Active-section tracking pakai IntersectionObserver pada setiap `<section id>`.
- Parse 7 DOCX lainnya saat implementasi (build mode) untuk mengisi `src/data/ppid.ts` — saya akan ringkas tabel panjang jadi struktur array `{ no, judul, ringkasan, link? }`.
- Tidak ada dependency baru. Tidak ada perubahan backend.
