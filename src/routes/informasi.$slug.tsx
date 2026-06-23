import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteNavbar, SiteFooter } from "@/components/SiteChrome";
import profilHeroBg from "@/assets/profil-hero-bg.png.asset.json";
import { getInfoBySlug, infoItems } from "@/data/informasi";

export const Route = createFileRoute("/informasi/$slug")({
  loader: ({ params }) => {
    const item = getInfoBySlug(params.slug);
    if (!item) throw notFound();
    return { item };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.item.title} — BPPK` },
          { name: "description", content: loaderData.item.excerpt },
          { property: "og:title", content: loaderData.item.title },
          { property: "og:description", content: loaderData.item.excerpt },
          { property: "og:image", content: loaderData.item.img },
        ]
      : [{ title: "Informasi — BPPK" }],
  }),
  notFoundComponent: () => (
    <>
      <SiteNavbar />
      <section className="profil-hero profil-hero-short">
        <div className="profil-hero-bg" style={{ backgroundImage: `url(${profilHeroBg.url})` }} />
        <div className="profil-hero-overlay" />
        <div className="profil-hero-content container-bppk">
          <h1 className="profil-hero-title">Artikel Tidak Ditemukan</h1>
        </div>
      </section>
      <section className="info-section">
        <div className="container-bppk">
          <Link to="/informasi" className="info-back-link">← Kembali ke Informasi</Link>
        </div>
      </section>
      <SiteFooter />
    </>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="container-bppk" style={{ padding: "120px 20px" }}>
      <p>Terjadi kesalahan: {error.message}</p>
      <button onClick={reset}>Coba lagi</button>
    </div>
  ),
  component: InformasiDetailPage,
});

function InformasiDetailPage() {
  const { item } = Route.useLoaderData();

  const related = infoItems
    .filter((i) => i.category === item.category && i.slug !== item.slug)
    .slice(0, 3);

  return (
    <>
      <SiteNavbar />

      <section className="profil-hero profil-hero-short info-hero info-detail-hero">
        <div className="profil-hero-bg" style={{ backgroundImage: `url(${item.img})` }} />
        <div className="profil-hero-overlay" />
        <div className="profil-hero-content container-bppk">
          <nav className="profil-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Beranda</Link>
            <span className="sep">/</span>
            <Link to="/informasi">Informasi</Link>
            <span className="sep">/</span>
            <span>{item.category}</span>
          </nav>
          <p className="profil-hero-eyebrow">{item.category.toUpperCase()} · {item.tag.toUpperCase()}</p>
          <h1 className="profil-hero-title">{item.title}</h1>
          <p className="info-detail-date">{item.date}</p>
        </div>
      </section>

      <section className="info-section">
        <div className="container-bppk info-detail-wrap">
          <article className="info-detail-article">
            <img src={item.img} alt={item.title} className="info-detail-cover" />
            <div className="info-detail-body">
              {item.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="info-detail-cta">
              <Link to="/informasi" className="info-back-link">← Kembali ke Informasi</Link>
            </div>
          </article>

          {related.length > 0 && (
            <aside className="info-related">
              <h3 className="info-related-title">{item.category} Lainnya</h3>
              <div className="info-related-list">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to="/informasi/$slug"
                    params={{ slug: r.slug }}
                    className="info-related-item"
                  >
                    <div className="info-related-img" style={{ backgroundImage: `url(${r.img})` }} />
                    <div>
                      <div className="info-related-date">{r.date}</div>
                      <div className="info-related-name">{r.title}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </aside>
          )}
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
