## Tujuan

Membuat satu sumber data tunggal (single source of truth) untuk seluruh pejabat BPPK, sehingga halaman **Profil Pejabat** dan **Struktur Organisasi** menampilkan nama, jabatan, dan unit yang selalu sinkron — cukup edit di satu tempat.

## Apa yang akan dilakukan

### 1. Buat modul data bersama: `src/lib/pejabat-data.ts`

Memindahkan array `groups` (yang saat ini hard-coded di `src/routes/profil-pejabat.tsx`) ke modul terpisah, dengan tambahan field `id` pada setiap pejabat agar dapat dihubungkan ke kartu Struktur Organisasi.

Struktur:
```
PEJABAT_BY_ID = {
  "kepala": { nama, jabatan, unit, foto, bio, ... },
  "sekretariat": { ... },
  "pkm": { nama: "Heni Kartikawati", ... },
  "pap": { nama: "Bhimantara Widyajala", ... },
  "ppjk": { ... },
  "pbc": { ... },
  "pkp": { ... },
  "pjf": { ... },
  "pkn-stan": { nama: "Evy Mulyani", ... },
  // BDK belum ada datanya — tetap "—"
}
```

ID-nya konsisten dengan ID `Unit` yang sudah ada di `struktur-organisasi.tsx` (`kepala`, `sekretariat`, `pkm`, `ppjk`, `pkp`, `pap`, `pbc`, `pjf`, `pkn-stan`).

### 2. Refactor `src/routes/profil-pejabat.tsx`

- Hapus definisi `groups` lokal.
- Import dari `@/lib/pejabat-data` dan susun ulang ke struktur grup (Pimpinan / Sekretariat / Pusdiklat / BLU) menggunakan helper `buildGroups()` di modul bersama.
- Tampilan & perilaku halaman tidak berubah.

### 3. Refactor `src/routes/struktur-organisasi.tsx`

- Untuk setiap `Unit` di chart (`kepala`, `sekretariat`, `pusdiklat[]`, `blu`), isi field `person` dari `PEJABAT_BY_ID[id].nama` (fallback `"—"` jika belum ada).
- Detail panel kanan akan otomatis menampilkan nama pejabat sesuai data bersama.
- BDK tetap menampilkan `"—"` (data belum tersedia).
- Bonus kecil: tombol "Profil pejabat lengkap" diarahkan ke `/profil-pejabat#<id>` agar klik membawa ke kartu pejabat terkait (anchor sederhana, opsional).

## Hasil

Setelah perubahan ini, untuk mengubah nama/jabatan seorang pejabat (misal pelantikan baru), Anda cukup mengedit **satu file** `src/lib/pejabat-data.ts` — kedua halaman langsung ikut terbarui.

## Catatan teknis

- Tidak ada perubahan UI/desain, hanya pemindahan sumber data.
- Tidak menggunakan database; data tetap statis di file TypeScript (sesuai pola proyek saat ini). Jika nanti ingin dinamis (CMS/Lovable Cloud), modul ini menjadi titik integrasi tunggal.
- Tidak menyentuh `routeTree.gen.ts` (auto-generated).

## File yang akan diubah/dibuat

- **baru**: `src/lib/pejabat-data.ts`
- **edit**: `src/routes/profil-pejabat.tsx` (hapus data lokal, import dari modul bersama)
- **edit**: `src/routes/struktur-organisasi.tsx` (isi `person` dari modul bersama)
