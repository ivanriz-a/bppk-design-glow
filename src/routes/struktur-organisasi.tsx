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

type Kind = "kepala" | "sekretariat" | "pusat" | "bdk" | "blu";
type Unit = {
  id: string;
  name: string;
  short?: string;
  label: string;
  tag: string;
  role: string;
  person: string;
  desc: string;
  kind: Kind;
};

const kepala: Unit = {
  id: "kepala",
  name: "Badan Pendidikan dan Pelatihan Keuangan",
  short: "Kepala BPPK",
  label: "Kepala BPPK",
  tag: "PIMPINAN",
  role: "Kepala Badan",
  person: "—",
  desc: "Memimpin Badan Pendidikan dan Pelatihan Keuangan dalam menyelenggarakan pendidikan, pelatihan, dan pengembangan SDM di lingkungan Kementerian Keuangan.",
  kind: "kepala",
};

const sekretariat: Unit = {
  id: "sekretariat",
  name: "Sekretariat Badan Pendidikan dan Pelatihan Keuangan",
  short: "Sekretariat Badan",
  label: "Sekretariat Badan",
  tag: "KANTOR PUSAT",
  role: "Sekretaris Badan",
  person: "—",
  desc: "Koordinasi pelaksanaan tugas, pembinaan, dan pemberian dukungan administrasi kepada seluruh unit di lingkungan BPPK.",
  kind: "sekretariat",
};

const pusdiklat: Unit[] = [
  { id: "pkm",  tag: "KANTOR PUSAT", label: "Pusdiklat KM",    short: "Pusdiklat KM",    name: "Pusat Pendidikan dan Pelatihan Kepemimpinan dan Manajemen", role: "Kepala Pusdiklat", person: "—", desc: "Pendidikan dan pelatihan kepemimpinan serta manajemen bagi aparatur Kementerian Keuangan.", kind: "pusat" },
  { id: "pap",  tag: "KANTOR PUSAT", label: "Pusdiklat AP",    short: "Pusdiklat AP",    name: "Pusat Pendidikan dan Pelatihan Anggaran dan Perbendaharaan", role: "Kepala Pusdiklat", person: "—", desc: "Pendidikan dan pelatihan di bidang penganggaran dan perbendaharaan negara.", kind: "pusat" },
  { id: "ppjk", tag: "KANTOR PUSAT", label: "Pusdiklat Pajak", short: "Pusdiklat Pajak", name: "Pusat Pendidikan dan Pelatihan Pajak", role: "Kepala Pusdiklat", person: "—", desc: "Pendidikan dan pelatihan teknis di bidang perpajakan.", kind: "pusat" },
  { id: "pbc",  tag: "KANTOR PUSAT", label: "Pusdiklat BC",    short: "Pusdiklat BC",    name: "Pusat Pendidikan dan Pelatihan Bea dan Cukai", role: "Kepala Pusdiklat", person: "—", desc: "Pendidikan dan pelatihan teknis di bidang kepabeanan dan cukai.", kind: "pusat" },
  { id: "pkp",  tag: "KANTOR PUSAT", label: "Pusdiklat KP",    short: "Pusdiklat KP",    name: "Pusat Pendidikan dan Pelatihan Keuangan Publik", role: "Kepala Pusdiklat", person: "—", desc: "Pendidikan dan pelatihan di bidang keuangan publik dan pengelolaan APBN/APBD.", kind: "pusat" },
  { id: "pjf",  tag: "KANTOR PUSAT", label: "P2JFPM",          short: "P2JFPM",          name: "Pusat Pembinaan Jabatan Fungsional dan Penjaminan Mutu", role: "Kepala Pusat", person: "—", desc: "Pembinaan jabatan fungsional bidang keuangan negara dan penjaminan mutu pelatihan.", kind: "pusat" },
];

const blu: Unit = {
  id: "pkn-stan",
  tag: "BLU",
  label: "PKN STAN",
  short: "PKN STAN",
  name: "Politeknik Keuangan Negara STAN",
  role: "Direktur",
  person: "—",
  desc: "Perguruan tinggi vokasi bidang keuangan negara yang dikelola sebagai Badan Layanan Umum di lingkungan BPPK.",
  kind: "blu",
};

