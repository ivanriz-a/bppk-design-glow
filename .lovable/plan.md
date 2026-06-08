## Tujuan
Mengubah footer dari "biru polos + teks" menjadi area penutup yang berbobot, profesional, dan konsisten dengan gaya web (warna biru tua + aksen kuning, sudut membulat lembut).

## Perubahan visual (CSS – `src/styles.css`)

1. **Background berlapis**
   - Gradient diagonal: biru tua → biru sedikit lebih gelap di pojok kanan bawah.
   - Radial glow lembut warna biru-terang di pojok kiri atas footer.
   - Watermark logo BPPK ukuran besar di sisi kanan, opacity ±0.04, tidak mengganggu keterbacaan.
   - Pattern dot/grid SVG tipis (opacity rendah) sebagai tekstur halus.

2. **Top accent**
   - Garis tipis di atas footer dengan gradient kuning → transparan, lebar penuh, sebagai pemisah tegas dari section di atasnya.

3. **Bottom bar terpisah**
   - Garis pembatas horizontal halus (rgba putih rendah).
   - Baris paling bawah: kiri = "© 2026 Badan Pendidikan dan Pelatihan Keuangan. All rights reserved.", kanan = link kecil "Kebijakan Privasi · Syarat & Ketentuan · Peta Situs".

4. **Detail link & ikon**
   - Ikon kecil (pin, telepon, email) di depan baris kontak.
   - Hover link: warna berubah ke kuning + sedikit geser ke kanan (transform translateX).
   - Ikon sosmed: tambahkan glow tipis saat hover selain efek warna yang sudah ada.

## Perubahan konten (JSX – `src/routes/index.tsx`)

1. **Kolom kiri (brand)**
   - Tagline singkat di bawah "Badan Pendidikan dan Pelatihan Keuangan": *"Mencetak SDM Keuangan Negara yang Unggul"*.
   - Tambah baris kontak singkat di bawah alamat: telepon dan email dengan ikon kecil.

2. **Bottom bar**
   - Tambah baris baru di bawah grid utama berisi copyright + link sekunder.

3. **Ikon kontak**
   - Tambahkan SVG inline kecil untuk pin lokasi, telepon, dan email.

## Yang TIDAK diubah
- Struktur 3 kolom yang sudah disepakati (brand | tautan cepat | layanan+sosmed di kanan).
- Ukuran logo, ukuran teks brand name, dan posisi rapat ke kanan.
- Daftar link yang sudah ada (Profil BPPK, Kemenkeu CorpU, Learning Organization, KLC penuh, KMS penuh).

## File yang akan disentuh
- `src/routes/index.tsx` — tambahkan tagline, kontak berikon, bottom bar.
- `src/styles.css` — background berlapis, top accent, bottom bar, watermark, hover state.
