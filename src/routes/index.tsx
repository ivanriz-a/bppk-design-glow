import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import hero1 from "@/assets/hero-1.png.asset.json";
import hero2 from "@/assets/hero-2.png.asset.json";
import hero3 from "@/assets/hero-3.png.asset.json";
import logoPutih from "@/assets/logo-bppk-putih.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BPPK — Badan Pendidikan dan Pelatihan Keuangan" },
      { name: "description", content: "Portal resmi Badan Pendidikan dan Pelatihan Keuangan, Kementerian Keuangan Republik Indonesia." },
      { property: "og:title", content: "BPPK — Kementerian Keuangan" },
      { property: "og:description", content: "Pendidikan, pelatihan, dan sertifikasi keuangan negara." },
    ],
  }),
  component: Home,
});

const heroSlides = [
  {
    eyebrow: "LAYANAN KONTAK",
    title: "Lebih simpel dengan\nKemenkeu PRIME",
    desc: "Layanan Halo BPPK dialihkan ke pusat kontak layanan Kemenkeu PRIME per 1 Juni 2024.",
    image: hero1.url,
  },
  {
    eyebrow: "INTEGRITAS",
    title: "Tolak GRATIFIKASI\ndan LAPORKAN",
    desc: "BPPK menolak gratifikasi dalam bentuk apapun. Bersama ciptakan wilayah bebas dari korupsi.",
    image: hero3.url,
  },
  {
    eyebrow: "VISI",
    title: "Pendidikan\nBerkelas Dunia",
    desc: "Mencetak SDM pengelola keuangan negara yang unggul dan berintegritas tinggi.",
    image: hero2.url,
  },
];

