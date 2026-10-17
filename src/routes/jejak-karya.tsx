import { createFileRoute, Link } from "@tanstack/react-router";
import profilHeroBg from "@/assets/profil-hero-bg.png";
import { useEffect, useRef, useState } from "react";
import { SiteNavbar, SiteFooter } from "@/components/SiteChrome";
import logoPutih from "@/assets/logo-bppk-putih.png";
import logoFooter from "@/assets/logo-kemenkeu-bppk-putih.png";
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

const KMS_URL = "https://kms.kemenkeu.go.id/";
const BUKU_LAIN_URL = "#";

const pdfPages = [p01, p02, p03, p04, p05, p06, p07, p08, p09, p10, p11, p12, p13, p14, p15, p16];

export const Route = createFileRoute("/jejak-karya")({
  head: () => ({
    meta: [
      { title: "Jejak, Karya, dan Transformasi BPPK — Kementerian Keuangan" },
      {
        name: "description",
        content:
          "Preview buku Jejak, Karya, dan Transformasi BPPK — Rumah Belajar Kementerian Keuangan menjadi Kemenkeu Corporate University dan leaders factory.",
      },
      { property: "og:title", content: "Jejak, Karya, dan Transformasi BPPK" },
      {
        property: "og:description",
        content: "Preview flipbook buku Jejak, Karya, dan Transformasi BPPK — Rumah Belajar Kementerian Keuangan.",
      },
      { property: "og:image", content: p01 },
    ],
  }),
  component: JejakKaryaPage,
});

function JejakKaryaPage() {
  const [scrolled, setScrolled] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [Flipbook, setFlipbook] = useState<any>(null);
  const [page, setPage] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const flipRef = useRef<any>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    let mounted = true;
    import("react-pageflip").then((mod) => {
      if (mounted) setFlipbook(() => mod.default);
    });
    return () => {
      mounted = false;
    };
  }, []);

  const totalPages = pdfPages.length + 1; // + closing CTA page

  const handleNext = () => flipRef.current?.pageFlip()?.flipNext();
  const handlePrev = () => flipRef.current?.pageFlip()?.flipPrev();

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
            <span>Jejak, Karya, dan Transformasi BPPK</span>
          </nav>
          <p className="profil-hero-eyebrow">PUBLIKASI BPPK</p>
          <h1 className="profil-hero-title">
            Jejak, Karya, dan <em>Transformasi</em> BPPK
          </h1>
        </div>
      </section>

      {/* FLIPBOOK */}
      <section className="jejak-book-section">
        <div className="jejak-book-wrap">
          {Flipbook ? (
            <Flipbook
              ref={flipRef}
              width={420}
              height={644}
              size="stretch"
              minWidth={280}
              maxWidth={520}
              minHeight={430}
              maxHeight={800}
              drawShadow
              showCover
              maxShadowOpacity={0.4}
              className="jejak-flipbook"
              onFlip={(e: { data: number }) => setPage(e.data)}
            >
              {pdfPages.map((src, i) => (
                <div key={i} className="jejak-page-sheet">
                  <img src={src} alt={`Halaman ${i + 1}`} className="jejak-page-img" />
                </div>
              ))}
              <div className="jejak-page-sheet jejak-back-cover">
                <img src={p16} alt="" className="jejak-back-bg" />
                <div className="jejak-back-overlay" />
                <div className="jejak-back-inner">
                  <p className="jejak-back-eyebrow">Akhir Preview</p>
                  <h3>Lanjutkan Membaca</h3>
                  <p>
                    Untuk menikmati versi lengkap buku <em>Jejak, Karya, dan
                    Transformasi BPPK</em>, silakan akses melalui Knowledge
                    Management System (KMS) Kementerian Keuangan.
                  </p>
                  <a
                    className="jejak-cta jejak-cta-primary"
                    href={KMS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Baca Buku Selengkapnya
                  </a>
                </div>
              </div>
            </Flipbook>
          ) : (
            <div className="jejak-flipbook-skeleton">
              <img src={p01} alt="Sampul buku" />
            </div>
          )}

          <div className="jejak-controls">
            <button onClick={handlePrev} className="jejak-ctrl" aria-label="Halaman sebelumnya">‹ Sebelumnya</button>
            <span className="jejak-page-indicator">
              Halaman {Math.min(page + 1, totalPages)} dari {totalPages}
            </span>
            <button onClick={handleNext} className="jejak-ctrl" aria-label="Halaman berikutnya">Berikutnya ›</button>
          </div>
        </div>
      </section>

      {/* DESKRIPSI */}
      <section className="jejak-desc">
        <div className="jejak-desc-inner container-bppk">
          <p className="jejak-desc-eyebrow">TENTANG BUKU</p>
          <div className="accent-line" />
          <p>
            <strong>
              Pemompa jantung kompetensi pegawai Kemenkeu terus berdetak, berada
              pada satu tempat: Rumah Belajar.
            </strong>{" "}
            Inilah benang merah dari seluruh perjalanan epik yang terukir, mulai
            dari kursus sederhana di tahun 1950-an sampai menjadi Kemenkeu
            Corporate University dan <em>leaders factory</em> masa kini. Kisah
            ini bukan sekadar tentang Gedung BPPK atau transformasi PKN STAN,
            melainkan tentang keyakinan teguh bahwa investasi terbesar bangsa
            adalah pada jiwa-jiwa yang mau belajar dan berkembang tanpa henti.
            BPPK telah bertransformasi dari penyelenggara pelatihan biasa
            menjadi kawah candradimuka modern, menempa karakter, integritas,
            dan kompetensi SDM agar tangguh menghadapi badai VUCA (
            <em>volatility, uncertainty, complexity, ambiguity</em>) dan
            tantangan masa depan.
          </p>
          <p>
            <strong>
              Pada akhirnya, perjuangan abadi BPPK adalah membentuk aparatur
              sipil negara (ASN) yang tidak hanya cerdas teknis, tetapi juga
              matang etika, kokoh integritas, dan siap menjadi agen perubahan.
            </strong>{" "}
            Kemenkeu Corpu bukan sekadar institusi, melainkan DNA budaya
            organisasi yang melekat, sistem yang hidup, dan napas yang terus
            bersemayam di ruang belajar tanpa batas, dari pusat hingga ke
            daerah terpencil. Transformasi ini—dari ruang kelas konvensional
            menjadi ruang digital inklusif—adalah langkah untuk menyongsong
            Indonesia Emas 2045.
          </p>

          <div className="jejak-cta-row">
            <a
              className="jejak-cta jejak-cta-primary"
              href={KMS_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Baca Buku Selengkapnya
            </a>
            <a className="jejak-cta jejak-cta-ghost" href={BUKU_LAIN_URL}>
              Buku Lainnya
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}

function Chevron() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>;
}
