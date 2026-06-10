## Perbaikan kartu Literasi — gambar sejajar headline (rata atas)

Saat ini struktur grid sudah meletakkan `.pc-cover` di kolom kanan (`grid-area: cover`) membentang 3 baris (top/text/cta), tapi:

- `.pc-cover` memakai `align-items: center; justify-content: center;` → gambar di-center vertikal di seluruh tinggi kartu, sehingga **top gambar tidak sejajar dengan headline** (yang menempel di atas via `padding: 36px 32px 8px`).
- Animasi muncul-dari-kanan (`translateX(20px) → 0` dengan delay .1s) sudah ada, tinggal dipertegas.

### Perubahan (CSS only — `src/styles.css`)

1. **`.pc-cover`** (state aktif): ubah alignment jadi rata atas dan rata kanan.
   - `align-items: flex-start;` (semula `center`)
   - `justify-content: flex-end;` (semula `center`) — gambar menempel sisi kanan kartu
   - `padding: 36px 28px 28px 14px;` — samakan padding-top dengan `.pc-top` (36px) agar top gambar sejajar persis dengan baris pertama headline
   - Naikkan jarak masuk: `transform: translateX(40px)` (semula 20px), durasi tetap

2. **`.pub-cover-real`**: batasi tinggi agar tidak overflow ke bawah area cta.
   - `max-height: calc(100% - 8px);`
   - Tambah `align-self: flex-start;` (jaga-jaga jika flex container)

3. **`.pub-card.is-active .pub-card-inner`**: perlebar sedikit kolom kanan supaya gambar punya ruang sejajar dengan headline.
   - `grid-template-columns: 1fr 1.05fr;` (semula `1.1fr 1fr`)
   - `grid-template-rows: auto auto 1fr auto;` → tetap, tapi pastikan baris pertama (`top`) mengunci tinggi headline; baris kedua (`text`) mengikuti

4. **Mobile (`@media max-width: 900px`)**: tidak diubah — gambar tetap di bawah pada layar sempit (perilaku sekarang sudah benar).

### File yang diubah
- `src/styles.css` — tiga blok di atas (`.pc-cover`, `.pub-cover-real`, `.pub-card.is-active .pub-card-inner`).

Tidak ada perubahan JSX/data.
