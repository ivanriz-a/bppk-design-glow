import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { SiteNavbar, SiteFooter } from "@/components/SiteChrome";
import profilHeroBg from "@/assets/profil-hero-bg.png.asset.json";
import { infoCategories, infoItems, type InfoCategory } from "@/data/informasi";

export const Route = createFileRoute("/informasi")({
  head: () => ({
    meta: [
      { title: "Informasi Terbaru — BPPK Kementerian Keuangan" },
      { name: "description", content: "Berita, pengumuman, dan artikel terbaru dari Badan Pendidikan dan Pelatihan Keuangan." },
      { property: "og:title", content: "Informasi Terbaru — BPPK" },
      { property: "og:description", content: "Berita, pengumuman, dan artikel terbaru BPPK Kemenkeu." },
    ],
  }),
  component: InformasiPage,
});

const PAGE_SIZE = 9;

function InformasiPage() {
  const [tab, setTab] = useState<InfoCategory>("Berita");
  const [page, setPage] = useState(1);

  const list = useMemo(() => infoItems.filter((i) => i.category === tab), [tab]);
  const featured = list[0];
  const gridList = list.slice(1);
  const totalPages = Math.max(1, Math.ceil(gridList.length / PAGE_SIZE));

  useEffect(() => {
    setPage(1);
  }, [tab]);

  const paged = gridList.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <>
      <SiteNavbar />

      {/* HERO */}
      <section className="profil-hero profil-hero-short info-hero">
        <div className="profil-hero-bg" style={{ backgroundImage: `url(${profilHeroBg.url})` }} />
        <div className="profil-hero-overlay" />
        <div className="profil-hero-content container-bppk">
          <nav className="profil-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Beranda</Link>
            <span className="sep">/</span>
            <span>Informasi</span>
          </nav>
          <p className="profil-hero-eyebrow">PUBLIKASI BPPK</p>
          <h1 className="profil-hero-title">
            Informasi <em>Terbaru</em>
          </h1>
        </div>
      </section>

      {/* LISTING */}
      <section className="info-section">
        <div className="container-bppk">
          {/* Tabs — match homepage news tabs */}
          <div className="info-tabs-wrap">
            <div className="section-tabs">
              {infoCategories.map((c) => (
                <button
                  key={c}
                  type="button"
                  className={`section-tab ${tab === c ? "active" : ""}`}
                  onClick={() => setTab(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Featured card — berita paling baru */}
          {featured && (
            <Link
              to="/informasi/$slug"
              params={{ slug: featured.slug }}
              className="info-featured"
            >
              <div
                className="info-featured-img"
                style={{ backgroundImage: `url(${featured.img})` }}
              />
              <div className="info-featured-body">
                <span className="info-chip">{featured.tag}</span>
                <h2 className="info-featured-title">{featured.title}</h2>
                <p className="info-featured-excerpt">{featured.excerpt}</p>
                <div className="info-featured-meta">
                  <span className="info-date">{featured.date}</span>
                  <span className="btn-pill-outline">Baca Selengkapnya</span>
                </div>
              </div>
            </Link>
          )}

          {/* News-card grid */}
          {paged.length === 0 ? (
            <p className="info-empty">Belum ada artikel pada kategori ini.</p>
          ) : (
            <div className="news-grid info-news-grid">
              {paged.map((n) => (
                <div key={n.slug} className="news-card">
                  <div className="news-img-wrapper">
                    <div className="news-img" style={{ backgroundImage: `url(${n.img})` }} />
                    <div className="news-overlay" />
                  </div>
                  <div className="news-content">
                    <div className="news-date">{n.date}</div>
                    <h3 className="news-title">{n.title}</h3>
                    <p className="news-excerpt">{n.excerpt}</p>
                    <div className="news-footer">
                      <Link
                        to="/informasi/$slug"
                        params={{ slug: n.slug }}
                        className="btn-pill-outline"
                      >
                        Baca Selengkapnya
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          {gridList.length > 0 && (
            <nav className="info-pagination" aria-label="Pagination">
              <button
                type="button"
                className="info-page-btn"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
              >
                Sebelumnya
              </button>
              {Array.from({ length: totalPages }).map((_, i) => {
                const p = i + 1;
                return (
                  <button
                    key={p}
                    type="button"
                    className={`info-page-num ${p === page ? "active" : ""}`}
                    onClick={() => setPage(p)}
                  >
                    {p}
                  </button>
                );
              })}
              <button
                type="button"
                className="info-page-btn"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
              >
                Selanjutnya
              </button>
            </nav>
          )}
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
