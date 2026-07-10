import coverJurnal from "@/assets/cover-jurnal.jpg.asset.json";
import coverEdukasi from "@/assets/edukasi-cover.jpg.asset.json";
import coverJejak from "@/assets/jejak-cover.jpg.asset.json";
import coverJurnal2 from "@/assets/cover-jurnal-2.jpg.asset.json";
import coverJejakBaru from "@/assets/jejak-cover-baru.png.asset.json";
import coverMarwanto from "@/assets/cover-marwanto.jpg.asset.json";
import coverSumiyati from "@/assets/cover-sumiyati.jpg.asset.json";
import edukasi85 from "@/assets/edukasi-85.jpg.asset.json";
import edukasi84 from "@/assets/edukasi-84.jpg.asset.json";
import edukasi82 from "@/assets/edukasi-82.jpg.asset.json";
import laporanTahunan2024 from "@/assets/laporan-tahunan-2024.jpg.asset.json";
import laporanKinerja2025 from "@/assets/laporan-kinerja-2025.jpg.asset.json";
import laporanKeuangan2024 from "@/assets/laporan-keuangan-2024.jpg.asset.json";
import laporanPpid2024 from "@/assets/laporan-ppid-2024.jpg.asset.json";

export type PublikasiCategory = "penelitian" | "majalah" | "buku" | "laporan";
export type PenelitianSub = "jurnal" | "prosiding" | "snkn";
export type LaporanSub = "tahunan" | "kinerja" | "keuangan" | "ppid";

export type Publikasi = {
  id: string;
  slug: string;
  category: PublikasiCategory;
  subCategory?: PenelitianSub | LaporanSub;
  title: string;
  subtitle: string;
  description: string[];
  cover: string;
  year: number;
  meta?: string; // ISSN/ISBN, editor, dsb.
  pdfUrl: string;
};

export const CATEGORY_LABEL: Record<PublikasiCategory, string> = {
  penelitian: "Penelitian",
  majalah: "Majalah",
  buku: "Buku",
  laporan: "Laporan",
};

export const SUB_LABEL: Record<PenelitianSub, string> = {
  jurnal: "Jurnal",
  prosiding: "Prosiding Kajian Akademis",
  snkn: "SNKN",
};

export const LAPORAN_SUB_LABEL: Record<LaporanSub, string> = {
  tahunan: "Laporan Tahunan",
  kinerja: "Laporan Kinerja",
  keuangan: "Laporan Keuangan",
  ppid: "Laporan PPID",
};


const covers = [coverJurnal.url, coverEdukasi.url, coverJejak.url];
const pick = (i: number) => covers[i % covers.length];

const desc = (topic: string) => [
  `Publikasi ini menghadirkan pembahasan mendalam mengenai ${topic} dalam konteks pengelolaan keuangan negara serta pengembangan sumber daya manusia Kementerian Keuangan.`,
  "Disusun oleh tim penulis di lingkungan BPPK, edisi ini memuat kajian akademis, praktik terbaik, serta rekomendasi kebijakan yang relevan bagi pemangku kepentingan.",
  "Semoga karya ini dapat menjadi rujukan bermanfaat bagi pembaca, pengambil kebijakan, akademisi, dan seluruh insan pembelajar Kemenkeu.",
];

