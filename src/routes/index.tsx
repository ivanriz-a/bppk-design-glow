import { createFileRoute } from "@tanstack/react-router";
import { Fragment, useEffect, useRef, useState } from "react";
import hero1 from "@/assets/hero-1.png.asset.json";
import hero2 from "@/assets/hero-2.png.asset.json";
import hero3 from "@/assets/hero-3.png.asset.json";
import logoPutih from "@/assets/logo-bppk-putih.png.asset.json";
import logoFooter from "@/assets/logo-kemenkeu-bppk-putih.png.asset.json";
import edukasiCover from "@/assets/edukasi-cover.jpg.asset.json";
import edukasiHalftone from "@/assets/edukasi-halftone.png.asset.json";
import coverJurnal from "@/assets/cover-jurnal.jpg.asset.json";
import bgJurnal from "@/assets/background-jurnal.jpg.asset.json";
import coverBuku from "@/assets/cover-buku.png.asset.json";
import bgBuku from "@/assets/background-buku.jpeg.asset.json";
import logoKemenkeu from "@/assets/logo-kemenkeu.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BPPK — Badan Pendidikan dan Pelatihan Keuangan" },
      { name: "description", content: "Portal resmi Badan Pendidikan dan Pelatihan Keuangan, Kementerian Keuangan Republik Indonesia." },
      { property: "og:title", content: "BPPK — Kementerian Keuangan" },
      { property: "og:description", content: "Pendidikan, pelatihan, dan sertifikasi keuangan negara." },
    ],
  }),
  component: Home,
});

const heroSlides = [
  {
    eyebrow: "KEMENTERIAN KEUANGAN RI",
    pre: "Membangun",
    italic: "Kompetensi",
    post: "Keuangan Negara.",
    desc: "Pusat pengembangan SDM aparatur negara melalui pembelajaran modern, terintegrasi, dan inklusif.",
    image: hero1.url,
  },
  {
    eyebrow: "INTEGRITAS BPPK",
    pre: "Tolak",
    italic: "Gratifikasi",
    post: "Tegakkan Integritas.",
    desc: "BPPK menolak gratifikasi dalam bentuk apapun. Bersama ciptakan wilayah bebas dari korupsi.",
    image: hero3.url,
  },
  {
    eyebrow: "VISI BPPK",
    pre: "Pendidikan",
    italic: "Berkelas",
    post: "Dunia.",
    desc: "Mencetak SDM pengelola keuangan negara yang unggul, adaptif, dan berintegritas tinggi.",
    image: hero2.url,
  },
];

