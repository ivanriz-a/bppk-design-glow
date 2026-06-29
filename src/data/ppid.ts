export const ppidTugas = [
  "Menyediakan dan mengamankan Informasi Publik;",
  "Memberikan pelayanan Informasi publik yang cepat, tepat, dan sederhana;",
  "Mengoordinasikan pengumpulan seluruh informasi publik (berkala, setiap saat, dan informasi terbuka lainnya);",
  "Menyampaikan pengumuman informasi publik melalui media yang efektif dan efisien;",
  "Menyampaikan informasi publik dalam Bahasa Indonesia yang baik, benar, dan mudah dipahami;",
  "Memenuhi permohonan informasi publik yang dapat diakses oleh publik;",
  "Mengklasifikasikan informasi publik dan/atau melaksanakan perubahan pengklasifikasian;",
  "Memastikan proses pemberian informasi publik berjalan dengan baik;",
  "Memberikan alasan tertulis atas pengecualian informasi publik apabila permohonan ditolak;",
  "Melakukan penghitaman atau pengaburan materi informasi publik yang dikecualikan beserta alasannya;",
  "Menetapkan dan menugaskan petugas informasi untuk membantu pelaksanaan tugas PPID;",
  "Melakukan pengembangan kompetensi petugas informasi guna meningkatkan kualitas layanan;",
  "Menggunakan Sistem Informasi PPID dalam pengelolaan layanan informasi publik;",
  "Melakukan koordinasi, harmonisasi, dan fasilitasi Perangkat PPID;",
  "Menyediakan ruangan dan/atau meja layanan informasi publik;",
  "Mengoordinasikan pendokumentasian dan penyimpanan seluruh informasi publik di lingkungan wilayah kerjanya;",
  "Mendukung penyediaan informasi publik yang mutakhir pada situs Kementerian Keuangan;",
  "Menyediakan informasi publik yang mutakhir pada situs unit eselon I/non-eselon di bawah Menteri Keuangan;",
  "Memelihara dan memutakhirkan informasi pada situs unit terkait paling sedikit satu kali dalam sebulan;",
  "Mengajukan usul informasi publik dan informasi yang dikecualikan kepada PPID Kementerian Keuangan;",
  "Membuat Laporan Tahunan serta menyampaikannya kepada Atasan PPID Tingkat I dan PPID Kementerian Keuangan;",
  "Memenuhi permintaan informasi dari PPID Kementerian Keuangan dengan tembusan kepada Atasan PPID Tingkat I.",
];

export const ppidWewenang = [
  "Menolak permohonan informasi publik secara tertulis apabila informasi yang dimohonkan termasuk informasi yang dikecualikan, disertai alasan dan hak pemohon untuk mengajukan keberatan;",
  "Mengusulkan informasi publik untuk dikecualikan kepada PPID Kementerian Keuangan setelah mendapat persetujuan tertulis Atasan PPID Tingkat I, dalam waktu paling lama 10 hari kerja;",
  "Meminta informasi kepada pemilik informasi (PPID Tingkat II/III) di lingkungan wilayah kerja PPID Tingkat I;",
  "Melakukan koordinasi dengan PPID Kementerian Keuangan serta PPID Tingkat II/III terkait penyelesaian Sengketa Informasi Publik.",
];

export const ppidStruktur = [
  { level: "PPID Kementerian Keuangan", jabatan: "Kepala Biro Komunikasi dan Layanan Informasi" },
  { level: "Atasan PPID Tingkat I BPPK", jabatan: "Kepala Badan Pendidikan dan Pelatihan Keuangan" },
  { level: "PPID Tingkat I BPPK", jabatan: "Sekretaris Badan" },
  { level: "PPID Tingkat II PKN STAN", jabatan: "Kepala Bagian Administrasi Akademik dan Kemahasiswaan" },
  { level: "PPID Tingkat III BPPK", jabatan: "Kepala Balai Diklat Keuangan dan Kepala Balai Diklat Kepemimpinan" },
];

export type LinkItem = { label: string; href?: string; sub?: LinkItem[] };

export const berkalaA: LinkItem[] = [
  { label: "Lokasi dan Kontak", href: "/" },
  { label: "Struktur Organisasi", href: "/struktur-organisasi" },
  { label: "Profil Pimpinan", href: "/profil-pejabat" },
  { label: "Visi dan Misi BPPK", href: "/profil#visi-misi" },
  { label: "Tugas dan Fungsi BPPK", href: "/profil#tugas-fungsi" },
  { label: "LHKPN Pimpinan", href: "/profil-pejabat" },
];

export const berkalaB: LinkItem[] = [
  { label: "Rencana Strategis BPPK" },
  { label: "Rencana Kerja BPPK Tahun 2026" },
  {
    label: "Daftar Isian Pelaksanaan Anggaran (DIPA) BPPK",
    sub: [
      { label: "DIPA BPPK 2026" },
      { label: "DIPA BPPK 2025" },
      { label: "DIPA BPPK 2024" },
      { label: "DIPA BPPK 2023" },
      { label: "DIPA BPPK 2022" },
    ],
  },
  { label: "Laporan Kinerja BPPK" },
  { label: "Laporan Tahunan BPPK" },
  { label: "Laporan Keuangan BPPK" },
  { label: "Laporan PPID BPPK" },
];

