import coverBuku from "@/assets/cover-buku.png.asset.json";
import coverJurnal from "@/assets/cover-jurnal.jpg.asset.json";
import coverEdukasi from "@/assets/edukasi-cover.jpg.asset.json";
import coverJejak from "@/assets/jejak-cover.jpg.asset.json";

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


const covers = [coverJurnal.url, coverEdukasi.url, coverBuku.url, coverJejak.url];
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
    cover: pick(0), year: 2025, meta: "ISSN 2085-3785",
    pdfUrl: "#",
  },
  {
    id: "j2", slug: "jurnal-bppk-vol-16-2", category: "penelitian", subCategory: "jurnal",
    title: "Jurnal BPPK Vol. 16 No. 2",
    subtitle: "Transformasi Digital di Sektor Publik",
    description: desc("transformasi digital pada instansi pemerintah"),
    cover: pick(1), year: 2024, meta: "ISSN 2085-3785",
    pdfUrl: "#",
  },
  {
    id: "j3", slug: "jurnal-bppk-vol-16-1", category: "penelitian", subCategory: "jurnal",
    title: "Jurnal BPPK Vol. 16 No. 1",
    subtitle: "Manajemen SDM & Learning Organization",
    description: desc("pengembangan kompetensi ASN Kemenkeu"),
    cover: pick(2), year: 2024, meta: "ISSN 2085-3785",
    pdfUrl: "#",
  },

  // ===== Penelitian - Prosiding =====
  {
    id: "p1", slug: "prosiding-kajian-2025", category: "penelitian", subCategory: "prosiding",
    title: "Prosiding Kajian Akademis 2025",
    subtitle: "Kumpulan Naskah Terpilih",
    description: desc("hasil kajian akademis internal BPPK tahun 2025"),
    cover: pick(1), year: 2025,
    pdfUrl: "#",
  },
  {
    id: "p2", slug: "prosiding-kajian-2024", category: "penelitian", subCategory: "prosiding",
    title: "Prosiding Kajian Akademis 2024",
    subtitle: "Kumpulan Naskah Terpilih",
    description: desc("kajian isu strategis keuangan negara"),
    cover: pick(3), year: 2024,
    pdfUrl: "#",
  },
  {
    id: "p3", slug: "prosiding-kajian-2023", category: "penelitian", subCategory: "prosiding",
    title: "Prosiding Kajian Akademis 2023",
    subtitle: "Kumpulan Naskah Terpilih",
    description: desc("hasil kajian tematik bidang keuangan publik"),
    cover: pick(2), year: 2023,
    pdfUrl: "#",
  },

  // ===== Penelitian - SNKN =====
  {
    id: "s1", slug: "snkn-2025", category: "penelitian", subCategory: "snkn",
    title: "Simposium Nasional Keuangan Negara 2025",
    subtitle: "Prosiding SNKN VIII",
    description: desc("naskah terpilih Simposium Nasional Keuangan Negara"),
    cover: pick(0), year: 2025,
    pdfUrl: "#",
  },
  {
    id: "s2", slug: "snkn-2024", category: "penelitian", subCategory: "snkn",
    title: "Simposium Nasional Keuangan Negara 2024",
    subtitle: "Prosiding SNKN VII",
    description: desc("kajian keuangan negara dari peneliti nasional"),
    cover: pick(1), year: 2024,
    pdfUrl: "#",
  },
  {
    id: "s3", slug: "snkn-2023", category: "penelitian", subCategory: "snkn",
    title: "Simposium Nasional Keuangan Negara 2023",
    subtitle: "Prosiding SNKN VI",
    description: desc("hasil simposium tahunan keuangan negara"),
    cover: pick(3), year: 2023,
    pdfUrl: "#",
  },

  // ===== Majalah =====
  {
    id: "m1", slug: "edukasi-keuangan-72", category: "majalah",
    title: "Majalah Edukasi Keuangan Edisi 72",
    subtitle: "Menakar Arah Belanja Negara",
    description: desc("arah kebijakan belanja negara dan efisiensi anggaran"),
    cover: pick(1), year: 2025, meta: "ISSN 2085-4110",
    pdfUrl: "#",
  },
  {
    id: "m2", slug: "edukasi-keuangan-71", category: "majalah",
    title: "Majalah Edukasi Keuangan Edisi 71",
    subtitle: "Corporate University Kemenkeu",
    description: desc("perjalanan Kemenkeu Corpu sebagai leaders factory"),
    cover: pick(2), year: 2024, meta: "ISSN 2085-4110",
    pdfUrl: "#",
  },
  {
    id: "m3", slug: "edukasi-keuangan-70", category: "majalah",
    title: "Majalah Edukasi Keuangan Edisi 70",
    subtitle: "Digital Learning Ecosystem",
    description: desc("ekosistem pembelajaran digital di BPPK"),
    cover: pick(3), year: 2024, meta: "ISSN 2085-4110",
    pdfUrl: "#",
  },
  {
    id: "m4", slug: "edukasi-keuangan-69", category: "majalah",
    title: "Majalah Edukasi Keuangan Edisi 69",
    subtitle: "SDM Unggul, Kemenkeu Tangguh",
    description: desc("pengembangan SDM sebagai kunci reformasi birokrasi"),
    cover: pick(0), year: 2023, meta: "ISSN 2085-4110",
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
    cover: coverJejak.url, year: 2025, meta: "ISBN 978-623-XXXX",
    pdfUrl: "#",
  },
  {
    id: "b2", slug: "buku-keuangan-negara", category: "buku",
    title: "Bunga Rampai Keuangan Negara",
    subtitle: "Perspektif Praktisi dan Akademisi",
    description: desc("berbagai perspektif praktisi dan akademisi keuangan negara"),
    cover: pick(2), year: 2024, meta: "ISBN 978-623-XXXX",
    pdfUrl: "#",
  },
  {
    id: "b3", slug: "buku-corpu", category: "buku",
    title: "Corporate University di Sektor Publik",
    subtitle: "Pengalaman Kementerian Keuangan",
    description: desc("praktik penerapan corporate university di sektor publik"),
    cover: pick(0), year: 2023, meta: "ISBN 978-623-XXXX",
    pdfUrl: "#",
  },
  {
    id: "b4", slug: "buku-learning-org", category: "buku",
    title: "Membangun Learning Organization",
    subtitle: "Studi Kasus Kemenkeu",
    description: desc("penerapan learning organization pada instansi pemerintah"),
    cover: pick(1), year: 2023, meta: "ISBN 978-623-XXXX",
    pdfUrl: "#",
  },

  // ===== Laporan =====
  {
    id: "l1", slug: "laporan-tahunan-2024", category: "laporan", subCategory: "tahunan",
    title: "Laporan Tahunan BPPK 2024",
    subtitle: "Kinerja & Capaian Strategis",
    description: desc("kinerja, capaian, dan tantangan BPPK sepanjang tahun 2024"),
    cover: pick(3), year: 2025,
    pdfUrl: "#",
  },
  {
    id: "l2", slug: "laporan-tahunan-2023", category: "laporan", subCategory: "tahunan",
    title: "Laporan Tahunan BPPK 2023",
    subtitle: "Konsolidasi Transformasi",
    description: desc("konsolidasi program transformasi pembelajaran tahun 2023"),
    cover: pick(2), year: 2024,
    pdfUrl: "#",
  },
  {
    id: "l3", slug: "laporan-kinerja-2023", category: "laporan", subCategory: "kinerja",
    title: "Laporan Kinerja Instansi Pemerintah 2023",
    subtitle: "LAKIN BPPK 2023",
    description: desc("laporan akuntabilitas kinerja BPPK tahun 2023"),
    cover: pick(1), year: 2024,
    pdfUrl: "#",
  },
  {
    id: "l4", slug: "laporan-kinerja-2022", category: "laporan", subCategory: "kinerja",
    title: "Laporan Kinerja Instansi Pemerintah 2022",
    subtitle: "LAKIN BPPK 2022",
    description: desc("laporan akuntabilitas kinerja BPPK tahun 2022"),
    cover: pick(0), year: 2023,
    pdfUrl: "#",
  },
  {
    id: "l5", slug: "laporan-keuangan-2024", category: "laporan", subCategory: "keuangan",
    title: "Laporan Keuangan BPPK 2024",
    subtitle: "Audited Financial Report",
    description: desc("laporan keuangan BPPK tahun anggaran 2024"),
    cover: pick(2), year: 2025,
    pdfUrl: "#",
  },
  {
    id: "l6", slug: "laporan-keuangan-2023", category: "laporan", subCategory: "keuangan",
    title: "Laporan Keuangan BPPK 2023",
    subtitle: "Audited Financial Report",
    description: desc("laporan keuangan BPPK tahun anggaran 2023"),
    cover: pick(3), year: 2024,
    pdfUrl: "#",
  },
  {
    id: "l7", slug: "laporan-ppid-2024", category: "laporan", subCategory: "ppid",
    title: "Laporan Pelayanan Informasi PPID 2024",
    subtitle: "Rekapitulasi Layanan Informasi Publik",
    description: desc("layanan informasi publik PPID BPPK tahun 2024"),
    cover: pick(1), year: 2025,
    pdfUrl: "#",
  },
];

