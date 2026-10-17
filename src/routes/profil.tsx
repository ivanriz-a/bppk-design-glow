import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SiteNavbar, SiteFooter } from "@/components/SiteChrome";
import hero1 from "@/assets/hero-1.png";
import hero2 from "@/assets/hero-2.png";
import hero3 from "@/assets/hero-3.png";
import edukasiCover from "@/assets/edukasi-cover.jpg";
import bgJurnal from "@/assets/background-jurnal.jpg";
import bgBuku from "@/assets/background-buku.jpeg";
import coverBuku from "@/assets/cover-buku.png";
import profilHeroBg from "@/assets/profil-hero-bg.png";
import logoPutih from "@/assets/logo-bppk-putih.png";
import logoFooter from "@/assets/logo-kemenkeu-bppk-putih.png";

export const Route = createFileRoute("/profil")({
  head: () => ({
    meta: [
      { title: "Profil Lembaga — BPPK Kementerian Keuangan" },
      { name: "description", content: "Mengenal Badan Pendidikan dan Pelatihan Keuangan: sejarah, visi & misi, tugas & fungsi, Kemenkeu Corpu, dan Learning Organization." },
      { property: "og:title", content: "Profil Lembaga — BPPK" },
      { property: "og:description", content: "Mengenal Badan Pendidikan dan Pelatihan Keuangan, Kementerian Keuangan RI." },
    ],
  }),
  component: ProfilPage,
});

type SectionId = "sejarah" | "visi-misi" | "tugas-fungsi" | "corpu" | "learning-org";

const sections: { id: SectionId; num: string; label: string }[] = [
  { id: "sejarah", num: "01", label: "Sejarah BPPK" },
  { id: "visi-misi", num: "02", label: "Visi dan Misi" },
  { id: "tugas-fungsi", num: "03", label: "Tugas dan Fungsi" },
  { id: "corpu", num: "04", label: "Kemenkeu Corpu" },
  { id: "learning-org", num: "05", label: "Learning Organization" },
];

const milestones = [
  { year: "1952", title: "Akademi Ajun Akuntan", desc: "Departemen Keuangan membentuk Akademi Ajun Akuntan Negara dan Akademi Ajun Akuntan Pajak untuk menyiapkan kader pimpinan tinggi pengelola keuangan negara.", img: hero1 },
  { year: "1959", title: "Sekolah Tinggi Ilmu Keuangan Negara", desc: "Berdasarkan SK Menkeu No. 175402/UP/X tanggal 31 Desember 1959, dibentuk STIKN dengan empat jurusan: Pajak Umum, Bea dan Cukai, Kebendaharaan Umum, dan Akuntansi.", img: hero2 },
  { year: "1968", title: "Institut Ilmu Keuangan Negara (IIK)", desc: "Keppres RI Nomor 167 Tahun 1968 membentuk IIK yang meleburkan STIKN, Akademi Treasury Negara (ATN), dan Akademi Dinas Pemeriksa Keuangan (ADPK).", img: hero3 },
  { year: "1975", title: "Lahirnya BPLK", desc: "Diresmikan melalui Keppres No. 44 Tahun 1974 dan KMK No. 405/MK/6/4/1975. Tanggal 16 April 1975 ditetapkan sebagai hari jadi BPLK.", img: edukasiCover },
  { year: "1987", title: "Penguatan Balai Diklat", desc: "Melalui KMK No. 189/KMK.01/1987 dibentuk Balai Diklat di Medan, Yogyakarta, Ujung Pandang, dan Kediri.", img: bgJurnal },
  { year: "2001", title: "Transformasi BPLK menjadi BPPK", desc: "Berdasarkan KMK No. 2/KMK.01/2001, BPLK berubah nama menjadi Badan Pendidikan dan Pelatihan Keuangan (BPPK).", img: bgBuku },
  { year: "2023", title: "Organisasi BPPK Terkini", desc: "Berdasarkan PMK Nomor 135 Tahun 2023, BPPK terdiri dari 1 Sekretariat, 5 Pusdiklat, dan 1 Pusat Pembinaan Jabatan Fungsional dan Penjaminan Mutu.", img: hero1 },
];

