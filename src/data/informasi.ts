export type InfoCategory = "Berita" | "Pengumuman" | "Artikel";

export type InfoItem = {
  slug: string;
  category: InfoCategory;
  tag: string;
  title: string;
  excerpt: string;
  date: string;
  dateISO: string;
  img: string;
  body: string[];
  author?: string;
  readingTime?: string;
  location?: string;
  tags?: string[];
  quote?: string;
  gallery?: { src: string; caption?: string }[];
};

export const infoCategories: InfoCategory[] = ["Berita", "Pengumuman", "Artikel"];

// Konten disesuaikan dari https://bppk.kemenkeu.go.id/{berita,pengumuman,artikel}
export const infoItems: InfoItem[] = [
  // ============== BERITA ==============
  {
    slug: "tahun-2026-diawali-ikm-sangat-memuaskan",
    category: "Berita",
    tag: "Layanan",
    title: "Tahun 2026 diawali dengan Hasil IKM Sangat Memuaskan",
    excerpt:
      "BPPK membuka tahun 2026 dengan capaian Indeks Kepuasan Masyarakat pada kategori sangat memuaskan sebagai tolok ukur kualitas layanan publik.",
    date: "15 Mei 2026",
    dateISO: "2026-05-15",
    img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Badan Pendidikan dan Pelatihan Keuangan mengawali tahun 2026 dengan capaian Indeks Kepuasan Masyarakat (IKM) yang berada pada kategori sangat memuaskan. Hasil ini merupakan gambaran nyata atas komitmen BPPK dalam memberikan layanan pengembangan kompetensi yang prima bagi seluruh pemangku kepentingan.",
      "Hasil pengukuran IKM diperoleh melalui survei berkala kepada peserta pelatihan, pengguna layanan sertifikasi, serta mitra kerja sama. Aspek yang dinilai mencakup kecepatan layanan, kejelasan informasi, kompetensi petugas, dan kesesuaian standar pelayanan.",
      "Kepala BPPK menegaskan bahwa capaian ini bukan titik akhir, melainkan pemicu untuk terus meningkatkan mutu layanan. Ke depan, BPPK akan memperluas kanal umpan balik digital dan mempercepat siklus perbaikan berdasarkan aspirasi masyarakat.",
    ],
    author: "Redaksi BPPK",
    location: "Jakarta",
    tags: ["Layanan Publik", "IKM", "BPPK"],
  },
  {
    slug: "audiensi-lan-pengukuran-dampak-corpu",
    category: "Berita",
    tag: "Koordinasi",
    title: "Pengukuran Dampak Corporate University Jadi Fokus Audiensi LAN di BPPK",
    excerpt:
      "Lembaga Administrasi Negara dan BPPK membahas kerangka pengukuran dampak pembelajaran Kemenkeu Corporate University.",
    date: "12 Mei 2026",
    dateISO: "2026-05-12",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Lembaga Administrasi Negara (LAN) melakukan audiensi ke BPPK dengan fokus pembahasan pada metodologi pengukuran dampak Kemenkeu Corporate University terhadap kinerja organisasi.",
      "Kedua belah pihak sepakat menyusun kerangka kerja bersama agar hasil pembelajaran ASN dapat dinilai secara terukur, mulai dari level reaksi peserta hingga dampak terhadap capaian kinerja unit.",
    ],
    author: "Redaksi BPPK",
    location: "Jakarta",
  },
  {
    slug: "penandatanganan-perjanjian-pendanaan-cpfr",
    category: "Berita",
    tag: "Kerja Sama",
    title: "Penandatanganan Perjanjian Pendanaan Riset CPFR",
    excerpt:
      "BPPK menandatangani perjanjian pendanaan riset Collaborative Public Finance Research untuk memperkuat kajian kebijakan fiskal.",
    date: "10 Mei 2026",
    dateISO: "2026-05-10",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Program Collaborative Public Finance Research (CPFR) resmi memasuki tahap pendanaan setelah perjanjian antara BPPK dan mitra riset ditandatangani. Skema ini membuka kolaborasi lintas institusi untuk riset kebijakan fiskal terapan.",
      "Riset yang didanai mencakup isu strategis seperti transfer ke daerah, pajak daerah, dan keberlanjutan fiskal jangka menengah.",
    ],
    author: "Redaksi BPPK",
    location: "Jakarta",
  },
  {
    slug: "bdk-balikpapan-bimtek-sakti-siman-oikn",
    category: "Berita",
    tag: "Pelatihan",
    title: "BDK Balikpapan Gelar Bimbingan Teknis SAKTI dan SIMAN untuk ASN OIKN",
    excerpt:
      "Balai Diklat Keuangan Balikpapan memperkuat tata kelola BMN di Ibu Kota Nusantara melalui bimtek SAKTI dan SIMAN bagi ASN OIKN.",
    date: "08 Mei 2026",
    dateISO: "2026-05-08",
    img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80",
    body: [
      "BDK Balikpapan menyelenggarakan bimbingan teknis penggunaan aplikasi SAKTI dan SIMAN bagi ASN di lingkungan Otorita Ibu Kota Nusantara. Kegiatan ini bertujuan memperkuat tata kelola Barang Milik Negara di kawasan IKN.",
      "Peserta diberikan pemahaman teknis dan simulasi praktis penggunaan aplikasi agar pengelolaan aset negara berjalan tertib, akurat, dan akuntabel.",
    ],
    author: "Tim BDK Balikpapan",
    location: "Balikpapan",
  },
  {
    slug: "pelatihan-penggalian-potensi-pajak-daerah-kaltara",
    category: "Berita",
    tag: "Pelatihan",
    title: "BDK Balikpapan Selenggarakan Pelatihan Penggalian Potensi Pajak Daerah di Kalimantan Utara",
    excerpt:
      "Program pelatihan untuk mendorong optimalisasi PAD melalui identifikasi dan penggalian potensi pajak daerah di Kalimantan Utara.",
    date: "05 Mei 2026",
    dateISO: "2026-05-05",
    img: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&w=1200&q=80",
    body: [
      "BDK Balikpapan bekerja sama dengan pemerintah daerah menyelenggarakan Pelatihan Penggalian Potensi Pajak Daerah di Kalimantan Utara. Pelatihan ini menyasar aparatur pengelola pendapatan asli daerah.",
      "Materi pelatihan meliputi pemetaan objek pajak, teknik analisis potensi, serta strategi peningkatan kepatuhan wajib pajak daerah.",
    ],
    author: "Tim BDK Balikpapan",
    location: "Tarakan",
  },
  {
    slug: "kuliah-umum-cpfr-feb-udayana",
    category: "Berita",
    tag: "Akademik",
    title: "Kuliah Umum Kolaborasi CPFR dengan FEB Universitas Udayana",
    excerpt:
      "BPPK menggelar kuliah umum bersama FEB Universitas Udayana sebagai bagian dari kolaborasi program CPFR.",
    date: "03 Mei 2026",
    dateISO: "2026-05-03",
    img: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Kuliah umum kolaborasi CPFR bersama Fakultas Ekonomi dan Bisnis Universitas Udayana menghadirkan pembicara dari BPPK dan akademisi untuk membahas isu keuangan publik terkini.",
      "Kegiatan ini menjadi ruang bertukar gagasan antara akademisi, praktisi kebijakan, dan mahasiswa mengenai arah keuangan negara.",
    ],
    author: "Redaksi BPPK",
    location: "Denpasar",
  },
  {
    slug: "pencegahan-penanganan-kekerasan-seksual-kemenkeu",
    category: "Berita",
    tag: "Sosialisasi",
    title: "Pencegahan dan Penanganan Kekerasan Seksual di Lingkungan Kerja Kementerian Keuangan",
    excerpt:
      "BPPK menegaskan komitmen menciptakan lingkungan kerja aman melalui sosialisasi pencegahan dan penanganan kekerasan seksual.",
    date: "01 Mei 2026",
    dateISO: "2026-05-01",
    img: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Sosialisasi pencegahan dan penanganan kekerasan seksual di lingkungan kerja diselenggarakan untuk memperkuat kesadaran seluruh pegawai. BPPK menegaskan tidak ada toleransi bagi tindakan kekerasan seksual di lingkungan kerja.",
      "Peserta dibekali pemahaman regulasi, mekanisme pelaporan, dan langkah perlindungan bagi korban.",
    ],
    author: "Redaksi BPPK",
    location: "Jakarta",
  },
  {
    slug: "pencanangan-zi-wbk-pusdiklat-kp",
    category: "Berita",
    tag: "Integritas",
    title: "Pencanangan ZI WBK Pusdiklat KP: Inklusif dalam Sinergi, Berintegritas dalam Aksi",
    excerpt:
      "Pusdiklat Keuangan Publik mencanangkan Zona Integritas menuju Wilayah Bebas dari Korupsi dengan semangat sinergi dan integritas.",
    date: "28 April 2026",
    dateISO: "2026-04-28",
    img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Pusdiklat Keuangan Publik secara resmi mencanangkan pembangunan Zona Integritas menuju Wilayah Bebas dari Korupsi (WBK). Kegiatan diawali dengan penandatanganan pakta integritas oleh seluruh pegawai.",
      "Slogan “Inklusif dalam sinergi, berintegritas dalam aksi” dipilih untuk menegaskan komitmen pelayanan yang bersih dan kolaboratif.",
    ],
    author: "Tim Pusdiklat KP",
    location: "Jakarta",
  },
  {
    slug: "pelatihan-pemeriksa-pajak-daerah-kalsel",
    category: "Berita",
    tag: "Pelatihan",
    title: "BDK Balikpapan Hadirkan Pelatihan Pemeriksa Pajak Daerah di Kalimantan Selatan",
    excerpt:
      "Program unggulan mendorong akuntabilitas pajak daerah melalui pelatihan pemeriksa pajak bagi aparatur di Kalsel.",
    date: "25 April 2026",
    dateISO: "2026-04-25",
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    body: [
      "BDK Balikpapan menyelenggarakan pelatihan pemeriksa pajak daerah untuk memperkuat kompetensi aparatur pemeriksa di lingkungan pemerintah daerah Kalimantan Selatan.",
      "Kurikulum meliputi teknik pemeriksaan, standar audit pajak daerah, hingga tata cara penyusunan laporan hasil pemeriksaan.",
    ],
    author: "Tim BDK Balikpapan",
    location: "Banjarmasin",
  },
  {
    slug: "senada-kemenkeu-goes-to-campus-umi",
    category: "Berita",
    tag: "Kerja Sama",
    title: "SENADA-Kemenkeu Satu Goes to Campus UMI: Edukasi Manajemen Aset dan Penandatanganan PKS",
    excerpt:
      "Kolaborasi edukasi manajemen aset bersama praktisi disertai penandatanganan perjanjian kerja sama strategis di UMI.",
    date: "22 April 2026",
    dateISO: "2026-04-22",
    img: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Program SENADA-Kemenkeu Satu Goes to Campus hadir di Universitas Muslim Indonesia. Kegiatan menggabungkan kuliah publik oleh praktisi manajemen aset dengan penandatanganan perjanjian kerja sama strategis.",
      "Kolaborasi ini mendekatkan mahasiswa dengan praktik pengelolaan keuangan negara dan membuka ruang riset serta magang.",
    ],
    author: "Redaksi BPPK",
    location: "Makassar",
  },
  {
    slug: "tof-fasilitator-laporan-keuangan-sppg-bdk-makassar",
    category: "Berita",
    tag: "Pelatihan",
    title: "BDK Makassar Siapkan Fasilitator Laporan Keuangan SPPG Lewat ToF",
    excerpt:
      "Training of Facilitator laporan keuangan SPPG menjadi bagian dari program peningkatan kompetensi SPPG di BDK Makassar.",
    date: "20 April 2026",
    dateISO: "2026-04-20",
    img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1200&q=80",
    body: [
      "BDK Makassar menyelenggarakan Training of Facilitator (ToF) untuk mencetak fasilitator laporan keuangan Satuan Pelayanan Pemenuhan Gizi (SPPG).",
      "Program ini merupakan bagian dari rangkaian peningkatan kompetensi SPPG agar pengelolaan keuangan lebih akuntabel.",
    ],
    author: "Tim BDK Makassar",
    location: "Makassar",
  },
  {
    slug: "kunjungan-feb-uhamka-learning-at-company",
    category: "Berita",
    tag: "Kunjungan",
    title: "BPPK Terima Kunjungan FEB UHAMKA Melalui Learning at Company",
    excerpt:
      "Mahasiswa FEB UHAMKA mengikuti kegiatan Learning at Company di BPPK untuk mengenal praktik pengembangan kompetensi ASN.",
    date: "18 April 2026",
    dateISO: "2026-04-18",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    body: [
      "BPPK menerima kunjungan mahasiswa Fakultas Ekonomi dan Bisnis UHAMKA melalui program Learning at Company. Peserta memperoleh gambaran nyata tentang tata kelola pembelajaran ASN Kementerian Keuangan.",
      "Sesi diskusi diakhiri dengan tur fasilitas pembelajaran di kampus BPPK.",
    ],
    author: "Redaksi BPPK",
    location: "Jakarta",
  },
  {
    slug: "puncak-kemenkeu-learning-festival-2026",
    category: "Berita",
    tag: "Peluncuran",
    title: "Puncak Kemenkeu Learning Festival 2026: SDM Unggul untuk Fiskal Berkelanjutan",
    excerpt:
      "Puncak Kemenkeu Learning Festival 2026 menegaskan peran SDM keuangan negara yang unggul dalam mewujudkan fiskal berkelanjutan.",
    date: "15 April 2026",
    dateISO: "2026-04-15",
    img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Puncak Kemenkeu Learning Festival 2026 menghadirkan berbagai sesi pembelajaran, showcase inovasi pembelajaran, hingga penganugerahan penghargaan pembelajaran organisasi.",
      "Tema besar tahun ini menekankan keterhubungan antara kualitas SDM keuangan negara dengan keberlanjutan fiskal jangka panjang.",
    ],
    author: "Redaksi BPPK",
    location: "Jakarta",
  },

  // ============== PENGUMUMAN ==============
  {
    slug: "laporan-ikm-sekretariat-bppk-tw2-2026",
    category: "Pengumuman",
    tag: "Laporan",
    title: "Laporan Pelaksanaan Survei Kepuasan Masyarakat Sekretariat BPPK Triwulan II Tahun 2026",
    excerpt:
      "Publikasi hasil Survei Kepuasan Masyarakat atas layanan Sekretariat BPPK pada Triwulan II Tahun 2026.",
    date: "20 Mei 2026",
    dateISO: "2026-05-20",
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Sekretariat BPPK menerbitkan laporan pelaksanaan Survei Kepuasan Masyarakat (SKM) Triwulan II Tahun 2026. Laporan memuat capaian indeks, catatan perbaikan, dan rencana tindak lanjut.",
      "Dokumen lengkap dapat diakses melalui kanal resmi BPPK untuk memastikan transparansi layanan kepada publik.",
    ],
    author: "Sekretariat BPPK",
    location: "Jakarta",
  },
  {
    slug: "pengumuman-pendaftaran-uskp-periode-ii-2026",
    category: "Pengumuman",
    tag: "Sertifikasi",
    title: "Pendaftaran Ujian Sertifikasi Konsultan Pajak Periode II Tahun 2026 (Tingkat A, B, dan C)",
    excerpt:
      "Pengumuman pendaftaran USKP Periode II Tahun 2026 untuk Tingkat A, Tingkat B, dan Tingkat C.",
    date: "18 Mei 2026",
    dateISO: "2026-05-18",
    img: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Panitia Penyelenggara Sertifikasi Konsultan Pajak (P3SKP) membuka pendaftaran Ujian Sertifikasi Konsultan Pajak (USKP) Periode II Tahun 2026 untuk Tingkat A, Tingkat B, dan Tingkat C.",
      "Calon peserta wajib memperhatikan persyaratan administratif, jadwal, serta mekanisme pendaftaran yang diumumkan pada laman resmi.",
    ],
    author: "P3SKP",
    location: "Jakarta",
  },
  {
    slug: "surat-pernyataan-peserta-uskp-periode-ii-2026",
    category: "Pengumuman",
    tag: "Sertifikasi",
    title: "Surat Pernyataan Peserta USKP Periode II 2026",
    excerpt:
      "Template surat pernyataan yang wajib dilengkapi oleh peserta Ujian Sertifikasi Konsultan Pajak Periode II Tahun 2026.",
    date: "14 Mei 2026",
    dateISO: "2026-05-14",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Peserta USKP Periode II 2026 diwajibkan mengisi dan menandatangani surat pernyataan sesuai format yang disediakan panitia.",
      "Dokumen disampaikan bersamaan dengan berkas pendaftaran melalui kanal yang telah ditentukan.",
    ],
    author: "P3SKP",
    location: "Jakarta",
  },
  {
    slug: "moto-maklumat-pelayanan-sekretariat-bppk",
    category: "Pengumuman",
    tag: "Layanan",
    title: "Moto dan Maklumat Pelayanan Sekretariat Badan Pendidikan dan Pelatihan Keuangan",
    excerpt:
      "Sekretariat BPPK menerbitkan moto dan maklumat pelayanan sebagai komitmen mutu layanan kepada publik.",
    date: "11 Mei 2026",
    dateISO: "2026-05-11",
    img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Sekretariat BPPK menetapkan moto dan maklumat pelayanan untuk memberikan jaminan mutu layanan yang cepat, transparan, dan akuntabel.",
      "Maklumat berlaku sebagai standar yang dapat dievaluasi dan diukur oleh publik.",
    ],
    author: "Sekretariat BPPK",
    location: "Jakarta",
  },
  {
    slug: "15-asn-terpilih-jadi-dosen-pkn-stan",
    category: "Pengumuman",
    tag: "Rekrutmen",
    title: "15 ASN Kemenkeu Terpilih Siap Bergabung sebagai Dosen PKN STAN",
    excerpt:
      "Pengumuman ASN Kementerian Keuangan yang terpilih melalui seleksi terbuka untuk bergabung sebagai dosen PKN STAN.",
    date: "08 Mei 2026",
    dateISO: "2026-05-08",
    img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Sebanyak 15 ASN Kementerian Keuangan dinyatakan lolos dan siap bergabung sebagai dosen Politeknik Keuangan Negara STAN untuk memperkuat proses pembelajaran akademik.",
      "Penetapan dilakukan melalui proses seleksi terbuka yang mempertimbangkan aspek kompetensi akademik dan integritas.",
    ],
    author: "Redaksi BPPK",
    location: "Tangerang Selatan",
  },
  {
    slug: "penerbitan-sertifikat-konsultan-pajak-periode-i-2026",
    category: "Pengumuman",
    tag: "Sertifikasi",
    title: "Penerbitan Sertifikat Konsultan Pajak Periode I Tahun 2026 (Tingkat A, B, dan C)",
    excerpt:
      "Pengumuman penerbitan sertifikat konsultan pajak Periode I Tahun 2026 bagi peserta yang telah dinyatakan lulus.",
    date: "05 Mei 2026",
    dateISO: "2026-05-05",
    img: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=1200&q=80",
    body: [
      "P3SKP menerbitkan sertifikat konsultan pajak Periode I Tahun 2026 bagi peserta USKP yang telah dinyatakan lulus untuk Tingkat A, Tingkat B, dan Tingkat C.",
      "Peserta dapat mengunduh sertifikat melalui portal resmi P3SKP.",
    ],
    author: "P3SKP",
    location: "Jakarta",
  },
  {
    slug: "hasil-uskp-periode-i-2026",
    category: "Pengumuman",
    tag: "Sertifikasi",
    title: "Hasil Ujian Sertifikasi Konsultan Pajak Periode I Tahun 2026 (Tingkat A, B, dan C)",
    excerpt:
      "Publikasi hasil USKP Periode I Tahun 2026 untuk Tingkat A, Tingkat B, dan Tingkat C.",
    date: "02 Mei 2026",
    dateISO: "2026-05-02",
    img: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Hasil ujian USKP Periode I Tahun 2026 diumumkan untuk seluruh peserta Tingkat A, Tingkat B, dan Tingkat C.",
      "Peserta diminta memperhatikan mekanisme sanggah dan tahapan lanjutan sesuai ketentuan.",
    ],
    author: "P3SKP",
    location: "Jakarta",
  },
  {
    slug: "hasil-pjj-teori-ekonomi-makro-tingkat-dasar-ii-2026",
    category: "Pengumuman",
    tag: "Hasil Pelatihan",
    title: "Hasil Pelatihan Jarak Jauh Teori Ekonomi Makro Tingkat Dasar Angkatan II Tahun 2026",
    excerpt:
      "Pengumuman hasil kelulusan Pelatihan Jarak Jauh Teori Ekonomi Makro Tingkat Dasar Angkatan II Tahun 2026.",
    date: "28 April 2026",
    dateISO: "2026-04-28",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Diumumkan hasil kelulusan Pelatihan Jarak Jauh Teori Ekonomi Makro Tingkat Dasar Angkatan II Tahun 2026 beserta rekapitulasi nilai peserta.",
      "Peserta yang dinyatakan lulus akan menerima sertifikat elektronik sesuai jadwal.",
    ],
    author: "Redaksi BPPK",
    location: "Jakarta",
  },
  {
    slug: "hasil-verifikasi-asset-debtor-tracing-2026",
    category: "Pengumuman",
    tag: "Verifikasi",
    title: "Hasil Verifikasi dan Pemanggilan Peserta Pelatihan Asset and Debtor Tracing Tahun 2026",
    excerpt:
      "Daftar peserta yang lolos verifikasi dan dipanggil untuk mengikuti Pelatihan Asset and Debtor Tracing Tahun 2026.",
    date: "25 April 2026",
    dateISO: "2026-04-25",
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Panitia menyampaikan hasil verifikasi berkas dan pemanggilan peserta pelatihan Asset and Debtor Tracing Tahun 2026 untuk dilakukan konfirmasi kehadiran.",
      "Peserta wajib mempersiapkan dokumen pendukung sesuai daftar yang diumumkan.",
    ],
    author: "Redaksi BPPK",
    location: "Jakarta",
  },
  {
    slug: "hasil-pjj-pemanfaatan-bmn-sewa-ksp-2026",
    category: "Pengumuman",
    tag: "Hasil Pelatihan",
    title: "Hasil PJJ Pemanfaatan BMN dalam Bentuk Sewa dan KSP bagi Pengguna Barang Tahun 2026",
    excerpt:
      "Pengumuman hasil kelulusan PJJ Pemanfaatan BMN dalam Bentuk Sewa dan Kerja Sama Pemanfaatan bagi Pengguna Barang Tahun 2026.",
    date: "22 April 2026",
    dateISO: "2026-04-22",
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Diumumkan hasil kelulusan Pelatihan Jarak Jauh Pemanfaatan BMN dalam Bentuk Sewa dan Kerja Sama Pemanfaatan (KSP) bagi Pengguna Barang Tahun 2026.",
      "Peserta yang lulus akan memperoleh sertifikat elektronik sebagai bukti kompetensi.",
    ],
    author: "Redaksi BPPK",
    location: "Jakarta",
  },
  {
    slug: "hasil-pemanfaatan-ai-analisis-data-ii-2026",
    category: "Pengumuman",
    tag: "Hasil Pelatihan",
    title: "Hasil Pelatihan Pemanfaatan Artificial Intelligence dalam Analisis Data Angkatan II Tahun 2026",
    excerpt:
      "Pengumuman kelulusan Pelatihan Pemanfaatan AI dalam Analisis Data Angkatan II Tahun 2026.",
    date: "19 April 2026",
    dateISO: "2026-04-19",
    img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Diumumkan hasil kelulusan Pelatihan Pemanfaatan Artificial Intelligence dalam Analisis Data Angkatan II Tahun 2026.",
      "Peserta didorong menerapkan hasil pembelajaran untuk mendukung pengambilan keputusan berbasis data di unit masing-masing.",
    ],
    author: "Redaksi BPPK",
    location: "Jakarta",
  },
  {
    slug: "hasil-verifikasi-pjj-sql-ii-2026",
    category: "Pengumuman",
    tag: "Verifikasi",
    title: "Hasil Verifikasi Peserta PJJ Pengolahan Data dengan SQL Angkatan II Tahun 2026",
    excerpt:
      "Daftar hasil verifikasi peserta Pelatihan Jarak Jauh Pengolahan Data dengan SQL Angkatan II Tahun 2026 di BDK.",
    date: "16 April 2026",
    dateISO: "2026-04-16",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Diumumkan hasil verifikasi peserta Pelatihan Jarak Jauh Pengolahan Data dengan SQL Angkatan II Tahun Anggaran 2026 di Balai Diklat Keuangan.",
      "Peserta yang lolos verifikasi diminta mempersiapkan perangkat dan bahan sesuai petunjuk teknis.",
    ],
    author: "Redaksi BPPK",
    location: "Jakarta",
  },

  // ============== ARTIKEL ==============
  {
    slug: "jemput-bola-timur-indonesia-pelatihan-daerah",
    category: "Artikel",
    tag: "Opini",
    title: "Jemput Bola ke Timur Indonesia untuk Menyusun Pelatihan yang Dibutuhkan Daerah",
    excerpt:
      "Refleksi upaya BPPK menjangkau daerah di kawasan timur guna menyusun pelatihan yang benar-benar dibutuhkan pemerintah daerah.",
    date: "16 Mei 2026",
    dateISO: "2026-05-16",
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Menyusun program pelatihan yang tepat sasaran menuntut BPPK untuk turun langsung ke daerah, khususnya di kawasan timur Indonesia. Melalui pendekatan jemput bola, kebutuhan pelatihan dipetakan langsung dari pemangku kepentingan daerah.",
      "Pendekatan ini memungkinkan kurikulum pelatihan lebih kontekstual, mempertimbangkan karakteristik fiskal dan tantangan tata kelola di masing-masing daerah.",
    ],
    author: "Tim Kurikulum BPPK",
    location: "Jayapura",
    tags: ["Pelatihan Daerah", "Kurikulum", "Kawasan Timur"],
  },
  {
    slug: "analisis-ketergantungan-apbd-terhadap-tkd",
    category: "Artikel",
    tag: "Kajian",
    title: "Analisis Ketergantungan APBD terhadap Dana Transfer ke Daerah (TKD)",
    excerpt:
      "Kajian atas tingkat ketergantungan APBD terhadap Transfer ke Daerah dan implikasinya pada kemandirian fiskal daerah.",
    date: "13 Mei 2026",
    dateISO: "2026-05-13",
    img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Ketergantungan Anggaran Pendapatan dan Belanja Daerah terhadap Transfer ke Daerah masih menjadi tantangan struktural di banyak provinsi. Rasio TKD terhadap total pendapatan daerah kerap melampaui pendapatan asli daerah.",
      "Artikel ini menyoroti pentingnya penguatan basis PAD melalui optimalisasi pajak dan retribusi daerah, serta reformasi belanja agar lebih produktif.",
    ],
    author: "Peneliti BPPK",
    location: "Jakarta",
  },
  {
    slug: "gita-ketawa-bdk-yogyakarta",
    category: "Artikel",
    tag: "Budaya Kerja",
    title: "GITA KETAWA di Balai Diklat Keuangan Yogyakarta",
    excerpt:
      "Kisah budaya kerja GITA KETAWA di BDK Yogyakarta sebagai upaya membangun lingkungan kerja yang produktif dan positif.",
    date: "09 Mei 2026",
    dateISO: "2026-05-09",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    body: [
      "BDK Yogyakarta memperkenalkan program budaya kerja GITA KETAWA yang menekankan pada kolaborasi, keceriaan, dan integritas dalam keseharian pegawai.",
      "Program ini terbukti memperkuat ikatan tim dan meningkatkan kualitas layanan pelatihan bagi peserta.",
    ],
    author: "Tim BDK Yogyakarta",
    location: "Yogyakarta",
  },
  {
    slug: "sinergi-pusat-daerah-ekonomi-berkualitas",
    category: "Artikel",
    tag: "Kebijakan",
    title: "Perkuat Sinergi Pusat dan Daerah Menuju Ekonomi Berkualitas",
    excerpt:
      "Sinergi pusat dan daerah menjadi kunci untuk mendorong pertumbuhan ekonomi yang inklusif dan berkualitas.",
    date: "06 Mei 2026",
    dateISO: "2026-05-06",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Kualitas pertumbuhan ekonomi ditentukan oleh sejauh mana kebijakan fiskal pusat dan daerah saling melengkapi. Sinergi diperlukan mulai dari perencanaan, pelaksanaan, hingga evaluasi program.",
      "Artikel ini menguraikan sejumlah praktik baik sinergi pusat-daerah yang mendukung terwujudnya ekonomi berkualitas.",
    ],
    author: "Analis Kebijakan BPPK",
    location: "Jakarta",
  },
  {
    slug: "transformasi-pembelajaran-sdm-keuangan-negara",
    category: "Artikel",
    tag: "Opini",
    title: "Transformasi Pembelajaran: Menyiapkan SDM Keuangan Negara yang Adaptif",
    excerpt:
      "Transformasi pembelajaran BPPK diarahkan pada penyiapan SDM keuangan negara yang tangguh dan adaptif terhadap perubahan.",
    date: "03 Mei 2026",
    dateISO: "2026-05-03",
    img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Transformasi pembelajaran menjadi keharusan agar SDM keuangan negara mampu merespons dinamika global. Kurikulum diperbarui, moda pembelajaran diperkaya, dan pengukuran dampak dipertajam.",
      "Artikel ini membahas arah transformasi pembelajaran di Kemenkeu Corporate University.",
    ],
    author: "Pusdiklat PSDM",
    location: "Jakarta",
  },
  {
    slug: "mengelola-perubahan-adkar-layanan-publik",
    category: "Artikel",
    tag: "Manajemen",
    title: "Mengelola Perubahan dengan Model ADKAR dalam Organisasi Layanan Publik",
    excerpt:
      "Menerapkan kerangka ADKAR untuk memandu perubahan organisasi layanan publik secara terstruktur dan berkelanjutan.",
    date: "30 April 2026",
    dateISO: "2026-04-30",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Model ADKAR (Awareness, Desire, Knowledge, Ability, Reinforcement) memberikan kerangka praktis untuk memandu perubahan pada organisasi layanan publik.",
      "Penerapan kerangka ini membantu pimpinan memetakan kesiapan pegawai dan menyusun intervensi yang tepat pada setiap fase perubahan.",
    ],
    author: "Widyaiswara BPPK",
    location: "Jakarta",
  },
  {
    slug: "sinergi-antargenerasi-bdk-makassar",
    category: "Artikel",
    tag: "Budaya Kerja",
    title: "Sinergi Antargenerasi: Membangun Budaya Kerja Harmonis di BDK Makassar",
    excerpt:
      "Membangun budaya kerja yang harmonis dan produktif melalui sinergi antargenerasi di lingkungan BDK Makassar.",
    date: "27 April 2026",
    dateISO: "2026-04-27",
    img: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Keragaman generasi di tempat kerja merupakan aset apabila dikelola dengan tepat. BDK Makassar mendorong sinergi antara pegawai lintas generasi untuk menciptakan budaya kerja yang harmonis.",
      "Pendekatan mentoring dua arah dan ruang dialog terbuka menjadi kunci keberhasilan.",
    ],
    author: "Tim BDK Makassar",
    location: "Makassar",
  },
  {
    slug: "sistem-pengendalian-internal-integritas-kemenkeu",
    category: "Artikel",
    tag: "Integritas",
    title: "Keterkaitan Sistem Pengendalian Internal dan Kerangka Kerja Integritas Kementerian Keuangan",
    excerpt:
      "Menelaah hubungan antara Sistem Pengendalian Internal dan Kerangka Kerja Integritas dalam memperkuat tata kelola Kemenkeu.",
    date: "24 April 2026",
    dateISO: "2026-04-24",
    img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Sistem Pengendalian Internal (SPI) dan Kerangka Kerja Integritas Kementerian Keuangan saling melengkapi dalam mencegah risiko fraud dan menjaga akuntabilitas.",
      "Artikel ini mengurai keterkaitan keduanya dan bagaimana implementasinya di unit kerja.",
    ],
    author: "Widyaiswara BPPK",
    location: "Jakarta",
  },
  {
    slug: "opsen-pajak-kendaraan",
    category: "Artikel",
    tag: "Pajak Daerah",
    title: "Opsen Membuat Pajak Kendaraan Naik? No Way!",
    excerpt:
      "Meluruskan pemahaman tentang skema opsen pajak kendaraan dan dampaknya terhadap beban wajib pajak.",
    date: "21 April 2026",
    dateISO: "2026-04-21",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Kebijakan opsen pajak kendaraan kerap disalahpahami sebagai penambahan beban pajak. Padahal, skema ini merupakan mekanisme bagi hasil antara pemerintah provinsi dan kabupaten/kota.",
      "Artikel ini memberikan penjelasan sederhana agar publik memahami skema opsen secara tepat.",
    ],
    author: "Widyaiswara Pajak BPPK",
    location: "Jakarta",
  },
  {
    slug: "delik-obstruction-of-justice",
    category: "Artikel",
    tag: "Hukum",
    title: "Mengenal Lebih Dalam Delik Obstruction of Justice",
    excerpt:
      "Menyingkap konsep delik obstruction of justice dalam sistem hukum Indonesia serta relevansinya bagi ASN.",
    date: "18 April 2026",
    dateISO: "2026-04-18",
    img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Obstruction of justice merupakan tindakan yang menghalangi proses penegakan hukum. Delik ini penting dipahami untuk menjaga integritas proses hukum.",
      "Artikel ini membahas unsur, contoh kasus, dan implikasi hukum atas delik obstruction of justice.",
    ],
    author: "Widyaiswara Hukum BPPK",
    location: "Jakarta",
  },
  {
    slug: "evaluasi-makan-bergizi-gratis",
    category: "Artikel",
    tag: "Kebijakan",
    title: "Evaluasi atas Pelaksanaan Pemberian Makan Bergizi Gratis",
    excerpt:
      "Kajian awal atas pelaksanaan program Makan Bergizi Gratis dari perspektif tata kelola keuangan negara.",
    date: "15 April 2026",
    dateISO: "2026-04-15",
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Program Makan Bergizi Gratis merupakan salah satu program prioritas nasional. Pelaksanaannya membutuhkan tata kelola keuangan yang akuntabel serta pengawasan yang memadai.",
      "Artikel ini menyampaikan sejumlah catatan evaluasi awal untuk mendukung penyempurnaan pelaksanaan program.",
    ],
    author: "Peneliti BPPK",
    location: "Jakarta",
  },
];

export function getInfoBySlug(slug: string): InfoItem | undefined {
  return infoItems.find((i) => i.slug === slug);
}
