import fotoContoh from "@/assets/profil-dhoni.jpg.asset.json";
import fotoDwiTeguh from "@/assets/pj-dwi-teguh-wibowo.png.asset.json";
import fotoWahyu from "@/assets/pj-wahyu-kusuma-romadhoni.png.asset.json";
import fotoHeni from "@/assets/pj-heni-kartikawati.png.asset.json";
import fotoBhimantara from "@/assets/pj-bhimantara-widyajala.png.asset.json";
import fotoEdward from "@/assets/pj-edward-hamonangan-sianipar.png.asset.json";
import fotoMulyono from "@/assets/pj-mochamad-mulyono.png.asset.json";
import fotoGanti from "@/assets/pj-ganti-lis-ariyadi.png.asset.json";
import fotoNana from "@/assets/pj-nana-riana.png.asset.json";
import fotoEvy from "@/assets/pj-evy-mulyani.png.asset.json";

export type Pejabat = {
  id: string;
  nama: string;
  jabatan: string;
  unit: string;
  inisial: string;
  foto?: string;
  bio?: string[];
  alamatKantor?: string;
  email?: string;
  telepon?: string;
  lhkpn?: string;
};

export type PejabatGroup = {
  id: string;
  eyebrow: string;
  judul: string;
  deskripsi: string;
  items: Pejabat[];
};

const KONTAK_DEFAULT = {
  email: "kemenkeu.prime@kemenkeu.go.id",
  telepon: "134",
  lhkpn: "#",
};

const withDefaults = (p: Pejabat): Pejabat => ({
  foto: fotoContoh.url,
  ...KONTAK_DEFAULT,
  ...p,
});

// IDs harus konsisten dengan ID Unit di src/routes/struktur-organisasi.tsx
// (kepala, sekretariat, pkm, ppjk, pkp, pap, pbc, pjf, pkn-stan)

const kepala: Pejabat = withDefaults({
  id: "kepala",
  nama: "Dwi Teguh Wibowo",
  jabatan: "Plt. Kepala Badan Pendidikan dan Pelatihan Keuangan",
  unit: "Badan Pendidikan dan Pelatihan Keuangan",
  inisial: "DT",
  bio: [
    "Lahir di Karanganyar pada tanggal 6 Oktober 1969. Beliau menyelesaikan pendidikan Diploma III Kepabeanan dan Cukai di Politeknik Keuangan Negara STAN dan melanjutkan pendidikan Sarjana Ekonomi di Universitas Indonesia.",
    "Dalam perjalanan kariernya di Kementerian Keuangan, beliau telah menduduki sejumlah jabatan strategis, antara lain sebagai Kepala Kantor Pelayanan Utama Bea dan Cukai Tipe A Tanjung Priok (2017–2023) serta Tenaga Pengkaji Bidang Pengawasan dan Penegakan Hukum Kepabeanan dan Cukai (2016–2017).",
    "Saat ini, beliau menjabat sebagai Staf Ahli Menteri Keuangan Bidang Penerimaan Negara sejak tahun 2023. Selain itu, beliau juga ditugaskan sebagai Pelaksana Tugas (Plt.) Kepala Badan Pendidikan dan Pelatihan Keuangan mulai April 2026. Atas pengabdian beliau hingga saat ini, Presiden Republik Indonesia menganugerahkan penghargaan Satyalancana Karya Satya XXX.",
  ],
  alamatKantor: "Jalan Purnawarman No.99, Selong, Kebayoran Baru, Jakarta Selatan",
});

