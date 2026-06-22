Saya akan membantu memperbarui halaman **Profil Lembaga** (`/profil`) dengan data dari dokumen `1.Profil_Lembaga.docx` yang Anda unggah. Dokumen tersebut berisi 3 bagian utama: Sejarah, Visi & Misi, dan Tugas & Fungsi.

### Rencana Pembaruan

#### 1. Sejarah BPPK
Saat ini bagian Sejarah menampilkan timeline dengan 6 milestone berisi konten placeholder/generik. Saya akan memperbaruinya dengan timeline berdasarkan dokumen asli, mencakup:
- 1949: Pengakuan kedaulatan dan kebutuhan institusi tinggi di Departemen Keuangan.
- 1952: Akademi Ajun Akuntan Negara & Akademi Ajun Akuntan Pajak.
- 1956: Akademi Pajak dan Pabean.
- 1959: Sekolah Tinggi Ilmu Keuangan Negara (STIKN).
- 1968: Institut Ilmu Keuangan Negara (IIK).
- 1974/1975: Lahirnya BPLK melalui Keppres 44/1974 dan Kep-405/MK/6/4/1975.
- 1984 & 1987: Pembentukan Balai Diklat di Magelang, Medan, Yogyakarta, Ujung Pandang, dan Kediri.
- 1989: Penyerahan program pascasarjana KTLN kepada BPLK.
- 1990–1991: Balai Program Diploma, STAN, dan rencana STIKA; perubahan organisasi BPLK berdasarkan KMK 191/1991.
- 1997: Perubahan organisasi BPLK berdasarkan KMK 100/1997.
- 2001: BPLK berubah nama menjadi BPPK berdasarkan KMK 2/KMK.01/2001.
- 2006–2023: Seri perubahan organisasi dan tata kerja.
- 2023: Susunan BPPK berdasarkan PMK 135 Tahun 2023 dan keterangan UPT/BDK.

Timeline akan tetap mempertahankan visual dan animasi yang sudah ada; hanya konten tahun, judul, dan deskripsi yang diganti.

#### 2. Visi dan Misi
Mengganti konten visi dan misi yang saat ini generik dengan isi persis dari dokumen:
- **Visi 2025–2029**: *“Menjadi Knowledge Institution berbasis teknologi digital untuk menghasilkan SDM Pengelola Keuangan Negara yang agile dan berintegritas dalam rangka mendukung visi Kementerian Keuangan.”*
- **Misi**: 6 butir misi dari dokumen (mewujudkan ectorion bereputasi unggul, program pembelajaran dalam Kerangka Kemenkeu Corporate University, sertifikasi & akreditasi, pembinaan jabatan fungsional, penelitian & manajemen pengetahuan, serta pengelolaan sumber daya organisasi yang andal).

Bagian nilai-nilai Kemenkeu Satu tetap dipertahankan karena tidak bertentangan dengan dokumen.

#### 3. Tugas dan Fungsi
Mengganti teks tugas dan 6 fungsi generik dengan isi dokumen:
- **Tugas**: menyelenggarakan pendidikan, pelatihan, dan sertifikasi kompetensi di bidang keuangan negara sesuai ketentuan peraturan perundang-undangan.
- **Fungsi**: 6 fungsi persis seperti di dokumen, mulai dari penyusunan kebijakan teknis, pelaksanaan pendidikan/pelatihan, pembinaan jabatan fungsional & penjaminan mutu, pemantauan/evaluasi/pelaporan, administrasi BPPK, hingga fungsi lain dari Menteri Keuangan.
- Menambahkan daftar dasar hukum/legal basis di bawah fungsi sesuai dokumen (PMK 160/2020, PMK 118/2021 sebagaimana diubah, PMK 79/2022, PMK 124/2024).

### File yang Diubah
- `src/routes/profil.tsx` — memperbarui array `milestones`, `misi`, `fungsi`, serta teks pendahuluan di bagian Tugas dan Fungsi.

Tidak ada perubahan backend atau penambahan dependensi; hanya update konten statis di halaman frontend.