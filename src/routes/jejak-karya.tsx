import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import coverAsset from "../assets/jejak-cover.jpg.asset.json";
import logoPutih from "../assets/logo-bppk-putih.png.asset.json";
import logoFooter from "../assets/logo-kemenkeu-bppk-putih.png.asset.json";

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
function JejakKaryaPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [Flipbook, setFlipbook] = useState<any>(null);
  const [page, setPage] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const flipRef = useRef<any>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let mounted = true;
    import("react-pageflip").then((mod) => {
      if (mounted) setFlipbook(() => mod.default);
    });
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
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
                <li className="has-submenu">
                  <Link to="/profil">Profil Lembaga <span className="submenu-arrow">›</span></Link>
                  <ul className="submenu">
                    <li><Link to="/profil" hash="sejarah">Sejarah BPPK</Link></li>
                    <li><Link to="/profil" hash="visi-misi">Visi dan Misi</Link></li>
                    <li><Link to="/profil" hash="tugas-fungsi">Tugas dan Fungsi</Link></li>
                    <li><Link to="/profil" hash="corpu">Kemenkeu Corpu</Link></li>
                    <li><Link to="/profil" hash="learning-org">Learning Organization</Link></li>
                  </ul>
                </li>
                <li><Link to="/struktur-organisasi">Struktur Organisasi</Link></li>
                <li><Link to="/profil-pejabat">Profil Pejabat</Link></li>
                <li><Link to="/jejak-karya">Jejak, Karya, dan Transformasi BPPK</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#">Unit <Chevron /></a>
              <ul className="dropdown-menu">
                <li className="has-submenu">
                  <a href="#">Unit Pusat <span className="submenu-arrow">›</span></a>
                  <ul className="submenu">
                    <li><a href="#">Sekretariat Badan</a></li>
                    <li><a href="#">Pusdiklat Kepemimpinan dan Manajemen</a></li>
                    <li><a href="#">Pusdiklat Anggaran dan Perbendaharaan</a></li>
                    <li><a href="#">Pusdiklat Pajak</a></li>
                    <li><a href="#">Pusdiklat Bea dan Cukai</a></li>
                    <li><a href="#">Pusdiklat Keuangan Publik</a></li>
                    <li><a href="#">Pusat Pembinaan Jabatan Fungsional dan Penjaminan Mutu</a></li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <a href="#">Unit Pelaksana Teknis <span className="submenu-arrow">›</span></a>
                  <ul className="submenu">
                    <li><a href="#">BDK Medan</a></li>
                    <li><a href="#">BDK Pekanbaru</a></li>
                    <li><a href="#">BDK Palembang</a></li>
                    <li><a href="#">BDK Cimahi</a></li>
                    <li><a href="#">BDK Yogyakarta</a></li>
                    <li><a href="#">BDK Malang</a></li>
                    <li><a href="#">BDK Denpasar</a></li>
                    <li><a href="#">BDK Pontianak</a></li>
                    <li><a href="#">BDK Balikpapan</a></li>
                    <li><a href="#">BDK Makassar</a></li>
                    <li><a href="#">BDK Manado</a></li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <a href="#">Badan Layanan Umum <span className="submenu-arrow">›</span></a>
                  <ul className="submenu">
                    <li><a href="#">Politeknik Keuangan Negara STAN</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#">Layanan <Chevron /></a>
              <div className="dropdown-mega mega-2">
                <div className="mega-col">
                  <a href="#">Kemenkeu Learning Center (KLC)</a>
                  <a href="#">Manajemen Pengetahuan (KMS)</a>
                  <a href="#">Sertifikasi</a>
                  <a href="#">Akreditasi</a>
                  <a href="#">Lembaga Sertifikasi Profesi</a>
                  <a href="#">Beasiswa</a>
                </div>
                <div className="mega-col">
                  <a href="#">PENA JFKN</a>
                  <a href="#">Ujian Online</a>
                  <a href="#">Kemenkeu Learning Festival</a>
                  <a href="#">Olimpiade APBN</a>
                  <a href="#">Kerja Sama Program Pembelajaran</a>
                  <a href="#">Regional Training Center</a>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <a href="#">Publikasi <Chevron /></a>
              <ul className="dropdown-menu">
                <li className="has-submenu">
                  <a href="#">Penelitian <span className="submenu-arrow">›</span></a>
                  <ul className="submenu">
                    <li><a href="#">Jurnal</a></li>
                    <li><a href="#">Prosiding Kajian Akademis</a></li>
                    <li><a href="#">Simposium Nasional Keuangan Negara (SNKN)</a></li>
                  </ul>
                </li>
                <li><a href="#">Majalah Edukasi Keuangan</a></li>
                <li><a href="#">Buku</a></li>
                <li><a href="#">Laporan-laporan</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#">Informasi Publik <Chevron /></a>
              <ul className="dropdown-menu">
                <li><a href="#">PPID</a></li>
                <li><a href="#">Laporan/Informasi Publik Lainnya</a></li>
                <li><a href="#">Peraturan</a></li>
              </ul>
            </li>
          </ul>
          <a href="#" className="nav-cta">Hubungi Kami 134</a>
        </div>
      </nav>

      <div className="jejak-page">
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
                ref={flipRef}
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
                onFlip={(e: { data: number }) => setPage(e.data)}
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
              ini bukan sekadar tentang Gedung BPPK atau PKN STAN,
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
            <div className="footer-socials">
              <a href="#" aria-label="Instagram" className="footer-social"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
              <a href="#" aria-label="X (Twitter)" className="footer-social"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2H21l-6.52 7.45L22 22h-6.84l-4.78-6.26L4.8 22H2.04l6.97-7.97L2 2h6.96l4.33 5.73L18.244 2zm-2.4 18h1.9L7.27 4H5.25l10.594 16z"/></svg></a>
              <a href="#" aria-label="Facebook" className="footer-social"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
              <a href="#" aria-label="YouTube" className="footer-social"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42A2.78 2.78 0 0 0 20.6 4.5C18.88 4 12 4 12 4s-6.88 0-8.6.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.92 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg></a>
            </div>
          </div>
          <div>
            <h4 className="footer-heading">Jelajahi</h4>
            <ul className="footer-links">
              <li><Link to="/profil">Profil BPPK</Link></li>
              <li><Link to="/profil" hash="corpu">Kemenkeu Corporate University</Link></li>
              <li><Link to="/profil" hash="learning-org">Learning Organization</Link></li>
              <li><a href="#">Kemenkeu Learning Center</a></li>
              <li><a href="#">Knowledge Management System</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-inner">
            <span>© 2026 Badan Pendidikan dan Pelatihan Keuangan — Kementerian Keuangan Republik Indonesia.</span>
            <span className="footer-bottom-links">
              <a href="#">Kebijakan Privasi</a>
              <span className="footer-bottom-sep">·</span>
              <a href="#">Syarat &amp; Ketentuan</a>
              <span className="footer-bottom-sep">·</span>
              <a href="#">Peta Situs</a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

function Chevron() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>;
}