export const publikasiItems: Publikasi[] = [
  // ===== Penelitian - Jurnal =====
  {
    id: "j1", slug: "jurnal-bppk-vol-17-1", category: "penelitian", subCategory: "jurnal",
    title: "Jurnal BPPK Vol. 17 No. 1",
    subtitle: "Kajian Keuangan Negara & Kebijakan Publik",
    description: desc("kebijakan fiskal dan tata kelola keuangan negara"),
    cover: coverJurnal2.url, year: 2025, meta: "ISSN 2085-3785",
    pdfUrl: "#",
  },
  {
    id: "j2", slug: "jurnal-bppk-vol-16-2", category: "penelitian", subCategory: "jurnal",
    title: "Jurnal BPPK Vol. 16 No. 2",
    subtitle: "Transformasi Digital di Sektor Publik",
    description: desc("transformasi digital pada instansi pemerintah"),
    cover: coverJurnal2.url, year: 2024, meta: "ISSN 2085-3785",
    pdfUrl: "#",
  },
  {
    id: "j3", slug: "jurnal-bppk-vol-16-1", category: "penelitian", subCategory: "jurnal",
    title: "Jurnal BPPK Vol. 16 No. 1",
    subtitle: "Manajemen SDM & Learning Organization",
    description: desc("pengembangan kompetensi ASN Kemenkeu"),
    cover: coverJurnal2.url, year: 2024, meta: "ISSN 2085-3785",
    pdfUrl: "#",
  },

  // ===== Penelitian - Prosiding =====
  {
    id: "p1", slug: "prosiding-kajian-2025", category: "penelitian", subCategory: "prosiding",
    title: "Prosiding Kajian Akademis 2025",
    subtitle: "Kumpulan Naskah Terpilih",
    description: desc("hasil kajian akademis internal BPPK tahun 2025"),
    cover: coverJurnal2.url, year: 2025,
    pdfUrl: "#",
  },
  {
    id: "p2", slug: "prosiding-kajian-2024", category: "penelitian", subCategory: "prosiding",
    title: "Prosiding Kajian Akademis 2024",
    subtitle: "Kumpulan Naskah Terpilih",
    description: desc("kajian isu strategis keuangan negara"),
    cover: coverJurnal2.url, year: 2024,
    pdfUrl: "#",
  },
  {
    id: "p3", slug: "prosiding-kajian-2023", category: "penelitian", subCategory: "prosiding",
    title: "Prosiding Kajian Akademis 2023",
    subtitle: "Kumpulan Naskah Terpilih",
    description: desc("hasil kajian tematik bidang keuangan publik"),
    cover: coverJurnal2.url, year: 2023,
    pdfUrl: "#",
  },

  // ===== Penelitian - SNKN =====
  {
    id: "s1", slug: "snkn-2025", category: "penelitian", subCategory: "snkn",
    title: "Simposium Nasional Keuangan Negara 2025",
    subtitle: "Prosiding SNKN VIII",
    description: desc("naskah terpilih Simposium Nasional Keuangan Negara"),
    cover: coverJurnal2.url, year: 2025,
    pdfUrl: "#",
  },
  {
    id: "s2", slug: "snkn-2024", category: "penelitian", subCategory: "snkn",
    title: "Simposium Nasional Keuangan Negara 2024",
    subtitle: "Prosiding SNKN VII",
    description: desc("kajian keuangan negara dari peneliti nasional"),
    cover: coverJurnal2.url, year: 2024,
    pdfUrl: "#",
  },
  {
    id: "s3", slug: "snkn-2023", category: "penelitian", subCategory: "snkn",
    title: "Simposium Nasional Keuangan Negara 2023",
    subtitle: "Prosiding SNKN VI",
    description: desc("hasil simposium tahunan keuangan negara"),
    cover: coverJurnal2.url, year: 2023,
    pdfUrl: "#",
  },

  // ===== Majalah =====
  {
    id: "m1", slug: "edukasi-keuangan-85", category: "majalah",
    title: "Majalah Edukasi Keuangan Edisi 85",
    subtitle: "Riset Lebih Luas, Kebijakan Lebih Relevan",
    description: desc("perluasan riset dan relevansi kebijakan publik"),
    cover: edukasi85.url, year: 2026, meta: "ISSN 2085-4110",
    pdfUrl: "#",
  },
  {
    id: "m2", slug: "edukasi-keuangan-84", category: "majalah",
    title: "Majalah Edukasi Keuangan Edisi 84",
    subtitle: "Nyala Membara Semangat Jaga Keuangan Negara",
    description: desc("pelatihan pembinaan kesadaran bela negara"),
    cover: edukasi84.url, year: 2025, meta: "ISSN 2085-4110",
    pdfUrl: "#",
  },
  {
    id: "m3", slug: "edukasi-keuangan-82", category: "majalah",
    title: "Majalah Edukasi Keuangan Edisi 82",
    subtitle: "Kaleidoskop 2024 — BPPK Hadir untuk Negeri",
    description: desc("catatan capaian dan momentum BPPK sepanjang 2024"),
    cover: edukasi82.url, year: 2024, meta: "ISSN 2085-4110",
    pdfUrl: "#",
  },

  // ===== Buku =====
  {
    id: "b1", slug: "jejak-karya-transformasi-bppk", category: "buku",
    title: "Jejak, Karya, dan Transformasi BPPK",
    subtitle: "Rumah Belajar Menuju Kemenkeu Corporate University",
    description: [
      "Buku ini merekam perjalanan panjang BPPK dari kursus sederhana era 1950-an hingga menjadi Kemenkeu Corporate University dan leaders factory masa kini.",
      "Tersaji kisah transformasi kelembagaan, tokoh-tokoh penggerak, serta program-program strategis yang mengubah wajah pembelajaran Kementerian Keuangan.",
      "Cocok bagi pembaca yang ingin memahami DNA budaya belajar Kemenkeu dan komitmen investasi pada SDM menuju Indonesia Emas 2045.",
    ],
    cover: coverJejakBaru.url, year: 2025, meta: "ISBN 978-623-XXXX",
    pdfUrl: "#",
  },
  {
    id: "b2", slug: "marwanto-harjowiryono", category: "buku",
    title: "Marwanto Harjowiryono",
    subtitle: "Maestro Simfoni Perbendaharaan — Pengawal 'Die-Hard' APBN, Pendobrak Reformasi Birokrasi",
    description: desc("biografi profesional Marwanto Harjowiryono di dunia perbendaharaan negara"),
    cover: coverMarwanto.url, year: 2024, meta: "Pengantar: Sri Mulyani Indrawati · Robert Adhi KSP",
    pdfUrl: "#",
  },
  {
    id: "b3", slug: "sumiyati-srikandi-perubahan", category: "buku",
    title: "Sumiyati",
    subtitle: "Srikandi Perubahan, Inspirasi bagi Perempuan",
    description: desc("biografi profesional Sumiyati sebagai penggerak perubahan di Kementerian Keuangan"),
    cover: coverSumiyati.url, year: 2024, meta: "Robert Adhi KSP",
    pdfUrl: "#",
  },

  // ===== Laporan =====
  {
    id: "l1", slug: "laporan-tahunan-2024", category: "laporan", subCategory: "tahunan",
    title: "Laporan Tahunan BPPK 2024",
    subtitle: "Transformasi Pembelajaran Berkelanjutan",
    description: desc("kinerja, capaian, dan transformasi pembelajaran BPPK sepanjang tahun 2024"),
    cover: laporanTahunan2024.url, year: 2025,
    pdfUrl: "#",
  },
  {
    id: "l2", slug: "laporan-kinerja-2025", category: "laporan", subCategory: "kinerja",
    title: "Laporan Kinerja BPPK 2025",
    subtitle: "Clarity in Transition — Hadapi Transisi, Kinerja Teruji",
    description: desc("laporan akuntabilitas kinerja BPPK tahun 2025"),
    cover: laporanKinerja2025.url, year: 2026,
    pdfUrl: "#",
  },
  {
    id: "l3", slug: "laporan-keuangan-2024", category: "laporan", subCategory: "keuangan",
    title: "Laporan Keuangan BPPK 2024 (Audited)",
    subtitle: "Audited Financial Report",
    description: desc("laporan keuangan BPPK tahun anggaran 2024 yang telah diaudit"),
    cover: laporanKeuangan2024.url, year: 2025,
    pdfUrl: "#",
  },
  {
    id: "l4", slug: "laporan-ppid-2024", category: "laporan", subCategory: "ppid",
    title: "Laporan Layanan Informasi Publik PPID Tingkat I 2024",
    subtitle: "Badan Pendidikan dan Pelatihan Keuangan",
    description: desc("layanan informasi publik PPID Tingkat I BPPK tahun 2024"),
    cover: laporanPpid2024.url, year: 2025,
    pdfUrl: "#",
  },
];

