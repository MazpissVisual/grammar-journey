# Grammar Journey

Web app belajar grammar bahasa Inggris (PWA, offline-ready) berdasarkan buku *English Grammar 1*.
Murni HTML/CSS/JS statis, tanpa build step. Progres belajar disimpan di `localStorage`.

## Struktur

```
.
├── dist/                      # satu-satunya folder yang di-hosting (lihat .openai/hosting.json)
│   ├── index.html
│   ├── manifest.webmanifest
│   ├── service-worker.js      # cache offline (stale-while-revalidate: file selalu menyegarkan diri)
│   ├── assets/                # ikon
│   ├── css/styles.css
│   ├── js/
│   │   ├── modules.js         # metadata 11 unit (judul, halaman buku, ikon)
│   │   └── app.js             # logika: tampilan, kuis, progres, streak, practice, review
│   └── content/               # materi per unit: 01-parts-of-speech.js … 11-number.js
├── source/
│   └── materi.pdf             # scan buku (TIDAK ikut hosting; jangan dipindah ke dist)
└── .openai/hosting.json       # menunjuk dist sebagai folder statis
```

## Format konten (`dist/content/NN-<id>.js`)

Tiap file mengisi `window.lessonTitles[id]` (daftar judul lesson) dan `window.lessonData[id]`
(satu objek per lesson, urutan sama dengan judul):

| Field | Isi |
|---|---|
| `definition`, `pattern` | inti materi dan rumus/tabel (`\n` = baris baru) |
| `examples` | `[[kalimat Inggris, catatan], …]` |
| `wrong`, `right` | kesalahan umum vs bentuk benar |
| `challenge` | tugas menulis singkat |
| `quiz` | `[{ q, a: [4 opsi], c: indeks jawaban benar (0–3), x: penjelasan }]` |
| `guide` | bantuan Indonesia: `summary`, `pattern`, `vocab`, `translations` (sejajar dengan `examples`), `challenge` |

Menambah unit baru: tambahkan metadata di `js/modules.js`, buat file di `content/`, lalu daftarkan
di `index.html` (urutan `<script>`) dan `ASSETS` di `service-worker.js`.

## Menjalankan di lokal

```
cd dist
python -m http.server 8000      # lalu buka http://localhost:8000
```

Service worker melayani file dari cache lalu memperbaruinya di belakang layar, jadi setelah mengedit
file, perubahan terlihat pada **muat ulang kedua** (atau hard refresh). Saat development paling mudah
centang "Update on reload" / "Bypass for network" di DevTools → Application → Service Workers.
Naikkan `CACHE` di `service-worker.js` hanya jika daftar `ASSETS` berubah (file ditambah/dihapus).

## Catatan

- Kunci jawaban kuis dibuat dari latihan buku (buku tidak menyediakan kunci). Laporkan jika ada yang keliru.
- Nama lesson dan jumlahnya mengikuti buku. Mengubahnya membuat progres lama tidak cocok → Settings → Reset progress.
