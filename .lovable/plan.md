## Rencana: Profil Pejabat — Modal Bio + Foto Contoh

### 1. Foto contoh
- Upload foto `Profil-Dhoni.jpg` sebagai Lovable Asset → `src/assets/profil-dhoni.jpg.asset.json`.
- Pakai foto ini untuk SEMUA kartu sebagai placeholder visual (gambaran tampilan akhir). Nanti tinggal diganti per pejabat.
- Ganti rendering kartu dari inisial gradien menjadi `<img>` foto. Style foto disesuaikan rasio 3:4 (sudah pas dengan gambar contoh).

### 2. Data bio (placeholder, bisa diupdate nanti)
Tambah field opsional ke tipe `Pejabat`:
- `bio` (string, paragraf riwayat singkat)
- `pendidikan` (array string)
- `riwayatJabatan` (array string)
- `alamatKantor` (string)
- `kontak` (`{ telepon?, email?, website? }`)

Isi semua dengan placeholder seragam (mis. "Riwayat akan diperbarui.") agar struktur popup terlihat.

### 3. Popup/modal bio
- Klik foto/kartu → buka modal overlay (state `selectedPejabat` di komponen).
- Modal berisi:
  - Foto besar di kiri (di mobile: di atas)
  - Kanan: Nama + gelar, Jabatan, Unit
  - Section **Biografi** (paragraf bio)
  - Section **Pendidikan** (list)
  - Section **Riwayat Jabatan** (list)
  - Section **Alamat Kantor & Kontak** (alamat, telepon, email, website) — sesuai permintaan no. 3
  - Tombol close (×) + close on backdrop click + close on `Esc`
- Body scroll dikunci saat modal terbuka.
- Aksesibilitas: `role="dialog"`, `aria-modal="true"`, `aria-labelledby`.

### 4. Styling (`src/styles.css`)
Tambah:
- `.pejabat-card` jadi `cursor: pointer` + indikator hover ("Lihat profil").
- `.pejabat-photo img` → `object-fit: cover; width:100%; height:100%`.
- Modal: `.pejabat-modal-backdrop`, `.pejabat-modal`, `.pejabat-modal-close`, `.pejabat-modal-grid` (2 kolom desktop, 1 kolom mobile), `.pejabat-modal-section`, `.pejabat-modal-meta`, dengan token warna eksisting (biru BPPK). Animasi fade+scale.

### 5. File yang berubah
- `src/assets/profil-dhoni.jpg.asset.json` (baru, via lovable-assets)
- `src/routes/profil-pejabat.tsx` (data + modal + handler klik)
- `src/styles.css` (foto img + style modal)

Tidak ada perubahan rute, tidak ada backend.
