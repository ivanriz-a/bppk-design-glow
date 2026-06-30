import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SiteNavbar, SiteFooter } from "@/components/SiteChrome";
import profilHeroBg from "@/assets/profil-hero-bg.png.asset.json";
import ppidStruktur from "@/assets/ppid-struktur.png.asset.json";
import slMaklumat from "@/assets/ppid-sl-maklumat.png.asset.json";
import slPermintaan from "@/assets/ppid-sl-permintaan.png.asset.json";
import slKeberatan from "@/assets/ppid-sl-keberatan.png.asset.json";
import slSengketa from "@/assets/ppid-sl-sengketa.png.asset.json";
import stat1 from "@/assets/ppid-stat-1.png.asset.json";
import stat2 from "@/assets/ppid-stat-2.png.asset.json";
import stat3 from "@/assets/ppid-stat-3.png.asset.json";
import stat4 from "@/assets/ppid-stat-4.png.asset.json";
import stat5 from "@/assets/ppid-stat-5.png.asset.json";
import {
  ppidTugas,
  ppidWewenang,
  berkalaA,
  berkalaB,
  berkalaC,
  setiapSaat,
  sertaMertaKontak,
  regulasi,
  keberatanAlasan,
  sengketaTahapan,
  statKonsolidasi,
  statPermintaan,
  statKeberatan,
  statTindaklanjut,
  statTidakDiberikan,
  type LinkItem,
} from "@/data/ppid";

export const Route = createFileRoute("/ppid")({
  head: () => ({
    meta: [
      { title: "PPID — Pejabat Pengelola Informasi dan Dokumentasi BPPK" },
      { name: "description", content: "Layanan keterbukaan informasi publik Badan Pendidikan dan Pelatihan Keuangan: profil PPID, informasi berkala, serta merta, setiap saat, regulasi, standar layanan, daftar informasi publik, dan statistik." },
      { property: "og:title", content: "PPID BPPK — Keterbukaan Informasi Publik" },
      { property: "og:description", content: "Informasi publik BPPK sesuai UU 14/2008 tentang Keterbukaan Informasi Publik." },
    ],
  }),
  component: PpidPage,
});

type SectionId =
  | "profil"
  | "berkala"
  | "serta-merta"
  | "setiap-saat"
  | "regulasi"
  | "standar-layanan"
  | "dip"
  | "statistik";

const sections: { id: SectionId; num: string; label: string }[] = [
  { id: "profil", num: "01", label: "Profil PPID" },
  { id: "berkala", num: "02", label: "Informasi Berkala" },
  { id: "serta-merta", num: "03", label: "Informasi Serta Merta" },
  { id: "setiap-saat", num: "04", label: "Informasi Setiap Saat" },
  { id: "regulasi", num: "05", label: "Regulasi" },
  { id: "standar-layanan", num: "06", label: "Standar Layanan Informasi" },
  { id: "dip", num: "07", label: "Daftar Informasi Publik" },
  { id: "statistik", num: "08", label: "Statistik" },
];

