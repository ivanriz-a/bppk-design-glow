# Floating Buttons: Aksesibilitas & Kontak

Menambahkan dua floating button yang tampil di seluruh halaman melalui `SiteChrome`.

## 1. Tombol Aksesibilitas (kiri bawah)

Bulat, ikon universal accessibility. Saat diklik membuka panel kecil di atasnya berisi:

- **Ukuran teks**: tombol `A-`, `A`, `A+` — menyetel CSS variable `--a11y-font-scale` di `<html>` (0.9 / 1 / 1.15) yang mengalikan `font-size` root.
- **Kontras tinggi**: toggle class `a11y-high-contrast` di `<html>` — override warna teks/latar via CSS di `styles.css`.
- **Mode grayscale**: toggle class `a11y-grayscale` di `<html>` — `filter: grayscale(100%)` pada `body`.
- **Reset**: hapus semua class & reset scale ke 1.

Preferensi disimpan di `localStorage` (`a11y-prefs`) dan di-apply lewat `useEffect` di komponen (hindari SSR mismatch — baca setelah mount).

## 2. Tombol Kontak (kanan bawah)

Bulat dengan ikon headset/telepon. Saat diklik, memunculkan 3 pilihan yang naik ke atas dengan animasi stagger:

1. **Kemenkeu Prime 134** → `tel:134`
2. **Pengaduan via LAPOR!** → `https://www.lapor.go.id/instansi/kementerian-keuangan`
3. **Pengaduan via WISE** → `https://www.wise.kemenkeu.go.id/`

Setiap item = pill dengan label + ikon kecil, membuka di tab baru (kecuali `tel:`). Klik di luar area menutup menu.

## Struktur file

- **Baru**: `src/components/FloatingAccessibility.tsx` — panel aksesibilitas + logika localStorage.
- **Baru**: `src/components/FloatingContact.tsx` — FAB kontak + menu 3 item.
- **Edit**: `src/components/SiteChrome.tsx` — export komponen baru `SiteFloatingActions` (atau render langsung kedua FAB) dan pasang di layout global. Jika layout global belum me-render `SiteFloatingActions`, tambahkan di `__root.tsx` / route layout yang membungkus semua halaman.
- **Edit**: `src/styles.css` — tambah utilitas class `a11y-high-contrast`, `a11y-grayscale`, dan aturan `:root { font-size: calc(16px * var(--a11y-font-scale, 1)); }`.

## Teknis singkat

- Kedua FAB `position: fixed`, `z-index` tinggi (mis. 60) agar di atas navbar.
- Ukuran 48–56px, warna primer BPPK (biru), shadow lembut.
- `aria-label`, `aria-expanded`, fokus keyboard, ESC untuk menutup menu.
- Tidak menambah dependency baru — ikon pakai inline SVG seperti komponen lain.

Konfirmasi URL LAPOR!/WISE di atas sudah sesuai? Jika ada URL spesifik lain, sebutkan dan saya sesuaikan saat implementasi.