const sekretariat: Pejabat = withDefaults({
  id: "sekretariat",
  nama: "Wahyu Kusuma Romadhoni",
  jabatan: "Sekretaris Badan Pendidikan dan Pelatihan Keuangan",
  unit: "Sekretariat BPPK",
  inisial: "WK",
  bio: [
    "Lahir di Yogyakarta pada tanggal 20 Juli 1974. Menyelesaikan jenjang Sarjana dari Universitas Gadjah Mada di tahun 2001 dan meraih gelar Master dari Universitas Indonesia tahun 2006.",
    "Mengawali karier di Direktorat Jenderal Anggaran pada tahun 1995. Beliau menjadi Kepala Pusdiklat Pengembangan Sumber Daya Manusia yang berganti nama menjadi Pusdiklat Kepemimpinan dan Manajerial pada tahun 2021, kemudian menjadi Kepala Pusdiklat Kepemimpinan dan Manajemen di tahun 2025. Pada tahun 2026, beliau dilantik menjadi Sekretaris Badan Pendidikan dan Pelatihan Keuangan.",
    "Atas pengabdian dan dedikasi beliau, Presiden Republik Indonesia pada tahun 2015 menganugerahkan penghargaan Satyalancana Karya Satya XX tahun.",
  ],
  alamatKantor: "Jalan Purnawarman No.99, Selong, Kebayoran Baru, Jakarta Selatan",
});

const pkm: Pejabat = withDefaults({
  id: "pkm",
  nama: "Heni Kartikawati",
  jabatan: "Kepala Pusdiklat Kepemimpinan dan Manajemen",
  unit: "Pusdiklat Kepemimpinan dan Manajemen",
  inisial: "HK",
  bio: [
    "Lahir di Yogyakarta pada tanggal 18 Desember 1970 dan menyelesaikan pendidikan Sarjana Psikologi di Universitas Gajah Mada pada tahun 1995, Master of Arts in International Development di Nagoya University pada tahun 2002, serta Magister Psikologi di Universitas Tarumanegara pada tahun 2012. Latar belakang pendidikan tersebut mendukung peran beliau dalam penguatan kepemimpinan, manajemen, dan pengembangan organisasi pembelajar di lingkungan Kementerian Keuangan.",
    "Mengawali karier di Kementerian Keuangan pada tahun 1996, dan saat ini menjabat sebagai Kepala Pusat Pendidikan dan Pelatihan Kepemimpinan dan Manajemen, Kementerian Keuangan sejak tahun 2026. Sebelumnya, beliau menjabat sebagai Kepala Kantor Wilayah Direktorat Jenderal Perbendaharaan Provinsi Riau pada tahun 2024 hingga 2026, serta Kepala Pusat Pendidikan dan Pelatihan Keuangan Umum pada tahun 2018 hingga 2024.",
  ],
  alamatKantor: "Jl. Pancoran Timur II No.1, Cikoko, Kec. Pancoran, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta",
});

const pap: Pejabat = withDefaults({
  id: "pap",
  nama: "Bhimantara Widyajala",
  jabatan: "Kepala Pusdiklat Anggaran dan Perbendaharaan",
  unit: "Pusdiklat Anggaran dan Perbendaharaan",
  inisial: "BW",
  bio: [
    "Lahir di Surabaya pada 29 Maret 1967, mengawali karier sebagai Auditor di Inspektorat Jenderal Kementerian Keuangan pada tahun 1988. Perjalanan kariernya menunjukkan pengalaman yang luas dan strategis, antara lain sebagai Pelaksana Tugas Direktur Surat Berharga Negara pada 2007, yang kemudian dikukuhkan sebagai Direktur Surat Utang Negara pada 2011, serta Sekretaris Direktorat Jenderal Pengelolaan Utang pada 2012. Beliau juga pernah menjabat sebagai Direktur Eksekutif Asian Development Bank (ADB) periode 2013–2017, mewakili delapan negara anggota, serta menduduki berbagai jabatan pimpinan tinggi pratama di lingkungan Kementerian Keuangan hingga menjadi Sekretaris Direktorat Jenderal Perimbangan Keuangan.",
    "Setelah menyelesaikan rangkaian tugas di Direktorat Jenderal Perimbangan Keuangan, saat ini dipercaya untuk mengemban tugas sebagai Kepala Pusat Pendidikan dan Pelatihan Anggaran dan Perbendaharaan di lingkungan Badan Pendidikan dan Pelatihan Keuangan (BPPK), Kementerian Keuangan sejak tahun 2024.",
    "Dari sisi pendidikan, beliau meraih gelar Sarjana Hukum dari Universitas Indonesia (1992) dan Akuntan dari STAN (1995), serta Master of Science in Finance dari The George Washington University (1999). Selain itu, beliau memiliki berbagai sertifikasi profesional internasional, antara lain CIA, CA, CRMA, FCPA (Aust), ASEAN CPA, CPMA, dan lainnya.",
    "Atas pengabdian dan dedikasinya, beliau dianugerahi Satyalancana Karya Satya X, XX, dan XXX Tahun oleh Presiden Republik Indonesia.",
  ],
  alamatKantor: "Jalan Raya Puncak Km.72, Gadog, Megamendung, Bogor, Jawa Barat",
});