function LinkList({ items, ordered = false }: { items: LinkItem[]; ordered?: boolean }) {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag className="ppid-linklist">
      {items.map((item, i) => (
        <li key={i}>
          <div className="ppid-linklist-row">
            {ordered && <span className="ppid-linklist-num">{String(i + 1).padStart(2, "0")}</span>}
            {item.href ? (
              <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                {item.label}
              </a>
            ) : (
              <span>{item.label}</span>
            )}
          </div>
          {item.sub && (
            <ul className="ppid-linklist-sub">
              {item.sub.map((s, j) => (
                <li key={j}>
                  {s.href ? (
                    <a href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                      {s.label}
                    </a>
                  ) : (
                    <span>{s.label}</span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </Tag>
  );
}

function PpidPage() {
  const [active, setActive] = useState<SectionId>("profil");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id as SectionId);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) {
        sectionRefs.current[s.id] = el;
        obs.observe(el);
      }
    });
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

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
            <span>Informasi Publik</span>
            <span className="sep">/</span>
            <span>PPID</span>
          </nav>
          <p className="profil-hero-eyebrow">KETERBUKAAN INFORMASI PUBLIK</p>
          <h1 className="profil-hero-title">
            Pejabat Pengelola <em>Informasi & Dokumentasi</em>
          </h1>
          <p className="profil-hero-desc">
            Layanan keterbukaan informasi publik Badan Pendidikan dan Pelatihan Keuangan sesuai amanat
            Undang-Undang Nomor 14 Tahun 2008 tentang Keterbukaan Informasi Publik.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="profil-main">
        <div className="profil-grid container-bppk">
          {/* Sidebar */}
          <aside className="profil-sidebar">
            <p className="profil-sidebar-label">Daftar Bagian</p>
            <ul>
              {sections.map((s) => (
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(s.id)}
                    className={`profil-nav-item ${active === s.id ? "is-active" : ""}`}
                    aria-current={active === s.id ? "true" : undefined}
                  >
                    <span className="profil-nav-num">{s.num}</span>
                    <span className="profil-nav-label">{s.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Mobile chip nav */}
          <div className="profil-chipnav">
            {sections.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => scrollTo(s.id)}
                className={`profil-chip ${active === s.id ? "is-active" : ""}`}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="profil-content">
            {/* 01 - PROFIL PPID */}
            <section id="profil" className="profil-section">
              <header className="profil-section-head">
                <span className="profil-section-num">01</span>
                <div>
                  <h2 className="profil-section-title">Profil <em>PPID</em></h2>
                </div>
              </header>
              <div className="profil-section-intro">
                <p>
                  Dalam rangka memberikan layanan Informasi Publik sebagaimana diamanatkan dalam
                  Undang-Undang Nomor 14 Tahun 2008 tentang Keterbukaan Informasi Publik, Menteri Keuangan
                  telah menetapkan Keputusan Menteri Keuangan Nomor 300 Tahun 2025 tentang Penunjukan
                  Pengelola Informasi dan Dokumentasi di Lingkungan Kementerian Keuangan.
                </p>
                <p>Sesuai Keputusan Menteri Keuangan tersebut ditetapkan:</p>
                <ol className="profil-vm-list">
                  <li>
                    <span className="profil-vm-num">01</span>
                    <span>
                      Kepala Badan Pendidikan dan Pelatihan Keuangan sebagai Atasan PPID Kementerian
                      Pelaksana di Lingkungan Badan Pendidikan dan Pelatihan Keuangan;
                    </span>
                  </li>
                  <li>
                    <span className="profil-vm-num">02</span>
                    <span>
                      Sekretaris Badan Pendidikan dan Pelatihan Keuangan sebagai PPID Kementerian
                      Keuangan;
                    </span>
                  </li>
                  <li>
                    <span className="profil-vm-num">03</span>
                    <span>
                      PPID Pelaksana di Lingkungan Badan Pendidikan dan Pelatihan Keuangan:
                      <br />a. Kepala Bagian Administrasi Akademik dan Kemahasiswaan, Politeknik Keuangan
                      Negara STAN sebagai PPID Tingkat II; dan
                      <br />b. Para Kepala Balai Diklat Keuangan sebagai PPID Tingkat III.
                    </span>
                  </li>
                </ol>
                <p>
                  Pemberian layanan informasi publik oleh PPID di lingkungan Badan Pendidikan dan
                  Pelatihan Keuangan berpedoman pada Peraturan Menteri Keuangan Nomor 110/PMK.01/2022
                  tentang Pedoman Layanan Informasi Publik Pejabat Pengelola Informasi dan Dokumentasi
                  di Lingkungan Kementerian Keuangan. PPID Tingkat I Badan Pendidikan dan Pelatihan
                  Keuangan dan PPID Pelaksana di lingkungan Badan Pendidikan dan Pelatihan Keuangan
                  bertanggung jawab untuk melakukan penyimpanan, pendokumentasian, penyediaan, dan/atau
                  pelayanan informasi publik di lingkungan Badan Pendidikan dan Pelatihan Keuangan.
                </p>
              </div>

              <h3 className="ppid-subhead">Struktur PPID Tingkat I BPPK</h3>
              <figure className="ppid-struktur-figure">
                <img src={ppidStruktur.url} alt="Struktur PPID Tingkat I BPPK" loading="lazy" />
                <figcaption>Struktur PPID Tingkat I Badan Pendidikan dan Pelatihan Keuangan</figcaption>
              </figure>

              <div className="ppid-struktur-list">
                {[
                  { level: "PPID Kementerian Keuangan", jabatan: "Kepala Biro Komunikasi dan Layanan Informasi" },
                  { level: "Atasan PPID Tingkat I BPPK", jabatan: "Kepala Badan Pendidikan dan Pelatihan Keuangan" },
                  { level: "PPID Tingkat I BPPK", jabatan: "Sekretaris Badan" },
                  { level: "PPID Tingkat II PKN STAN", jabatan: "Kepala Bagian Administrasi Akademik dan Kemahasiswaan" },
                  { level: "PPID Tingkat III BPPK", jabatan: "Kepala Balai Diklat Keuangan dan Kepala Balai Diklat Kepemimpinan" },
                ].map((s) => (
                  <div key={s.level} className="ppid-struktur-item">
                    <span className="ppid-struktur-level">{s.level}</span>
                    <span className="ppid-struktur-jabatan">{s.jabatan}</span>
                  </div>
                ))}
              </div>

              <h3 className="ppid-subhead">Tugas PPID Tingkat I BPPK</h3>
              <ol className="profil-vm-list">
                {ppidTugas.map((t, i) => (
                  <li key={i}>
                    <span className="profil-vm-num">{String(i + 1).padStart(2, "0")}</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ol>

              <h3 className="ppid-subhead">Wewenang PPID Tingkat I BPPK</h3>
              <ol className="profil-vm-list">
                {ppidWewenang.map((w, i) => (
                  <li key={i}>
                    <span className="profil-vm-num">{String(i + 1).padStart(2, "0")}</span>
                    <span>{w}</span>
                  </li>
                ))}
              </ol>

              <h3 className="ppid-subhead">Jalur, Waktu, dan Biaya Layanan</h3>
              <div className="ppid-kontak-card">
                <div className="ppid-kontak-row">
                  <span className="ppid-kontak-label">Alamat</span>
                  <span>Jl. Purnawarman No. 99, Kebayoran Baru, Jakarta 12110</span>
                </div>
                <div className="ppid-kontak-row">
                  <span className="ppid-kontak-label">Telepon</span>
                  <a href="tel:134">134</a>
                </div>
                <div className="ppid-kontak-row">
                  <span className="ppid-kontak-label">Email</span>
                  <a href="mailto:ppidbppk@kemenkeu.go.id">ppidbppk@kemenkeu.go.id</a>
                </div>
                <div className="ppid-kontak-row">
                  <span className="ppid-kontak-label">Website</span>
                  <a href="https://e-ppid.kemenkeu.go.id" target="_blank" rel="noreferrer">e-ppid.kemenkeu.go.id</a>
                </div>
                <div className="ppid-kontak-row">
                  <span className="ppid-kontak-label">Waktu Layanan</span>
                  <span>08.00 – 15.00 setiap hari kerja</span>
                </div>
                <div className="ppid-kontak-row">
                  <span className="ppid-kontak-label">Biaya</span>
                  <span>Tidak dikenakan biaya</span>
                </div>
              </div>
            </section>

            {/* 02 - INFORMASI BERKALA */}
            <section id="berkala" className="profil-section">
              <header className="profil-section-head">
                <span className="profil-section-num">02</span>
                <div>
                  <h2 className="profil-section-title">Informasi <em>Berkala</em></h2>
                </div>
              </header>
              <div className="profil-section-intro">
                <p>
                  Informasi berkala merupakan informasi yang wajib disediakan dan diumumkan kepada
                  masyarakat secara rutin dalam jangka waktu tertentu guna menjamin transparansi,
                  akuntabilitas, serta keterbukaan penyelenggaraan tugas dan fungsi BPPK sebagai
                  Corporate University Kementerian Keuangan.
                </p>
              </div>

              <h3 className="ppid-subhead">A. Informasi Badan Pendidikan dan Pelatihan Keuangan</h3>
              <LinkList items={berkalaA} />

              <h3 className="ppid-subhead">B. Program, Kegiatan, dan Kinerja BPPK</h3>
              <LinkList items={berkalaB} />

              <h3 className="ppid-subhead">C. Informasi Penting Terkait Pelaksanaan Tugas Badan Publik</h3>
              <LinkList items={berkalaC} />
            </section>

            {/* 03 - SERTA MERTA */}
            <section id="serta-merta" className="profil-section">
              <header className="profil-section-head">
                <span className="profil-section-num">03</span>
                <div>
                  <h2 className="profil-section-title">Informasi <em>Serta Merta</em></h2>
                </div>
              </header>
              <div className="profil-section-intro">
                <p>
                  BPPK menyediakan dan mengumumkan Informasi Publik secara serta merta apabila terdapat
                  keadaan atau peristiwa tertentu yang berdampak pada layanan, kegiatan, atau kepentingan
                  publik sehingga memerlukan penyampaian informasi secara cepat dan tepat.
                </p>
                <p>
                  Dalam kondisi yang memerlukan penyampaian informasi secara cepat, BPPK dapat
                  menyampaikan informasi melalui kanal berikut:
                </p>
              </div>

              <div className="ppid-kontak-card">
                {sertaMertaKontak.map((k) => (
                  <div key={k.label} className="ppid-kontak-row">
                    <span className="ppid-kontak-label">{k.label}</span>
                    {k.href ? (
                      <a href={k.href} target={k.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                        {k.value}
                      </a>
                    ) : (
                      <span>{k.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* 04 - SETIAP SAAT */}
            <section id="setiap-saat" className="profil-section">
              <header className="profil-section-head">
                <span className="profil-section-num">04</span>
                <div>
                  <h2 className="profil-section-title">Informasi <em>Setiap Saat</em></h2>
                </div>
              </header>
              <div className="profil-section-intro">
                <p>
                  BPPK menyediakan Informasi Publik yang wajib tersedia setiap saat dan dapat diakses
                  oleh masyarakat melalui mekanisme permohonan informasi publik sesuai ketentuan yang
                  berlaku.
                </p>
              </div>
              <LinkList items={setiapSaat} ordered />
            </section>

            {/* 05 - REGULASI */}
            <section id="regulasi" className="profil-section">
              <header className="profil-section-head">
                <span className="profil-section-num">05</span>
                <div>
                  <h2 className="profil-section-title"><em>Regulasi</em></h2>
                </div>
              </header>
              <div className="profil-section-intro">
                <p>
                  Daftar peraturan dan dasar hukum yang menjadi pedoman pelaksanaan layanan informasi
                  publik di lingkungan BPPK.
                </p>
              </div>
              <div className="ppid-table-wrap">
                <table className="ppid-table">
                  <thead>
                    <tr>
                      <th style={{ width: 60 }}>No.</th>
                      <th>Regulasi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {regulasi.map((r, i) => (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{r}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 06 - STANDAR LAYANAN */}
            <section id="standar-layanan" className="profil-section">
              <header className="profil-section-head">
                <span className="profil-section-num">06</span>
                <div>
                  <h2 className="profil-section-title">Standar Layanan <em>Informasi</em></h2>
                </div>
              </header>

              <div className="profil-section-intro">
                <p>
                  PPID Tingkat I BPPK siap memberikan pelayanan informasi publik sesuai standar pelayanan
                  yang telah ditetapkan. Berikut prosedur permintaan informasi, pengajuan keberatan, dan
                  penyelesaian sengketa informasi publik.
                </p>
              </div>

              <h3 className="ppid-subhead">Mekanisme Permintaan Informasi Publik</h3>
              <div className="profil-section-intro">
                <p>
                  Setiap Pemohon Informasi Publik dapat mengajukan permintaan untuk memperoleh Informasi
                  Publik kepada Badan Publik terkait secara tertulis atau tidak tertulis (Pasal 22 ayat (1)
                  UU Nomor 14 Tahun 2008).
                </p>
                <p>
                  Permintaan Informasi Publik dapat diajukan melalui formulir digital pada{" "}
                  <a href="https://e-ppid.kemenkeu.go.id/in/login" target="_blank" rel="noreferrer">
                    e-ppid.kemenkeu.go.id
                  </a>{" "}
                  atau dengan mengunduh formulir permintaan informasi yang tersedia.
                </p>
              </div>

              <h3 className="ppid-subhead">Mekanisme Pengajuan Keberatan</h3>
              <div className="profil-section-intro">
                <p>
                  Setiap Pemohon Informasi Publik dapat mengajukan keberatan secara tertulis kepada
                  Atasan PPID berdasarkan alasan berikut:
                </p>
              </div>
              <ol className="profil-vm-list">
                {keberatanAlasan.map((k, i) => (
                  <li key={i}>
                    <span className="profil-vm-num">{String.fromCharCode(97 + i)}.</span>
                    <span>{k}</span>
                  </li>
                ))}
              </ol>

              <h3 className="ppid-subhead">Prosedur Pengajuan Sengketa</h3>
              <div className="profil-section-intro">
                <p>
                  Dalam hal Pemohon tidak puas atas tanggapan Keberatan Informasi Publik yang diterbitkan
                  oleh Atasan PPID Tk. I, Pemohon dapat mengajukan Sengketa Informasi Publik kepada Komisi
                  Informasi.
                </p>
              </div>
              <ol className="profil-vm-list">
                {sengketaTahapan.map((s, i) => (
                  <li key={i}>
                    <span className="profil-vm-num">{String(i + 1).padStart(2, "0")}</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
            </section>

            {/* 07 - DIP */}
            <section id="dip" className="profil-section">
              <header className="profil-section-head">
                <span className="profil-section-num">07</span>
                <div>
                  <h2 className="profil-section-title">Daftar <em>Informasi Publik</em></h2>
                </div>
              </header>
              <div className="profil-section-intro">
                <p>
                  Daftar Informasi Publik (DIP) Badan Pendidikan dan Pelatihan Keuangan Tahun 2026
                  dapat diakses melalui tautan resmi berikut.
                </p>
              </div>
              <a
                href="https://s.kemenkeu.go.id/dipbppk2026"
                target="_blank"
                rel="noreferrer"
                className="ppid-cta"
              >
                Buka DIP BPPK 2026
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
            </section>

            {/* 08 - STATISTIK */}
            <section id="statistik" className="profil-section">
              <header className="profil-section-head">
                <span className="profil-section-num">08</span>
                <div>
                  <h2 className="profil-section-title"><em>Statistik</em> Layanan</h2>
                </div>
              </header>
              <div className="profil-section-intro">
                <p>
                  Rekapitulasi permintaan informasi, keberatan, dan tindak lanjut layanan informasi
                  publik di lingkungan BPPK.
                </p>
              </div>

              <h3 className="ppid-subhead">Konsolidasi Permintaan Informasi Tahun 2025</h3>
              <div className="ppid-stat-grid">
                {statKonsolidasi.map((s) => (
                  <div key={s.label} className="ppid-stat-card">
                    <span className="ppid-stat-value">{s.value}</span>
                    <span className="ppid-stat-label">{s.label}</span>
                  </div>
                ))}
              </div>

              <h3 className="ppid-subhead">Jumlah Permintaan Informasi — PPID Tingkat I BPPK</h3>
              <div className="ppid-table-wrap">
                <table className="ppid-table">
                  <thead>
                    <tr>
                      <th>Tahun</th>
                      <th>Jumlah Permintaan</th>
                    </tr>
                  </thead>
                  <tbody>
                    {statPermintaan.map((s) => (
                      <tr key={s.tahun}>
                        <td>{s.tahun}</td>
                        <td>{s.jumlah.toLocaleString("id-ID")}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="ppid-subhead">Jumlah Keberatan — PPID Tingkat I BPPK</h3>
              <div className="ppid-table-wrap">
                <table className="ppid-table">
                  <thead>
                    <tr>
                      <th>Tahun</th>
                      <th>Jumlah Keberatan</th>
                    </tr>
                  </thead>
                  <tbody>
                    {statKeberatan.map((s) => (
                      <tr key={s.tahun}>
                        <td>{s.tahun}</td>
                        <td>{s.jumlah}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="ppid-subhead">Tindak Lanjut Permintaan Informasi Tahun 2025</h3>
              <div className="ppid-table-wrap">
                <table className="ppid-table">
                  <thead>
                    <tr>
                      <th>Bulan</th>
                      <th>Diberikan sepenuhnya</th>
                      <th>Diberikan sebagian</th>
                      <th>Tidak diberikan</th>
                      <th>Tidak ditindaklanjuti</th>
                      <th>Rata-rata waktu (hari kerja)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {statTindaklanjut.map((s) => (
                      <tr key={s.bulan}>
                        <td>{s.bulan}</td>
                        <td>{s.penuh}</td>
                        <td>{s.sebagian}</td>
                        <td>{s.tidak}</td>
                        <td>{s.tdkLanjut}</td>
                        <td>{s.rata}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="ppid-subhead">Permintaan Informasi yang Tidak Diberikan Tahun 2025</h3>
              <div className="ppid-table-wrap">
                <table className="ppid-table">
                  <thead>
                    <tr>
                      <th style={{ width: 60 }}>No.</th>
                      <th>No. Pendaftaran</th>
                      <th>Keterangan</th>
                    </tr>
                  </thead>
                  <tbody>
                    {statTidakDiberikan.map((s) => (
                      <tr key={s.no}>
                        <td>{s.no}</td>
                        <td>{s.reg}</td>
                        <td>{s.ket}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
