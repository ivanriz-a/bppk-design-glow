## Tujuan

Menyamakan tiga bagian halaman `/profil` (Sejarah BPPK, Visi dan Misi, Tugas dan Fungsi) dengan isi dokumen `1.Profil_Lembaga.docx` secara **verbatim** (kata demi kata, termasuk typo dokumen). Bagian Kemenkeu Corpu dan Learning Organization tidak diubah (tetap sebagai konten dami).

## File yang disentuh

- `src/routes/profil.tsx` — satu-satunya file yang perlu diedit.
- `src/styles.css` — hanya jika butuh tweak kecil untuk subjudul/list baru di Sejarah (kemungkinan tidak perlu).

## 1. Sejarah BPPK — restrukturisasi penuh

Hapus pendekatan "timeline 7 milestone" yang ada saat ini, ganti dengan struktur naratif berbasis sub-bab seperti dokumen, tetap memanfaatkan komponen timeline yang sudah ada untuk daftar tahun/peristiwa di dalamnya.

Struktur baru bagian Sejarah:

1. Paragraf pembuka (verbatim):
   "Badan Pendidikan dan Pelatihan Keuangan merupakan salah satu unit Eselon I yang berada di bawah Kementerian Keuangan yang memiliki tugas menyelenggarakan pendidikan, pelatihan, dan sertifikasi kompetensi di bidang keuangan negara sesuai dengan ketentuan peraturan perundang-undangan."

2. Sub-bab **Pendidikan Pada Masa Sebelum BPLK** — paragraf 1949 verbatim, lalu daftar 4 akademi (1952, 1952, 1956, 1960), lalu paragraf STIKN (1959), lalu paragraf IIK (1968).

3. Sub-bab **Lahirnya Badan Pendidikan dan Latihan Keuangan (BPLK)** — paragraf 1974 (Ali Wardhana), peresmian 16 April 1975 (Mulyatno Sindhudarmoko), daftar 1 Sekretariat + 7 Pusdiklat awal, paragraf Pusdiklat Pegawai Magelang 1984 + Balai Diklat 1987, paragraf 1989 (KTLN/PB PSDM), paragraf 1990–1991 (Balai Program Diploma & STAN, STIKA), perubahan 1991 (daftar 6 unit), perubahan 1997 (daftar 6 unit), catatan STAN Pasal 164/156.

4. Sub-bab **Terbentuknya Badan Pendidikan dan Pelatihan Keuangan (BPPK)** — paragraf 2001 (KMK 2/KMK.01/2001), kalimat ringkasan perubahan 2006/2008/2010/2014/2015/2018/2021/2023, paragraf PMK 135/2023 + daftar 1 Sekretariat / 5 Pusdiklat / 1 Pusat Pembinaan (7 unit), paragraf PKN STAN (PMK 160/PMK.01/2020), paragraf PMK 79/PMK.01/2022 + daftar 11 BDK + catatan BDPim Magelang, paragraf penutup PMK 135/2023 tentang BDPim tidak lagi UPT.

Komponen visual: pertahankan satu timeline ringkas berisi tahun-tahun kunci (1952, 1959, 1968, 1975, 1987, 2001, 2023) di awal sub-bab pertama atau setelah paragraf pembuka untuk gaya visual; isi naratif tetap verbatim di bawahnya. Atau: hapus timeline visual dan tampilkan murni naratif berdasarkan sub-bab dokumen. **Default rekomendasi: pertahankan timeline ringkas di atas, lalu tampilkan naratif sub-bab verbatim di bawahnya** sehingga halaman tetap kaya visual sesuai desain saat ini.

## 2. Visi dan Misi — verbatim

- Paragraf pembuka di bawah judul (verbatim):
  "Di tahun 2025-2029, BPPK memiliki visi 'Menjadi Knowledge Institution berbasis teknologi digital untuk menghasilkan SDM Pengelola Keuangan Negara yang agile dan berintegritas dalam rangka mendukung visi Kementerian Keuangan.' Visi tersebut menunjukkan komitmen yang ingin dicapai oleh BPPK dalam memberikan layanan kepada pemangku kepentingan dengan memaksimalkan potensi yang ada."