const services = [
  { title: "Kemenkeu Learning Center", desc: "Platform pembelajaran digital terintegrasi untuk seluruh pegawai Kementerian Keuangan.", bg: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80", icon: <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /> },
  { title: "Knowledge Management", desc: "Sistem manajemen pengetahuan untuk berbagi wawasan dan inovasi.", bg: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80", icon: <polygon points="5 3 19 12 5 21 5 3" /> },
  { title: "Sertifikasi", desc: "Layanan sertifikasi untuk menjamin kualitas standar kompetensi.", bg: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&q=80", icon: <><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></> },
  { title: "PENA JFKN", desc: "Pusat edukasi dan nilai tambah Jabatan Fungsional Keuangan Negara.", bg: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80", icon: <><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></> },
  { title: "Beasiswa", desc: "Program beasiswa pengembangan SDM unggul keuangan negara.", bg: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80", icon: <><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></> },
  { title: "PKN STAN", desc: "Pendidikan kedinasan unggulan untuk calon pengelola keuangan negara.", bg: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=600&q=80", icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /> },
];

const pelatihanList = [
  { day: "05", month: "Nov", title: "Pelatihan Dasar CPNS Golongan III", unit: "Pusdiklat Keuangan Umum" },
  { day: "08", month: "Nov", title: "Pelatihan Analisis Keuangan Dasar", unit: "Pusdiklat Anggaran" },
  { day: "12", month: "Nov", title: "Audit Investigatif Lanjutan", unit: "Pusdiklat Pajak" },
  { day: "15", month: "Nov", title: "Sertifikasi Bendahara Penerimaan", unit: "LSP BPPK" },
  { day: "19", month: "Nov", title: "Manajemen Proyek Agile Tingkat Lanjut", unit: "Pusdiklat Anggaran" },
  { day: "22", month: "Nov", title: "Kepemimpinan Strategis di Era Digital", unit: "Pusdiklat Kepemimpinan" },
  { day: "26", month: "Nov", title: "Analisis Data Makroekonomi Lanjutan", unit: "Pusdiklat Keuangan Umum" },
];
const kegiatanList = [
  { day: "03", month: "Nov", title: "Rapat Koordinasi Pengembangan SDM", unit: "Sekretariat Badan" },
  { day: "07", month: "Nov", title: "Workshop Reformasi Birokrasi", unit: "Pusdiklat PSDM" },
  { day: "10", month: "Nov", title: "Forum Diskusi Auditor Internal", unit: "Itjen Kemenkeu" },
  { day: "14", month: "Nov", title: "Knowledge Sharing BPPK", unit: "Knowledge Management" },
  { day: "17", month: "Nov", title: "Kunjungan Mitra Akademik", unit: "PKN STAN" },
  { day: "21", month: "Nov", title: "Seminar Transformasi Digital", unit: "Pusdiklat Pajak" },
  { day: "25", month: "Nov", title: "Penandatanganan MoU Kerja Sama", unit: "Sekretariat Badan" },
];

const trainings = [
  { badge: "E-Learning", title: "Pelatihan Analisis Keuangan Dasar", subtitle: "pusdiklat keuangan umum", rating: "4.8", peserta: "1.5k", img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80" },
  { badge: "Microlearning", title: "Kepemimpinan Strategis di Era Digital", subtitle: "pusdiklat kepemimpinan", rating: "4.9", peserta: "850", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80" },
  { badge: "E-Learning", title: "Manajemen Proyek Agile Tingkat Lanjut", subtitle: "pusdiklat anggaran & perbendaharaan", rating: "4.7", peserta: "2.1k", img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80" },
  { badge: "Microlearning", title: "Tata Kelola Keuangan Tingkat Dasar", subtitle: "pusdiklat pajak", rating: "4.9", peserta: "3.4k", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80" },
  { badge: "E-Learning", title: "Analisis Data Makroekonomi Lanjutan", subtitle: "pusdiklat keuangan umum", rating: "4.6", peserta: "1.1k", img: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&w=600&q=80" },
  { badge: "Microlearning", title: "Komunikasi Publik Strategis", subtitle: "pusdiklat kepemimpinan", rating: "4.9", peserta: "940", img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&q=80" },
];

const knowledge = [
  { badge: "Jurnal", title: "Jurnal BPPK Vol. 16 Tahun 2026", subtitle: "kajian akademik", rating: "4.7", peserta: "1.2k", img: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=600&q=80" },
  { badge: "Modul", title: "Modul Pengantar Akuntansi Pemerintahan", subtitle: "pusdiklat anggaran", rating: "4.8", peserta: "2.0k", img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=600&q=80" },
  { badge: "Artikel", title: "Transformasi Digital Sektor Publik", subtitle: "knowledge management", rating: "4.6", peserta: "3.1k", img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80" },
  { badge: "Riset", title: "Evaluasi Pasca Diklat Kemenkeu", subtitle: "pusat kajian", rating: "4.7", peserta: "780", img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80" },
];

type NewsItem = { date: string; title: string; excerpt: string; img: string };
const newsData: Record<"Berita" | "Pengumuman" | "Artikel", NewsItem[]> = {
  Berita: [
    { date: "15 Mei 2026", title: "Pembukaan Pelatihan Teknis di Lingkungan Keuangan Publik", excerpt: "Pusdiklat Keuangan Umum menyelenggarakan program strategis peningkatan kapasitas SDM yang diikuti oleh seluruh pegawai.", img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=80" },
    { date: "12 Mei 2026", title: "Rapat Koordinasi Pengembangan Kompetensi Aparatur", excerpt: "Memperkuat pengembangan kompetensi SDM melalui rapat koordinasi lintas unit untuk merumuskan kebijakan strategis.", img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80" },
    { date: "10 Mei 2026", title: "Penandatanganan MoU dengan Mitra Akademik Terkemuka", excerpt: "Penguatan kolaborasi antara lembaga pelatihan pemerintah dengan institusi pendidikan tinggi resmi dimulai.", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80" },
    { date: "08 Mei 2026", title: "Kunjungan Delegasi Internasional ke Kampus BPPK", excerpt: "Delegasi mitra internasional berbagi praktik terbaik dalam pengembangan kompetensi sektor publik.", img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&q=80" },
    { date: "05 Mei 2026", title: "Peluncuran Program Akselerasi Talenta Digital", excerpt: "Program akselerasi membekali ASN dengan keterampilan digital terkini untuk transformasi layanan publik.", img: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&w=600&q=80" },
  ],
  Pengumuman: [
    { date: "20 Mei 2026", title: "Pengumuman Hasil Seleksi Beasiswa S2 Dalam Negeri", excerpt: "Daftar peserta yang lolos tahap akhir seleksi beasiswa pascasarjana telah dipublikasikan.", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80" },
    { date: "18 Mei 2026", title: "Jadwal Ujian Sertifikasi Kompetensi Periode Juni", excerpt: "Peserta diharapkan memperhatikan jadwal pelaksanaan ujian sertifikasi yang akan datang.", img: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=600&q=80" },
    { date: "14 Mei 2026", title: "Perubahan Jadwal Pelatihan Manajerial Tingkat Madya", excerpt: "Mohon perhatian peserta pelatihan terkait perubahan jadwal dan lokasi pelaksanaan kelas.", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80" },
    { date: "11 Mei 2026", title: "Pembukaan Pendaftaran Magang Mahasiswa di BPPK", excerpt: "Kesempatan bagi mahasiswa untuk mendapatkan pengalaman langsung di lingkungan kerja BPPK.", img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&q=80" },
  ],
  Artikel: [
    { date: "16 Mei 2026", title: "Transformasi Digital pada Manajemen Keuangan Negara", excerpt: "Bagaimana teknologi mengubah lanskap pengelolaan anggaran serta akuntabilitas publik di Indonesia.", img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80" },
    { date: "13 Mei 2026", title: "Membangun Budaya Belajar Berkelanjutan di Sektor Publik", excerpt: "Strategi praktis menumbuhkan kebiasaan belajar yang adaptif di kalangan aparatur negara.", img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80" },
    { date: "09 Mei 2026", title: "Peran Analitik Data dalam Pengambilan Keputusan Kebijakan", excerpt: "Pemanfaatan data analitik menjadi kunci ketepatan kebijakan publik berbasis bukti.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" },
    { date: "06 Mei 2026", title: "Kepemimpinan Adaptif di Era Ketidakpastian", excerpt: "Pendekatan kepemimpinan yang fleksibel untuk menghadapi tantangan dinamis sektor publik.", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80" },
  ],
};
const newsTabs = ["Berita", "Pengumuman", "Artikel"] as const;
type NewsTab = typeof newsTabs[number];

const synergy = ["Setjen", "Itjen", "Pajak", "Bea Cukai", "Anggaran", "Perbendaharaan", "Kekayaan"];
const dates: Array<{ d: number; cls?: string; name?: string }> = [
  { d: 28, cls: "date-muted" }, { d: 29, cls: "date-muted" }, { d: 30, cls: "date-muted" },
  { d: 1 }, { d: 2 }, { d: 3 }, { d: 4 },
  { d: 5, cls: "date-event-pelatihan", name: "Pelatihan Dasar CPNS Golongan III" }, { d: 6 }, { d: 7, cls: "date-event-kegiatan", name: "Rapat Koordinasi Pengembangan SDM" }, { d: 8 }, { d: 9 }, { d: 10 }, { d: 11 },
  { d: 12, cls: "date-event-pelatihan", name: "Pelatihan Analisis Keuangan Dasar" }, { d: 13 }, { d: 14 }, { d: 15, cls: "date-event-kegiatan", name: "Workshop Reformasi Birokrasi" }, { d: 16 }, { d: 17, cls: "date-event-both", name: "Sertifikasi Bendahara\nForum Diskusi Auditor" }, { d: 18 },
  { d: 19 }, { d: 20 }, { d: 21, cls: "date-event-kegiatan", name: "Knowledge Sharing BPPK" }, { d: 22 }, { d: 23 }, { d: 24, cls: "date-today" }, { d: 25 },
  { d: 26 }, { d: 27 }, { d: 28, cls: "date-event-pelatihan", name: "Audit Investigatif Lanjutan" }, { d: 29 }, { d: 30 }, { d: 31 },
];

function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [slide, setSlide] = useState(0);
  const [tab, setTab] = useState<"open" | "pusat">("open");
  const trackRef = useRef<HTMLDivElement>(null);
  const newsTrackRef = useRef<HTMLDivElement>(null);
  const [newsTab, setNewsTab] = useState<NewsTab>("Berita");
  const [hoveredPub, setHoveredPub] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 6000);
    return () => clearInterval(id);
  }, []);

  const activeList = tab === "open" ? trainings : knowledge;

  return (
    <>
      {/* NAVBAR */}
      <nav className={`top-navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <a href="#" className="nav-logo">
            <img src={logoPutih.url} alt="BPPK Kementerian Keuangan" />
          </a>
          <ul className="nav-links">
            <li className="nav-item">
              <a href="#">Profil <Chevron /></a>
              <ul className="dropdown-menu">
                <li className="has-submenu">
                  <a href="#">Profil Lembaga <span className="submenu-arrow">›</span></a>
                  <ul className="submenu">
                    <li><a href="#">Sejarah BPPK</a></li>
                    <li><a href="#">Visi dan Misi</a></li>
                    <li><a href="#">Tugas dan Fungsi</a></li>
                    <li><a href="#">Learning Organization</a></li>
                  </ul>
                </li>
                <li><a href="#">Struktur Organisasi</a></li>
                <li><a href="#">Profil Pejabat</a></li>
                <li><a href="#">Jejak, Karya, dan Transformasi BPPK</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#">Unit <Chevron /></a>
              <div className="dropdown-mega mega-3">
                <div className="mega-col">
                  <div className="mega-title">Unit Pusat</div>
                  <a href="#">Sekretariat Badan</a>
                  <a href="#">Pusdiklat Kepemimpinan dan Manajemen</a>
                  <a href="#">Pusdiklat Anggaran dan Perbendaharaan</a>
                  <a href="#">Pusdiklat Pajak</a>
                  <a href="#">Pusdiklat Bea dan Cukai</a>
                  <a href="#">Pusdiklat Keuangan Publik</a>
                  <a href="#">Pusat Pembinaan Jabatan Fungsional dan Penjaminan Mutu</a>
                </div>
                <div className="mega-col">
                  <div className="mega-title">Unit Pelaksana Teknis</div>
                  <a href="#">BDK Medan</a>
                  <a href="#">BDK Pekanbaru</a>
                  <a href="#">BDK Palembang</a>
                  <a href="#">BDK Cimahi</a>
                  <a href="#">BDK Yogyakarta</a>
                  <a href="#">BDK Malang</a>
                  <a href="#">BDK Denpasar</a>
                  <a href="#">BDK Pontianak</a>
                  <a href="#">BDK Balikpapan</a>
                  <a href="#">BDK Makassar</a>
                  <a href="#">BDK Manado</a>
                </div>
                <div className="mega-col">
                  <div className="mega-title">Badan Layanan Umum</div>
                  <a href="#">Politeknik Keuangan Negara STAN</a>
                </div>
              </div>
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
      <section className="hero-section">
        {heroSlides.map((s, i) => (
          <div key={i} className={`hero-bg ${i === slide ? "active" : ""}`} style={{ backgroundImage: `url(${s.image})` }} />
        ))}
        <div className="hero-overlay" />
        <div className="container-bppk">
          <div className="hero-content-wrapper">
            {heroSlides.map((s, i) => (
              <div key={i} className={`hero-text-slide ${i === slide ? "active" : ""}`}>
                <div className="hero-eyebrow"><svg className="hero-eyebrow-star" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 1.5l2.2 6.1 6.3.4-4.9 4.1 1.7 6.2L12 14.9 6.7 18.3l1.7-6.2-4.9-4.1 6.3-.4z"/></svg><span>{s.eyebrow}</span></div>
                <h1 className="hero-title"><span className="ht-line">{s.pre}</span><span className="ht-italic">{s.italic}</span><span className="ht-line">{s.post}</span></h1>
                <p className="hero-desc">{s.desc}</p>
                <a href="#" className="hero-btn">Selengkapnya <span>→</span></a>
              </div>
            ))}
            <div className="carousel-indicators">
              {heroSlides.map((_, i) => (
                <button key={i} className={`indicator ${i === slide ? "active" : ""}`} onClick={() => setSlide(i)} aria-label={`Slide ${i + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES + CALENDAR */}
      <div className="content-layer-1">
        <div className="container-bppk">
          <div className="floating-services">
            {services.map((s, i) => (
              <a key={i} href="#" className="service-card" style={{ ["--bg-img" as never]: `url(${s.bg})` } as React.CSSProperties}>
                <style>{`.floating-services > a:nth-child(${i + 1})::before { background-image: linear-gradient(to top, rgba(4,79,116,0.95), rgba(4,79,116,0.4)), url('${s.bg}'); }`}</style>
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">{s.icon}</svg>
                </div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
                <div className="service-link">Kunjungi <span>›</span></div>
              </a>
            ))}
          </div>

          <div className="calendar-header-block">
            <div className="section-eyebrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>AGENDA</div>
            <div className="calendar-header-row">
              <h2 className="section-title">Kalender<span className="st-italic">BPPK.</span></h2>
              <p className="section-lead">Agenda pengembangan kompetensi yang akan datang dari seluruh unit di lingkungan BPPK.</p>
            </div>
          </div>

          <div className="calendar-grid">
            <div className="calendar-col">
              <div className="mock-widget calendar-widget">
                <div className="calendar-header">
                  <div className="calendar-month">Oktober <span className="cal-year">2026</span></div>
                  <div className="cal-nav-group">
                    <button className="cal-nav-btn">‹</button>
                    <button className="cal-nav-btn">›</button>
                  </div>
                </div>
                <div className="calendar-days">
                  {["S","S","R","K","J","S","M"].map((d, i) => <div key={i} className={i === 6 ? "day-sunday" : ""}>{d}</div>)}
                </div>
                <div className="calendar-dates">
                  {dates.map((d, i) => (
                    <div key={i} className={`date-num ${d.cls ?? ""} ${i % 7 === 6 ? "date-sunday" : ""}`} data-event-name={d.name ?? undefined} title={d.name ?? undefined}>
                      <span>{d.d}</span>
                      {d.name && (
                        <span className="date-tooltip">
                          {d.name.split("\n").map((line, idx, arr) => (
                            <Fragment key={idx}>
                              {line}
                              {idx < arr.length - 1 && <span className="tooltip-divider" />}
                            </Fragment>
                          ))}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
                <div className="calendar-legend">
                  <span><i className="dot-pelatihan" />Pelatihan</span>
                  <span><i className="dot-kegiatan" />Kegiatan</span>
                  <span><i className="dot-today" />Hari Ini</span>
                  <span className="legend-count">5 Agenda</span>
                </div>
              </div>
            </div>
            <div className="schedule-col">
              <div className="schedule-list">
                {schedules.map((s, i) => (
                  <a key={i} href="#" className="schedule-row">
                    <div className="sch-date-block">
                      <div className="sch-day">{s.day}</div>
                      <div className="sch-month">{s.month}</div>
                    </div>
                    <div className="sch-info">
                      <h4 className="sch-title">{s.title}</h4>
                      <div className="sch-unit">{s.unit}</div>
                    </div>
                    <svg className="sch-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="agenda-more-wrap">
            <a href="#" className="agenda-more">
              Agenda Lainnya
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </a>
          </div>


          {/* LEARNING CENTER */}
          <div className="learning-header-row">
            <div className="learning-header-left">
              <div className="section-eyebrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>PEMBELAJARAN</div>
              <h2 className="section-title">Pusat pembelajaran<span className="st-italic">unggulan.</span></h2>
            </div>
            <div className="learning-toolbar-right">
              <div className="section-tabs">
                <button className={`section-tab ${tab === "open" ? "active" : ""}`} onClick={() => setTab("open")}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="9" y1="3" x2="9" y2="21" /></svg>
                  Open Access
                </button>
                <button className={`section-tab ${tab === "pusat" ? "active" : ""}`} onClick={() => setTab("pusat")}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                  Pusat Pengetahuan
                </button>
              </div>
              <div className="section-tabs nav-arrows-group" style={{ padding: 4, gap: 4 }}>
                <button className="nav-btn-custom" onClick={() => trackRef.current?.scrollBy({ left: -300, behavior: "smooth" })}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg></button>
                <button className="nav-btn-custom" onClick={() => trackRef.current?.scrollBy({ left: 300, behavior: "smooth" })}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg></button>
              </div>
            </div>
          </div>

          <div ref={trackRef} className="tab-content-wrapper active" key={tab}>
            {activeList.map((c, i) => (
              <div key={i} className="oa-card">
                <span className="oa-badge">{c.badge}</span>
                <div className="oa-img-wrapper">
                  <div className="oa-img" style={{ backgroundImage: `url(${c.img})` }} />
                  <div className="oa-overlay" />
                </div>
                <div className="oa-body">
                  <div>
                    <h3 className="oa-title">{c.title}</h3>
                    <div className="oa-subtitle">{c.subtitle}</div>
                    <div className="oa-footer">
                      <div className="oa-meta-group">
                        <div className="oa-meta-item">
                          <span className="oa-meta-val" style={{ display: "flex", alignItems: "center", gap: 4 }}>
                            {c.rating} <Star />
                          </span>
                          <span className="oa-meta-label">Rating</span>
                        </div>
                        <div className="oa-meta-item">
                          <span className="oa-meta-val">{c.peserta}</span>
                          <span className="oa-meta-label">Peserta</span>
                        </div>
                      </div>
                      <a href="#" className="btn-pill">Detail</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="agenda-more-wrap">
            <a href="#" className="agenda-more">{tab === "open" ? "Pelatihan Lainnya" : "Pengetahuan Lainnya"}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </a>
          </div>
        </div>
      </div>

      {/* PUBLIKASI (Gulungan) */}
      <div className="floating-strip-section">
        <div className="blue-strip-bg">
          <div className="bppk-texture-1" />
          <div className="bppk-texture-2" />
        </div>
        <div className="container-bppk strip-content-wrapper">
          <div className="pub-text">
            <div className="section-eyebrow" style={{ color: "var(--bppk-yellow)" }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>LITERASI</div>
            <h2 className="pub-headline">Eksplorasi<span className="st-italic">literasi BPPK.</span></h2>
            <p>Akses ribuan halaman jurnal, majalah, dan modul pembelajaran resmi dari BPPK.</p>
          </div>
          {(() => {
            const pubItems = [
              {
                year: "2026",
                edisi: "Edisi 03",
                masthead: [
                  { text: "MAJALAH" },
                  { text: "EDUKASI", accent: true },
                  { text: "KEUANGAN" },
                ],
                title: "Nyala Membara Semangat Jaga Keuangan Negara",
                desc: "Majalah Edukasi Keuangan kembali hadir membawa cerita baru untuk menemani refleksi akhir tahun yang hampir saja selesai dilewati dengan setiap peran kita masing-masing.",
                cover: edukasiCover.url,
                halftone: edukasiHalftone.url,
                category: "Majalah Edukasi",
              },
              {
                year: "2026",
                edisi: "Vol. 16 No. 2",
                masthead: [
                  { text: "JURNAL", accent: true },
                  { text: "BPPK" },
                ],
                title: "Evaluasi Pasca Diklat di Era Transformasi Digital",
                desc: "Kajian akademik tentang efektivitas pelatihan, analisis kebutuhan kompetensi, dan strategi pengembangan SDM keuangan negara berbasis bukti.",
                cover: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
                halftone: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
                category: "Jurnal Ilmiah",
              },
              {
                year: "2026",
                edisi: "Seri Kepemimpinan",
                masthead: [
                  { text: "BUKU", accent: true },
                  { text: "BPPK" },
                ],
                title: "Srikandi Perubahan, Inspirasi Bagi Perempuan",
                desc: "Akses bebas unduh ke ratusan modul ajar komprehensif untuk mendukung pembelajaran berkelanjutan di lingkungan Kementerian Keuangan.",
                cover: "https://images.unsplash.com/photo-1575505586569-646b2ca898fc?auto=format&fit=crop&w=600&q=80",
                halftone: "https://images.unsplash.com/photo-1575505586569-646b2ca898fc?auto=format&fit=crop&w=900&q=80",
                category: "Buku & Modul",
              },
            ];
            const cols = pubItems
              .map((_, i) => (hoveredPub === null ? "1fr" : hoveredPub === i ? "2.4fr" : "0.6fr"))
              .join(" ");
            return (
              <div
                className={`pub-cards-wrapper ${hoveredPub !== null ? "has-active" : ""}`}
                style={{ gridTemplateColumns: cols }}
                onMouseLeave={() => setHoveredPub(null)}
              >
                {pubItems.map((p, i) => (
                  <a
                    href="#"
                    key={i}
                    className={`pub-card ${hoveredPub === i ? "is-active" : ""} ${hoveredPub !== null && hoveredPub !== i ? "is-collapsed" : ""}`}
                    onMouseEnter={() => setHoveredPub(i)}
                    onFocus={() => setHoveredPub(i)}
                    onBlur={() => setHoveredPub(null)}
                  >
                    <div className="pub-card-bg" style={{ backgroundImage: `url('${p.halftone}')` }} />
                    <div className="pub-card-tint" />
                    <div className="pub-card-inner">
                      <div className="pc-top">
                        <div className="pc-left">
                          <span className="pub-year">{p.year}</span>
                          <h3 className="pub-masthead">
                            {p.masthead.map((m, idx) => (
                              <span key={idx} className={`mh-line${m.accent ? " mh-accent" : ""}`}>
                                {m.text}
                              </span>
                            ))}
                          </h3>
                        </div>
                      </div>
                      <div className="pc-cover">
                        <img className="pub-cover-real" src={p.cover} alt={p.title} />
                      </div>
                      <div className="pc-default-bottom">
                        <span className="pub-edisi">{p.edisi}</span>
                        <p className="pub-headline-title">{p.title}</p>
                      </div>
                      <div className="pc-text">
                        <span className="pub-edisi">{p.edisi}</span>
                        <h4 className="pub-right-title">{p.title}</h4>
                        <p className="pub-desc-full">{p.desc}</p>
                      </div>
                      <div className="pc-cta">
                        <span className="btn-read">Baca Selengkapnya</span>
                        <span className="btn-more">Edisi Lainnya →</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            );
          })()}
        </div>
      </div>

      {/* NEWS */}
      <div className="content-layer-2">
        <div className="container-bppk">
          <div className="news-header-row">
            <div>
              <div className="section-eyebrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8M15 18h-5M10 6h8v4h-8z"/></svg>BERITA</div>
              <h2 className="section-title">Informasi<span className="st-italic">terbaru.</span></h2>
            </div>
            <div className="news-toolbar-right">
              <div className="search-box news-search-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                <input placeholder="Cari berita atau informasi…" />
              </div>
              <div className="news-tabs-row">
                <div className="section-tabs">
                  {newsTabs.map((t) => (
                    <button
                      key={t}
                      type="button"
                      className={`section-tab ${newsTab === t ? "active" : ""}`}
                      onClick={() => setNewsTab(t)}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                <div className="section-tabs nav-arrows-group" style={{ padding: 4, gap: 4 }}>
                  <button type="button" className="nav-btn-custom" aria-label="Sebelumnya" onClick={() => newsTrackRef.current?.scrollBy({ left: -340, behavior: "smooth" })}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
                  </button>
                  <button type="button" className="nav-btn-custom" aria-label="Berikutnya" onClick={() => newsTrackRef.current?.scrollBy({ left: 340, behavior: "smooth" })}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {newsTab === "Peraturan" ? (
            <div className="jdih-callout">
              <div className="jdih-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="13" y2="17"/></svg>
              </div>
              <div className="jdih-text">
                <h3>Informasi terkait Peraturan dapat diakses pada situs web JDIH</h3>
                <p>Jaringan Dokumentasi dan Informasi Hukum (JDIH) Kementerian Keuangan memuat seluruh peraturan resmi BPPK.</p>
              </div>
              <a href="https://jdih.kemenkeu.go.id" target="_blank" rel="noopener noreferrer" className="jdih-btn">Kunjungi Situs JDIH
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
              </a>
            </div>
          ) : (
            <div ref={newsTrackRef} className="news-carousel" key={newsTab}>
              {newsData[newsTab].map((n, i) => (
                <div key={i} className="news-card">
                  <div className="news-img-wrapper">
                    <div className="news-img" style={{ backgroundImage: `url(${n.img})` }} />
                    <div className="news-overlay" />
                  </div>
                  <div className="news-content">
                    <div className="news-date">{n.date}</div>
                    <h3 className="news-title">{n.title}</h3>
                    <p className="news-excerpt">{n.excerpt}</p>
                    <div className="news-footer">
                      <a href="#" className="btn-pill-outline">Baca Selengkapnya</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="agenda-more-wrap">
            <a href="#" className="agenda-more">Informasi Lainnya
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </a>
          </div>
        </div>
      </div>

      {/* SYNERGY */}
      <div className="content-layer-4">
        <div className="container-bppk">
          <div style={{ textAlign: "center", marginBottom: 18 }}>
            <p style={{ color: "var(--text-gray)", fontWeight: 700, fontSize: "0.82rem", margin: 0, textTransform: "uppercase", letterSpacing: 2 }}>Sinergi Kementerian Keuangan</p>
          </div>
          <div className="synergy-wrapper">
            <a href="#" className="parent-area">
              <div className="kemenkeu-logo">Kemenkeu</div>
              <div style={{ fontSize: "0.72rem", color: "var(--text-gray)", fontWeight: 700, textAlign: "center", textTransform: "uppercase" }}>Kementerian<br />Keuangan</div>
            </a>
            <div className="scrolling-area">
              <div className="ticker">
                {[...synergy, ...synergy].map((label, i) => (
                  <a key={i} href="#" className="ticker-item">
                    <div className="ticker-logo">{label.slice(0,4)}</div>
                    <span style={{ fontSize: "0.72rem", color: "#888", fontWeight: 700 }}>{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

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
          </div>
          <div>
            <h4 className="footer-heading">Jelajahi</h4>
            <ul className="footer-links">
              <li><a href="#">Profil BPPK</a></li>
              <li><a href="#">Kemenkeu Corporate University</a></li>
              <li><a href="#">Learning Organization</a></li>
              <li><a href="#">Kemenkeu Learning Center</a></li>
              <li><a href="#">Knowledge Management System</a></li>
            </ul>
          </div>
          <div className="footer-right-col">
            <div className="footer-socials">
              <a href="#" aria-label="Instagram" className="footer-social">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" aria-label="X (Twitter)" className="footer-social">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2H21l-6.52 7.45L22 22h-6.84l-4.78-6.26L4.8 22H2.04l6.97-7.97L2 2h6.96l4.33 5.73L18.244 2zm-2.4 18h1.9L7.27 4H5.25l10.594 16z"/></svg>
              </a>
              <a href="#" aria-label="Facebook" className="footer-social">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" aria-label="YouTube" className="footer-social">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42A2.78 2.78 0 0 0 20.6 4.5C18.88 4 12 4 12 4s-6.88 0-8.6.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.92 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
              </a>
            </div>
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
function Star() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="var(--bppk-yellow)" stroke="var(--bppk-yellow)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>;
}
