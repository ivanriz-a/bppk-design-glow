import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import hero1 from "@/assets/hero-1.png.asset.json";
import hero2 from "@/assets/hero-2.png.asset.json";
import hero3 from "@/assets/hero-3.png.asset.json";
import edukasiCover from "@/assets/edukasi-cover.jpg.asset.json";
import bgJurnal from "@/assets/background-jurnal.jpg.asset.json";
import bgBuku from "@/assets/background-buku.jpeg.asset.json";
import coverBuku from "@/assets/cover-buku.png.asset.json";
import profilHeroBg from "@/assets/profil-hero-bg.png.asset.json";
import logoPutih from "@/assets/logo-bppk-putih.png.asset.json";
import logoFooter from "@/assets/logo-kemenkeu-bppk-putih.png.asset.json";

export const Route = createFileRoute("/profil")({
  head: () => ({
    meta: [
      { title: "Profil Lembaga — BPPK Kementerian Keuangan" },
      { name: "description", content: "Mengenal Badan Pendidikan dan Pelatihan Keuangan: sejarah, visi & misi, tugas & fungsi, Kemenkeu Corpu, dan Learning Organization." },
      { property: "og:title", content: "Profil Lembaga — BPPK" },
      { property: "og:description", content: "Mengenal Badan Pendidikan dan Pelatihan Keuangan, Kementerian Keuangan RI." },
    ],
  }),
  component: ProfilPage,
});

type SectionId = "sejarah" | "visi-misi" | "tugas-fungsi" | "corpu" | "learning-org";

const sections: { id: SectionId; num: string; label: string }[] = [
  { id: "sejarah", num: "01", label: "Sejarah BPPK" },
  { id: "visi-misi", num: "02", label: "Visi dan Misi" },
  { id: "tugas-fungsi", num: "03", label: "Tugas dan Fungsi" },
  { id: "corpu", num: "04", label: "Kemenkeu Corpu" },
  { id: "learning-org", num: "05", label: "Learning Organization" },
];

const milestones = [
  { year: "1952", title: "Akademi Ajun Akuntan", desc: "Departemen Keuangan membentuk Akademi Ajun Akuntan Negara dan Akademi Ajun Akuntan Pajak untuk menyiapkan kader pimpinan pengelola keuangan negara pasca pengakuan kedaulatan RI.", img: hero1.url },
  { year: "1959", title: "Sekolah Tinggi Ilmu Keuangan Negara", desc: "Berdasarkan SK Menkeu No. 175402/UP/X tanggal 31 Desember 1959, dibentuk STIKN dengan empat jurusan: Pajak Umum, Bea dan Cukai, Kebendaharaan Umum, dan Akuntansi.", img: hero2.url },
  { year: "1968", title: "Institut Ilmu Keuangan Negara (IIK)", desc: "Keppres RI Nomor 167 Tahun 1968 membentuk IIK yang meleburkan STIKN, Akademi Treasury Negara (ATN), dan Akademi Dinas Pemeriksa Keuangan (ADPK).", img: hero3.url },
  { year: "1975", title: "Lahirnya BPLK", desc: "Diresmikan melalui Keppres No. 44 Tahun 1974 dan KMK No. 405/MK/6/4/1975. Tanggal 16 April 1975 ditetapkan sebagai hari jadi BPLK, dengan Bapak Mulyatno Sindhudarmoko sebagai Kepala BPLK pertama.", img: edukasiCover.url },
  { year: "1987", title: "Penguatan Balai Diklat", desc: "Melalui KMK No. 189/KMK.01/1987 dibentuk Balai Diklat di Medan, Yogyakarta, Ujung Pandang, dan Kediri — melengkapi Pusdiklat Pegawai di Magelang yang berdiri sejak 1984.", img: bgJurnal.url },
  { year: "2001", title: "Transformasi BPLK menjadi BPPK", desc: "Berdasarkan KMK No. 2/KMK.01/2001, BPLK berubah nama menjadi Badan Pendidikan dan Pelatihan Keuangan (BPPK) dengan susunan Sekretariat Badan dan lima Pusdiklat.", img: bgBuku.url },
  { year: "2023", title: "Organisasi BPPK Terkini", desc: "Berdasarkan PMK Nomor 135 Tahun 2023, BPPK terdiri dari 1 Sekretariat, 5 Pusdiklat, dan 1 Pusat Pembinaan Jabatan Fungsional dan Penjaminan Mutu, didukung 11 BDK serta PKN STAN.", img: hero1.url },
];

