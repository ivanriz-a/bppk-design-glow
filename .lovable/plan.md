Perubahan kartu profil pejabat:

1. **Hilangkan baris "Kantor" (unit) dari kartu foto** — hapus elemen `<p className="pejabat-unit">` di dalam `.pejabat-card`.
2. **Ubah gaya jabatan** — pindahkan teks jabatan dari gaya kuning uppercase menjadi gaya kecil hitam seperti gaya unit sebelumnya (`font-size: 0.85rem`, `color: var(--text-gray)`, `font-weight: 500`, tanpa uppercase/letter-spacing).
3. **Ganti warna kuning yang tidak lagi dipakai** — karena jabatan tidak lagi berwarna kuning, hapus atau ubah penggunaan `var(--bppk-yellow)` pada `.pejabat-jabatan`. Jika ada teks kuning lain di kartu yang kurang terbaca, sesuaikan ke warna gelap (misal `var(--bppk-blue)` atau `var(--text-dark)`) agar kontras memadai.

File yang diubah: `src/routes/profil-pejabat.tsx` dan `src/styles.css`.