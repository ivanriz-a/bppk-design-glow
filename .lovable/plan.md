## Perbaikan Bagian Literasi

Tiga masalah yang akan diperbaiki:

### 1. Posisi cover saat hover (kanan dari headline, bukan di bawah)

Saat ini `.pub-card-inner` saat `is-active` masih memakai grid-areas `"top cover" / "text text" / "cta cta"` — tapi cover di kolom `cover` cuma menampilkan dirinya, sementara headline tetap dominan di kolom kiri. Yang tampak: gambar muncul di bawah headline karena `.pc-top` di-collapse jadi 1 kolom.

**Solusi (CSS only)** di `src/styles.css`:
- Ubah layout `.pub-card.is-active .pub-card-inner` jadi 2 kolom utuh tinggi penuh:
  ```
  grid-template-columns: 1.1fr 1fr;
  grid-template-areas:
    "top    cover"
    "text   cover"
    "cta    cover";
  grid-template-rows: auto 1fr auto;
  ```
- `.pc-cover` jadi `grid-area: cover; align-self: stretch; display:flex; align-items:center; justify-content:center;` — gambar tampil di sisi kanan sejajar headline + deskripsi + CTA.
- `.pc-top` cukup punya year + masthead (cover dipisah ke kolomnya sendiri).
- `.pub-cover-real` `max-height: 100%` (bukan kotak kecil) untuk memenuhi sisi kanan.

### 2. Keterbacaan teks pada state default

Saat default, halftone + duotone biru bikin teks putih kurang kontras.

**Solusi** di `src/styles.css`:
- Tambah scrim gradient lebih kuat di `.pub-card-tint`: dari `rgba(5,40,80,0.25)` di atas ke `rgba(5,30,60,0.85)` di bawah, dipadu radial highlight tipis.
- Tambah `text-shadow: 0 2px 12px rgba(0,0,0,.45)` pada `.pub-masthead` dan `.pub-headline-title`.
- Turunkan `opacity` halftone default ke ~0.45 (sekarang 1) agar warna biru solid lebih dominan dan teks lebih jelas. Saat `is-active` tetap rendah supaya cover yang dominan.
- Sedikit naikkan font-weight `.pub-headline-title` ke 700 dan letter-spacing 0.

### 3. Ubah label masthead

Di `src/routes/index.tsx`:
- Item index 1 (Jurnal): `mastheadParts: ["JURNAL", "BPPK", ""]` — render khusus jadi `JURNAL` (putih) lalu `BPPK` (kuning), tanpa baris ketiga. Sederhanakan: ubah render `<h3>` untuk skip part kosong.
- Item index 2 (Buku): `mastheadParts: ["BUKU", "BPPK", ""]` — `BUKU` kuning, `BPPK` putih.

Karena pola highlight sekarang fix di middle part (`<span>` index 1), saya akan ubah struktur data jadi mendukung `{ text, accent }[]`:
```
masthead: [
  { text: "JURNAL" },
  { text: "BPPK", accent: true },
]
```
Lalu render `.map` — yang `accent: true` dibungkus `<span>` kuning. Lebih fleksibel untuk Majalah ("MAJALAH **EDUKASI** KEUANGAN"), Jurnal ("JURNAL **BPPK**"), Buku ("**BUKU** BPPK").

### File yang diubah
- `src/routes/index.tsx` — ubah data `pubItems` (struktur masthead baru) dan render `<h3 className="pub-masthead">`.
- `src/styles.css` — grid layout active baru, scrim & text-shadow untuk keterbacaan, opacity halftone default.

Tidak ada perubahan section lain.