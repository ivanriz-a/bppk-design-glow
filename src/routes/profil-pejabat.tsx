import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import profilHeroBg from "@/assets/profil-hero-bg.png.asset.json";
import logoPutih from "@/assets/logo-bppk-putih.png.asset.json";
import logoFooter from "@/assets/logo-kemenkeu-bppk-putih.png.asset.json";
import fotoContoh from "@/assets/profil-dhoni.jpg.asset.json";

export const Route = createFileRoute("/profil-pejabat")({
  head: () => ({
    meta: [
      { title: "Profil Pejabat — BPPK Kementerian Keuangan" },
      { name: "description", content: "Profil pimpinan Badan Pendidikan dan Pelatihan Keuangan: Kepala Badan, Sekretaris, Kepala Pusdiklat, dan PKN STAN." },
      { property: "og:title", content: "Profil Pejabat — BPPK" },
      { property: "og:description", content: "Profil pimpinan BPPK Kementerian Keuangan." },
    ],
  }),
  component: ProfilPejabatPage,
});

type Pejabat = {
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

type PejabatGroup = {
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

const groups: PejabatGroup[] = [
  {
    id: "pimpinan",
    eyebrow: "Pimpinan",
    judul: "Kepala Badan",
    deskripsi:
      "Badan Pendidikan dan Pelatihan Keuangan dipimpin oleh seorang Kepala Badan yang bertanggung jawab langsung kepada Menteri Keuangan dalam menyelenggarakan pendidikan, pelatihan, dan pengembangan SDM Kementerian Keuangan.",
    items: [
      {
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
      },
    ].map(withDefaults),
  },
  {
    id: "sekretariat",
    eyebrow: "Sekretariat",
    judul: "Sekretaris Badan",
    deskripsi:
      "Sekretariat Badan menyelenggarakan koordinasi pelaksanaan tugas, pembinaan, dan pemberian dukungan administrasi kepada seluruh unit organisasi di lingkungan BPPK.",
    items: [
      {
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
      },
    ].map(withDefaults),
  },
  {
    id: "pusdiklat",
    eyebrow: "Pusat Pendidikan dan Pelatihan",
    judul: "Kepala Pusdiklat",
    deskripsi:
      "Pusdiklat dan Pusat di lingkungan BPPK menyelenggarakan pendidikan, pelatihan, sertifikasi, serta pembinaan jabatan fungsional dan penjaminan mutu sesuai bidang masing-masing.",
    items: [
      {
        nama: "Heni Kartikawati",
        jabatan: "Kepala Pusdiklat Kepemimpinan dan Manajemen",
        unit: "Pusdiklat Kepemimpinan dan Manajemen",
        inisial: "HK",
        bio: [
          "Lahir di Yogyakarta pada tanggal 18 Desember 1970 dan menyelesaikan pendidikan Sarjana Psikologi di Universitas Gajah Mada pada tahun 1995, Master of Arts in International Development di Nagoya University pada tahun 2002, serta Magister Psikologi di Universitas Tarumanegara pada tahun 2012. Latar belakang pendidikan tersebut mendukung peran beliau dalam penguatan kepemimpinan, manajemen, dan pengembangan organisasi pembelajar di lingkungan Kementerian Keuangan.",
          "Mengawali karier di Kementerian Keuangan pada tahun 1996, dan saat ini menjabat sebagai Kepala Pusat Pendidikan dan Pelatihan Kepemimpinan dan Manajemen, Kementerian Keuangan sejak tahun 2026. Sebelumnya, beliau menjabat sebagai Kepala Kantor Wilayah Direktorat Jenderal Perbendaharaan Provinsi Riau pada tahun 2024 hingga 2026, serta Kepala Pusat Pendidikan dan Pelatihan Keuangan Umum pada tahun 2018 hingga 2024.",
        ],
        alamatKantor: "Jl. Pancoran Timur II No.1, Cikoko, Kec. Pancoran, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta",
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
    ].map(withDefaults),
  },
  {
    id: "blu",
    eyebrow: "Badan Layanan Umum",
    judul: "Direktur PKN STAN",
    deskripsi:
      "Politeknik Keuangan Negara STAN merupakan perguruan tinggi kedinasan di lingkungan BPPK yang menyelenggarakan pendidikan vokasi calon pengelola keuangan negara.",
    items: [
      {
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
      },
    ].map(withDefaults),
  },
];


function ProfilPejabatPage() {
  const [scrolled, setScrolled] = useState(false);
  const [selected, setSelected] = useState<Pejabat | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [selected]);

  return (
    <>
      {/* NAVBAR */}
      <nav className={`top-navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            <img src={logoPutih.url} alt="BPPK Kementerian Keuangan" />
          </Link>
          <ul className="nav-links">
            <li className="nav-item">
              <a href="#" className="nav-active">Profil <Chevron /></a>
              <ul className="dropdown-menu">
                <li className="has-submenu">
                  <Link to="/profil">Profil Lembaga <span className="submenu-arrow">›</span></Link>
                  <ul className="submenu">
                    <li><Link to="/profil" hash="sejarah">Sejarah BPPK</Link></li>
                    <li><Link to="/profil" hash="visi-misi">Visi dan Misi</Link></li>
                    <li><Link to="/profil" hash="tugas-fungsi">Tugas dan Fungsi</Link></li>
                    <li><Link to="/profil" hash="corpu">Kemenkeu Corpu</Link></li>
                    <li><Link to="/profil" hash="learning-org">Learning Organization</Link></li>
                  </ul>
                </li>
                <li><Link to="/struktur-organisasi">Struktur Organisasi</Link></li>
                <li><Link to="/profil-pejabat">Profil Pejabat</Link></li>
                <li><a href="#">Jejak, Karya, dan Transformasi BPPK</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#">Unit <Chevron /></a>
              <ul className="dropdown-menu">
                <li className="has-submenu">
                  <a href="#">Unit Pusat <span className="submenu-arrow">›</span></a>
                  <ul className="submenu">
                    <li><a href="#">Sekretariat Badan</a></li>
                    <li><a href="#">Pusdiklat Kepemimpinan dan Manajemen</a></li>
                    <li><a href="#">Pusdiklat Anggaran dan Perbendaharaan</a></li>
                    <li><a href="#">Pusdiklat Pajak</a></li>
                    <li><a href="#">Pusdiklat Bea dan Cukai</a></li>
                    <li><a href="#">Pusdiklat Keuangan Publik</a></li>
                    <li><a href="#">Pusat Pembinaan Jabatan Fungsional dan Penjaminan Mutu</a></li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <a href="#">Unit Pelaksana Teknis <span className="submenu-arrow">›</span></a>
                  <ul className="submenu">
                    <li><a href="#">BDK Medan</a></li>
                    <li><a href="#">BDK Pekanbaru</a></li>
                    <li><a href="#">BDK Palembang</a></li>
                    <li><a href="#">BDK Cimahi</a></li>
                    <li><a href="#">BDK Yogyakarta</a></li>
                    <li><a href="#">BDK Malang</a></li>
                    <li><a href="#">BDK Denpasar</a></li>
                    <li><a href="#">BDK Pontianak</a></li>
                    <li><a href="#">BDK Balikpapan</a></li>
                    <li><a href="#">BDK Makassar</a></li>
                    <li><a href="#">BDK Manado</a></li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <a href="#">Badan Layanan Umum <span className="submenu-arrow">›</span></a>
                  <ul className="submenu">
                    <li><a href="#">Politeknik Keuangan Negara STAN</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#">Layanan <Chevron /></a>
              <div className="dropdown-mega mega-2">
                <div className="mega-col">
                  <a href="#">Kemenkeu Learning Center (KLC)</a>
                  <a href="#">Manajemen Pengetahuan (KMS)</a>
                  <a href="#">Sertifikasi</a>
                  <a href="#">Akreditasi</a>
                  <a href="#">Lembaga Sertifikasi Profesi</a>
                  <a href="#">Beasiswa</a>
                </div>
                <div className="mega-col">
                  <a href="#">PENA JFKN</a>
                  <a href="#">Ujian Online</a>
                  <a href="#">Kemenkeu Learning Festival</a>
                  <a href="#">Olimpiade APBN</a>
                  <a href="#">Kerja Sama Program Pembelajaran</a>
                  <a href="#">Regional Training Center</a>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <a href="#">Publikasi <Chevron /></a>
              <ul className="dropdown-menu">
                <li className="has-submenu">
                  <a href="#">Penelitian <span className="submenu-arrow">›</span></a>
                  <ul className="submenu">
                    <li><a href="#">Jurnal</a></li>
                    <li><a href="#">Prosiding Kajian Akademis</a></li>
                    <li><a href="#">Simposium Nasional Keuangan Negara (SNKN)</a></li>
                  </ul>
                </li>
                <li><a href="#">Majalah Edukasi Keuangan</a></li>
                <li><a href="#">Buku</a></li>
                <li><a href="#">Laporan-laporan</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#">Informasi Publik <Chevron /></a>
              <ul className="dropdown-menu">
                <li><a href="#">PPID</a></li>
                <li><a href="#">Laporan/Informasi Publik Lainnya</a></li>
                <li><a href="#">Peraturan</a></li>
              </ul>
            </li>
          </ul>
          <a href="#" className="nav-cta">Hubungi Kami 134</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="profil-hero profil-hero-short">
        <div className="profil-hero-bg" style={{ backgroundImage: `url(${profilHeroBg.url})` }} />
        <div className="profil-hero-overlay" />
        <div className="profil-hero-content container-bppk">
          <nav className="profil-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Beranda</Link>
            <span className="sep">/</span>
            <span>Profil Pejabat</span>
          </nav>
          <p className="profil-hero-eyebrow">TENTANG BPPK</p>
          <h1 className="profil-hero-title">
            Profil <em>Pejabat</em>
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="pejabat-section">
        <div className="container-bppk">
          <header className="pejabat-header">
            <p className="pejabat-eyebrow">PIMPINAN ORGANISASI</p>
            <h2 className="pejabat-title">
              Profil <em>Pimpinan</em> BPPK
            </h2>
            <div className="accent-line" />
          </header>

          {groups.map((g) => (
            <div key={g.id} className="pejabat-group">
              <div className="pejabat-group-head">
                <p className="pejabat-group-eyebrow">{g.eyebrow}</p>
                <h3 className="pejabat-group-title">{g.judul}</h3>
                <p className="pejabat-group-desc">{g.deskripsi}</p>
              </div>
              <div className={`pejabat-grid pejabat-grid-${Math.min(g.items.length, 3)}`}>
                {g.items.map((p, i) => (
                  <article key={`${g.id}-${i}`} className="pejabat-card">
                    <button
                      type="button"
                      className="pejabat-photo pejabat-photo-button"
                      onClick={() => setSelected(p)}
                      aria-label={`Lihat profil ${p.nama}`}
                    >
                      {p.foto ? (
                        <img src={p.foto} alt={p.nama} className="pejabat-photo-img" />
                      ) : (
                        <span className="pejabat-photo-initial">{p.inisial}</span>
                      )}
                      <span className="pejabat-photo-cta">Lihat profil</span>
                    </button>
                    <div className="pejabat-body">
                      <h4 className="pejabat-name">{p.nama}</h4>
                      <p className="pejabat-jabatan">{p.jabatan}</p>
                      <p className="pejabat-unit">{p.unit}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL BIO */}
      {selected && (
        <div
          className="pejabat-modal-backdrop"
          onClick={() => setSelected(null)}
          role="presentation"
        >
          <div
            className="pejabat-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="pejabat-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="pejabat-modal-close"
              onClick={() => setSelected(null)}
              aria-label="Tutup"
            >
              ×
            </button>
            <div className="pejabat-modal-grid">
              <div className="pejabat-modal-photo">
                {selected.foto ? (
                  <img src={selected.foto} alt={selected.nama} />
                ) : (
                  <span className="pejabat-photo-initial">{selected.inisial}</span>
                )}
              </div>
              <div className="pejabat-modal-content">
                <p className="pejabat-modal-eyebrow">{selected.jabatan}</p>
                <h3 id="pejabat-modal-title" className="pejabat-modal-name">
                  {selected.nama}
                </h3>
                <p className="pejabat-modal-unit">{selected.unit}</p>

                {selected.bio && selected.bio.length > 0 && (
                  <section className="pejabat-modal-section pejabat-modal-bio">
                    <h4>Biografi</h4>
                    {selected.bio.map((par, i) => (
                      <p key={i}>{par}</p>
                    ))}
                  </section>
                )}

                {(selected.alamatKantor || selected.email || selected.telepon) && (
                  <section className="pejabat-modal-section">
                    <h4>Alamat Kantor &amp; Kontak</h4>
                    {selected.alamatKantor && (
                      <p className="pejabat-modal-meta">
                        <strong>Alamat:</strong> {selected.alamatKantor}
                      </p>
                    )}
                    {selected.telepon && (
                      <p className="pejabat-modal-meta">
                        <strong>Telepon:</strong> {selected.telepon}
                      </p>
                    )}
                    {selected.email && (
                      <p className="pejabat-modal-meta">
                        <strong>Email:</strong>{" "}
                        <a href={`mailto:${selected.email}`}>{selected.email}</a>
                      </p>
                    )}
                  </section>
                )}

                {selected.lhkpn && (
                  <p className="pejabat-modal-lhkpn">
                    <strong>LHKPN:</strong>{" "}
                    <a href={selected.lhkpn} target="_blank" rel="noreferrer">
                      Unduh di sini
                    </a>
                  </p>
                )}

              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bppk-footer">
        <div className="footer-top-accent" aria-hidden="true" />
        <div className="footer-container">
          <div className="footer-brand-col">
            <img src={logoFooter.url} alt="Logo Kemenkeu BPPK" className="footer-brand-logo" />
            <h3 className="footer-brand-name">Badan Pendidikan dan Pelatihan Keuangan</h3>
            <ul className="footer-contact">
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>Jl. Purnawarman No.99<br />Kebayoran Baru, Jakarta Selatan 12110</span>
              </li>
            </ul>
            <div className="footer-socials">
              <a href="#" aria-label="Instagram" className="footer-social"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
              <a href="#" aria-label="X (Twitter)" className="footer-social"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2H21l-6.52 7.45L22 22h-6.84l-4.78-6.26L4.8 22H2.04l6.97-7.97L2 2h6.96l4.33 5.73L18.244 2zm-2.4 18h1.9L7.27 4H5.25l10.594 16z"/></svg></a>
              <a href="#" aria-label="Facebook" className="footer-social"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
              <a href="#" aria-label="YouTube" className="footer-social"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42A2.78 2.78 0 0 0 20.6 4.5C18.88 4 12 4 12 4s-6.88 0-8.6.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.92 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg></a>
            </div>
          </div>
          <div>
            <h4 className="footer-heading">Jelajahi</h4>
            <ul className="footer-links">
              <li><Link to="/profil">Profil BPPK</Link></li>
              <li><Link to="/profil" hash="corpu">Kemenkeu Corporate University</Link></li>
              <li><Link to="/profil" hash="learning-org">Learning Organization</Link></li>
              <li><a href="#">Kemenkeu Learning Center</a></li>
              <li><a href="#">Knowledge Management System</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-inner">
            <span>© 2026 Badan Pendidikan dan Pelatihan Keuangan — Kementerian Keuangan Republik Indonesia.</span>
            <span className="footer-bottom-links">
              <a href="#">Kebijakan Privasi</a>
              <span className="footer-bottom-sep">·</span>
              <a href="#">Syarat &amp; Ketentuan</a>
              <span className="footer-bottom-sep">·</span>
              <a href="#">Peta Situs</a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

function Chevron() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>;
}
