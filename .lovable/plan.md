## Tujuan
Menyesuaikan tampilan default dan hover pada card featured di halaman `/informasi` agar seragam dengan card berita lainnya dan sesuai wireframe yang dilampirkan.

## Yang akan dikerjakan
1. **Default state** — pastikan gambar berada di sisi kiri (~50%) dengan tampilan bersih, teks di sisi kanan dengan background terang.
2. **Hover state** — gambar meluas ke seluruh card dengan overlay gelap (sama seperti `.news-card:hover`), teks dan CTA tetap berada di sisi kanan.
3. **Animasi** — samakan easing dan durasi transisi (`cubic-bezier(0.25, 1, 0.5, 1)`, ~0.55s) agar konsisten dengan card berita lainnya.
4. **Perbaikan layout** — perbaiki posisi teks agar tidak bergeser saat hover dan ukuran card tetap stabil (min-height tetap terjaga).
5. **Responsive** — pastikan tidak ada regresi pada tampilan mobile.

## File yang diedit
- `src/styles.css` — perbaikan rule `.info-featured`, `.info-featured-img`, `.info-featured-overlay`, `.info-featured-body`, serta hover state-nya.
- `src/routes/informasi.tsx` — penyesuaian struktur markup jika diperlukan untuk memastikan animasi bekerja dengan benar.

## Catatan
Tidak ada penambahan dependensi baru. Hanya penyempurnaan CSS/UX yang sudah ada.