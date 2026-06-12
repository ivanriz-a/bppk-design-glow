import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import profilHeroBg from "@/assets/profil-hero-bg.png.asset.json";
import logoPutih from "@/assets/logo-bppk-putih.png.asset.json";
import logoFooter from "@/assets/logo-kemenkeu-bppk-putih.png.asset.json";

export const Route = createFileRoute("/struktur-organisasi")({
  head: () => ({
    meta: [
      { title: "Struktur Organisasi — BPPK Kementerian Keuangan" },
      { name: "description", content: "Bagan dan struktur organisasi Badan Pendidikan dan Pelatihan Keuangan: Kepala Badan, Sekretariat, Pusdiklat, BDK, dan PKN STAN." },
      { property: "og:title", content: "Struktur Organisasi — BPPK" },
      { property: "og:description", content: "Bagan organisasi BPPK Kementerian Keuangan." },
    ],
  }),
  component: StrukturPage,
});

type Unit = {
  id: string;
  name: string;
  short?: string;
  role: string;
  person: string;
  desc: string;
  kind: "kepala" | "pusat" | "bdk" | "blu";
};

const kepala: Unit = {
  id: "kepala",
  name: "Kepala Badan Pendidikan dan Pelatihan Keuangan",
  short: "Kepala BPPK",
  role: "Kepala Badan",
  person: "—",
  desc: "Memimpin Badan Pendidikan dan Pelatihan Keuangan dalam menyelenggarakan pendidikan, pelatihan, dan pengembangan SDM di lingkungan Kementerian Keuangan.",
  kind: "kepala",
};

const unitPusat: Unit[] = [
  { id: "sekretariat", name: "Sekretariat Badan", role: "Sekretaris Badan", person: "—", desc: "Koordinasi pelaksanaan tugas, pembinaan, dan pemberian dukungan administrasi kepada seluruh unit di lingkungan BPPK.", kind: "pusat" },
  { id: "pkm", name: "Pusdiklat Kepemimpinan dan Manajemen", short: "Pusdiklat KM", role: "Kepala Pusdiklat", person: "—", desc: "Pendidikan dan pelatihan kepemimpinan serta manajemen bagi aparatur Kementerian Keuangan.", kind: "pusat" },
  { id: "pap", name: "Pusdiklat Anggaran dan Perbendaharaan", short: "Pusdiklat AP", role: "Kepala Pusdiklat", person: "—", desc: "Pendidikan dan pelatihan di bidang penganggaran dan perbendaharaan negara.", kind: "pusat" },
  { id: "pajak", name: "Pusdiklat Pajak", role: "Kepala Pusdiklat", person: "—", desc: "Pendidikan dan pelatihan teknis di bidang perpajakan untuk aparatur Direktorat Jenderal Pajak.", kind: "pusat" },
  { id: "bc", name: "Pusdiklat Bea dan Cukai", short: "Pusdiklat BC", role: "Kepala Pusdiklat", person: "—", desc: "Pendidikan dan pelatihan teknis di bidang kepabeanan dan cukai.", kind: "pusat" },
  { id: "kp", name: "Pusdiklat Keuangan Publik", short: "Pusdiklat KP", role: "Kepala Pusdiklat", person: "—", desc: "Pendidikan dan pelatihan di bidang keuangan publik, kekayaan negara, dan pengelolaan APBN/APBD.", kind: "pusat" },
  { id: "pjfpm", name: "Pusat Pembinaan Jabatan Fungsional dan Penjaminan Mutu", short: "P2JFPM", role: "Kepala Pusat", person: "—", desc: "Pembinaan jabatan fungsional bidang keuangan negara dan penjaminan mutu penyelenggaraan pelatihan.", kind: "pusat" },
];

const bdk: Unit[] = [
  "Medan", "Pekanbaru", "Palembang", "Cimahi", "Yogyakarta", "Malang", "Denpasar", "Pontianak", "Balikpapan", "Makassar", "Manado",
].map((kota) => ({
  id: `bdk-${kota.toLowerCase()}`,
  name: `Balai Diklat Keuangan ${kota}`,
  short: `BDK ${kota}`,
  role: "Kepala Balai",
  person: "—",
  desc: `Unit Pelaksana Teknis BPPK yang menyelenggarakan pendidikan dan pelatihan di wilayah ${kota} dan sekitarnya.`,
  kind: "bdk",
}));

const blu: Unit[] = [
  { id: "pkn-stan", name: "Politeknik Keuangan Negara STAN", short: "PKN STAN", role: "Direktur", person: "—", desc: "Perguruan tinggi vokasi di bidang keuangan negara yang dikelola sebagai Badan Layanan Umum di lingkungan BPPK.", kind: "blu" },
];

