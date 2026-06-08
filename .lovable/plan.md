## Perubahan Footer (Revisi)

### CSS (`src/styles.css`)
1. **Hapus watermark**: Hapus blok `.footer-watermark` dan `.footer-watermark img` sepenuhnya.
2. **Jarak antar kolom**: Naikkan `gap` di `.footer-container` (layout baru) agar kolom tengah dan kanan tidak terlalu mepet — dari `24px` ke `64px`.
3. **Judul kolom**: Hapus aturan penyembunyian heading; kembalikan gaya `.footer-heading` agar terlihat (kuning, uppercase, tracking lebar). **Kecuali** kolom kanan — `.footer-right-col .footer-heading` tetap disembunyikan.
4. **Brand name**: Ubah `.footer-brand-name` — `font-size: 0.875rem` (14px), `font-weight: 600`.

### JSX (`src/routes/index.tsx`)
1. **Hapus elemen watermark**: Hapus `<div className="footer-watermark">…</div>`.
2. **Judul kolom tengah**: Tambahkan `<h4 className="footer-heading">Jelajahi</h4>` sebelum `<ul className="footer-links">`.
3. **Alamat 2 baris**: Ubah menjadi `<span>Jl. Purnawarman No.99<br />Kebayoran Baru, Jakarta Selatan 12110</span>`.

### Yang TIDAK diubah
- Judul kolom kanan "Terhubung" tetap disembunyikan.
- Struktur 3 kolom, ukuran logo, top accent kuning, bottom bar copyright, warna brand name tetap kuning.
- Isi link navigasi dan ikon sosial media tetap sama.

### File yang disentuh
- `src/routes/index.tsx`
- `src/styles.css`