const misi = [
  "Mewujudkan pendidikan tinggi vokasi bereputasi unggul dan bertaraf internasional serta pengelolaan tugas belajar yang efektif dan tepat sasaran.",
  "Menyelenggarakan program pembelajaran yang berdampak dalam kerangka Kementerian Keuangan Corporate University.",
  "Mewujudkan sertifikasi kompetensi di bidang keuangan negara dan sektor keuangan, serta akreditasi program pembelajaran di bidang keuangan negara yang andal.",
  "Mewujudkan pengelolaan jabatan fungsional di bidang keuangan negara melalui pembinaan jabatan fungsional yang profesional dan adaptif.",
  "Memperkuat penelitian di bidang keuangan negara dan sektor keuangan yang didukung manajemen pengetahuan.",
  "Mewujudkan pengelolaan sumber daya organisasi yang andal dan adaptif untuk mendukung kinerja BPPK yang unggul.",
];

const nilai = [
  { t: "Integritas", d: "Berpikir, berkata, berperilaku, dan bertindak dengan baik dan benar." },
  { t: "Profesionalisme", d: "Bekerja tuntas dan akurat atas dasar kompetensi terbaik." },
  { t: "Sinergi", d: "Membangun kerja sama yang produktif dan harmonis." },
  { t: "Pelayanan", d: "Memberikan layanan terbaik bagi pemangku kepentingan." },
  { t: "Kesempurnaan", d: "Senantiasa melakukan perbaikan di segala bidang." },
];

const fungsi = [
  { t: "Penyusunan Kebijakan Teknis", d: "Penyusunan kebijakan teknis, rencana dan program pendidikan, pelatihan, dan sertifikasi kompetensi di bidang keuangan negara, serta manajemen pengetahuan." },
  { t: "Pelaksanaan Pembelajaran", d: "Pelaksanaan pendidikan, pelatihan, sertifikasi kompetensi di bidang keuangan negara, dan manajemen pengetahuan." },
  { t: "Pembinaan Jafung & Penjaminan Mutu", d: "Pembinaan jabatan fungsional, penjaminan mutu pembelajaran, akreditasi program pelatihan, pengelolaan uji kompetensi dan sertifikasi, tes terpadu, serta manajemen beasiswa." },
  { t: "Pemantauan & Evaluasi", d: "Pemantauan, analisis, evaluasi, dan pelaporan atas pelaksanaan diklat, sertifikasi, pembinaan jafung, serta pemanfaatan hasil pendidikan dan pelatihan." },
  { t: "Administrasi BPPK", d: "Pelaksanaan administrasi Badan Pendidikan dan Pelatihan Keuangan secara tertib dan akuntabel." },
  { t: "Fungsi Lain dari Menkeu", d: "Pelaksanaan fungsi lain yang diberikan oleh Menteri Keuangan sesuai dengan kebutuhan organisasi." },
];

const dasarHukum = [
  "PMK Nomor 160/PMK.01/2020 tentang Organisasi dan Tata Kerja Politeknik Keuangan Negara STAN.",
  "PMK Nomor 118/PMK.01/2021 tentang Organisasi dan Tata Kerja Kementerian Keuangan, sebagaimana diubah dengan PMK Nomor 141/PMK.01/2022 dan PMK Nomor 135 Tahun 2023.",
  "PMK Nomor 79/PMK.01/2022 tentang Organisasi dan Tata Kerja Unit Pelaksana Teknis di Lingkungan BPPK.",
  "PMK Nomor 124 Tahun 2024 tentang Organisasi dan Tata Kerja Kementerian Keuangan.",
];

const corpuPilars = [
  { key: "strategy", t: "Learning Strategy", d: "Menyelaraskan strategi pembelajaran dengan prioritas organisasi dan target kinerja Kementerian Keuangan." },
  { key: "knowledge", t: "Knowledge Management", d: "Mengelola pengetahuan organisasi agar mudah diakses, dibagikan, dan dimanfaatkan kembali." },
  { key: "talent", t: "Talent Development", d: "Mengembangkan talenta unggul melalui jalur belajar yang terukur dan berbasis kompetensi." },
  { key: "performance", t: "Performance Excellence", d: "Menghubungkan hasil pembelajaran dengan peningkatan kinerja individu dan organisasi." },
];