const akademiAwal = [
  "Akademi Ajun Akuntan Negara – 1952",
  "Akademi Ajun Akuntan Pajak – 1952",
  "Akademi Pajak dan Pabean – 1956",
  "Akademi Thesauri Negara – 1960",
];

const pusdiklatAwal = [
  "Sekretariat Badan Pendidikan dan Latihan Keuangan;",
  "Pusdiklat Kebendaharaan Umum;",
  "Pusdiklat Perpajakan;",
  "Pusdiklat Bea dan Cukai;",
  "Pusdiklat Pengawasan;",
  "Pusdiklat IPEDA dan Pegadaian; dan",
  "Pusdiklat Akuntansi Negara.",
];

const bplk1991 = [
  "Sekretariat Badan;",
  "Pusdiklat Pegawai;",
  "Pusdiklat Anggaran;",
  "Pusdiklat Perpajakan;",
  "Pusdiklat Bea dan Cukai; dan",
  "Pusdiklat Keuangan Umum.",
];

const bplk1997 = [
  "Sekretariat Badan;",
  "Pusdiklat Pegawai;",
  "Pusdiklat Anggaran;",
  "Pusdiklat Perpajakan;",
  "Pusdiklat Bea dan Cukai; dan",
  "Pusdiklat Keuangan Umum.",
];

const bppk2023 = [
  "Sekretariat Badan;",
  "Pusdiklat Kepemimpinan dan Manajemen;",
  "Pusdiklat Anggaran dan Perbendaharaan;",
  "Pusdiklat Pajak;",
  "Pusdiklat Bea dan Cukai;",
  "Pusdiklat Keuangan Publik; dan",
  "Pusat Pembinaan Jabatan Fungsional dan Penjaminan Mutu.",
];

const bdkList = [
  "BDK Medan;",
  "BDK Pekanbaru;",
  "BDK Palembang;",
  "BDK Cimahi;",
  "BDK Yogyakarta;",
  "BDK Malang;",
  "BDK Denpasar;",
  "BDK Pontianak;",
  "BDK Balikpapan;",
  "BDK Makassar; dan",
  "BDK Manado.",
];

const misi = [
  "Mewujudkan ectorion bereputasi unggul dan bertaraf internasional serta pengelolaan tugas belajar yang efektif dan tepat sasaran.",
  "Menyelenggarakan program pembelajaran yang berdampak dalam Kerangka Kementerian Keuangan Corporate University.",
  "Mewujudkan sertifikasi kompetensi di bidang keuangan negara dan ector keuangan, serta akreditasi program pembelajaran di bidang keuangan negara yang andal.",
  "Mewujudkan pengelolaan jabatan fungsional di bidang keuangan negara melalui pembinaan jabatan fungsional yang ectorional dan adaptif.",
  "Memperkuat penelitian di bidang keuangan negara dan ector keuanngan yang didukung manajemen pengetahuan.",
  "Mewujudkan pengelolaan sumber daya organisasi yang andal dan adaptif untuk mendukung kinerja BPPK yang unggul.",
];

const fungsi = [
  "penyusunan kebijakan teknis, rencana dan program pendidikan, pelatihan, dan sertifikasi kompetensi di bidang keuangan negara, dan manajemen pengetahuan;",
  "pelaksanaan pendidikan, pelatihan, sertifikasi kompetensi di bidang keuangan negara, dan manajemen pengetahuan;",
  "pelaksanaan pembinaan jabatan fungsional di bidang keuangan negara, penjaminan mutu pembelajaran, akreditasi program pelatihan di bidang keuangan negara, pengelolaan uji kompetensi dan sertifikasi kompetensi di bidang keuangan negara, pengelolaan tes terpadu dan manajemen beasiswa berdasarkan kebijakan teknis;",
  "pelaksanaan pemantauan, analisis, evaluasi, dan pelaporan atas pelaksanaan pendidikan, pelatihan, sertifikasi kompetensi, pembinaan jabatan fungsional, dan pemanfaatan hasil pendidikan dan pelatihan di bidang keuangan negara, dan manajemen pengetahuan;",
  "pelaksanaan administrasi Badan Pendidikan dan Pelatihan Keuangan; dan",
  "pelaksanaan fungsi lain yang diberikan oleh Menteri Keuangan.",
];