const ppjk: Pejabat = withDefaults({
  id: "ppjk",
  nama: "Edward Hamonangan Sianipar",
  jabatan: "Kepala Pusdiklat Pajak",
  unit: "Pusdiklat Pajak",
  inisial: "ES",
  bio: [
    "Memulai karier sebagai Calon Pegawai Negeri Sipil (CPNS) di Direktorat Jenderal Pajak pada 1 Maret 1990. Dalam bidang pendidikan, beliau meraih gelar Magister Ilmu Administrasi di Universitas Indonesia.",
    "Selama lebih dari tiga dekade mengabdi, beliau telah menempati sejumlah posisi strategis di DJP, beliau pernah menjabat sebagai Kepala Kantor Wilayah, Tenaga Pengkaji Bidang Pengawasan dan Penegakan Hukum Perpajakan, serta sebagai Kepala Pusat Pengolahan Data dan Dokumen Perpajakan (PPDDP). Pada tahun 2026, beliau menjabat sebagai Kepala Pusat Pendidikan dan Pelatihan Pajak.",
    "Sebagai wujud apresiasi atas dedikasinya, ia telah dianugerahi Satyalancana Karya Satya X, XX, dan XXX Tahun oleh Presiden Republik Indonesia.",
  ],
  alamatKantor: "Jalan Sakti Raya No.1, RT 7/RW 9, Kemanggisan, Palmerah, Jakarta Barat",
});

const pbc: Pejabat = withDefaults({
  id: "pbc",
  nama: "Mochamad Mulyono",
  jabatan: "Kepala Pusdiklat Bea dan Cukai",
  unit: "Pusdiklat Bea dan Cukai",
  inisial: "MM",
  bio: [
    "Lahir di Batu, Malang pada tanggal 12 Agustus 1969. Menyelesaikan pendidikan Diploma III Kepabeanan dan Cukai dari Sekolah Tinggi Akuntansi Negara (STAN) pada tahun 1991, kemudian meraih gelar Sarjana Manajemen dari STIA LAN/Universitas Palembang pada tahun 2003, dan gelar Magister Manajemen dari Universitas Sriwijaya pada tahun 2006. Gelar Doktor Ilmu Manajemen diperoleh dari Universitas Negeri Jakarta pada tahun 2019.",
    "Mengawali karier di Kementerian Keuangan sebagai Calon Pegawai Negeri Sipil pada tanggal 1 Desember 1989. Selama lebih dari tiga dekade, beliau telah mengemban berbagai tugas strategis di Direktorat Jenderal Bea dan Cukai, antara lain sebagai Kepala Seksi Penindakan dan Penyidikan, Kepala Kantor Bea dan Cukai di Sorong dan Juanda, Kepala Bidang Kepatuhan Internal, hingga Kepala Subdirektorat Registrasi Kepabeanan dan Kepala Bagian Pengembangan Kepegawaian di lingkungan Sekretariat Direktorat Jenderal Bea dan Cukai.",
    "Pada tanggal 13 Juni 2025, berdasarkan Keputusan Menteri Keuangan Nomor 188 Tahun 2025, Dr. Mochamad Mulyono dilantik sebagai Kepala Pusat Pendidikan dan Pelatihan Bea dan Cukai pada Badan Pendidikan dan Pelatihan Keuangan, Kementerian Keuangan Republik Indonesia.",
    "Atas dedikasi dan pengabdiannya selama lebih dari 35 tahun di Kementerian Keuangan, beliau dianugerahi penghargaan Satyalancana Karya Satya X Tahun pada tahun 2000, Satyalancana Karya Satya XX Tahun pada tahun 2010, dan Satyalancana Karya Satya XXX Tahun pada tahun 2020 oleh Presiden Republik Indonesia, sebagai bentuk apresiasi atas loyalitas dan integritasnya dalam menjalankan tugas kenegaraan.",
  ],
  alamatKantor: "Jl. Bojana Tirta Raya III, Pisangan Timur, Pulo Gadung, Kota Jakarta Timur, DKI Jakarta",
});

