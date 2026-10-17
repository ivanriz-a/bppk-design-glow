import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { SiteNavbar, SiteFooter } from "@/components/SiteChrome";
import profilHeroBg from "@/assets/profil-hero-bg.png";
import {
  publikasiItems,
  CATEGORY_LABEL,
  SUB_LABEL,
  LAPORAN_SUB_LABEL,
  type Publikasi,
  type PublikasiCategory,
  type PenelitianSub,
  type LaporanSub,
} from "@/data/publikasi";

import p01 from "@/assets/jejak-p01.jpg";
import p02 from "@/assets/jejak-p02.jpg";
import p03 from "@/assets/jejak-p03.jpg";
import p04 from "@/assets/jejak-p04.jpg";
import p05 from "@/assets/jejak-p05.jpg";
import p06 from "@/assets/jejak-p06.jpg";
import p07 from "@/assets/jejak-p07.jpg";
import p08 from "@/assets/jejak-p08.jpg";
import p09 from "@/assets/jejak-p09.jpg";
import p10 from "@/assets/jejak-p10.jpg";
import p11 from "@/assets/jejak-p11.jpg";
import p12 from "@/assets/jejak-p12.jpg";
import p13 from "@/assets/jejak-p13.jpg";
import p14 from "@/assets/jejak-p14.jpg";
import p15 from "@/assets/jejak-p15.jpg";
import p16 from "@/assets/jejak-p16.jpg";

const pdfPages = [p01, p02, p03, p04, p05, p06, p07, p08, p09, p10, p11, p12, p13, p14, p15, p16];

const MAIN_TABS: PublikasiCategory[] = ["penelitian", "majalah", "buku", "laporan"];
const SUB_TABS: PenelitianSub[] = ["jurnal", "prosiding", "snkn"];
const LAPORAN_SUB_TABS: LaporanSub[] = ["tahunan", "kinerja", "keuangan", "ppid"];


export const Route = createFileRoute("/publikasi")({
  head: () => ({
    meta: [
      { title: "Publikasi — BPPK Kementerian Keuangan" },
      { name: "description", content: "Katalog publikasi BPPK: jurnal penelitian, prosiding, SNKN, majalah Edukasi Keuangan, buku, dan laporan." },
      { property: "og:title", content: "Publikasi BPPK" },
      { property: "og:description", content: "Jelajahi katalog publikasi BPPK Kementerian Keuangan." },
    ],
  }),
  validateSearch: (s: Record<string, unknown>) => ({
    tab: (s.tab as PublikasiCategory) || undefined,
    sub: (s.sub as string) || undefined,
  }),
  component: PublikasiPage,
});