export const berkalaC: LinkItem[] = [
  { label: "Informasi lainnya yang berkaitan langsung dengan hak-hak masyarakat", href: "/informasi" },
  {
    label: "Tata cara memperoleh informasi, pengajuan keberatan, dan penyelesaian sengketa",
    sub: [
      { label: "Tata cara memperoleh informasi" },
      { label: "Tata cara pengajuan keberatan" },
      { label: "Proses penyelesaian sengketa informasi publik" },
    ],
  },
  { label: "Tata cara pengaduan penyalahgunaan wewenang (WISE Kemenkeu)", href: "https://www.wise.kemenkeu.go.id/" },
  {
    label: "Pengumuman pengadaan barang dan jasa",
    sub: [
      { label: "Sistem Informasi Manajemen Pengadaan Langsung (SIMPel)" },
      { label: "LPSE Kementerian Keuangan" },
      { label: "SIRUP LKPP – Kemenkeu" },
      { label: "Rencana Umum Pengadaan (RUP) Kemenkeu", href: "https://rup.kemenkeu.go.id/rup/" },
    ],
  },
];

export const setiapSaat: LinkItem[] = [
  { label: "Profil BPPK", href: "/profil" },
  { label: "Peraturan, keputusan, dan kebijakan Kementerian Keuangan (JDIH)", href: "https://jdih.kemenkeu.go.id/home" },
  {
    label: "Informasi Pelayanan Informasi Publik",
    sub: [
      { label: "Mekanisme permohonan informasi publik" },
      { label: "Mekanisme pengajuan keberatan" },
      { label: "Mekanisme pengajuan sengketa" },
      { label: "Formulir layanan informasi", href: "https://e-ppid.kemenkeu.go.id/" },
      { label: "Laporan layanan informasi publik" },
      { label: "Daftar Informasi Publik (DIP) BPPK", href: "https://s.kemenkeu.go.id/dipbppk2026" },
    ],
  },
];

export const sertaMertaKontak = [
  { label: "Website resmi BPPK", value: "www.bppk.kemenkeu.go.id", href: "https://www.bppk.kemenkeu.go.id" },
  { label: "Email", value: "kemenkeu.prime@kemenkeu.go.id", href: "mailto:kemenkeu.prime@kemenkeu.go.id" },
  { label: "Telepon", value: "134", href: "tel:134" },
  { label: "WhatsApp", value: "0813-1000-4134", href: "https://wa.me/6281310004134" },
  { label: "Jam Operasional", value: "Senin – Jumat | 08.00 – 16.00 WIB" },
  { label: "Facebook", value: "bppk.kemenkeu", href: "https://facebook.com/bppk.kemenkeu" },
  { label: "Instagram", value: "@bppkkemenkeu", href: "https://instagram.com/bppkkemenkeu" },
  { label: "YouTube", value: "BPPK Kemenkeu RI", href: "https://youtube.com/@bppkkemenkeu" },
  { label: "X/Twitter", value: "@bppkkemenkeu", href: "https://twitter.com/bppkkemenkeu" },
];

export const regulasi = [
  "Undang-Undang Nomor 14 Tahun 2008 tentang Keterbukaan Informasi Publik",
  "Peraturan Pemerintah Nomor 61 Tahun 2010 tentang Pelaksanaan Undang-Undang Nomor 14 Tahun 2008 tentang Keterbukaan Informasi Publik",
  "Peraturan Mahkamah Agung Republik Indonesia Nomor 2 Tahun 2011 tentang Tata Cara Penyelesaian Sengketa Informasi Publik di Pengadilan",
  "Peraturan Komisi Informasi Nomor 1 Tahun 2013 tentang Prosedur Penyelesaian Sengketa Informasi Publik",
  "Peraturan Menteri Keuangan Nomor 110/PMK.01/2022 tentang Pedoman Layanan Informasi Publik PPID di Lingkungan Kementerian Keuangan",
  "Peraturan Komisi Informasi Nomor 1 Tahun 2021 tentang Standar Layanan Informasi Publik",
  "Keputusan Ketua Mahkamah Agung RI Nomor 085/KMA/SK/V/2011 tentang Pembentukan Kelompok Kerja Penyusunan Peraturan Mahkamah Agung tentang Tata Cara Penyelesaian Gugatan Atas Putusan Komisi Informasi",
  "Keputusan Menteri Keuangan Nomor 300 Tahun 2025 tentang Penunjukan Pengelola Informasi dan Dokumentasi di Lingkungan Kementerian Keuangan",
];

export const keberatanAlasan = [
  "Penolakan atas permintaan informasi berdasarkan alasan pengecualian sebagaimana dimaksud dalam Pasal 17;",
  "Tidak disediakannya informasi berkala sebagaimana dimaksud dalam Pasal 9;",
  "Tidak ditanggapinya permintaan informasi;",
  "Permintaan informasi ditanggapi tidak sebagaimana yang diminta;",
  "Tidak dipenuhinya permintaan informasi;",
  "Pengenaan biaya yang tidak wajar;",
  "Penyampaian informasi yang melebihi waktu yang diatur dalam Undang-Undang.",
];