const pkp: Pejabat = withDefaults({
  id: "pkp",
  nama: "Ganti Lis Ariyadi",
  jabatan: "Kepala Pusdiklat Keuangan Publik",
  unit: "Pusdiklat Keuangan Publik",
  inisial: "GA",
  bio: [
    "Lahir di Cilacap pada tanggal 2 Januari 1976 dan memulai karier sebagai Calon Pegawai Negeri Sipil di lingkungan Kementerian Keuangan pada 1 Maret 1999. Dalam perjalanan kariernya, beliau memiliki pengalaman yang kuat dalam pengelolaan pembelajaran, pengembangan sumber daya manusia, serta kajian kebijakan di bidang pengelolaan keuangan dan kekayaan negara.",
    "Menyelesaikan pendidikan Sarjana Ekonomi di Universitas Jenderal Soedirman pada tahun 1998, serta Master of Education (Leadership and Management) di Flinders University of South Australia pada tahun 2007. Latar belakang pendidikan tersebut mendukung peran beliau dalam memperkuat kepemimpinan dan tata kelola pembelajaran di lingkungan Badan Pendidikan dan Pelatihan Keuangan.",
    "Saat ini menjabat sebagai Kepala Pusat Pendidikan dan Pelatihan Keuangan Publik, Badan Pendidikan dan Pelatihan Keuangan, Kementerian Keuangan sejak 10 Maret 2026. Sebelumnya, beliau menjabat sebagai Tenaga Pengkaji Bidang Pengelolaan Kekayaan Negara pada Sekretariat Jenderal (2025), serta Kepala Pusat Pendidikan dan Pelatihan Keuangan Umum pada Badan Pendidikan dan Pelatihan Keuangan (2024).",
  ],
  alamatKantor: "Gedung Sudiono Purwodihardjo Lantai 3, Jalan Purnawarman No.99, Kebayoran Baru, Jakarta Selatan",
});

const pjf: Pejabat = withDefaults({
  id: "pjf",
  nama: "Nana Riana",
  jabatan: "Kepala Pusat Pembinaan Jabatan Fungsional dan Penjaminan Mutu",
  unit: "Pusat Pembinaan Jabatan Fungsional dan Penjaminan Mutu",
  inisial: "NR",
  bio: [
    "Lahir di Majalengka pada 8 Agustus 1973, menempuh pendidikan Sarjana Administrasi Niaga di STIA-LAN Bandung (1998), kemudian melanjutkan ke Diploma IV Akuntansi di Sekolah Tinggi Akuntansi Negara (STAN) (2005). Ia juga meraih gelar Master of Applied Finance dari Monash University, Melbourne (2008) melalui beasiswa Australian Partnership Scholarship, serta gelar Doctor of Philosophy (Ph.D.) di bidang Finance dari Victoria University, Melbourne (2018) melalui beasiswa Australian Awards Scholarship.",
    "Bergabung dengan Kementerian Keuangan sejak tahun 1995, beliau telah menempati berbagai posisi strategis, di antaranya di Direktorat Surat Utang Negara dan Direktorat Pembiayaan Syariah, Direktorat Jenderal Pengelolaan Pembiayaan dan Risiko. Jabatan yang pernah diemban meliputi Kepala Seksi, Kepala Subdirektorat, serta Direktur pada perusahaan penerbit SBSN (SPV) untuk sukuk negara. Sejak tahun 2025, beliau menjabat sebagai Kepala Pusat Pembinaan Jabatan Fungsional dan Penjaminan Mutu pada Badan Pendidikan dan Pelatihan Keuangan (BPPK).",
    "Atas dedikasi dan pengabdiannya, beliau dianugerahi Satyalancana Karya Satya X (2014), XX (2023), dan XXX (2025) oleh Presiden Republik Indonesia.",
  ],
  alamatKantor: "Gedung Sudiono Purwodihardjo Lantai 4, Jalan Purnawarman No.99, Kebayoran Baru, Jakarta Selatan",
});

