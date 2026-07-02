import coverBuku from "@/assets/cover-buku.png.asset.json";
import coverJurnal from "@/assets/cover-jurnal.jpg.asset.json";
import coverEdukasi from "@/assets/edukasi-cover.jpg.asset.json";
import coverJejak from "@/assets/jejak-cover.jpg.asset.json";

export type KategoriPublikasi = "Buku" | "Jurnal" | "Majalah" | "Laporan";

export type Publikasi = {
  id: string;
  slug: string;
  kategori: KategoriPublikasi;
  judul: string;
  tahun: number;
  penerbit: string;
  sinopsis: string;
  cover: string;
  halaman?: number;
  identifier?: string; // ISBN / ISSN
  kmsUrl: string;
  downloadUrl?: string;
  internalUrl?: string;
};

const KMS = "https://kms.kemenkeu.go.id/";

export const publikasiList: Publikasi[] = [
  // ===== Buku =====
  {
    id: "b1",
    slug: "jejak-karya-transformasi-bppk",
    kategori: "Buku",
    judul: "Jejak, Karya, dan Transformasi BPPK",
    tahun: 2025,
    penerbit: "BPPK Kementerian Keuangan",
    sinopsis:
      "Kisah panjang Rumah Belajar Kementerian Keuangan — dari kursus sederhana tahun 1950-an hingga menjelma menjadi Kemenkeu Corporate University dan leaders factory masa kini.",
    cover: coverJejak.url,
    halaman: 220,
    identifier: "ISBN 978-623-00-0001-1",
    kmsUrl: KMS,
    internalUrl: "/jejak-karya",
  },
  {
    id: "b2",
    slug: "pembelajaran-sepanjang-hayat",
    kategori: "Buku",
    judul: "Pembelajaran Sepanjang Hayat di Kemenkeu",
    tahun: 2024,
    penerbit: "BPPK Kementerian Keuangan",
    sinopsis:
      "Panduan konseptual dan praktis penerapan budaya belajar sepanjang hayat di lingkungan Kementerian Keuangan.",
    cover: coverBuku.url,
    halaman: 168,
    identifier: "ISBN 978-623-00-0002-8",
    kmsUrl: KMS,
  },
  {
    id: "b3",
    slug: "corporate-university-kemenkeu",
    kategori: "Buku",
    judul: "Kemenkeu Corporate University: Konsep dan Implementasi",
    tahun: 2023,
    penerbit: "BPPK Kementerian Keuangan",
    sinopsis:
      "Mengulas transformasi BPPK menjadi Kemenkeu Corpu — arsitektur pembelajaran, tata kelola, dan tantangan implementasi.",
    cover: coverJejak.url,
    halaman: 192,
    identifier: "ISBN 978-623-00-0003-5",
    kmsUrl: KMS,
  },

  // ===== Jurnal =====
  {
    id: "j1",
    slug: "jurnal-bppk-v17n2-2025",
    kategori: "Jurnal",
    judul: "Jurnal BPPK Vol. 17 No. 2 (2025)",
    tahun: 2025,
    penerbit: "Pusat Kajian Akademik BPPK",
    sinopsis:
      "Kumpulan riset terapan bidang keuangan negara, kebijakan fiskal, dan pengembangan SDM Kemenkeu.",
    cover: coverJurnal.url,
    halaman: 148,
    identifier: "ISSN 2085-3785 (p) / 2615-7780 (e)",
    kmsUrl: KMS,
  },
  {
    id: "j2",
    slug: "jurnal-bppk-v17n1-2025",
    kategori: "Jurnal",
    judul: "Jurnal BPPK Vol. 17 No. 1 (2025)",
    tahun: 2025,
    penerbit: "Pusat Kajian Akademik BPPK",
    sinopsis:
      "Fokus edisi: transformasi digital pembelajaran ASN dan tata kelola kompetensi Kemenkeu.",
    cover: coverJurnal.url,
    halaman: 132,
    identifier: "ISSN 2085-3785 (p) / 2615-7780 (e)",
    kmsUrl: KMS,
  },
  {
    id: "j3",
    slug: "jurnal-info-artha-v9",
    kategori: "Jurnal",
    judul: "Jurnal Info Artha Vol. 9",
    tahun: 2024,
    penerbit: "PKN STAN",
    sinopsis:
      "Jurnal ilmiah bidang akuntansi sektor publik dan manajemen keuangan negara.",
    cover: coverJurnal.url,
    halaman: 156,
    identifier: "ISSN 2460-2418",
    kmsUrl: KMS,
  },

  // ===== Majalah =====
  {
    id: "m1",
    slug: "edukasi-keuangan-ed80",
    kategori: "Majalah",
    judul: "Majalah Edukasi Keuangan Edisi 80",
    tahun: 2025,
    penerbit: "BPPK Kementerian Keuangan",
    sinopsis:
      "Menyoroti agenda pembelajaran ASN Kemenkeu, kisah alumni pelatihan, dan tren pembelajaran korporat global.",
    cover: coverEdukasi.url,
    halaman: 64,
    kmsUrl: KMS,
  },
  {
    id: "m2",
    slug: "edukasi-keuangan-ed79",
    kategori: "Majalah",
    judul: "Majalah Edukasi Keuangan Edisi 79",
    tahun: 2025,
    penerbit: "BPPK Kementerian Keuangan",
    sinopsis:
      "Liputan Kemenkeu Learning Festival dan inovasi metode pembelajaran berbasis pengalaman.",
    cover: coverEdukasi.url,
    halaman: 60,
    kmsUrl: KMS,
  },
  {
    id: "m3",
    slug: "edukasi-keuangan-ed78",
    kategori: "Majalah",
    judul: "Majalah Edukasi Keuangan Edisi 78",
    tahun: 2024,
    penerbit: "BPPK Kementerian Keuangan",
    sinopsis:
      "Merayakan HUT BPPK, refleksi perjalanan Rumah Belajar Kementerian Keuangan.",
    cover: coverEdukasi.url,
    halaman: 68,
    kmsUrl: KMS,
  },

  // ===== Laporan =====
  {
    id: "l1",
    slug: "lakip-bppk-2024",
    kategori: "Laporan",
    judul: "Laporan Kinerja BPPK 2024",
    tahun: 2025,
    penerbit: "BPPK Kementerian Keuangan",
    sinopsis:
      "Ringkasan capaian kinerja BPPK tahun anggaran 2024, meliputi indikator, realisasi, dan evaluasi program.",
    cover: coverBuku.url,
    halaman: 210,
    kmsUrl: KMS,
  },
  {
    id: "l2",
    slug: "laporan-tahunan-bppk-2024",
    kategori: "Laporan",
    judul: "Laporan Tahunan BPPK 2024",
    tahun: 2025,
    penerbit: "BPPK Kementerian Keuangan",
    sinopsis:
      "Potret utuh penyelenggaraan pendidikan dan pelatihan Kemenkeu sepanjang tahun 2024.",
    cover: coverBuku.url,
    halaman: 180,
    kmsUrl: KMS,
  },
  {
    id: "l3",
    slug: "laporan-reformasi-birokrasi-2024",
    kategori: "Laporan",
    judul: "Laporan Reformasi Birokrasi BPPK 2024",
    tahun: 2025,
    penerbit: "BPPK Kementerian Keuangan",
    sinopsis:
      "Progres pelaksanaan agenda reformasi birokrasi BPPK: tata kelola, SDM, dan pelayanan publik.",
    cover: coverBuku.url,
    halaman: 96,
    kmsUrl: KMS,
  },
];

export const kategoriList: KategoriPublikasi[] = ["Buku", "Jurnal", "Majalah", "Laporan"];
