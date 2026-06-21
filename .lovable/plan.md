## Tujuan
Mengganti placeholder bio pada halaman Profil Pejabat dengan data asli 9 pejabat dari file `3.Profil_Pejabat.docx`. Foto tetap menggunakan satu contoh (Profil-Dhoni.jpg) untuk semua kartu, sesuai keputusan sebelumnya.

## Data yang dimasukkan (9 pejabat)
1. **Dwi Teguh Wibowo** — Plt. Kepala BPPK
2. **Wahyu Kusuma Romadhoni** — Sekretaris BPPK
3. **Heni Kartikawati** — Kepala Pusdiklat Kepemimpinan dan Manajemen
4. **Bhimantara Widyajala** — Kepala Pusdiklat Anggaran dan Perbendaharaan
5. **Edward Hamonangan Sianipar** — Kepala Pusdiklat Pajak
6. **Mochamad Mulyono** — Kepala Pusdiklat Bea dan Cukai
7. **Ganti Lis Ariyadi** — Kepala Pusdiklat Keuangan Publik
8. **Nana Riana** — Kepala Pusat Pembinaan Jabatan Fungsional dan Penjaminan Mutu
9. **Evy Mulyani** — Direktur Politeknik Keuangan Negara STAN

## Perubahan
**`src/routes/profil-pejabat.tsx`**
- Hapus `placeholderBio` generik.
- Setiap entri pejabat diberi field `bio` (paragraf naratif lengkap dari dokumen, mencakup riwayat pendidikan, perjalanan karier, dan penghargaan), serta `alamatKantor`, `email`, `telepon`, dan link `lhkpn` (placeholder `#`).
- Modal popup ditata ulang menjadi:
  - Header: foto + nama + jabatan + unit
  - Bagian **Biografi** (paragraf-paragraf dari dokumen)
  - Bagian **Alamat Kantor & Kontak** (alamat, email, telepon)
  - Baris **LHKPN** dengan tautan "Unduh di sini"
- Bagian "Pendidikan" dan "Riwayat Jabatan" terpisah dihapus karena dokumen menyajikan informasi tersebut secara naratif di dalam bio (menghindari duplikasi).

**`src/styles.css`**
- Penyesuaian kecil: style `.pejabat-modal-bio p` agar paragraf bio rapi (spacing & line-height), dan `.pejabat-modal-lhkpn` untuk baris tautan LHKPN. Tidak ada perubahan layout besar.

## Tidak diubah
- Foto: tetap memakai `profil-dhoni.jpg` untuk semua kartu (sesuai instruksi sebelumnya).
- Struktur grup (Pimpinan / Kepala Pusdiklat / PKN STAN), styling kartu, animasi modal, interaksi (klik, Esc, scroll lock).
- Tidak ada perubahan rute atau backend.