const dasarHukum = [
  "Peraturan Menteri Keuangan Nomor Nomor 160/PMK.01/2020 tentang Organisasi dan Tata Kerja Politeknik Keuangan Negara STAN;",
  "Peraturan Menteri Keuangan Nomor 118/PMK.01/2021 tentang Organisasi dan Tata Kerja Kementerian Keuangan sebagaimana telah diubah dengan Peraturan Menteri Keuangan Nomor 141/PMK.01/2022 tentang Perubahan atas Peraturan Menteri Keuangan Nomor 118/PMK.01/2021 tentang Organisasi dan Tata Kerja Kementerian Keuangan dan Peraturan Menteri Keuangan Nomor 135 Tahun 2023 tentang Perubahan Kedua atas Peraturan Menteri Keuangan Nomor 118/PMK.01/2021 tentang Organisasi dan Tata Kerja Kementerian Keuangan; dan",
  "Peraturan Menteri Keuangan Nomor Nomor 79/PMK.01/2022 tentang Organisasi dan Tata Kerja Unit Pelaksana Teknis di Lingkungan Badan Pendidikan dan Pelatihan Keuangan.",
  "Peraturan Menteri Keuangan Nomor 124 Tahun 2024 tentang Organisasi dan Tata Kerja Kementerian Keuangan.",
];




