import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ComponentType } from "react";
import coverAsset from "../assets/jejak-cover.jpg.asset.json";
import logoPutih from "../assets/logo-bppk-putih.png.asset.json";

const PDF_URL =
  "https://bppk.kemenkeu.go.id/res/filestream/v1/secure/cG9ydGFsLWJwcGstbWVkaWEvY29udGVudC9wYWdlL2RvY3VtZW50L0J1a3VfSmVqYWtfS2FyeWFfZGFuX1RyYW5zZm9ybWFzaV9CUFBLLnBkZg==";

export const Route = createFileRoute("/jejak-karya")({
  head: () => ({
    meta: [
      { title: "Jejak, Karya, dan Transformasi BPPK — Rumah Belajar Kemenkeu" },
      {
        name: "description",
        content:
          "Preview buku Jejak, Karya, dan Transformasi BPPK — kisah Rumah Belajar Kementerian Keuangan menjadi Kemenkeu Corporate University dan leaders factory.",
      },
      { property: "og:title", content: "Jejak, Karya, dan Transformasi BPPK" },
      {
        property: "og:description",
        content:
          "Preview flipbook buku Jejak, Karya, dan Transformasi BPPK — Rumah Belajar Kementerian Keuangan.",
      },
      { property: "og:image", content: coverAsset.url },
    ],
  }),
  component: JejakKaryaPage,
});

// react-pageflip is client-only (uses window). Lazy import on mount.
type FlipbookProps = {
  width: number;
  height: number;
  size?: "fixed" | "stretch";
  minWidth?: number;
  maxWidth?: number;
  minHeight?: number;
  maxHeight?: number;
  drawShadow?: boolean;
  showCover?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onFlip?: (e: { data: number }) => void;
  children?: React.ReactNode;
};