function PublikasiPage() {
  const search = Route.useSearch();
  const [tab, setTab] = useState<PublikasiCategory>(search.tab ?? "penelitian");
  const [sub, setSub] = useState<PenelitianSub>(
    (search.sub as PenelitianSub) ?? "jurnal",
  );
  const [subLaporan, setSubLaporan] = useState<LaporanSub>(
    (search.sub as LaporanSub) ?? "tahunan",
  );
  const [active, setActive] = useState<Publikasi | null>(null);

  useEffect(() => {
    if (search.tab) setTab(search.tab);
    if (search.sub) {
      if (SUB_TABS.includes(search.sub as PenelitianSub)) setSub(search.sub as PenelitianSub);
      if (LAPORAN_SUB_TABS.includes(search.sub as LaporanSub)) setSubLaporan(search.sub as LaporanSub);
    }
  }, [search.tab, search.sub]);

  const list = useMemo(() => {
    return publikasiItems.filter((p) => {
      if (p.category !== tab) return false;
      if (tab === "penelitian" && p.subCategory !== sub) return false;
      if (tab === "laporan" && p.subCategory !== subLaporan) return false;
      return true;
    });
  }, [tab, sub, subLaporan]);


  return (
    <>
      <SiteNavbar />

      {/* HERO */}
      <section className="profil-hero profil-hero-short">
        <div className="profil-hero-bg" style={{ backgroundImage: `url(${profilHeroBg})` }} />
        <div className="profil-hero-overlay" />
        <div className="profil-hero-content container-bppk">
          <nav className="profil-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Beranda</Link>
            <span className="sep">/</span>
            <span>Publikasi</span>
          </nav>
          <p className="profil-hero-eyebrow">PUSTAKA BPPK</p>
          <h1 className="profil-hero-title">
            Katalog <em>Publikasi</em>
          </h1>
        </div>
      </section>

      {/* KATALOG */}
      <section className="info-section">
        <div className="container-bppk">
          {/* Tabs utama */}
          <div className="info-tabs-wrap">
            <div className="section-tabs">
              {MAIN_TABS.map((c) => (
                <button
                  key={c}
                  type="button"
                  className={`section-tab ${tab === c ? "active" : ""}`}
                  onClick={() => setTab(c)}
                >
                  {CATEGORY_LABEL[c]}
                </button>
              ))}
            </div>
          </div>

          {/* Sub tabs untuk Penelitian */}
          {tab === "penelitian" && (
            <div className="pub-subtabs-wrap">
              <div className="section-tabs section-tabs-sub">
                {SUB_TABS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    className={`section-tab ${sub === s ? "active" : ""}`}
                    onClick={() => setSub(s)}
                  >
                    {SUB_LABEL[s]}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Sub tabs untuk Laporan */}
          {tab === "laporan" && (
            <div className="pub-subtabs-wrap">
              <div className="section-tabs section-tabs-sub">
                {LAPORAN_SUB_TABS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    className={`section-tab ${subLaporan === s ? "active" : ""}`}
                    onClick={() => setSubLaporan(s)}
                  >
                    {LAPORAN_SUB_LABEL[s]}
                  </button>
                ))}
              </div>
            </div>
          )}




          {/* Grid */}
          {list.length === 0 ? (
            <p className="info-empty">Belum ada publikasi pada kategori ini.</p>
          ) : (
            <div className="pub-grid">
              {list.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="pubcat-card"
                  onClick={() => setActive(item)}
                >
                  <div className="pubcat-cover" style={{ "--img": `url(${item.cover})` } as React.CSSProperties}>
                    <img src={item.cover} alt={item.title} className="pubcat-cover-img" />
                    <div className="pubcat-overlay" aria-hidden="true" />
                  </div>
                  <div className="pubcat-body">
                    <h3 className="pubcat-title">{item.title}</h3>
                    <p className="pubcat-subtitle">{item.subtitle}</p>
                    <div className="pubcat-footer">
                      <span className="pubcat-cta">Selengkapnya ›</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {active && <PublikasiModal item={active} onClose={() => setActive(null)} />}

      <SiteFooter />
    </>
  );
}

function PublikasiModal({ item, onClose }: { item: Publikasi; onClose: () => void }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [Flipbook, setFlipbook] = useState<any>(null);
  const [page, setPage] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const flipRef = useRef<any>(null);

  useEffect(() => {
    let mounted = true;
    import("react-pageflip").then((mod) => {
      if (mounted) setFlipbook(() => mod.default);
    });
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      mounted = false;
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleNext = () => flipRef.current?.pageFlip()?.flipNext();
  const handlePrev = () => flipRef.current?.pageFlip()?.flipPrev();

  return (
    <div className="pub-modal-backdrop" onClick={onClose}>
      <div className="pub-modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <button type="button" className="pub-modal-close" onClick={onClose} aria-label="Tutup">×</button>

        <div className="pub-modal-flip">
          {Flipbook ? (
            <Flipbook
              ref={flipRef}
              width={360}
              height={520}
              size="stretch"
              minWidth={260}
              maxWidth={440}
              minHeight={380}
              maxHeight={640}
              drawShadow
              showCover
              maxShadowOpacity={0.35}
              className="jejak-flipbook"
              onFlip={(e: { data: number }) => setPage(e.data)}
            >
              {pdfPages.map((src, i) => (
                <div key={i} className="jejak-page-sheet">
                  <img src={src} alt={`Halaman ${i + 1}`} className="jejak-page-img" />
                </div>
              ))}
            </Flipbook>
          ) : (
            <div className="jejak-flipbook-skeleton"><img src={item.cover} alt="" /></div>
          )}

          <div className="jejak-controls">
            <button onClick={handlePrev} className="jejak-ctrl">‹ Sebelumnya</button>
            <span className="jejak-page-indicator">Halaman {Math.min(page + 1, pdfPages.length)} dari {pdfPages.length}</span>
            <button onClick={handleNext} className="jejak-ctrl">Berikutnya ›</button>
          </div>
        </div>

        <div className="pub-modal-detail">
          <div className="pub-detail-cover">
            <img src={item.cover} alt={item.title} />
          </div>
          <div className="pub-detail-body">
            <p className="pub-detail-eyebrow">
              {CATEGORY_LABEL[item.category]}
              {item.subCategory ? ` · ${item.category === "laporan" ? LAPORAN_SUB_LABEL[item.subCategory as LaporanSub] : SUB_LABEL[item.subCategory as PenelitianSub]}` : ""} · {item.year}
            </p>
            <h2 className="pub-detail-title">{item.title}</h2>
            <p className="pub-detail-subtitle">{item.subtitle}</p>
            {item.meta && <p className="pub-detail-meta">{item.meta}</p>}
            <div className="pub-detail-desc">
              {item.description.map((par, i) => <p key={i}>{par}</p>)}
            </div>
            <div className="pub-detail-cta">
              <a href={item.pdfUrl} className="jejak-cta jejak-cta-primary" download>
                Unduh PDF
              </a>
              <button type="button" onClick={onClose} className="jejak-cta jejak-cta-ghost">
                Tutup
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
