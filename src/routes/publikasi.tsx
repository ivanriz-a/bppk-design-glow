import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteNavbar, SiteFooter } from "@/components/SiteChrome";
import profilHeroBg from "@/assets/profil-hero-bg.png.asset.json";
import coverJejak from "@/assets/jejak-cover.jpg.asset.json";
import { publikasiList, kategoriList, type KategoriPublikasi, type Publikasi } from "@/data/publikasi";

type FilterKategori = "Semua" | KategoriPublikasi;
type Urutan = "terbaru" | "az";

export const Route = createFileRoute("/publikasi")({
  head: () => ({
    meta: [
      { title: "Publikasi — BPPK Kementerian Keuangan" },
      {
        name: "description",
        content:
          "Katalog publikasi BPPK Kementerian Keuangan: buku, jurnal, majalah Edukasi Keuangan, dan laporan resmi.",
      },
      { property: "og:title", content: "Publikasi — BPPK Kementerian Keuangan" },
      {
        property: "og:description",
        content: "Katalog buku, jurnal, majalah, dan laporan BPPK Kementerian Keuangan.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: coverJejak.url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PublikasiPage,
});

function PublikasiPage() {
  const [kategori, setKategori] = useState<FilterKategori>("Semua");
  const [q, setQ] = useState("");
  const [sort, setSort] = useState<Urutan>("terbaru");
  const [active, setActive] = useState<Publikasi | null>(null);

  const filtered = useMemo(() => {
    let items = publikasiList.slice();
    if (kategori !== "Semua") items = items.filter((p) => p.kategori === kategori);
    const query = q.trim().toLowerCase();
    if (query) {
      items = items.filter(
        (p) =>
          p.judul.toLowerCase().includes(query) ||
          p.penerbit.toLowerCase().includes(query) ||
          p.sinopsis.toLowerCase().includes(query),
      );
    }
    if (sort === "terbaru") items.sort((a, b) => b.tahun - a.tahun);
    else items.sort((a, b) => a.judul.localeCompare(b.judul));
    return items;
  }, [kategori, q, sort]);

  const tabs: FilterKategori[] = ["Semua", ...kategoriList];

  return (
    <>
      <SiteNavbar />

      {/* HERO */}
      <section className="profil-hero profil-hero-short">
        <div className="profil-hero-bg" style={{ backgroundImage: `url(${profilHeroBg.url})` }} />
        <div className="profil-hero-overlay" />
        <div className="profil-hero-content container-bppk">
          <nav className="profil-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Beranda</Link>
            <span className="sep">/</span>
            <span>Publikasi</span>
          </nav>
          <p className="profil-hero-eyebrow">KATALOG BPPK</p>
          <h1 className="profil-hero-title">
            Publikasi <em>BPPK</em>
          </h1>
          <p className="pubk-hero-sub">
            Koleksi buku, jurnal, majalah, dan laporan yang diterbitkan oleh Badan Pendidikan dan
            Pelatihan Keuangan — Rumah Belajar Kementerian Keuangan.
          </p>
        </div>
      </section>

      {/* KATALOG */}
      <section className="pubk-section">
        <div className="container-bppk">
          <div className="pubk-toolbar">
            <div className="pubk-tabs" role="tablist">
              {tabs.map((t) => (
                <button
                  key={t}
                  role="tab"
                  aria-selected={kategori === t}
                  className={`pubk-tab ${kategori === t ? "is-active" : ""}`}
                  onClick={() => setKategori(t)}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="pubk-controls">
              <div className="pubk-search">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                <input
                  type="search"
                  placeholder="Cari judul atau penerbit…"
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  aria-label="Cari publikasi"
                />
              </div>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as Urutan)}
                className="pubk-sort"
                aria-label="Urutkan"
              >
                <option value="terbaru">Terbaru</option>
                <option value="az">Judul A–Z</option>
              </select>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="pubk-empty">
              <p>Tidak ada publikasi yang cocok dengan pencarian Anda.</p>
            </div>
          ) : (
            <div className="pubk-grid">
              {filtered.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  className="pubk-card"
                  onClick={() => setActive(p)}
                  aria-label={`Lihat detail ${p.judul}`}
                >
                  <div className="pubk-cover-wrap">
                    <img src={p.cover} alt={p.judul} loading="lazy" />
                    <span className="pubk-cover-badge">{p.kategori}</span>
                  </div>
                  <div className="pubk-card-body">
                    <p className="pubk-card-meta">{p.penerbit} · {p.tahun}</p>
                    <h3 className="pubk-card-title">{p.judul}</h3>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* MODAL DETAIL */}
      {active && <PublikasiModal item={active} onClose={() => setActive(null)} />}

      <SiteFooter />
    </>
  );
}

function PublikasiModal({ item, onClose }: { item: Publikasi; onClose: () => void }) {
  return (
    <div className="pubk-modal-backdrop" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="pubk-modal" onClick={(e) => e.stopPropagation()}>
        <button className="pubk-modal-close" onClick={onClose} aria-label="Tutup">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <div className="pubk-modal-cover">
          <img src={item.cover} alt={item.judul} />
        </div>
        <div className="pubk-modal-body">
          <span className="pubk-badge-inline">{item.kategori}</span>
          <h2>{item.judul}</h2>
          <p className="pubk-modal-sub">{item.penerbit} · {item.tahun}</p>
          <div className="accent-line" />
          <p className="pubk-modal-desc">{item.sinopsis}</p>
          <dl className="pubk-modal-meta">
            {item.halaman && (
              <><dt>Halaman</dt><dd>{item.halaman} hlm.</dd></>
            )}
            {item.identifier && (
              <><dt>Identifier</dt><dd>{item.identifier}</dd></>
            )}
            <dt>Kategori</dt><dd>{item.kategori}</dd>
          </dl>
          <div className="pubk-modal-cta">
            {item.internalUrl ? (
              <Link to={item.internalUrl} className="pubk-cta pubk-cta-primary">Buka Preview Flipbook</Link>
            ) : (
              <a
                href={item.kmsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pubk-cta pubk-cta-primary"
              >
                Baca di KMS
              </a>
            )}
            {item.downloadUrl && (
              <a
                href={item.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pubk-cta pubk-cta-ghost"
              >
                Unduh PDF
              </a>
            )}
            {item.internalUrl && (
              <a
                href={item.kmsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pubk-cta pubk-cta-ghost"
              >
                Baca di KMS
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