const pknStan: Pejabat = withDefaults({
  id: "pkn-stan",
  nama: "Evy Mulyani",
  jabatan: "Direktur Politeknik Keuangan Negara STAN",
  unit: "Politeknik Keuangan Negara STAN",
  inisial: "EM",
  bio: [
    "Lahir di Bandung pada tanggal 18 April 1976, beliau menyelesaikan pendidikan Diploma IV di Sekolah Tinggi Akuntansi Negara (STAN), Jakarta pada tahun 1999. Meraih gelar Master of Business Administration (MBA) di bidang Finance dari Nanzan University Japan pada tahun 2004, dan gelar Doctor of Philosophy (PhD.) dari Deakin University, Australia pada tahun 2014.",
    "Mengawali karier di Kementerian Keuangan pada tahun 1996. Pernah menjabat sebagai Kepala Bidang Kebijakan Keuangan Inklusif, Pusat Badan Kebijakan Fiskal pada tahun 2015 dan sebagai Kepala Bidang Analisis Ekonomi Internasional dan Hubungan Investor, Badan Kebijakan Fiskal (2018-2019). Pada tahun 2020 menjabat sebagai Kepala Biro Kerja Sama dan Hubungan Masyarakat Kementerian Pendidikan dan Kebudayaan. Pada 2021-2023 beliau dipercaya sebagai Wakil Direktur Bidang Akademik Politeknik Keuangan Negara STAN. Pada 2 November 2023 beliau dilantik sebagai Direktur Politeknik Keuangan Negara STAN.",
    "Atas pengabdian beliau hingga saat ini, Presiden Republik Indonesia menganugerahkan penghargaan Satyalancana Karya Satya XX tahun.",
  ],
  alamatKantor: "Jalan Bintaro Utama Sektor V, Bintaro Jaya, Tangerang Selatan",
  email: "humas.baak@pknstan.ac.id",
  telepon: "(021) 7361654",
});

export const PEJABAT_BY_ID: Record<string, Pejabat> = {
  kepala,
  sekretariat,
  pkm,
  pap,
  ppjk,
  pbc,
  pkp,
  pjf,
  "pkn-stan": pknStan,
};

export const groups: PejabatGroup[] = [
  {
    id: "pimpinan",
    eyebrow: "Pimpinan",
    judul: "Kepala Badan",
    deskripsi:
      "Badan Pendidikan dan Pelatihan Keuangan dipimpin oleh seorang Kepala Badan yang bertanggung jawab langsung kepada Menteri Keuangan dalam menyelenggarakan pendidikan, pelatihan, dan pengembangan SDM Kementerian Keuangan.",
    items: [kepala],
  },
  {
    id: "sekretariat",
    eyebrow: "Sekretariat",
    judul: "Sekretaris Badan",
    deskripsi:
      "Sekretariat Badan menyelenggarakan koordinasi pelaksanaan tugas, pembinaan, dan pemberian dukungan administrasi kepada seluruh unit organisasi di lingkungan BPPK.",
    items: [sekretariat],
  },
  {
    id: "pusdiklat",
    eyebrow: "Pusat Pendidikan dan Pelatihan",
    judul: "Kepala Pusdiklat",
    deskripsi:
      "Pusdiklat dan Pusat di lingkungan BPPK menyelenggarakan pendidikan, pelatihan, sertifikasi, serta pembinaan jabatan fungsional dan penjaminan mutu sesuai bidang masing-masing.",
    items: [pkm, pap, ppjk, pbc, pkp, pjf],
  },
  {
    id: "blu",
    eyebrow: "Badan Layanan Umum",
    judul: "Direktur PKN STAN",
    deskripsi:
      "Politeknik Keuangan Negara STAN merupakan perguruan tinggi kedinasan di lingkungan BPPK yang menyelenggarakan pendidikan vokasi calon pengelola keuangan negara.",
    items: [pknStan],
  },
];

export function getPejabatNama(id: string): string {
  return PEJABAT_BY_ID[id]?.nama ?? "—";
}
