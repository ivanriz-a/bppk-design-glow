# Penyesuaian Garis Struktur Organisasi

Perubahan logika garis di `OrgConnectors` (`src/routes/struktur-organisasi.tsx`). Tidak ada perubahan pada CSS atau urutan kotak.

## Yang berubah

### 1. Hilangkan sisi kanan bracket dashed
Hapus tiga segmen:
- Horizontal atas kanan: `setR.right → rightX` di `setBandY`
- Vertikal kanan: `rightX` dari `setBandY` ke `bracketBottomY`
- Bagian kanan dari horizontal bawah

### 2. Bracket dashed hanya sisi kiri, berhenti di BDK Manado
- Horizontal atas: `leftX → setR.left` di `setBandY` (tetap, dashed)
- Vertikal kiri: `leftX` dari `setBandY` turun ke `bracketBottomY` (tetap, dashed)
- Horizontal bawah: dari `leftX` hanya sampai ke titik X tengah **BDK Manado** (BDK posisi ke-6 / index 5 pada baris atas) — bukan sampai `rightX`
- Vertikal dashed dari `bracketBottomY` ke setiap kotak BDK (tetap, semua 11 BDK)

### 3. PKN STAN terhubung ke batang utama (bukan ke band Sekretariat)
- Hapus segmen dashed `bluR.cx, setBandY → bluR.cx, bluR.top`
- Ganti dengan jalur dashed: `trunkX, busPusatY → bluR.cx, busPusatY → bluR.cx, bluR.top`
  - Stub horizontal dashed dari batang utama (`trunkX`) ke kolom PKN STAN di level bus pusat
  - Vertikal dashed turun ke atas kotak PKN STAN
- PKN STAN tidak lagi tersentuh oleh bracket dashed maupun band Sekretariat

### 4. Yang tetap
- Garis solid: Kepala→bus pusat, Sekretariat→trunk (stub di band), bus pusat solid + vertikal solid ke 6 Pusdiklat
- Garis dashed vertikal ke 11 BDK
- Posisi & ukuran kotak, urutan, label

## Hasil visual
```
            [Kepala]
               │ (solid)
   [Sekretariat]──┼────────── (stub solid sek→trunk)
   ╎              │
   ╎       ┌──────┴──────┐ (solid bus pusat)
   ╎       │ │ │ │ │ │   ╎╌╌[PKN STAN]  (dashed stub dari trunk)
   ╎      KM Pj KP AP BC JF
   ╎
   ╎╌╌╌╌╌╌╌╌╌╌╌ (dashed bottom, berhenti di kolom BDK Manado)
   ╎ ╎ ╎ ╎ ╎ ╎
  Md Pl Yk Pt Dp Mn
   ╎ ╎ ╎ ╎ ╎
  Pk Cm Ml Bk Mk
```