const bdkOrder = [
  "Medan", "Pekanbaru", "Palembang", "Cimahi", "Yogyakarta", "Malang",
  "Pontianak", "Balikpapan", "Denpasar", "Makassar", "Manado",
];
const bdk: Unit[] = bdkOrder.map((kota) => ({
  id: `bdk-${kota.toLowerCase()}`,
  tag: "UPT",
  label: `BDK ${kota}`,
  short: `BDK ${kota}`,
  name: `Balai Diklat Keuangan ${kota}`,
  role: "Kepala Balai",
  person: "—",
  desc: `Unit Pelaksana Teknis BPPK yang menyelenggarakan pendidikan dan pelatihan di wilayah ${kota} dan sekitarnya.`,
  kind: "bdk",
}));

function StrukturPage() {
  const [scrolled, setScrolled] = useState(false);
  const [selected, setSelected] = useState<Unit>(kepala);
  const chartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const kindLabel = (k: Kind) =>
    k === "kepala" ? "Pimpinan"
    : k === "sekretariat" ? "Sekretariat"
    : k === "pusat" ? "Unit Pusat"
    : k === "bdk" ? "Unit Pelaksana Teknis"
    : "Badan Layanan Umum";

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
            BPPK dipimpin oleh Kepala Badan dan didukung oleh Sekretariat Badan, enam Pusdiklat, Pusat Pembinaan Jabatan Fungsional, sebelas Balai Diklat Keuangan, serta Politeknik Keuangan Negara STAN. Klik unit pada bagan untuk melihat ringkasan tugasnya.
          </p>
        </div>
      </section>

      {/* ORG CHART */}
      <section className="struktur-main">
        <div className="container-bppk">
          <div className="struktur-chart" ref={chartRef}>
            <OrgConnectors chartRef={chartRef} selectedId={selected.id} />

            {/* L1 — Kepala */}
            <div className="org-row org-row-kepala" data-row="1">
              <UnitCard u={kepala} selected={selected.id === kepala.id} onClick={() => setSelected(kepala)} />
            </div>

            {/* L2 — Sekretariat (full-width supervisory band) */}
            <div className="org-row org-row-sekretariat" data-row="2">
              <UnitCard u={sekretariat} selected={selected.id === sekretariat.id} onClick={() => setSelected(sekretariat)} />
            </div>

            {/* L3 — Pusdiklat zigzag + PKN STAN on the right */}
            <div className="org-row org-row-pusat" data-row="3">
              <div className="org-grid org-grid-pusat">
                {pusdiklat.map((u, i) => (
                  <div key={u.id} className="org-cell" data-pos={i}>
                    <UnitCard u={u} selected={selected.id === u.id} onClick={() => setSelected(u)} />
                  </div>
                ))}
                <div className="org-cell org-cell-blu">
                  <UnitCard u={blu} selected={selected.id === blu.id} onClick={() => setSelected(blu)} />
                </div>
              </div>
            </div>

            {/* L4 — BDK zigzag (11 units) */}
            <div className="org-row org-row-bdk" data-row="4">
              <div className="org-grid org-grid-bdk">
                {bdk.map((u, i) => (
                  <div key={u.id} className="org-cell" data-pos={i}>
                    <UnitCard u={u} selected={selected.id === u.id} onClick={() => setSelected(u)} />
                  </div>
                ))}
              </div>
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

function UnitCard({ u, selected, onClick }: { u: Unit; selected: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      data-id={u.id}
      className={`org-card ${selected ? "is-selected" : ""} kind-${u.kind}`}
      aria-pressed={selected}
    >
      <span className="org-card-tag">{u.tag}</span>
      <span className="org-card-name">{u.short ?? u.name}</span>
    </button>
  );
}

type Seg = { x1: number; y1: number; x2: number; y2: number; dashed?: boolean; highlight?: boolean };

function OrgConnectors({ chartRef, selectedId }: { chartRef: React.RefObject<HTMLDivElement | null>; selectedId: string }) {
  const [segs, setSegs] = useState<Seg[]>([]);
  const [size, setSize] = useState({ w: 0, h: 0 });

  useLayoutEffect(() => {
    const chart = chartRef.current;
    if (!chart) return;

    const compute = () => {
      const cRect = chart.getBoundingClientRect();
      const rect = (el: HTMLElement) => {
        const r = el.getBoundingClientRect();
        return {
          left: r.left - cRect.left,
          right: r.right - cRect.left,
          cx: r.left - cRect.left + r.width / 2,
          top: r.top - cRect.top,
          bottom: r.bottom - cRect.top,
          cy: r.top - cRect.top + r.height / 2,
        };
      };

      const kepalaEl = chart.querySelector<HTMLElement>('.org-card.kind-kepala');
      const setEl = chart.querySelector<HTMLElement>('.org-card.kind-sekretariat');
      const pusatEls = Array.from(chart.querySelectorAll<HTMLElement>('.org-card.kind-pusat'));
      const bluEl = chart.querySelector<HTMLElement>('.org-card.kind-blu');
      const bdkEls = Array.from(chart.querySelectorAll<HTMLElement>('.org-card.kind-bdk'));
      if (!kepalaEl || !setEl) return;

      const kepalaR = rect(kepalaEl);
      const setR = rect(setEl);
      const trunkX = kepalaR.cx;
      const next: Seg[] = [];

      // Trunk: Kepala bottom → through Set row, down to just above pusat row top
      const pusatTops = pusatEls.map((e) => rect(e).top);
      const pusatTopMin = pusatTops.length ? Math.min(...pusatTops) : setR.bottom + 40;
      const busPusatY = setR.bottom + Math.max(20, (pusatTopMin - setR.bottom) / 2);

      // 1. Kepala -> Sekretariat band horizontal line
      const setBandY = setR.cy;
      next.push({ x1: trunkX, y1: kepalaR.bottom, x2: trunkX, y2: setBandY });
      // horizontal supervisory bar across full chart width (Sekretariat spans visually)
      next.push({ x1: setR.right, y1: setBandY, x2: chart.clientWidth - 32, y2: setBandY });

      // 2. From trunk continue downward to pusat bus
      next.push({ x1: trunkX, y1: setBandY, x2: trunkX, y2: busPusatY });

      // 3. Pusat horizontal bus + vertical drops to each pusdiklat
      if (pusatEls.length) {
        const pusatCxs = pusatEls.map((e) => rect(e).cx);
        const minX = Math.min(...pusatCxs, trunkX);
        const maxX = Math.max(...pusatCxs, trunkX);
        next.push({ x1: minX, y1: busPusatY, x2: maxX, y2: busPusatY });
        for (const el of pusatEls) {
          const r = rect(el);
          next.push({
            x1: r.cx, y1: busPusatY, x2: r.cx, y2: r.top,
            highlight: el.getAttribute("data-id") === selectedId,
          });
        }
      }

      // 4. PKN STAN — dashed bracket from right edge of Sekretariat band down to BLU card
      if (bluEl) {
        const r = rect(bluEl);
        const bracketX = chart.clientWidth - 40;
        next.push({ x1: bracketX, y1: setBandY, x2: bracketX, y2: r.cy, dashed: true });
        next.push({ x1: bracketX, y1: r.cy, x2: r.right, y2: r.cy, dashed: true });
      }

      // 5. BDK — dashed bracket. From Sekretariat band down the left edge,
      //    across as a bus above BDK row, then down (dashed) to each BDK.
      if (bdkEls.length) {
        const bdkRects = bdkEls.map(rect);
        const bdkTopMin = Math.min(...bdkRects.map((r) => r.top));
        const busBdkY = bdkTopMin - 28;
        const leftX = 28;

        // vertical down the left edge from set band to BDK bus
        next.push({ x1: leftX, y1: setBandY, x2: leftX, y2: busBdkY, dashed: true });
        // horizontal BDK bus
        const maxX = Math.max(...bdkRects.map((r) => r.cx));
        next.push({ x1: leftX, y1: busBdkY, x2: maxX, y2: busBdkY, dashed: true });
        // verticals to each BDK
        for (let i = 0; i < bdkEls.length; i++) {
          const r = bdkRects[i];
          next.push({
            x1: r.cx, y1: busBdkY, x2: r.cx, y2: r.top, dashed: true,
            highlight: bdkEls[i].getAttribute("data-id") === selectedId,
          });
        }
      }

      setSize({ w: chart.clientWidth, h: chart.clientHeight });
      setSegs(next);
    };

    compute();
    const ro = new ResizeObserver(compute);
    ro.observe(chart);
    chart.querySelectorAll(".org-card").forEach((el) => ro.observe(el));
    window.addEventListener("resize", compute);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", compute);
    };
  }, [chartRef, selectedId]);

  return (
    <svg
      className="org-connectors"
      width={size.w}
      height={size.h}
      viewBox={`0 0 ${size.w} ${size.h}`}
      aria-hidden="true"
    >
      {segs.map((s, i) => (
        <line
          key={i}
          x1={s.x1}
          y1={s.y1}
          x2={s.x2}
          y2={s.y2}
          className={`org-connector ${s.highlight ? "is-highlight" : ""} ${s.dashed ? "is-dashed" : ""}`}
        />
      ))}
    </svg>
  );
}

function Chevron() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>;
}
