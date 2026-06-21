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
  bio?: string;
  pendidikan?: string[];
  riwayatJabatan?: string[];
  alamatKantor?: string;
  kontak?: { telepon?: string; email?: string; website?: string };
};

type PejabatGroup = {
  id: string;
  eyebrow: string;
  judul: string;
  deskripsi: string;
  items: Pejabat[];
};

const placeholderBio = {
  bio: "Riwayat singkat pejabat akan diperbarui. Bagian ini akan memuat ringkasan latar belakang, kompetensi, dan kontribusi yang bersangkutan di lingkungan Kementerian Keuangan.",
  pendidikan: [
    "[Jenjang] — [Nama Perguruan Tinggi], [Tahun]",
    "[Jenjang] — [Nama Perguruan Tinggi], [Tahun]",
  ],
  riwayatJabatan: [
    "[Jabatan sebelumnya] — [Unit], [Tahun]",
    "[Jabatan sebelumnya] — [Unit], [Tahun]",
  ],
  alamatKantor:
    "Gedung BPPK, Jl. Purnawarman No.99, Kebayoran Baru, Jakarta Selatan 12110",
  kontak: {
    telepon: "(021) 7394666",
    email: "[email pejabat]@kemenkeu.go.id",
    website: "https://bppk.kemenkeu.go.id",
  },
};

const withDefaults = (p: Pejabat): Pejabat => ({
  foto: fotoContoh.url,
  ...placeholderBio,
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
      { nama: "[Nama Kepala BPPK]", jabatan: "Kepala Badan", unit: "Badan Pendidikan dan Pelatihan Keuangan", inisial: "KB" },
    ].map(withDefaults),
  },
  {
    id: "sekretariat",
    eyebrow: "Sekretariat",
    judul: "Sekretaris Badan",
    deskripsi:
      "Sekretariat Badan menyelenggarakan koordinasi pelaksanaan tugas, pembinaan, dan pemberian dukungan administrasi kepada seluruh unit organisasi di lingkungan BPPK.",
    items: [
      { nama: "[Nama Sekretaris]", jabatan: "Sekretaris Badan", unit: "Sekretariat BPPK", inisial: "SB" },
    ].map(withDefaults),
  },
  {
    id: "pusdiklat",
    eyebrow: "Pusat Pendidikan dan Pelatihan",
    judul: "Kepala Pusdiklat",
    deskripsi:
      "Pusdiklat dan Pusat di lingkungan BPPK menyelenggarakan pendidikan, pelatihan, sertifikasi, serta pembinaan jabatan fungsional dan penjaminan mutu sesuai bidang masing-masing.",
    items: [
      { nama: "[Nama Kepala Pusdiklat]", jabatan: "Kepala Pusdiklat", unit: "Pusdiklat Kepemimpinan dan Manajemen", inisial: "KM" },
      { nama: "[Nama Kepala Pusdiklat]", jabatan: "Kepala Pusdiklat", unit: "Pusdiklat Anggaran dan Perbendaharaan", inisial: "AP" },
      { nama: "[Nama Kepala Pusdiklat]", jabatan: "Kepala Pusdiklat", unit: "Pusdiklat Pajak", inisial: "PJ" },
      { nama: "[Nama Kepala Pusdiklat]", jabatan: "Kepala Pusdiklat", unit: "Pusdiklat Bea dan Cukai", inisial: "BC" },
      { nama: "[Nama Kepala Pusdiklat]", jabatan: "Kepala Pusdiklat", unit: "Pusdiklat Keuangan Publik", inisial: "KP" },
      { nama: "[Nama Kepala Pusat]", jabatan: "Kepala Pusat", unit: "Pusat Pembinaan Jabatan Fungsional dan Penjaminan Mutu", inisial: "JF" },
    ].map(withDefaults),
  },
  {
    id: "blu",
    eyebrow: "Badan Layanan Umum",
    judul: "Direktur PKN STAN",
    deskripsi:
      "Politeknik Keuangan Negara STAN merupakan perguruan tinggi kedinasan di lingkungan BPPK yang menyelenggarakan pendidikan vokasi calon pengelola keuangan negara.",
    items: [
      { nama: "[Nama Direktur PKN STAN]", jabatan: "Direktur", unit: "Politeknik Keuangan Negara STAN", inisial: "PS" },
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