const disiplin = [
  { key: "pm", t: "Personal Mastery", d: "Penguasaan diri: kemampuan setiap individu untuk terus belajar dan menumbuhkan kapasitas pribadi." },
  { key: "mm", t: "Mental Models", d: "Menyadari dan menantang asumsi yang membentuk cara kita memahami dunia dan mengambil keputusan." },
  { key: "sv", t: "Shared Vision", d: "Visi bersama yang menyatukan komitmen dan arah seluruh anggota organisasi." },
  { key: "tl", t: "Team Learning", d: "Belajar sebagai tim melalui dialog dan kolaborasi yang menghasilkan kecerdasan kolektif." },
  { key: "st", t: "Systems Thinking", d: "Berpikir sistemik: melihat keterkaitan antar bagian sebagai satu kesatuan yang utuh." },
];

function ProfilPage() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<SectionId>("sejarah");
  const [pilar, setPilar] = useState(corpuPilars[0].key);
  const [disc, setDisc] = useState(disiplin[2].key);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id as SectionId);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) {
        sectionRefs.current[s.id] = el;
        obs.observe(el);
      }
    });
    return () => obs.disconnect();
  }, []);

  // Timeline reveal on scroll
  useEffect(() => {
    const items = document.querySelectorAll(".profil-timeline-item");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("revealed");
        });
      },
      { threshold: 0.2 }
    );
    items.forEach((i) => obs.observe(i));
    return () => obs.disconnect();
  }, []);

  const activePilar = corpuPilars.find((p) => p.key === pilar)!;
  const activeDisc = disiplin.find((d) => d.key === disc)!;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

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
            <span>Profil Lembaga</span>
          </nav>
          <p className="profil-hero-eyebrow">TENTANG BPPK</p>
          <h1 className="profil-hero-title">
            Profil <em>Lembaga</em>
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="profil-main">
        <div className="profil-grid container-bppk">
          {/* Sidebar */}
          <aside className="profil-sidebar">
            <p className="profil-sidebar-label">Daftar Bagian</p>
            <ul>
              {sections.map((s) => (
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(s.id)}
                    className={`profil-nav-item ${active === s.id ? "is-active" : ""}`}
                    aria-current={active === s.id ? "true" : undefined}
                  >
                    <span className="profil-nav-num">{s.num}</span>
                    <span className="profil-nav-label">{s.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Mobile chip nav */}
          <div className="profil-chipnav">
            {sections.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => scrollTo(s.id)}
                className={`profil-chip ${active === s.id ? "is-active" : ""}`}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="profil-content">
            {/* SEJARAH */}
            <section id="sejarah" className="profil-section">
              <header className="profil-section-head">
                <span className="profil-section-num">01</span>
                <div>
                  <p className="profil-section-eyebrow">Perjalanan Lembaga</p>
                  <h2 className="profil-section-title">Sejarah <em>BPPK</em></h2>
                </div>
              </header>
              <div className="profil-section-intro">
                <p>
                  Badan Pendidikan dan Pelatihan Keuangan (BPPK) memiliki perjalanan panjang sebagai motor pengembangan sumber daya manusia Kementerian Keuangan. Dari unit diklat sederhana hingga menjadi corporate university, BPPK terus beradaptasi mengikuti dinamika tata kelola keuangan negara.
                </p>
                <p>
                  Setiap babak transformasi diiringi penyempurnaan kurikulum, metode pembelajaran, dan tata kelola mutu — semuanya bermuara pada satu tujuan: SDM keuangan negara yang unggul, adaptif, dan berintegritas.
                </p>
              </div>

              <div className="profil-timeline profil-timeline-v2">
                <div className="profil-timeline-line" aria-hidden="true" />
                {milestones.map((m) => (
                  <article key={m.year} className="profil-timeline-item">
                    <div className="profil-timeline-node" aria-hidden="true" />
                    <div className="profil-timeline-card">
                      <div className="profil-timeline-media">
                        <img src={m.img} alt={m.title} loading="lazy" />
                        <span className="profil-timeline-year">{m.year}</span>
                      </div>
                      <div className="profil-timeline-body">
                        <h3>{m.title}</h3>
                        <p>{m.desc}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* VISI MISI */}
            <section id="visi-misi" className="profil-section">
              <header className="profil-section-head">
                <span className="profil-section-num">02</span>
                <div>
                  <p className="profil-section-eyebrow">Arah dan Komitmen</p>
                  <h2 className="profil-section-title">Visi dan <em>Misi</em></h2>
                </div>
              </header>

              <figure className="profil-section-banner">
                <img src={edukasiCover.url} alt="Visi dan misi BPPK" loading="lazy" />
                <figcaption>Arah strategis pengembangan SDM keuangan negara.</figcaption>
              </figure>



              <div className="profil-vm-grid">
                <div className="profil-vm-card profil-vm-card-dark">
                  <div className="profil-vm-icon" aria-hidden="true">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/></svg>
                  </div>
                  <p className="profil-vm-label">VISI</p>
                  <h3 className="profil-vm-text">
                    Menjadi lembaga pendidikan dan pelatihan keuangan negara <em>berkelas dunia</em> yang menghasilkan SDM unggul dan berintegritas.
                  </h3>
                </div>

                <div className="profil-vm-card profil-vm-card-light">
                  <div className="profil-vm-icon profil-vm-icon-dark" aria-hidden="true">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20"/><circle cx="12" cy="12" r="9"/></svg>
                  </div>
                  <p className="profil-vm-label profil-vm-label-dark">MISI</p>
                  <ol className="profil-vm-list">
                    {misi.map((m, i) => (
                      <li key={i}>
                        <span className="profil-vm-num">{String(i + 1).padStart(2, "0")}</span>
                        <span>{m}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              <div className="profil-values">
                <p className="profil-values-label">NILAI-NILAI KEMENKEU SATU</p>
                <div className="profil-values-grid">
                  {nilai.map((n, i) => (
                    <div key={n.t} className="profil-value-card">
                      <span className="profil-value-num">0{i + 1}</span>
                      <h4>{n.t}</h4>
                      <p>{n.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* TUGAS FUNGSI */}
            <section id="tugas-fungsi" className="profil-section">
              <header className="profil-section-head">
                <span className="profil-section-num">03</span>
                <div>
                  <p className="profil-section-eyebrow">Mandat Organisasi</p>
                  <h2 className="profil-section-title">Tugas dan <em>Fungsi</em></h2>
                </div>
              </header>

              <div className="profil-section-split">
                <figure className="profil-section-aside">
                  <img src={hero3.url} alt="Tugas dan fungsi BPPK" loading="lazy" />
                </figure>
                <div className="profil-section-intro profil-section-intro-inline">
                  <p>
                    Berdasarkan Peraturan Menteri Keuangan, BPPK menyelenggarakan pendidikan, pelatihan, dan sertifikasi di bidang keuangan negara bagi aparatur Kementerian Keuangan dan pemangku kepentingan terkait.
                  </p>
                  <p>
                    Enam fungsi inti di bawah ini menjadi tulang punggung pelaksanaan mandat tersebut.
                  </p>
                </div>
              </div>

              <div className="profil-fungsi-grid">
                {fungsi.map((f, i) => (
                  <article key={f.t} className="profil-fungsi-card">
                    <span className="profil-fungsi-num">{String(i + 1).padStart(2, "0")}</span>
                    <h3>{f.t}</h3>
                    <p>{f.d}</p>
                  </article>
                ))}
              </div>
            </section>

            {/* CORPU */}
            <section id="corpu" className="profil-section">
              <header className="profil-section-head">
                <span className="profil-section-num">04</span>
                <div>
                  <p className="profil-section-eyebrow">Pembelajaran Strategis</p>
                  <h2 className="profil-section-title">Kemenkeu <em>Corpu</em></h2>
                </div>
              </header>

              <figure className="profil-section-banner profil-section-banner-dark">
                <img src={bgJurnal.url} alt="Kemenkeu Corporate University" loading="lazy" />
                <figcaption>Ekosistem pembelajaran terintegrasi Kementerian Keuangan.</figcaption>
              </figure>

              <div className="profil-section-intro">
                <p>
                  Kementerian Keuangan Corporate University (Kemenkeu Corpu) adalah pendekatan pembelajaran yang menghubungkan strategi organisasi dengan pengembangan kapabilitas SDM. Empat pilar di bawah ini menjadi fondasi penyelenggaraan Corpu di BPPK.
                </p>
              </div>

              <div className="profil-corpu">
                <div className="profil-corpu-diagram" role="group" aria-label="Diagram empat pilar Kemenkeu Corpu">
                  <svg viewBox="0 0 360 360" className="profil-corpu-svg">
                    {corpuPilars.map((p, i) => {
                      const start = (i * 90 - 135) * (Math.PI / 180);
                      const end = ((i + 1) * 90 - 135) * (Math.PI / 180);
                      const cx = 180, cy = 180, rOuter = 160, rInner = 78;
                      const x1 = cx + rOuter * Math.cos(start), y1 = cy + rOuter * Math.sin(start);
                      const x2 = cx + rOuter * Math.cos(end), y2 = cy + rOuter * Math.sin(end);
                      const x3 = cx + rInner * Math.cos(end), y3 = cy + rInner * Math.sin(end);
                      const x4 = cx + rInner * Math.cos(start), y4 = cy + rInner * Math.sin(start);
                      const mid = (start + end) / 2;
                      const lx = cx + ((rInner + rOuter) / 2) * Math.cos(mid);
                      const ly = cy + ((rInner + rOuter) / 2) * Math.sin(mid);
                      const isActive = pilar === p.key;
                      return (
                        <g key={p.key} className={`profil-corpu-seg ${isActive ? "is-active" : ""}`} onMouseEnter={() => setPilar(p.key)} onClick={() => setPilar(p.key)}>
                          <path d={`M ${x1} ${y1} A ${rOuter} ${rOuter} 0 0 1 ${x2} ${y2} L ${x3} ${y3} A ${rInner} ${rInner} 0 0 0 ${x4} ${y4} Z`} />
                          <text x={lx} y={ly} textAnchor="middle" dominantBaseline="middle">
                            {p.t.split(" ").map((w, wi) => (
                              <tspan key={wi} x={lx} dy={wi === 0 ? "-0.3em" : "1.1em"}>{w}</tspan>
                            ))}
                          </text>
                        </g>
                      );
                    })}
                    <circle cx="180" cy="180" r="70" className="profil-corpu-center" />
                    <text x="180" y="172" textAnchor="middle" className="profil-corpu-center-text">
                      <tspan x="180" dy="0">Kemenkeu</tspan>
                      <tspan x="180" dy="1.2em">Corpu</tspan>
                    </text>
                  </svg>
                </div>
                <div className="profil-corpu-panel">
                  <p className="profil-corpu-panel-label">PILAR AKTIF</p>
                  <h3 className="profil-corpu-panel-title">{activePilar.t}</h3>
                  <p className="profil-corpu-panel-desc">{activePilar.d}</p>
                  <div className="profil-corpu-tabs">
                    {corpuPilars.map((p) => (
                      <button key={p.key} type="button" className={`profil-corpu-tab ${pilar === p.key ? "is-active" : ""}`} onClick={() => setPilar(p.key)}>
                        {p.t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* LEARNING ORG */}
            <section id="learning-org" className="profil-section">
              <header className="profil-section-head">
                <span className="profil-section-num">05</span>
                <div>
                  <p className="profil-section-eyebrow">Organisasi Pembelajar</p>
                  <h2 className="profil-section-title">Learning <em>Organization</em></h2>
                </div>
              </header>

              <div className="profil-section-split profil-section-split-reverse">
                <div className="profil-section-intro profil-section-intro-inline">
                  <p>
                    Learning Organization adalah cita-cita BPPK untuk menjadi organisasi yang terus belajar, beradaptasi, dan menciptakan masa depan bersama.
                  </p>
                  <p>
                    Lima disiplin Peter Senge berikut menjadi kompas transformasi pembelajaran di BPPK.
                  </p>
                </div>
                <figure className="profil-section-aside">
                  <img src={coverBuku.url} alt="Learning Organization BPPK" loading="lazy" />
                </figure>
              </div>

              <div className="profil-lo">
                <div className="profil-lo-hex-wrap">
                  {disiplin.map((d, i) => (
                    <button
                      key={d.key}
                      type="button"
                      className={`profil-lo-hex hex-${i} ${disc === d.key ? "is-active" : ""}`}
                      onMouseEnter={() => setDisc(d.key)}
                      onClick={() => setDisc(d.key)}
                    >
                      <span>{d.t}</span>
                    </button>
                  ))}
                </div>
                <div className="profil-lo-panel">
                  <p className="profil-lo-panel-label">DISIPLIN</p>
                  <h3>{activeDisc.t}</h3>
                  <p>{activeDisc.d}</p>
                </div>
              </div>

              <div className="profil-cta-card">
                <div>
                  <p className="profil-cta-eyebrow">EKOSISTEM PEMBELAJARAN</p>
                  <h3>Bergabung dengan ekosistem pembelajaran <em>BPPK</em></h3>
                  <p>Jelajahi Kemenkeu Learning Center, jalur sertifikasi, dan program pengembangan SDM kami.</p>
                </div>
                <a href="#" className="profil-cta-btn">
                  Kunjungi KLC
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </a>
              </div>
            </section>
          </div>
        </div>
      </section>

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
