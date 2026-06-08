## Redesign Bagian Literasi — Pola Kartu Majalah (Accordion Hover)

Mengubah tiga kartu di seksi LITERASI (Majalah, Jurnal, Buku) mengikuti mockup yang dilampirkan.

### Perilaku

**Default state (semua 3 kartu rata, ~1fr 1fr 1fr):**
- Background: gambar sampul publikasi dengan filter duotone biru (sesuai `--bppk-blue`), tekstur halftone.
- Konten kiri-atas: tahun ("2026") dalam huruf kecil putih.
- Headline besar putih, dengan satu kata di-highlight kuning (mis. "MAJALAH / **EDUKASI** / KEUANGAN"). Per kartu:
  - Majalah → "MAJALAH **EDUKASI** KEUANGAN"
  - Jurnal → "JURNAL **ILMIAH** BPPK"
  - Buku → "BUKU & **MODUL** BPPK"
- Konten kiri-bawah: label kuning ("Edisi 03" / "Vol. 16 No. 2" / "Seri Kepemimpinan") + judul publikasi 3 baris putih bold.

**Hover state (kartu yang di-hover melebar ~2x, dua lainnya mengempis):**
- Grid berubah jadi accordion: kartu aktif `2.4fr`, lainnya `0.6fr` (transisi ~450ms ease).
- Kartu mengempis: hanya menampilkan headline vertikal singkat (year + 1 kata kuning) tetap terbaca; judul bawah disembunyikan / dipersempit.
- Kartu aktif menampilkan blok kanan:
  - Cover asli publikasi (full color, tanpa duotone) dengan shadow + sedikit float.
  - Di area bawah: label kuning "Edisi 03", judul (tetap), paragraf deskripsi 3-4 baris (sebelumnya disembunyikan).
  - Footer: tombol outline kuning "Baca Selengkapnya" (kiri) + link "Edisi Lainnya →" (kanan).

### Implementasi

**File:** `src/routes/index.tsx`
- Refaktor `.pub-cards-wrapper` jadi grid dengan `gridTemplateColumns` reaktif terhadap kartu yang di-hover (state `hoveredPub: 0 | 1 | 2 | null`). Saat null → `1fr 1fr 1fr`; saat aktif → kolom aktif `2.4fr` dua lainnya `0.6fr`.
- Tiap `.pub-card` ber-handler `onMouseEnter` / `onMouseLeave`, dan kelas `is-active` / `is-collapsed`.
- Struktur kartu baru:
  ```
  <a className="pub-card">
    <div className="pub-card-bg" style={duotone bg image} />
    <div className="pub-card-left">
      <span className="pub-year">2026</span>
      <h3 className="pub-masthead">MAJALAH <span>EDUKASI</span> KEUANGAN</h3>
      <div className="pub-bottom">
        <span className="pub-edisi">Edisi 03</span>
        <p className="pub-headline-title">Nyala Membara Semangat Jaga Keuangan Negara</p>
      </div>
    </div>
    <div className="pub-card-right">  // hanya tampil saat active
      <img className="pub-cover-real" />
      <div className="pub-right-bottom">
        <span className="pub-edisi">Edisi 03</span>
        <h4>Nyala Membara…</h4>
        <p className="pub-desc-full">…</p>
        <div className="pub-cta-row">
          <button className="btn-read">Baca Selengkapnya</button>
          <a className="btn-more">Edisi Lainnya →</a>
        </div>
      </div>
    </div>
  </a>
  ```
- Hapus elemen lama (`sim-cover-img`, `cover-overlay`, `pub-badge`, `pub-content-wrapper`, `sim-cover-text`, `editorial-masthead`, `academic-title`, `book-title`, `pub-info-bottom`) di dalam ketiga kartu.
- Gunakan asset gambar yang sudah diunggah: `user-uploads://Edukasi_Keuangan_82_Page_01.jpg` (cover asli majalah) dan `user-uploads://Halftone_Poster_Photo_Effect.png` (background duotone) — di-mount sebagai `lovable-assets` ke `src/assets/`. Untuk Jurnal & Buku, pakai placeholder cover dari Unsplash yang ada sekarang (atau warna solid + masthead) sampai user beri aset asli.

**File:** `src/styles.css`
- Tambah blok styles baru untuk pola accordion: `.pub-cards-wrapper` jadi `display: grid; grid-template-columns: 1fr 1fr 1fr; transition: grid-template-columns .45s cubic-bezier(.22,.61,.36,1)`.
- Saat wrapper punya class `has-active`, set kolom sesuai index aktif (via inline `gridTemplateColumns`).
- `.pub-card` jadi `aspect-ratio: 3/4` minimum-height, `overflow: hidden`, `position: relative`, border-radius konsisten.
- `.pub-card-bg`: full-cover image dengan `filter: grayscale(1) contrast(1.1)` + overlay biru (`background-blend-mode: multiply`, warna `var(--bppk-blue)`) untuk efek duotone.
- `.pub-card-left`: padding 32px, flex column space-between, z-index 2.
- `.pub-masthead`: font 36-44px, bold, white, line-height tight; `span` di tengah diwarnai `var(--bppk-yellow)`.
- `.pub-card-right`: `opacity: 0; transform: translateX(20px); pointer-events: none`. Saat `.is-active`, `opacity: 1; transform: none; pointer-events: auto` dengan delay 150ms.
- `.pub-cover-real`: max-height 60%, drop-shadow elegant, posisi kanan-atas.
- `.is-collapsed .pub-bottom`: `opacity: 0`. `.is-collapsed .pub-masthead`: ukuran sedikit dikurangi atau di-clamp.
- Tombol `.btn-read`: outline kuning rounded-pill; `.btn-more`: text + arrow dengan underline animation.
- Mobile (`@media max-width: 900px`): grid jadi 1 kolom, semua kartu langsung tampil dalam mode "active" (cover + desc + CTA) tanpa accordion.

### Detail visual
- Duotone biru: `var(--bppk-blue)` (#0c2f5a estimasi) + blend multiply; tambah gradient overlay vertikal dari transparent → blue 80% di bawah untuk keterbacaan teks.
- Yellow accent: `var(--bppk-yellow)` (kuning yang sudah dipakai di section eyebrow).
- Border radius: 18-20px konsisten dengan kartu lain di page.
- Transisi konten dalam kartu pakai opacity + translate, durasi 300-400ms.

### Yang tidak diubah
- Header section LITERASI ("Eksplorasi literasi BPPK") tetap.
- Section lain (Hero, News, Footer, dll) tidak disentuh.
- Logika data/state app lain tidak berubah.