const services = [
  { title: "Kemenkeu Learning Center", desc: "Platform pembelajaran digital terintegrasi untuk seluruh pegawai Kementerian Keuangan.", bg: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80", icon: <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /> },
  { title: "Knowledge Management", desc: "Sistem manajemen pengetahuan untuk berbagi wawasan dan inovasi.", bg: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80", icon: <polygon points="5 3 19 12 5 21 5 3" /> },
  { title: "Sertifikasi", desc: "Layanan sertifikasi untuk menjamin kualitas standar kompetensi.", bg: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&q=80", icon: <><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></> },
  { title: "PENA JFKN", desc: "Pusat edukasi dan nilai tambah Jabatan Fungsional Keuangan Negara.", bg: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80", icon: <><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></> },
  { title: "Beasiswa", desc: "Program beasiswa pengembangan SDM unggul keuangan negara.", bg: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80", icon: <><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></> },
  { title: "PKN STAN", desc: "Pendidikan kedinasan unggulan untuk calon pengelola keuangan negara.", bg: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=600&q=80", icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /> },
];

const schedules = [
  { date: "10 Mei 2026", title: "Pelatihan Manajemen Risiko" },
  { date: "12 Mei 2026", title: "E-Learning Manajemen Risiko" },
  { date: "15 Mei 2026", title: "Pelatihan Dasar CPNS Gelombang 1" },
  { date: "20 Mei 2026", title: "Webinar Digital Leadership" },
  { date: "25 Mei 2026", title: "Sertifikasi Auditor Internal" },
];

const trainings = [
  { badge: "E-Learning", title: "Pelatihan Analisis Keuangan Dasar", subtitle: "pusdiklat keuangan umum", rating: "4.8", peserta: "1.5k", img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80" },
  { badge: "Microlearning", title: "Kepemimpinan Strategis di Era Digital", subtitle: "pusdiklat kepemimpinan", rating: "4.9", peserta: "850", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80" },
  { badge: "E-Learning", title: "Manajemen Proyek Agile Tingkat Lanjut", subtitle: "pusdiklat anggaran & perbendaharaan", rating: "4.7", peserta: "2.1k", img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80" },
  { badge: "Microlearning", title: "Tata Kelola Keuangan Tingkat Dasar", subtitle: "pusdiklat pajak", rating: "4.9", peserta: "3.4k", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80" },
  { badge: "E-Learning", title: "Analisis Data Makroekonomi Lanjutan", subtitle: "pusdiklat keuangan umum", rating: "4.6", peserta: "1.1k", img: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&w=600&q=80" },
  { badge: "Microlearning", title: "Komunikasi Publik Strategis", subtitle: "pusdiklat kepemimpinan", rating: "4.9", peserta: "940", img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&q=80" },
];

const knowledge = [
  { badge: "Jurnal", title: "Jurnal BPPK Vol. 16 Tahun 2026", subtitle: "kajian akademik", rating: "4.7", peserta: "1.2k", img: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=600&q=80" },
  { badge: "Modul", title: "Modul Pengantar Akuntansi Pemerintahan", subtitle: "pusdiklat anggaran", rating: "4.8", peserta: "2.0k", img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=600&q=80" },
  { badge: "Artikel", title: "Transformasi Digital Sektor Publik", subtitle: "knowledge management", rating: "4.6", peserta: "3.1k", img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80" },
  { badge: "Riset", title: "Evaluasi Pasca Diklat Kemenkeu", subtitle: "pusat kajian", rating: "4.7", peserta: "780", img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80" },
];

const news = [
  { date: "15 Mei 2026", title: "Pembukaan Pelatihan Teknis di Lingkungan Keuangan Publik", excerpt: "Pusat Pendidikan dan Pelatihan Keuangan Umum menyelenggarakan program strategis peningkatan kapasitas SDM yang diikuti oleh seluruh pegawai.", img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=80" },
  { date: "12 Mei 2026", title: "Rapat Koordinasi Pengembangan Kompetensi Aparatur Berkelanjutan", excerpt: "Dalam rangka memperkuat pengembangan kompetensi SDM, digelar rapat koordinasi lintas unit untuk merumuskan kebijakan strategis yang lebih efektif.", img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80" },
  { date: "10 Mei 2026", title: "Penandatanganan MoU dengan Mitra Akademik Terkemuka", excerpt: "Upaya penguatan kolaborasi antara lembaga pelatihan pemerintah dengan institusi pendidikan tinggi resmi dimulai dengan penandatanganan kesepahaman bersama.", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80" },
];

const synergy = ["Setjen", "Itjen", "Pajak", "Bea Cukai", "Anggaran", "Perbendaharaan", "Kekayaan"];
const dates: Array<{ d: number; cls?: string }> = [
  { d: 27, cls: "date-muted" }, { d: 28, cls: "date-muted" }, { d: 29, cls: "date-muted" }, { d: 30, cls: "date-muted" },
  { d: 1, cls: "date-holiday" }, { d: 2 }, { d: 3, cls: "date-holiday" },
  { d: 4 }, { d: 5 }, { d: 6 }, { d: 7 }, { d: 8 }, { d: 9 }, { d: 10, cls: "date-holiday" },
  { d: 11 }, { d: 12 }, { d: 13 }, { d: 14, cls: "date-holiday" }, { d: 15 }, { d: 16 }, { d: 17, cls: "date-holiday" },
  { d: 18 }, { d: 19 }, { d: 20, cls: "date-today" }, { d: 21 }, { d: 22 }, { d: 23 }, { d: 24, cls: "date-holiday" },
  { d: 25 }, { d: 26 }, { d: 27 }, { d: 28 }, { d: 29, cls: "date-holiday" }, { d: 30 }, { d: 31, cls: "date-holiday" },
];

function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [slide, setSlide] = useState(0);
  const [tab, setTab] = useState<"open" | "pusat">("open");
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 6000);
    return () => clearInterval(id);
  }, []);

  const activeList = tab === "open" ? trainings : knowledge;

  return (
    <>
      {/* NAVBAR */}
      <nav className={`top-navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <a href="#" className="nav-logo">
            <img src={logoPutih.url} alt="BPPK Kementerian Keuangan" />
          </a>
          <ul className="nav-links">
            <li className="nav-item">
              <a href="#">Profil <Chevron /></a>
              <ul className="dropdown-menu">
                <li><a href="#">Profil Lembaga</a></li>
                <li><a href="#">Struktur Organisasi</a></li>
                <li><a href="#">Visi & Misi</a></li>
              </ul>
            </li>
            <li className="nav-item"><a href="#">Unit</a></li>
            <li className="nav-item"><a href="#">Layanan</a></li>
            <li className="nav-item"><a href="#">Publikasi</a></li>
            <li className="nav-item"><a href="#">Hubungi Kami 134</a></li>
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero-section">
        {heroSlides.map((s, i) => (
          <div key={i} className={`hero-bg ${i === slide ? "active" : ""}`} style={{ backgroundImage: `url(${s.image})` }} />
        ))}
        <div className="hero-overlay" />
        <div className="container-bppk">
          <div className="hero-content-wrapper">
            {heroSlides.map((s, i) => (
              <div key={i} className={`hero-text-slide ${i === slide ? "active" : ""}`}>
                <div className="hero-eyebrow">{s.eyebrow}</div>
                <h1 className="hero-title">{s.title.split("\n").map((l, j) => <span key={j}>{l}<br/></span>)}</h1>
                <p className="hero-desc">{s.desc}</p>
                <a href="#" className="hero-btn">Selengkapnya <span>→</span></a>
              </div>
            ))}
            <div className="carousel-indicators">
              {heroSlides.map((_, i) => (
                <button key={i} className={`indicator ${i === slide ? "active" : ""}`} onClick={() => setSlide(i)} aria-label={`Slide ${i + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES + CALENDAR */}
      <div className="content-layer-1">
        <div className="container-bppk">
          <div className="floating-services">
            {services.map((s, i) => (
              <a key={i} href="#" className="service-card" style={{ ["--bg-img" as never]: `url(${s.bg})` } as React.CSSProperties}>
                <style>{`.floating-services > a:nth-child(${i + 1})::before { background-image: linear-gradient(to top, rgba(4,79,116,0.95), rgba(4,79,116,0.4)), url('${s.bg}'); }`}</style>
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">{s.icon}</svg>
                </div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
                <div className="service-link">Kunjungi <span>›</span></div>
              </a>
            ))}
          </div>

          <div className="calendar-grid">
            <div>
              <h2 className="section-title">Kalender BPPK</h2>
              <div className="accent-line" />
              <div className="mock-widget">
                <div className="calendar-header">
                  <button className="cal-nav-btn">‹</button>
                  <div className="calendar-month">Mei 2026</div>
                  <button className="cal-nav-btn">›</button>
                </div>
                <div className="calendar-days">
                  {["Sen","Sel","Rab","Kam","Jum","Sab","Min"].map(d => <div key={d}>{d}</div>)}
                </div>
                <div className="calendar-dates">
                  {dates.map((d, i) => <div key={i} className={`date-num ${d.cls ?? ""}`}>{d.d}</div>)}
                </div>
              </div>
            </div>
            <div>
              <h2 className="section-title" style={{ visibility: "hidden" }}>.</h2>
              <div className="accent-line" style={{ visibility: "hidden" }} />
              <div className="mock-widget widget-jadwal" style={{ height: 360 }}>
                <div className="schedule-list-wrapper">
                  {schedules.map((s, i) => (
                    <div key={i} className="schedule-item">
                      <div>
                        <div className="sch-date">{s.date}</div>
                        <h4 className="sch-title">{s.title}</h4>
                      </div>
                      <a href="#" className="btn-outline">Detail</a>
                    </div>
                  ))}
                </div>
                <div className="schedule-footer">
                  <a href="#" className="link-view-all">Lihat jadwal lainnya →</a>
                </div>
              </div>
            </div>
          </div>

          {/* LEARNING CENTER */}
          <div style={{ marginTop: 80, marginBottom: 20 }}>
            <h2 className="section-title">Learning Center</h2>
            <div className="accent-line" style={{ marginBottom: 0 }} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <div className="section-tabs">
              <button className={`section-tab ${tab === "open" ? "active" : ""}`} onClick={() => setTab("open")}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="9" y1="3" x2="9" y2="21" /></svg>
                Open Access
              </button>
              <button className={`section-tab ${tab === "pusat" ? "active" : ""}`} onClick={() => setTab("pusat")}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                Pusat Pengetahuan
              </button>
            </div>
            <div className="section-tabs" style={{ padding: 4, gap: 4 }}>
              <button className="nav-btn-custom" onClick={() => trackRef.current?.scrollBy({ left: -300, behavior: "smooth" })}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg></button>
              <button className="nav-btn-custom" onClick={() => trackRef.current?.scrollBy({ left: 300, behavior: "smooth" })}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg></button>
            </div>
          </div>

          <div ref={trackRef} className="tab-content-wrapper active" key={tab}>
            {activeList.map((c, i) => (
              <div key={i} className="oa-card">
                <span className="oa-badge">{c.badge}</span>
                <div className="oa-img-wrapper">
                  <div className="oa-img" style={{ backgroundImage: `url(${c.img})` }} />
                  <div className="oa-overlay" />
                </div>
                <div className="oa-body">
                  <div>
                    <h3 className="oa-title">{c.title}</h3>
                    <div className="oa-subtitle">{c.subtitle}</div>
                    <div className="oa-footer">
                      <div className="oa-meta-group">
                        <div className="oa-meta-item">
                          <span className="oa-meta-val" style={{ display: "flex", alignItems: "center", gap: 4 }}>
                            {c.rating} <Star />
                          </span>
                          <span className="oa-meta-label">Rating</span>
                        </div>
                        <div className="oa-meta-item">
                          <span className="oa-meta-val">{c.peserta}</span>
                          <span className="oa-meta-label">Peserta</span>
                        </div>
                      </div>
                      <a href="#" className="btn-pill">Detail</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 8 }}>
            <a href="#" className="btn-view-all">Lihat Seluruh Program <span>→</span></a>
          </div>
        </div>
      </div>

      {/* NEWS */}
      <div className="content-layer-2">
        <div className="container-bppk">
          <h2 className="section-title">Informasi Terbaru</h2>
          <div className="accent-line" />
          <div className="news-toolbar">
            <div className="search-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
              <input placeholder="Cari berita atau informasi…" />
            </div>
            <div className="section-tabs">
              {["Berita","Pengumuman","Artikel","Podcast"].map((t, i) => (
                <button key={t} className={`section-tab ${i === 0 ? "active" : ""}`}>{t}</button>
              ))}
            </div>
          </div>
          <div className="news-grid">
            {news.map((n, i) => (
              <div key={i} className="news-card">
                <div className="news-img-wrapper">
                  <div className="news-img" style={{ backgroundImage: `url(${n.img})` }} />
                  <div className="news-overlay" />
                </div>
                <div className="news-content">
                  <div className="news-date">{n.date}</div>
                  <h3 className="news-title">{n.title}</h3>
                  <p className="news-excerpt">{n.excerpt}</p>
                  <div className="news-footer">
                    <a href="#" className="btn-pill-outline">Baca Selengkapnya</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PUBLIKASI (Gulungan) */}
      <div className="floating-strip-section">
        <div className="blue-strip-bg">
          <div className="bppk-texture-1" />
          <div className="bppk-texture-2" />
        </div>
        <div className="container-bppk strip-content-wrapper">
          <div className="pub-text">
            <h2>Eksplorasi<br />Literasi<br />BPPK.</h2>
            <div className="accent-line" />
            <p>Akses ribuan halaman jurnal, majalah, dan modul pembelajaran resmi dari BPPK.</p>
          </div>
          <div className="pub-cards-wrapper">
            <a href="#" className="pub-card">
              <div className="sim-cover-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80')" }} />
              <div className="cover-overlay" />
              <span className="pub-badge">Baru</span>
              <div className="pub-content-wrapper">
                <div className="sim-cover-text">
                  <div className="eyebrow-mini">Edisi 04 / 2026</div>
                  <div className="editorial-masthead">EDU<span>KASI</span></div>
                </div>
                <div className="pub-info-bottom">
                  <div className="pub-category-text">Majalah Edukasi</div>
                  <h3 className="pub-title">Nyala Membara Semangat Jaga Keuangan Negara</h3>
                  <p className="pub-desc">Liputan Khusus Bela Negara: tren pembelajaran terkini, inovasi pengembangan SDM, dan strategi corporate university.</p>
                </div>
              </div>
            </a>
            <a href="#" className="pub-card">
              <div className="sim-cover-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80')" }} />
              <div className="cover-overlay" />
              <span className="pub-badge" style={{ background: "#fff" }}>Akademik</span>
              <div className="pub-content-wrapper">
                <div className="sim-cover-text">
                  <div className="eyebrow-yellow">JURNAL ILMIAH TERAPAN</div>
                  <div className="academic-title">JURNAL<br />BPPK</div>
                  <div className="academic-line" />
                </div>
                <div className="pub-info-bottom">
                  <div className="pub-category-text">Jurnal Ilmiah</div>
                  <h3 className="pub-title">Volume 16 Nomor 2 Tahun 2026</h3>
                  <p className="pub-desc">Evaluasi pasca diklat dan analisis kebutuhan pelatihan di era transformasi digital Kementerian Keuangan.</p>
                </div>
              </div>
            </a>
            <a href="#" className="pub-card">
              <div className="sim-cover-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1575505586569-646b2ca898fc?auto=format&fit=crop&w=800&q=80')" }} />
              <div className="cover-overlay" />
              <span className="pub-badge" style={{ background: "var(--bppk-light-blue)", color: "white" }}>Referensi</span>
              <div className="pub-content-wrapper">
                <div className="sim-cover-text">
                  <div className="eyebrow-mini">Seri Kepemimpinan</div>
                  <div className="book-title">Sumiyati</div>
                </div>
                <div className="pub-info-bottom">
                  <div className="pub-category-text">Buku & Modul Publikasi</div>
                  <h3 className="pub-title">Srikandi Perubahan, Inspirasi Bagi Perempuan</h3>
                  <p className="pub-desc">Akses bebas unduh ke ratusan modul ajar komprehensif untuk mendukung pembelajaran berkelanjutan Anda di Kemenkeu.</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* SYNERGY */}
      <div className="content-layer-4">
        <div className="container-bppk">
          <div style={{ textAlign: "center", marginBottom: 18 }}>
            <p style={{ color: "var(--text-gray)", fontWeight: 700, fontSize: "0.82rem", margin: 0, textTransform: "uppercase", letterSpacing: 2 }}>Sinergi Kementerian Keuangan</p>
          </div>
          <div className="synergy-wrapper">
            <a href="#" className="parent-area">
              <div className="kemenkeu-logo">Kemenkeu</div>
              <div style={{ fontSize: "0.72rem", color: "var(--text-gray)", fontWeight: 700, textAlign: "center", textTransform: "uppercase" }}>Kementerian<br />Keuangan</div>
            </a>
            <div className="scrolling-area">
              <div className="ticker">
                {[...synergy, ...synergy].map((label, i) => (
                  <a key={i} href="#" className="ticker-item">
                    <div className="ticker-logo">{label.slice(0,4)}</div>
                    <span style={{ fontSize: "0.72rem", color: "#888", fontWeight: 700 }}>{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bppk-footer">
        <div className="footer-container">
          <div>
            <div className="footer-logo">BPPK</div>
            <h3 style={{ margin: "0 0 10px 0", fontSize: "1.05rem", lineHeight: 1.4 }}>Badan Pendidikan dan<br />Pelatihan Keuangan</h3>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.85rem", lineHeight: 1.65 }}>Unit Eselon I Kemenkeu yang bertugas menyelenggarakan pendidikan, pelatihan, dan sertifikasi keuangan negara.</p>
          </div>
          <div>
            <h4 className="footer-heading">Tautan Cepat</h4>
            <ul className="footer-links">
              <li><a href="#">Profil BPPK</a></li>
              <li><a href="#">Berita & Pengumuman</a></li>
              <li><a href="#">Reformasi Birokrasi</a></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-heading">Layanan</h4>
            <ul className="footer-links">
              <li><a href="#">Kemenkeu Learning Center</a></li>
              <li><a href="#">Sertifikasi Kompetensi</a></li>
              <li><a href="#">Katalog Pelatihan</a></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-heading">Hubungi Kami</h4>
            <p style={{ color: "rgba(255,255,255,0.78)", fontSize: "0.85rem", lineHeight: 1.7 }}>
              <strong>Kantor Pusat</strong><br />Jl. Purnawarman No.99,<br />Kebayoran Baru, Jakarta Selatan<br /><br />
              <strong>Telepon:</strong> (021) 2922 2922<br />
              <strong>Email:</strong> kemenkeu.corpu@kemenkeu.go.id
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          © 2026 Badan Pendidikan dan Pelatihan Keuangan (BPPK) — Kementerian Keuangan Republik Indonesia.
        </div>
      </footer>
    </>
  );
}

function Chevron() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>;
}
function Star() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="var(--bppk-yellow)" stroke="var(--bppk-yellow)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>;
}