function ProfilPage() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<SectionId>("sejarah");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id as SectionId);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
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

  // Timeline reveal on scroll
  useEffect(() => {
    const items = document.querySelectorAll(".profil-timeline-item");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("revealed");
        });
      },
      { threshold: 0.2 }
    );
    items.forEach((i) => obs.observe(i));
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
        <div className="profil-hero-bg" style={{ backgroundImage: `url(${profilHeroBg})` }} />
        <div className="profil-hero-overlay" />
        <div className="profil-hero-content container-bppk">
          <nav className="profil-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Beranda</Link>
            <span className="sep">/</span>
            <span>Profil Lembaga</span>
          </nav>
          <p className="profil-hero-eyebrow">TENTANG BPPK</p>
          <h1 className="profil-hero-title">
            Profil <em>Lembaga</em>
          </h1>
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
            {/* SEJARAH */}
            <section id="sejarah" className="profil-section">
              <header className="profil-section-head">
                <span className="profil-section-num">01</span>
                <div>
                  
                  <h2 className="profil-section-title">Sejarah <em>BPPK</em></h2>
                </div>
              </header>
              <div className="profil-section-intro">
                <p>
                  Badan Pendidikan dan Pelatihan Keuangan merupakan salah satu unit Eselon I yang berada di bawah Kementerian Keuangan yang memiliki tugas menyelenggarakan pendidikan, pelatihan, dan sertifikasi kompetensi di bidang keuangan negara sesuai dengan ketentuan peraturan perundang-undangan.
                </p>
              </div>

              <div className="profil-timeline profil-timeline-v2">
                <div className="profil-timeline-line" aria-hidden="true" />
                {milestones.map((m) => (
                  <article key={m.year} className="profil-timeline-item">
                    <div className="profil-timeline-node" aria-hidden="true" />
                    <div className="profil-timeline-card">
                      <div className="profil-timeline-media">
                        <img src={m.img} alt={m.title} loading="lazy" />
                        <span className="profil-timeline-year">{m.year}</span>
                      </div>
                      <div className="profil-timeline-body">
                        <h3>{m.title}</h3>
                        <p>{m.desc}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="profil-section-intro" style={{ marginTop: "3rem" }}>
                <h3 className="profil-section-title" style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Pendidikan Pada Masa Sebelum BPLK</h3>
                <p>
                  Usai pengakuan kedaulatan Republik Indonesia oleh Belanda pada tahun 1949, Departemen Keuangan memerlukan adanya suatu institusi tinggi untuk mempersiapkan kader-kader pimpinan tinggi di Departemen Keuangan. Maka selain merekrut pegawai lulusan dari perguruan tinggi dari universitas di dalam negeri maupun Belanda, Departemen Keuangan juga membentuk institusi pendidikan tinggi yang secara spesifik membidangi terkait pengelolaan keuangan negara, yaitu:
                </p>
                <ol className="profil-vm-list">
                  {akademiAwal.map((a, i) => (
                    <li key={i}>
                      <span className="profil-vm-num">{String(i + 1).padStart(2, "0")}</span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ol>
                <p>
                  Periode tahun 1959, terjadi berbagai perubahan dan pembentukan Sekolah Tinggi Ilmu Keuangan Negara (STIKN) berdasarkan Surat Keputusan Menkeu No: 175402/UP/X tanggal 31 Desember 1959. Sekolah ini menggabungkan beberapa akademi dan memiliki empat jurusan yakni Pajak Umum, Bea dan Cukai, Kebendaharaan Umum dan Akuntansi.
                </p>
                <p>
                  Seiring berjalannya waktu, pada tahun 1968 berdasarkan Keputusan Presiden RI Nomor 167 tahun 1968 dibentuklah Institut Ilmu Keuangan Negara (IIK) yang meleburkan STIKN dan Akademi Treasury Negara (ATN) yang dibentuk Departemen Keuangan serta Akademi Dinas Pemeriksa Keuangan (ADPK) yang dibentuk oleh Badan Pemeriksa Keuangan.
                </p>
              </div>

              <div className="profil-section-intro" style={{ marginTop: "2.5rem" }}>
                <h3 className="profil-section-title" style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Lahirnya Badan Pendidikan dan Latihan Keuangan (BPLK)</h3>
                <p>
                  Tahun 1974, Bapak Ali Wardhana selaku Menteri Keuangan pada saat itu menginisiasi pengintegrasian seluruh akademi dan institusi pendidikan yang menangani pendidikan dan pelatihan di Departemen Keuangan pada satu lembaga khusus yang dinamakan Badan Pendidikan dan Latihan Keuangan (BPLK).
                </p>
                <p>
                  BPLK diresmikan melalui Keputusan Presiden RI Nomor 44 tahun 1974 tentang Pokok-Pokok Organisasi Departemen yang diikuti dengan Keputusan Menteri Keuangan Nomor 405/MK/6/4/1975 dimana Bapak Mulyatno Sindhudarmoko ditunjuk sebagai Kepala BPLK yang pertama. Keputusan ini ditetapkan pada tanggal 16 April 1975 dan dinyatakan sebagai hari jadi BPLK.
                </p>
                <p>Berdasarkan keputusan tersebut, BPLK terdiri dari 1 Sekretariat dan 6 Pusdiklat yaitu:</p>
                <ol className="profil-vm-list">
                  {pusdiklatAwal.map((p, i) => (
                    <li key={i}>
                      <span className="profil-vm-num">{String(i + 1).padStart(2, "0")}</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ol>
                <p>
                  Selain itu, BPLK diperkuat pula dengan pembentukan Balai Diklat yakni Pusdiklat Pegawai di Magelang pada tahun 1984. Kemudian Balai Diklat di Medan, Yogyakarta, Ujung Pandang dan Kediri pada tahun 1987 melalui Keputusan Menteri Keuangan Nomor 189/KMK.01/1987.
                </p>
                <p>
                  Tahun 1989, penyelenggaraan kegiatan program pendidikan pascasarjana yang dilaksanakan oleh Panitia Kerja Sama Teknik Luar Negeri (KTLN) yang bersifat ad hoc diserahkan kepada BPLK berdasarkan Keputusan Menteri Keuangan Nomor 1307/KMK.14/1989 tentang Perubahan Keputusan Menteri Keuangan Nomor 1018/KMK.14/1989 tentang Pelimpahan Tugas Panitia Kerja Sama Teknik Luar Negeri Departemen Keuangan – Perbankan (jabatan setingkat Eselon III yaitu Bidang Administrasi Pendidikan Pascasarjana pada Pusdiklat Pegawai BPLK yang menjadi cikal bakal PB PSDM).
                </p>
                <p>
                  Pada tahun 1990 – 1991, Badan Diklat Keuangan memiliki unit penyelenggara program diploma yang terdiri dari dua lembaga yaitu Balai Program Diploma dan STAN. Di pertengahan tahun 1990, muncul rencana penyempurnaan organisasi Pendidikan Tinggi Departemen Keuangan melalui peleburan STAN ke dalam satu wadah bernama Sekolah Tinggi Ilmu Keuangan dan Akuntansi (STIKA).
                </p>
                <p>Di tahun 1991, BPLK mengalami perubahan organisasi berdasarkan Keputusan Menteri Keuangan Nomor 191/KMK.01/1991 dan terdiri dari:</p>
                <ol className="profil-vm-list">
                  {bplk1991.map((p, i) => (
                    <li key={i}>
                      <span className="profil-vm-num">{String(i + 1).padStart(2, "0")}</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ol>
                <p>Tahun 1997, BPLK berdasarkan Keputusan Menteri Keuangan Nomor 100/KMK.01/1997 kembali mengalami perubahan organisasi dengan susunan yang terdiri dari:</p>
                <ol className="profil-vm-list">
                  {bplk1997.map((p, i) => (
                    <li key={i}>
                      <span className="profil-vm-num">{String(i + 1).padStart(2, "0")}</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ol>
                <p>
                  STAN tetap berada di BPLK berdasarkan Pasal 164 yang menyatakan Keputusan Menteri Keuangan Nomor 191/KMK.01/1991 dinyatakan tidak berlaku kecuali Pasal 156.
                </p>
              </div>

              <div className="profil-section-intro" style={{ marginTop: "2.5rem" }}>
                <h3 className="profil-section-title" style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Terbentuknya Badan Pendidikan dan Pelatihan Keuangan (BPPK)</h3>
                <p>
                  Tahun 2001, perubahan organisasi BPLK kembali terjadi dengan ditetapkan Keputusan Menteri Keuangan Nomor 2/KMK.01/2001. Nama BPLK berubah menjadi Badan Pendidikan dan Pelatihan Keuangan (BPPK) dengan susunan Sekretariat Badan, Pusdiklat Pegawai, Pusdiklat Anggaran, Pusdiklat Perpajakan, Pusdiklat Bea dan Cukai, dan Pusdiklat Keuangan Umum. STAN secara status quo tetap berada di BPPK tetapi harus segera menyesuaikan diri dengan ketentuan peraturan perundang-undangan yang berlaku.
                </p>
                <p>
                  Perubahan selanjutnya kembali terjadi dengan ditetapkannya Peraturan Menteri Keuangan mengenai Organisasi dan Tata Kerja pada tahun 2006, 2008, 2010, 2014, 2015, 2018, 2021, dan 2023.
                </p>
                <p>
                  Kini berdasarkan Peraturan Menteri Keuangan Nomor 135 Tahun 2023 tentang Perubahan Kedua atas peraturan Menteri Keuangan Nomor 118/PMK.01/2021 tentang Organisasi dan Tata Kerja Kementerian Keuangan, Badan Pendidikan dan Pelatihan Keuangan (BPPK) terdiri dari 1 Sekretariat, 5 Pusdiklat, dan 1 Pusat Pembinaan yaitu:
                </p>
                <ol className="profil-vm-list">
                  {bppk2023.map((p, i) => (
                    <li key={i}>
                      <span className="profil-vm-num">{String(i + 1).padStart(2, "0")}</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ol>
                <p>
                  Politeknik Keuangan Negara STAN tetap berada di Badan Pendidikan dan Pelatihan Keuangan berdasarkan Peraturan Menteri Keuangan Nomor 160/PMK.01/2020 tentang Organisasi dan Tata Kerja Politeknik Keuangan Negara STAN yang masih berlaku hingga saat ini.
                </p>
                <p>
                  Selain itu, berdasarkan Peraturan Menteri Keuangan Nomor 79/PMK.01/2022 tentang Organisasi dan Tata Kerja Unit Pelaksana Teknis di Lingkungan Badan Pendidikan dan Pelatihan Keuangan, BPPK juga memiliki Unit Pelaksana Teknis (UPT) yang terdiri dari 11 Balai Pendidikan dan Pelatihan Keuangan (BDK) dan 1 Balai Pendidikan dan Pelatihan Kepemimpinan (BDPim), yaitu:
                </p>
                <ol className="profil-vm-list">
                  {bdkList.map((b, i) => (
                    <li key={i}>
                      <span className="profil-vm-num">{String(i + 1).padStart(2, "0")}</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ol>
                <p>* BDPim Magelang</p>
                <p>
                  Namun dengan berlakunya Peraturan Menteri Keuangan Nomor 135 Tahun 2023 tentang Perubahan Kedua atas peraturan Menteri Keuangan Nomor 118/PMK.01/2021 tentang Organisasi dan Tata Kerja Kementerian Keuangan, Balai Pendidikan dan Pelatihan Kepemimpinan (BDPim) tidak lagi menjadi UPT di bawah BPPK.
                </p>
              </div>
            </section>


            {/* VISI MISI */}
            <section id="visi-misi" className="profil-section">
              <header className="profil-section-head">
                <span className="profil-section-num">02</span>
                <div>
                  
                  <h2 className="profil-section-title">Visi dan <em>Misi</em></h2>
                </div>
              </header>

              <figure className="profil-section-banner">
                <img src={edukasiCover} alt="Visi dan misi BPPK" loading="lazy" />
                <figcaption>Arah strategis pengembangan SDM keuangan negara.</figcaption>
              </figure>



              <div className="profil-vm-grid">
                <div className="profil-vm-card profil-vm-card-dark">
                  <div className="profil-vm-icon" aria-hidden="true">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/></svg>
                  </div>
                  <p className="profil-vm-label">VISI 2025–2029</p>
                  <h3 className="profil-vm-text">
                    Menjadi <em>Knowledge Institution</em> berbasis teknologi digital untuk menghasilkan SDM Pengelola Keuangan Negara yang <em>agile</em> dan berintegritas dalam rangka mendukung visi Kementerian Keuangan.
                  </h3>
                  <p className="profil-vm-quote">
                    Visi tersebut menunjukkan komitmen yang ingin dicapai oleh BPPK dalam memberikan layanan kepada pemangku kepentingan dengan memaksimalkan potensi yang ada.
                  </p>
                  <figure className="profil-vm-figure">
                    <img src={hero2} alt="Ilustrasi visi BPPK" loading="lazy" />
                  </figure>
                </div>

                <div className="profil-vm-card profil-vm-card-light">
                  <div className="profil-vm-icon profil-vm-icon-dark" aria-hidden="true">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20"/><circle cx="12" cy="12" r="9"/></svg>
                  </div>
                  <p className="profil-vm-label profil-vm-label-dark">MISI</p>
                  <ol className="profil-vm-list">
                    {misi.map((m, i) => (
                      <li key={i}>
                        <span className="profil-vm-num">{String(i + 1).padStart(2, "0")}</span>
                        <span>{m}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

            </section>

            {/* TUGAS FUNGSI */}
            <section id="tugas-fungsi" className="profil-section">
              <header className="profil-section-head">
                <span className="profil-section-num">03</span>
                <div>
                  
                  <h2 className="profil-section-title">Tugas dan <em>Fungsi</em></h2>
                </div>
              </header>

              <div className="profil-section-split">
                <figure className="profil-section-aside">
                  <img src={hero3} alt="Tugas dan fungsi BPPK" loading="lazy" />
                </figure>
                <div className="profil-section-intro profil-section-intro-inline">
                  <p>
                    BPPK mempunyai tugas menyelenggarakan pendidikan, pelatihan, dan sertifikasi kompetensi di bidang keuangan negara sesuai dengan ketentuan peraturan perundang-undangan. Dalam melaksanakan tugas tersebut BPPK menyelenggarakan fungsi:
                  </p>
                </div>
              </div>

              <ol className="profil-vm-list">
                {fungsi.map((f, i) => (
                  <li key={i}>
                    <span className="profil-vm-num">{String(i + 1).padStart(2, "0")}</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ol>

              <div className="profil-section-intro" style={{ marginTop: "2rem" }}>
                <p>
                  Tugas dan fungsi BPPK dilaksanakan oleh Unit Pusat maupun Unit Pelaksana Teknis di daerah sesuai dengan:
                </p>
              </div>


              <div className="profil-values">
                <p className="profil-values-label">DASAR HUKUM</p>
                <ol className="profil-vm-list">
                  {dasarHukum.map((d, i) => (
                    <li key={i}>
                      <span className="profil-vm-num">{String(i + 1).padStart(2, "0")}</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </section>

            {/* CORPU */}
            <section id="corpu" className="profil-section">
              <header className="profil-section-head">
                <span className="profil-section-num">04</span>
                <div>
                  
                  <h2 className="profil-section-title">Kemenkeu <em>Corpu</em></h2>
                </div>
              </header>

              <figure className="profil-section-banner profil-section-banner-dark">
                <img src={bgJurnal} alt="Kemenkeu Corporate University" loading="lazy" />
                <figcaption>Ekosistem pembelajaran terintegrasi Kementerian Keuangan.</figcaption>
              </figure>

              <div className="profil-section-intro">
                <p>
                  Sejak tahun 2015, strategi <strong>Kementerian Keuangan Corporate University (Kemenkeu Corpu)</strong> diperkenalkan untuk mengintegrasikan berbagai metode pembelajaran dengan nilai-nilai dan tujuan organisasi Kemenkeu. Hal ini sejalan dengan amanat PP 17 Tahun 2020 tentang Manajemen Pegawai Negeri Sipil. Didukung dengan sistem manajemen pengetahuan yang mutakhir, pembelajaran di Kemenkeu menjadi tak terbatas — <em>belajar tanpa batas, kinerja berkualitas</em>.
                </p>
                <p>
                  Di tengah kondisi global dan perekonomian yang penuh tantangan, Kementerian Keuangan dituntut untuk selalu berkinerja unggul, adaptif, dan mampu menghasilkan kebijakan solutif. Melalui strategi Kemenkeu Corpu, pembelajaran menjadi terintegrasi ke dalam satu ekosistem sehingga setiap pegawai tidak hanya memperoleh pembelajaran melalui pelatihan <em>(structured learning)</em>, namun juga dari lingkungan sosialnya <em>(social learning)</em> dan dari unit tempat ia bekerja <em>(learning while working)</em>.
                </p>
              </div>




              <div className="profil-section-intro" style={{ marginTop: "2.5rem" }}>
                <h3 className="profil-section-title" style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Ekosistem Pembelajaran</h3>
                <ol className="profil-vm-list">
                  <li>
                    <span className="profil-vm-num">01</span>
                    <span><strong>Structured Learning</strong> — Pembelajaran melalui pelatihan baik secara klasikal (tatap muka) di Pusdiklat/BDK maupun digital <em>(e-learning)</em> melalui KLC.</span>
                  </li>
                  <li>
                    <span className="profil-vm-num">02</span>
                    <span><strong>Social Learning</strong> — Pembelajaran melalui lingkungan sosial berupa pembimbingan, pendampingan, maupun <em>community of practice</em> (COP).</span>
                  </li>
                  <li>
                    <span className="profil-vm-num">03</span>
                    <span><strong>Learning While Working</strong> — Pembelajaran melalui penugasan dan pengalaman bekerja pegawai pada unit instansi yang bersangkutan.</span>
                  </li>
                </ol>
              </div>

              <div className="profil-section-intro" style={{ marginTop: "2.5rem" }}>
                <h3 className="profil-section-title" style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Tata Kelola</h3>
                <p>
                  Didukung dengan manajemen pengetahuan <em>(knowledge management)</em>, Kemenkeu Corpu memiliki pelaksanaan tata kelola yang terdiri atas <strong>Komite Pengarah</strong>, <strong>Komite Operasional</strong>, dan <em>Skill Group Owner</em> (SGO).
                </p>
              </div>

              <div className="profil-cta-card" style={{ marginTop: "2.5rem" }}>
                <div>
                  <p className="profil-cta-eyebrow">KEMENKEU CORPU</p>
                  <h3>Pelajari lebih lanjut tentang <em>Kemenkeu Corpu</em></h3>
                  <p>Kunjungi portal resmi Kemenkeu Corporate University untuk informasi lengkap pilar, komponen, dan platform pembelajaran.</p>
                </div>
                <a href="https://bppk.kemenkeu.go.id/pages/corpu/" target="_blank" rel="noopener noreferrer" className="profil-cta-btn">
                  Kunjungi Kemenkeu Corpu
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </a>
              </div>
            </section>

            {/* LEARNING ORG */}
            <section id="learning-org" className="profil-section">
              <header className="profil-section-head">
                <span className="profil-section-num">05</span>
                <div>
                  
                  <h2 className="profil-section-title">Learning <em>Organization</em></h2>
                </div>
              </header>

              <div className="profil-section-split profil-section-split-reverse">
                <div className="profil-section-intro profil-section-intro-inline">
                  <p>
                    <strong>Learning Organization (LO) Kemenkeu</strong> hadir sebagai jawaban dalam menyiapkan insan Kementerian Keuangan untuk menghadapi segala tantangan di masa mendatang — era penuh disrupsi yang menuntut organisasi <em>agile</em>, adaptif, inovatif, terus berubah, kolaboratif, dan saling berbagi.
                  </p>
                  <p>
                    LO membangun budaya <strong>#KitaPemelajar</strong> di lingkungan Kementerian Keuangan.
                  </p>
                </div>
                <figure className="profil-section-aside">
                  <img src={coverBuku} alt="Learning Organization BPPK" loading="lazy" />
                </figure>
              </div>


              <div className="profil-section-intro" style={{ marginTop: "2.5rem" }}>
                <h3 className="profil-section-title" style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Mengapa Learning Organization?</h3>
                <ol className="profil-vm-list">
                  <li>
                    <span className="profil-vm-num">01</span>
                    <span><strong>Pemeliharaan Aset Intelektual Organisasi</strong> — menjaga dan mengembangkan pengetahuan kolektif Kemenkeu agar tetap hidup dan bermanfaat lintas generasi pegawai.</span>
                  </li>
                  <li>
                    <span className="profil-vm-num">02</span>
                    <span><strong>Akselerasi Perwujudan Organisasi yang Agile, Adaptif, dan Inovatif</strong> — mempercepat transformasi Kemenkeu dalam merespons dinamika lingkungan strategis.</span>
                  </li>
                  <li>
                    <span className="profil-vm-num">03</span>
                    <span><strong>Optimalisasi Bekerja, Belajar, dan Berbagi Pengetahuan</strong> — mengintegrasikan aktivitas bekerja, belajar, dan berbagi menjadi satu ekosistem yang saling menguatkan.</span>
                  </li>
                </ol>
              </div>

              <div className="profil-cta-card" style={{ marginTop: "2.5rem" }}>
                <div>
                  <p className="profil-cta-eyebrow">LEARNING ORGANIZATION</p>
                  <h3>Jelajahi ekosistem <em>Learning Organization</em> Kemenkeu</h3>
                  <p>Temukan komponen, tema, dan manfaat LO Kemenkeu untuk pengembangan kompetensi berkelanjutan.</p>
                </div>
                <a href="https://bppk.kemenkeu.go.id/pages/learning-organization/" target="_blank" rel="noopener noreferrer" className="profil-cta-btn">
                  Kunjungi Learning Organization
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </a>
              </div>
            </section>
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