export const sengketaTahapan = [
  "Pemohon dapat mengajukan Sengketa Informasi Publik kepada Komisi Informasi Pusat paling lambat 14 hari kerja setelah pemberitahuan dari Atasan PPID terkait keberatan yang diajukan tidak dianggap memuaskan.",
  "Komisi Informasi Pusat mengupayakan penyelesaian Sengketa Informasi Publik melalui mediasi dan/atau ajudikasi non-litigasi paling lambat 14 hari kerja sejak pengajuan permohonan.",
  "Proses Penyelesaian Sengketa Informasi Publik paling lambat dapat diselesaikan dalam waktu 100 hari kerja.",
  "Putusan Komisi Informasi yang berasal dari kesepakatan melalui Mediasi bersifat final dan mengikat.",
];

export const statKonsolidasi = [
  { label: "Tingkat I BPPK", value: 33 },
  { label: "Tingkat II PKN STAN", value: 61 },
  { label: "Tingkat III Balai Diklat", value: 0 },
];

export const statPermintaan = [
  { tahun: "2018", jumlah: 2 },
  { tahun: "2019", jumlah: 170 },
  { tahun: "2020", jumlah: 490 },
  { tahun: "2021", jumlah: 2888 },
  { tahun: "2022", jumlah: 89 },
  { tahun: "2023", jumlah: 18 },
  { tahun: "2024", jumlah: 76 },
  { tahun: "2025", jumlah: 33 },
];

export const statKeberatan = [
  { tahun: "2018", jumlah: 0 },
  { tahun: "2019", jumlah: 6 },
  { tahun: "2020", jumlah: 0 },
  { tahun: "2021", jumlah: 0 },
  { tahun: "2022", jumlah: 0 },
  { tahun: "2023", jumlah: 0 },
  { tahun: "2024", jumlah: 1 },
  { tahun: "2025", jumlah: 0 },
];

export const statTindaklanjut = [
  { bulan: "Jan", penuh: 0, sebagian: 0, tidak: 0, tdkLanjut: 0, rata: "0" },
  { bulan: "Feb", penuh: 1, sebagian: 0, tidak: 1, tdkLanjut: 0, rata: "8" },
  { bulan: "Mar", penuh: 1, sebagian: 0, tidak: 2, tdkLanjut: 0, rata: "4,67" },
  { bulan: "Apr", penuh: 0, sebagian: 0, tidak: 0, tdkLanjut: 0, rata: "0" },
  { bulan: "Mei", penuh: 0, sebagian: 0, tidak: 1, tdkLanjut: 0, rata: "3" },
  { bulan: "Jun", penuh: 0, sebagian: 0, tidak: 0, tdkLanjut: 0, rata: "0" },
  { bulan: "Jul", penuh: 2, sebagian: 0, tidak: 0, tdkLanjut: 0, rata: "11" },
  { bulan: "Ags", penuh: 1, sebagian: 1, tidak: 1, tdkLanjut: 0, rata: "1" },
  { bulan: "Sep", penuh: 5, sebagian: 0, tidak: 0, tdkLanjut: 7, rata: "6" },
  { bulan: "Okt", penuh: 1, sebagian: 0, tidak: 0, tdkLanjut: 0, rata: "8" },
  { bulan: "Nov", penuh: 4, sebagian: 0, tidak: 0, tdkLanjut: 0, rata: "12,25" },
  { bulan: "Des", penuh: 9, sebagian: 0, tidak: 0, tdkLanjut: 0, rata: "9" },
];

export const statTidakDiberikan = [
  { no: 1, reg: "REG-1/PPID.PP/2025", ket: "Informasi dikecualikan" },
  { no: 2, reg: "REG-4/PPID.PP/2025", ket: "Informasi belum dikuasai" },
  { no: 3, reg: "REG-5/PPID.PP/2025", ket: "Informasi dikecualikan" },
  { no: 4, reg: "REG-6/PPID.PP/2025", ket: "Informasi belum dikuasai" },
  { no: 5, reg: "REG-9/PPID.PP/2025", ket: "Informasi dikecualikan" },
  { no: 6, reg: "REG-14/PPID.PP/2025", ket: "Permintaan informasi berulang" },
  { no: 7, reg: "REG-15/PPID.PP/2025", ket: "Permintaan informasi berulang" },
  { no: 8, reg: "REG-16/PPID.PP/2025", ket: "Permintaan informasi berulang" },
  { no: 9, reg: "REG-17/PPID.PP/2025", ket: "Permintaan informasi berulang" },
  { no: 10, reg: "REG-18/PPID.PP/2025", ket: "Permintaan informasi berulang" },
  { no: 11, reg: "REG-19/PPID.PP/2025", ket: "Permintaan informasi berulang" },
  { no: 12, reg: "REG-20/PPID.PP/2025", ket: "Permintaan informasi berulang" },
];