function StrukturPage() {
  const [scrolled, setScrolled] = useState(false);
  const [selected, setSelected] = useState<Unit>(kepala);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const kindLabel = (k: Unit["kind"]) =>
    k === "kepala" ? "Pimpinan" : k === "pusat" ? "Unit Pusat" : k === "bdk" ? "Unit Pelaksana Teknis" : "Badan Layanan Umum";

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
                <li><Link to="/profil">Profil Lembaga</Link></li>
                <li><Link to="/struktur-organisasi">Struktur Organisasi</Link></li>
                <li><a href="#">Profil Pejabat</a></li>
                <li><a href="#">Jejak, Karya, dan Transformasi BPPK</a></li>
              </ul>
            </li>
            <li className="nav-item"><a href="#">Unit <Chevron /></a></li>
            <li className="nav-item"><a href="#">Layanan <Chevron /></a></li>
            <li className="nav-item"><a href="#">Publikasi <Chevron /></a></li>
            <li className="nav-item"><a href="#">Informasi Publik <Chevron /></a></li>
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
            <Link to="/profil">Profil</Link>
            <span className="sep">/</span>
            <span>Struktur Organisasi</span>
          </nav>
          <p className="profil-hero-eyebrow">TATA KELEMBAGAAN</p>
          <h1 className="profil-hero-title">
            Struktur <em>Organisasi</em>
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="struktur-intro">
        <div className="container-bppk struktur-intro-grid">
          <div>
            <p className="struktur-eyebrow">BAGAN ORGANISASI</p>
            <h2 className="struktur-intro-title">Satu kepemimpinan, banyak <em>jalur belajar</em>.</h2>
          </div>
          <p className="struktur-intro-desc">
            BPPK dipimpin oleh seorang Kepala Badan dan didukung oleh Sekretariat Badan, enam Pusdiklat, sebelas Balai Diklat Keuangan di berbagai wilayah, serta Politeknik Keuangan Negara STAN sebagai Badan Layanan Umum. Klik unit pada bagan untuk melihat ringkasan tugasnya.
          </p>
        </div>
      </section>

      {/* ORG CHART */}
      <section className="struktur-main">
        <div className="container-bppk">
          <div className="struktur-chart">
            {/* L1 — Kepala */}
            <div className="org-row org-row-1">
              <UnitCard u={kepala} selected={selected.id === kepala.id} onClick={() => setSelected(kepala)} />
            </div>

            <div className="org-trunk" aria-hidden="true" />

            {/* L2 — Unit Pusat */}
            <div className="org-section-label">
              <span className="org-label-num">02</span>
              <span className="org-label-text">Unit Pusat</span>
              <span className="org-label-line" />
            </div>
            <div className="org-row org-row-2">
              {unitPusat.map((u) => (
                <UnitCard key={u.id} u={u} selected={selected.id === u.id} onClick={() => setSelected(u)} />
              ))}
            </div>

            {/* L3 — UPT */}
            <div className="org-section-label">
              <span className="org-label-num">03</span>
              <span className="org-label-text">Unit Pelaksana Teknis · Balai Diklat Keuangan</span>
              <span className="org-label-line" />
            </div>
            <div className="org-row org-row-3">
              {bdk.map((u) => (
                <UnitCard key={u.id} u={u} compact selected={selected.id === u.id} onClick={() => setSelected(u)} />
              ))}
            </div>

            {/* L4 — BLU */}
            <div className="org-section-label">
              <span className="org-label-num">04</span>
              <span className="org-label-text">Badan Layanan Umum</span>
              <span className="org-label-line" />
            </div>
            <div className="org-row org-row-4">
              {blu.map((u) => (
                <UnitCard key={u.id} u={u} selected={selected.id === u.id} onClick={() => setSelected(u)} />
              ))}
            </div>
          </div>

          {/* DETAIL PANEL */}
          <aside className="struktur-detail">
            <div className="struktur-detail-inner">
              <p className="struktur-detail-kind">{kindLabel(selected.kind)}</p>
              <h3 className="struktur-detail-name">{selected.name}</h3>
              <div className="struktur-detail-meta">
                <div>
                  <p className="struktur-detail-label">Pejabat</p>
                  <div className="struktur-detail-person">
                    <div className="struktur-avatar" aria-hidden="true">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>
                    </div>
                    <div>
                      <p className="struktur-detail-personname">{selected.person}</p>
                      <p className="struktur-detail-role">{selected.role}</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="struktur-detail-desc">{selected.desc}</p>
              <a href="#" className="struktur-detail-cta">
                Profil pejabat lengkap
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
            </div>
          </aside>
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
          </div>
          <div>
            <h4 className="footer-heading">Jelajahi</h4>
            <ul className="footer-links">
              <li><Link to="/profil">Profil BPPK</Link></li>
              <li><Link to="/struktur-organisasi">Struktur Organisasi</Link></li>
              <li><a href="#">Profil Pejabat</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-inner">
            <span>© 2026 Badan Pendidikan dan Pelatihan Keuangan — Kementerian Keuangan Republik Indonesia.</span>
          </div>
        </div>
      </footer>
    </>
  );
}

function UnitCard({ u, selected, onClick, compact }: { u: Unit; selected: boolean; onClick: () => void; compact?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`org-card ${selected ? "is-selected" : ""} ${compact ? "is-compact" : ""} kind-${u.kind}`}
      aria-pressed={selected}
    >
      <span className="org-card-kind">{u.kind === "kepala" ? "PIMPINAN" : u.kind === "pusat" ? "UNIT PUSAT" : u.kind === "bdk" ? "UPT" : "BLU"}</span>
      <span className="org-card-name">{u.short ?? u.name}</span>
      <span className="org-card-role">{u.role}</span>
    </button>
  );
}

function Chevron() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>;
}