- Kartu VISI: kalimat visi verbatim (tidak diubah, sudah sesuai).
- Kartu MISI: 6 misi verbatim **dengan typo asli dokumen**:
  1. "Mewujudkan ectorion bereputasi unggul dan bertaraf internasional serta pengelolaan tugas belajar yang efektif dan tepat sasaran."
  2. "Menyelenggarakan program pembelajaran yang berdampak dalam Kerangka Kementerian Keuangan Corporate University."
  3. "Mewujudkan sertifikasi kompetensi di bidang keuangan negara dan ector keuangan, serta akreditasi program pembelajaran di bidang keuangan negara yang andal."
  4. "Mewujudkan pengelolaan jabatan fungsional di bidang keuangan negara melalui pembinaan jabatan fungsional yang ectorional dan adaptif."
  5. "Memperkuat penelitian di bidang keuangan negara dan ector keuanngan yang didukung manajemen pengetahuan."
  6. "Mewujudkan pengelolaan sumber daya organisasi yang andal dan adaptif untuk mendukung kinerja BPPK yang unggul."
- Bagian "Nilai-nilai Kemenkeu Satu" → **dihapus** (tidak ada di dokumen, dan user minta hanya ketiga bagian yang ada di dokumen yang disesuaikan; nilai-nilai bukan dami yang diminta dipertahankan).

## 3. Tugas dan Fungsi — verbatim

- Paragraf pembuka (verbatim): "BPPK mempunyai tugas menyelenggarakan pendidikan, pelatihan, dan sertifikasi kompetensi di bidang keuangan negara sesuai dengan ketentuan peraturan perundang-undangan. Dalam melaksanakan tugas tersebut BPPK menyelenggarakan fungsi:"
- 6 fungsi sebagai daftar bernomor verbatim (huruf kecil di awal seperti dokumen, diakhiri titik koma / titik seperti dokumen). Hapus judul kartu pendek ("Penyusunan Kebijakan Teknis", dst.) — dokumen tidak memberi judul, hanya kalimat panjang. Tampilan: ganti grid kartu menjadi daftar bernomor agar verbatim.
- Kalimat penghubung verbatim: "Tugas dan fungsi BPPK dilaksanakan oleh Unit Pusat maupun Unit Pelaksana Teknis di daerah sesuai dengan:"
- 4 dasar hukum verbatim, persis kalimat panjang dokumen (termasuk pengulangan "Nomor Nomor" pada item 1 dan 3 sesuai dokumen).

## 4. Bagian yang TIDAK diubah

- Section Kemenkeu Corpu (#corpu) — biarkan apa adanya.
- Section Learning Organization (#learning-org) — biarkan apa adanya.
- Sidebar daftar bagian, navbar, hero, footer — tidak berubah.

## Detail teknis

- Edit konstanta `milestones`, `misi`, `fungsi`, `dasarHukum` di bagian atas `src/routes/profil.tsx`.
- Tambah konstanta baru untuk daftar di Sejarah: `pusdiklatAwal` (7 item), `bplk1991` (6 item), `bplk1997` (6 item), `bppk2023` (7 item), `bdkList` (11 item).
- Restrukturisasi JSX section `#sejarah`: tambahkan 3 sub-judul (`<h3 class="profil-subhead">`) dan paragraf-paragraf verbatim. Reuse class CSS yang ada (`profil-section-intro`, `profil-vm-list` untuk daftar bernomor) sebisa mungkin agar tidak perlu CSS baru.
- Restrukturisasi JSX section `#tugas-fungsi`: ganti `profil-fungsi-grid` (kartu) menjadi `<ol className="profil-vm-list">` agar konten verbatim tampil sebagai daftar bernomor. Hapus konstanta `t` (judul) pada `fungsi` — cukup string panjang.
- Hapus blok "Nilai-nilai Kemenkeu Satu" beserta konstanta `nilai` di `#visi-misi`.
- Tidak menambah/menghapus dependensi.

## QA

Setelah perubahan, jalankan dev server (sudah running) lalu cek visual halaman `/profil` pada section Sejarah, Visi-Misi, Tugas-Fungsi via screenshot Playwright untuk memastikan tata letak masih rapi dengan teks panjang.
