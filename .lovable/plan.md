## Perubahan Footer

### CSS (`src/styles.css`)
1. **Watermark utuh**: ubah `.footer-watermark` agar logo tampak penuh — `background-size: contain`, posisi center-right dengan ruang cukup, opacity tipis (±0.06). Pastikan tidak terpotong oleh `overflow: hidden` di `.bppk-footer`; kecilkan ukuran watermark jika perlu.
2. **Radial glow biru muda**: ganti warna radial gradient di `.bppk-footer` ke biru muda (mis. `rgba(125, 200, 255, 0.18)`) di sudut kiri atas.
3. **Brand name kuning**: `.footer-brand-name` warna jadi kuning aksen BPPK.
4. **Sosmed kolom vertikal**: `.footer-socials` jadi `flex-direction: column`, gap konsisten, ikon tetap bulat seperti sekarang.

### JSX (`src/routes/index.tsx`)
1. Hapus `<p class="footer-tagline">…</p>`.
2. Hapus item telepon & email di `.footer-contact`; sisakan hanya alamat.
3. **Kolom tengah "Jelajahi"**: gabung semua link navigasi jadi satu daftar vertikal — Profil BPPK, Kemenkeu Corporate University, Learning Organization, Kemenkeu Learning Center, Knowledge Management System.
4. **Kolom kanan "Terhubung"**: hanya ikon sosial media (Instagram, X, Facebook, YouTube) ditata **satu kolom vertikal** ke bawah. Hapus subcol layanan.

### Yang TIDAK diubah
- Struktur 3 kolom (brand | tengah | kanan), ukuran logo, top accent kuning, bottom bar copyright, dan judul kolom tetap ditiadakan.

### File yang disentuh
- `src/routes/index.tsx`
- `src/styles.css`