function JejakKaryaPage() {
  const [Flipbook, setFlipbook] = useState<ComponentType<FlipbookProps> | null>(
    null,
  );
  const [page, setPage] = useState(0);
  const flipRef = useRef<{ pageFlip: () => { flipNext: () => void; flipPrev: () => void; getPageCount: () => number } } | null>(null);

  useEffect(() => {
    let mounted = true;
    import("react-pageflip").then((mod) => {
      if (mounted) setFlipbook(() => mod.default as unknown as ComponentType<FlipbookProps>);
    });
    return () => {
      mounted = false;
    };
  }, []);

  const pages: Array<{ kind: "cover" | "text" | "back"; title?: string; body?: string }> = [
    { kind: "cover" },
    {
      kind: "text",
      title: "Rumah Belajar",
      body:
        "Pemompa jantung kompetensi pegawai Kemenkeu terus berdetak, berada pada satu tempat: Rumah Belajar. Inilah benang merah dari seluruh perjalanan epik yang terukir, mulai dari kursus sederhana di tahun 1950-an sampai menjadi Kemenkeu Corporate University dan leaders factory masa kini.",
    },
    {
      kind: "text",
      title: "Kawah Candradimuka Modern",
      body:
        "BPPK telah bertransformasi dari penyelenggara pelatihan biasa menjadi kawah candradimuka modern, menempa karakter, integritas, dan kompetensi SDM agar tangguh menghadapi badai VUCA dan tantangan masa depan.",
    },
    {
      kind: "text",
      title: "Menyongsong Indonesia Emas 2045",
      body:
        "Kemenkeu Corpu bukan sekadar institusi, melainkan DNA budaya organisasi yang melekat, sistem yang hidup, dan napas yang terus bersemayam di ruang belajar tanpa batas, dari pusat hingga ke daerah terpencil.",
    },
    {
      kind: "text",
      title: "Manusia Tetap Panglima",
      body:
        "Di era teknologi sehebat apa pun, manusia tetap menjadi panglima. BPPK akan terus menjadi rumah belajar—tempat para insan Kemenkeu menempa diri, bukan hanya untuk menjadi lebih pintar, tetapi juga untuk menjadi lebih bijak.",
    },
    { kind: "back" },
  ];

  const handleNext = () => flipRef.current?.pageFlip().flipNext();
  const handlePrev = () => flipRef.current?.pageFlip().flipPrev();

  return (
    <div className="jejak-page">
      {/* NAV */}
      <nav className="jejak-nav">
        <div className="jejak-nav-inner">
          <Link to="/" className="jejak-logo">
            <img src={logoPutih.url} alt="BPPK Kemenkeu" />
          </Link>
          <Link to="/" className="jejak-back">← Beranda</Link>
        </div>
      </nav>

      {/* HERO */}
      <header className="jejak-hero">
        <div className="jejak-hero-inner">
          <p className="jejak-eyebrow">Publikasi BPPK</p>
          <h1 className="jejak-title">Jejak, Karya, dan Transformasi BPPK</h1>
          <p className="jejak-subtitle">
            Rumah Belajar Kementerian Keuangan — sebuah kisah perjalanan
            transformasi dari kursus sederhana tahun 1950-an menjadi Kemenkeu
            Corporate University dan leaders factory masa kini.
          </p>
        </div>
      </header>

      {/* FLIPBOOK */}
      <section className="jejak-book-section">
        <div className="jejak-book-wrap">
          {Flipbook ? (
            <Flipbook
              ref={flipRef as never}
              width={420}
              height={580}
              size="stretch"
              minWidth={280}
              maxWidth={520}
              minHeight={400}
              maxHeight={720}
              drawShadow
              showCover
              className="jejak-flipbook"
              onFlip={(e) => setPage(e.data)}
            >
              {pages.map((p, i) => (
                <div key={i} className={`jejak-page-sheet jejak-page-${p.kind}`}>
                  {p.kind === "cover" && (
                    <div
                      className="jejak-cover"
                      style={{ backgroundImage: `url(${coverAsset.url})` }}
                      role="img"
                      aria-label="Sampul buku"
                    />
                  )}
                  {p.kind === "text" && (
                    <div className="jejak-page-content">
                      <span className="jejak-page-num">— Halaman {i} —</span>
                      <h3>{p.title}</h3>
                      <p>{p.body}</p>
                    </div>
                  )}
                  {p.kind === "back" && (
                    <div className="jejak-page-content jejak-back-cover">
                      <h3>Selamat Membaca</h3>
                      <p>
                        Untuk membaca isi buku selengkapnya, silakan unduh PDF
                        resmi dari portal BPPK.
                      </p>
                      <a
                        className="jejak-cta"
                        href={PDF_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Buka PDF Lengkap
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </Flipbook>
          ) : (
            <div className="jejak-flipbook-skeleton">
              <img src={coverAsset.url} alt="Sampul buku" />
            </div>
          )}

          <div className="jejak-controls">
            <button onClick={handlePrev} className="jejak-ctrl" aria-label="Halaman sebelumnya">‹ Sebelumnya</button>
            <span className="jejak-page-indicator">
              Halaman {page + 1} dari {pages.length}
            </span>
            <button onClick={handleNext} className="jejak-ctrl" aria-label="Halaman berikutnya">Berikutnya ›</button>
          </div>
        </div>
      </section>

      {/* DESKRIPSI */}
      <section className="jejak-desc">
        <div className="jejak-desc-inner">
          <h2>Tentang Buku</h2>
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
            tantangan masa depan. Dengan adaptasi digital, kolaborasi global,
            dan komitmen pada profesionalisme, Kemenkeu membangun ekosistem
            pembelajaran strategis yang terintegrasi dan berdampak nyata. Di
            era teknologi sehebat apa pun, manusia tetap menjadi panglima.
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
            Indonesia Emas 2045. Inilah pilar utama yang menopang perjalanan
            panjang menuju masa depan, di mana profesionalisme ASN adalah
            jangkar yang menjaga arah di tengah gelombang besar. Sebab,
            kebesaran sebuah bangsa bukan hanya ditentukan oleh kekayaan sumber
            daya alam, tetapi oleh kualitas manusianya. BPPK akan terus menjadi
            rumah belajar: Tempat para insan Kemenkeu menempa diri, bukan hanya
            untuk menjadi lebih pintar; tetapi juga untuk menjadi lebih bijak.
          </p>

          <div className="jejak-cta-row">
            <a
              className="jejak-cta jejak-cta-primary"
              href={PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Unduh / Baca PDF Lengkap
            </a>
            <Link to="/profil" className="jejak-cta jejak-cta-ghost">
              Lihat Profil BPPK
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
