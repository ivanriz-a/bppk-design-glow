import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
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

function InformasiPage() {
  const [tab, setTab] = useState<InfoCategory>("Berita");
  const [tagFilter, setTagFilter] = useState<string>("Semua");

  const inTab = useMemo(() => infoItems.filter((i) => i.category === tab), [tab]);
  const featured = inTab[0];
  const rest = inTab.slice(1);

  const tags = useMemo(() => {
    const s = new Set<string>();
    rest.forEach((r) => s.add(r.tag));
    return ["Semua", ...Array.from(s)];
  }, [rest]);

  const filtered = tagFilter === "Semua" ? rest : rest.filter((r) => r.tag === tagFilter);

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
          {/* Tabs */}
          <div className="info-tabs-wrap">
            <div className="section-tabs info-tabs">
              {infoCategories.map((c) => (
                <button
                  key={c}
                  type="button"
                  className={`section-tab ${tab === c ? "active" : ""}`}
                  onClick={() => {
                    setTab(c);
                    setTagFilter("Semua");
                  }}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Featured */}
          {featured && (
            <Link
              to="/informasi/$slug"
              params={{ slug: featured.slug }}
              className="info-featured"
            >
              <div className="info-featured-img" style={{ backgroundImage: `url(${featured.img})` }} />
              <div className="info-featured-body">
                <h2 className="info-featured-title">{featured.title}</h2>
                <p className="info-featured-excerpt">{featured.excerpt}</p>
                <div className="info-featured-meta">
                  <span className="info-chip">{featured.tag}</span>
                  <span className="info-date">{featured.date}</span>
                </div>
              </div>
            </Link>
          )}

          {/* Latest header */}
          <div className="info-latest-header">
            <h2 className="info-latest-title">Artikel Terbaru</h2>
            <div className="info-tag-filters">
              {tags.map((t) => (
                <button
                  key={t}
                  type="button"
                  className={`info-tag-pill ${tagFilter === t ? "active" : ""}`}
                  onClick={() => setTagFilter(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <p className="info-empty">Belum ada artikel pada kategori ini.</p>
          ) : (
            <div className="info-grid">
              {filtered.map((n) => (
                <Link
                  key={n.slug}
                  to="/informasi/$slug"
                  params={{ slug: n.slug }}
                  className="info-card"
                >
                  <div className="info-card-img" style={{ backgroundImage: `url(${n.img})` }} />
                  <div className="info-card-body">
                    <h3 className="info-card-title">{n.title}</h3>
                    <p className="info-card-excerpt">{n.excerpt}</p>
                    <div className="info-card-meta">
                      <span className="info-chip">{n.tag}</span>
                      <span className="info-date">{n.date}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
