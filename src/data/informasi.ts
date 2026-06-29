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
};

export const infoCategories: InfoCategory[] = ["Berita", "Pengumuman", "Artikel"];

export const infoItems: InfoItem[] = [
  {
    slug: "pembukaan-pelatihan-teknis-keuangan-publik",
    category: "Berita",
    tag: "Pelatihan",
    title: "Pembukaan Pelatihan Teknis di Lingkungan Keuangan Publik",
    excerpt:
      "Pusdiklat Keuangan Umum menyelenggarakan program strategis peningkatan kapasitas SDM yang diikuti oleh seluruh pegawai.",
    date: "15 Mei 2026",
    dateISO: "2026-05-15",
    img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Pusdiklat Keuangan Umum BPPK secara resmi membuka Pelatihan Teknis di Lingkungan Keuangan Publik yang diikuti oleh perwakilan pegawai dari seluruh unit eselon I Kementerian Keuangan. Program ini dirancang untuk memperkuat kapasitas teknis dalam pengelolaan keuangan negara modern.",
      "Pelatihan berlangsung selama dua minggu dengan metode blended learning, memadukan kelas tatap muka dan modul digital di Kemenkeu Learning Center. Materi mencakup tata kelola anggaran, manajemen risiko, dan pemanfaatan data analitik dalam pengambilan keputusan kebijakan publik.",
      "Kepala BPPK menegaskan bahwa investasi pada pengembangan kompetensi adalah kunci transformasi Kementerian Keuangan menuju organisasi pembelajar yang adaptif terhadap dinamika global.",
    ],
  },
  {
    slug: "rakor-pengembangan-kompetensi-aparatur",
    category: "Berita",
    tag: "Koordinasi",
    title: "Rapat Koordinasi Pengembangan Kompetensi Aparatur",
    excerpt:
      "Memperkuat pengembangan kompetensi SDM melalui rapat koordinasi lintas unit untuk merumuskan kebijakan strategis.",
    date: "12 Mei 2026",
    dateISO: "2026-05-12",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    body: [
      "BPPK menggelar Rapat Koordinasi Pengembangan Kompetensi Aparatur yang dihadiri oleh seluruh kepala pusdiklat dan balai diklat keuangan. Rapat membahas kerangka kerja kompetensi tahun anggaran berikutnya.",
      "Diskusi difokuskan pada penyelarasan kebutuhan organisasi dengan portofolio pembelajaran, serta penguatan ekosistem Kemenkeu Corporate University.",
    ],
  },
  {
    slug: "mou-mitra-akademik",
    category: "Berita",
    tag: "Kerja Sama",
    title: "Penandatanganan MoU dengan Mitra Akademik Terkemuka",
    excerpt:
      "Penguatan kolaborasi antara lembaga pelatihan pemerintah dengan institusi pendidikan tinggi resmi dimulai.",
    date: "10 Mei 2026",
    dateISO: "2026-05-10",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Penandatanganan nota kesepahaman antara BPPK dengan sejumlah universitas terkemuka membuka peluang riset bersama, pertukaran pengajar, serta pengembangan kurikulum keuangan negara.",
      "Kolaborasi ini diharapkan memperkaya khazanah ilmu di lingkungan Kemenkeu Corporate University.",
    ],
  },
  {
    slug: "kunjungan-delegasi-internasional",
    category: "Berita",
    tag: "Internasional",
    title: "Kunjungan Delegasi Internasional ke Kampus BPPK",
    excerpt:
      "Delegasi mitra internasional berbagi praktik terbaik dalam pengembangan kompetensi sektor publik.",
    date: "08 Mei 2026",
    dateISO: "2026-05-08",
    img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Delegasi pelatihan keuangan dari beberapa negara mitra mengunjungi kampus BPPK untuk bertukar pengalaman terkait modernisasi pendidikan ASN bidang keuangan.",
    ],
  },
  {
    slug: "peluncuran-akselerasi-talenta-digital",
    category: "Berita",
    tag: "Digital",
    title: "Peluncuran Program Akselerasi Talenta Digital",
    excerpt:
      "Program akselerasi membekali ASN dengan keterampilan digital terkini untuk transformasi layanan publik.",
    date: "05 Mei 2026",
    dateISO: "2026-05-05",
    img: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Program akselerasi talenta digital meliputi pelatihan data science, cloud, hingga kepemimpinan teknologi yang ditujukan kepada talenta-talenta terpilih Kementerian Keuangan.",
    ],
  },
  {
    slug: "sosialisasi-kebijakan-pelatihan-2026",
    category: "Berita",
    tag: "Kebijakan",
    title: "Sosialisasi Kebijakan Pelatihan Tahun Anggaran 2026",
    excerpt:
      "BPPK menyosialisasikan arah kebijakan pelatihan baru yang lebih adaptif terhadap kebutuhan unit eselon I.",
    date: "03 Mei 2026",
    dateISO: "2026-05-03",
    img: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Sosialisasi dilakukan secara hybrid dan menghadirkan narasumber dari unit perencanaan BPPK serta perwakilan pengguna pelatihan dari berbagai eselon I.",
    ],
  },
  {
    slug: "workshop-fasilitator-pembelajaran-digital",
    category: "Berita",
    tag: "Workshop",
    title: "Workshop Fasilitator Pembelajaran Digital BPPK",
    excerpt:
      "Penguatan kompetensi para fasilitator BPPK dalam merancang pengalaman belajar digital yang interaktif.",
    date: "01 Mei 2026",
    dateISO: "2026-05-01",
    img: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Workshop diikuti oleh fasilitator dari seluruh pusdiklat dan balai diklat keuangan dengan fokus pada metodologi desain pembelajaran modern.",
    ],
  },
  {
    slug: "kunjungan-kerja-komisi-xi-dpr",
    category: "Berita",
    tag: "Kerja Sama",
    title: "Kunjungan Kerja Komisi XI DPR RI ke BPPK",
    excerpt:
      "Komisi XI DPR RI meninjau program pengembangan SDM Kementerian Keuangan secara langsung di kampus BPPK.",
    date: "28 April 2026",
    dateISO: "2026-04-28",
    img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Kunjungan kerja mencakup paparan capaian, diskusi anggaran, serta tinjauan fasilitas pembelajaran terpadu di kampus BPPK.",
    ],
  },
  {
    slug: "graduation-pkn-stan",
    category: "Berita",
    tag: "Wisuda",
    title: "Wisuda Lulusan PKN STAN Angkatan Terbaru",
    excerpt:
      "Lulusan PKN STAN siap mengisi posisi-posisi strategis di lingkungan Kementerian Keuangan dan instansi lain.",
    date: "25 April 2026",
    dateISO: "2026-04-25",
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Wisuda dihadiri Menteri Keuangan dan jajaran pimpinan BPPK. Para lulusan dilepas untuk mengabdi sebagai abdi negara di bidang keuangan publik.",
    ],
  },
  {
    slug: "seminar-nasional-keuangan-negara",
    category: "Berita",
    tag: "Seminar",
    title: "Seminar Nasional Kebijakan Keuangan Negara",
    excerpt:
      "Forum diskusi kebijakan fiskal yang menghadirkan para pakar dan praktisi keuangan publik dari berbagai instansi.",
    date: "22 April 2026",
    dateISO: "2026-04-22",
    img: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Seminar Nasional Kebijakan Keuangan Negara menjadi wadah bagi para pengambil kebijakan untuk bertukar pandangan terkait arah fiskal Indonesia ke depan.",
    ],
  },
  {
    slug: "penandatanganan-kerja-sama-bppk-kpk",
    category: "Berita",
    tag: "Kerja Sama",
    title: "Penandatanganan Kerja Sama BPPK dengan KPK",
    excerpt:
      "Kolaborasi strategis dalam pengembangan kompetensi aparatur bidang pencegahan dan pemberantasan korupsi.",
    date: "20 April 2026",
    dateISO: "2026-04-20",
    img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1200&q=80",
    body: [
      "BPPK dan Komisi Pemberantasan Korupsi menandatangani nota kesepahaman untuk pengembangan kurikulum anti korupsi bagi aparatur negara.",
    ],
  },
  {
    slug: "pelatihan-keuangan-daerah-serentak",
    category: "Berita",
    tag: "Pelatihan",
    title: "Pelatihan Keuangan Daerah Serentak di 10 Provinsi",
    excerpt:
      "Program pembelajaran jarak jauh untuk perangkat daerah dalam mengelola keuangan daerah secara akuntabel.",
    date: "18 April 2026",
    dateISO: "2026-04-18",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Pelatihan keuangan daerah diselenggarakan secara serentak di 10 provinsi dengan metode daring dan luring untuk memperkuat kapasitas regional.",
    ],
  },
  {
    slug: "launching-kemenkeu-corporate-university",
    category: "Berita",
    tag: "Peluncuran",
    title: "Launching Kemenkeu Corporate University 2026",
    excerpt:
      "Ekosistem pembelajaran organisasi Kementerian Keuangan resmi diperbarui untuk tahun akademik baru.",
    date: "15 April 2026",
    dateISO: "2026-04-15",
    img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Kemenkeu Corporate University meluncurkan kurikulum terpadu yang mengintegrasikan teknologi digital, kepemimpinan, dan tata kelola keuangan.",
    ],
  },
  {
    slug: "rakor-tahunan-balai-diklat-keuangan",
    category: "Berita",
    tag: "Koordinasi",
    title: "Rapat Koordinasi Tahunan Balai Diklat Keuangan",
    excerpt:
      "Pemetaan capaian dan rencana kerja seluruh Balai Diklat Keuangan di Indonesia untuk tahun 2026.",
    date: "12 April 2026",
    dateISO: "2026-04-12",
    img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Rapat koordinasi tahunan membahas sinergi program pelatihan antarwilayah serta optimalisasi fasilitas pembelajaran di seluruh balai diklat keuangan.",
    ],
  },
  {
    slug: "hasil-seleksi-beasiswa-s2",
    category: "Pengumuman",
    tag: "Beasiswa",
    title: "Pengumuman Hasil Seleksi Beasiswa S2 Dalam Negeri",
    excerpt:
      "Daftar peserta yang lolos tahap akhir seleksi beasiswa pascasarjana telah dipublikasikan.",
    date: "20 Mei 2026",
    dateISO: "2026-05-20",
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Hasil seleksi akhir beasiswa S2 dalam negeri telah diumumkan melalui kanal resmi BPPK. Peserta yang lolos diminta segera melengkapi berkas registrasi sesuai jadwal.",
    ],
  },
  {
    slug: "jadwal-ujian-sertifikasi-juni",
    category: "Pengumuman",
    tag: "Sertifikasi",
    title: "Jadwal Ujian Sertifikasi Kompetensi Periode Juni",
    excerpt:
      "Peserta diharapkan memperhatikan jadwal pelaksanaan ujian sertifikasi yang akan datang.",
    date: "18 Mei 2026",
    dateISO: "2026-05-18",
    img: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Jadwal ujian sertifikasi periode Juni telah ditetapkan. Mohon perhatian peserta untuk memastikan kesiapan teknis dan administratif sebelum hari pelaksanaan.",
    ],
  },
  {
    slug: "perubahan-jadwal-pelatihan-manajerial",
    category: "Pengumuman",
    tag: "Jadwal",
    title: "Perubahan Jadwal Pelatihan Manajerial Tingkat Madya",
    excerpt:
      "Mohon perhatian peserta pelatihan terkait perubahan jadwal dan lokasi pelaksanaan kelas.",
    date: "14 Mei 2026",
    dateISO: "2026-05-14",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Penyesuaian jadwal dilakukan untuk mengakomodasi rotasi penugasan peserta. Detail lokasi dan tanggal terbaru disampaikan melalui email resmi peserta.",
    ],
  },
  {
    slug: "pendaftaran-magang-mahasiswa",
    category: "Pengumuman",
    tag: "Magang",
    title: "Pembukaan Pendaftaran Magang Mahasiswa di BPPK",
    excerpt:
      "Kesempatan bagi mahasiswa untuk mendapatkan pengalaman langsung di lingkungan kerja BPPK.",
    date: "11 Mei 2026",
    dateISO: "2026-05-11",
    img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Program magang dibuka untuk mahasiswa S1 dan vokasi dari berbagai disiplin ilmu. Peserta akan ditempatkan di unit-unit pusat BPPK selama tiga bulan.",
    ],
  },
  {
    slug: "transformasi-digital-keuangan-negara",
    category: "Artikel",
    tag: "Opini",
    title: "Transformasi Digital pada Manajemen Keuangan Negara",
    excerpt:
      "Bagaimana teknologi mengubah lanskap pengelolaan anggaran serta akuntabilitas publik di Indonesia.",
    date: "16 Mei 2026",
    dateISO: "2026-05-16",
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Transformasi digital telah mengubah cara pemerintah merencanakan, mengeksekusi, dan mempertanggungjawabkan anggaran negara. Sistem terintegrasi memungkinkan visibilitas real-time atas kondisi fiskal.",
      "Kementerian Keuangan terus berinvestasi pada infrastruktur data dan kapabilitas analitik untuk mendukung kebijakan berbasis bukti.",
    ],
  },
  {
    slug: "budaya-belajar-berkelanjutan",
    category: "Artikel",
    tag: "Budaya",
    title: "Membangun Budaya Belajar Berkelanjutan di Sektor Publik",
    excerpt:
      "Strategi praktis menumbuhkan kebiasaan belajar yang adaptif di kalangan aparatur negara.",
    date: "13 Mei 2026",
    dateISO: "2026-05-13",
    img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Membangun budaya belajar bukan sekadar menyediakan kelas, tetapi menumbuhkan rasa ingin tahu dan komitmen kolektif untuk terus berkembang.",
    ],
  },
  {
    slug: "analitik-data-kebijakan",
    category: "Artikel",
    tag: "Data",
    title: "Peran Analitik Data dalam Pengambilan Keputusan Kebijakan",
    excerpt:
      "Pemanfaatan data analitik menjadi kunci ketepatan kebijakan publik berbasis bukti.",
    date: "09 Mei 2026",
    dateISO: "2026-05-09",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Analitik data memungkinkan perumus kebijakan memahami pola, mengidentifikasi anomali, dan memproyeksikan dampak intervensi sebelum diterapkan.",
    ],
  },
  {
    slug: "kepemimpinan-adaptif-era-ketidakpastian",
    category: "Artikel",
    tag: "Kepemimpinan",
    title: "Kepemimpinan Adaptif di Era Ketidakpastian",
    excerpt:
      "Pendekatan kepemimpinan yang fleksibel untuk menghadapi tantangan dinamis sektor publik.",
    date: "06 Mei 2026",
    dateISO: "2026-05-06",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Pemimpin adaptif mampu membaca konteks dan menyesuaikan gaya kepemimpinannya untuk merespons situasi yang berubah cepat.",
    ],
  },
];

export function getInfoBySlug(slug: string): InfoItem | undefined {
  return infoItems.find((i) => i.slug === slug);
}
