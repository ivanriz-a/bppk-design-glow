import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import profilHeroBg from "@/assets/profil-hero-bg.png.asset.json";
import logoPutih from "@/assets/logo-bppk-putih.png.asset.json";
import logoFooter from "@/assets/logo-kemenkeu-bppk-putih.png.asset.json";
import { groups, type Pejabat } from "@/lib/pejabat-data";

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
      <SiteNavbar />

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
              <div className="pejabat-group-row">
                <aside className="pejabat-info-card">
                  <p className="pejabat-group-eyebrow">{g.eyebrow}</p>
                  <h3 className="pejabat-group-title">{g.judul}</h3>
                  <p className="pejabat-group-desc">{g.deskripsi}</p>
                </aside>
                <div className="pejabat-photo-grid">
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
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL BIO */}
      {selected && (
        <div
          className="pejabat-modal-backdrop"
          onClick={() => setSelected(null)}
          role="presentation"
        >
          <div
            className="pejabat-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="pejabat-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="pejabat-modal-close"
              onClick={() => setSelected(null)}
              aria-label="Tutup"
            >
              ×
            </button>
            <div className="pejabat-modal-grid">
              <div className="pejabat-modal-photo">
                {selected.foto ? (
                  <img src={selected.foto} alt={selected.nama} />
                ) : (
                  <span className="pejabat-photo-initial">{selected.inisial}</span>
                )}
              </div>
              <div className="pejabat-modal-content">
                <p className="pejabat-modal-eyebrow">{selected.jabatan}</p>
                <h3 id="pejabat-modal-title" className="pejabat-modal-name">
                  {selected.nama}
                </h3>
                <p className="pejabat-modal-unit">{selected.unit}</p>

                {selected.bio && selected.bio.length > 0 && (
                  <section className="pejabat-modal-section pejabat-modal-bio">
                    <h4>Biografi</h4>
                    {selected.bio.map((par, i) => (
                      <p key={i}>{par}</p>
                    ))}
                  </section>
                )}

                {(selected.alamatKantor || selected.email || selected.telepon) && (
                  <section className="pejabat-modal-section">
                    <h4>Alamat Kantor &amp; Kontak</h4>
                    {selected.alamatKantor && (
                      <p className="pejabat-modal-meta">
                        <strong>Alamat:</strong> {selected.alamatKantor}
                      </p>
                    )}
                    {selected.telepon && (
                      <p className="pejabat-modal-meta">
                        <strong>Telepon:</strong> {selected.telepon}
                      </p>
                    )}
                    {selected.email && (
                      <p className="pejabat-modal-meta">
                        <strong>Email:</strong>{" "}
                        <a href={`mailto:${selected.email}`}>{selected.email}</a>
                      </p>
                    )}
                  </section>
                )}

                {selected.lhkpn && (
                  <p className="pejabat-modal-lhkpn">
                    <strong>LHKPN:</strong>{" "}
                    <a href={selected.lhkpn} target="_blank" rel="noreferrer">
                      Unduh di sini
                    </a>
                  </p>
                )}

              </div>
            </div>
          </div>
        </div>
      )}

      <SiteFooter />
    </>
  );
}

function Chevron() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>;
}
