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
│   │   ├── app.js             # logika: tampilan, lesson, kuis, progres, streak, review
│   │   ├── questions.js       # mesin soal bersama: pembuat soal, tampilan, penilaian, seret-lepas
│   │   └── practice.js        # layar Practice: 6 kartu set (15 soal), sesi, hasil
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

## Aturan desain (`dist/css/styles.css`)

- Satu font (system sans), angka lining (`font-variant-numeric: lining-nums`), teks minimal 12px.
- Satu aksen (teal) dan satu gaya banner (`--deep`) untuk Home, Lesson, Progress, dan hasil Practice.
- Emas hanya untuk bantuan Bahasa Indonesia (Beginner Assist, lencana "ID"). Jangan pakai emoji bendera (tidak tampil di Windows).
- Ikon memakai sprite SVG di `index.html` (`<use href="#i-nama">`, helper `icon()` di `app.js`), bukan karakter Unicode.
- Benar/salah di kuis selalu disertai ikon dan teks, tidak hanya warna.
- Lesson bertahap: Understand → Pattern → Apply → Check (kuis satu soal per layar).

## Jenis soal (`js/questions.js`, dipakai Practice dan kuis Lesson)

Semua jenis dibuat **otomatis dari konten yang sudah ada**, tanpa data soal baru:

| Jenis | Sumber | Cara menjawab |
|---|---|---|
| Multiple choice | `quiz` tiap lesson | pilih opsi |
| Match the meaning | `examples` + `guide.translations` (pengecoh: contoh lain di unit yang sama) | pilih kalimat Inggris yang artinya sama (hanya di Lesson) |
| Fill in the blank | soal `quiz` ber-"___" | seret kata ke kolom (di layar sentuh: ketuk) |
| Type the answer | soal ber-"___" dengan jawaban kata fungsi (kata ganti, kata depan, kata sambung, dst.) | ketik |
| Word order | kalimat di `examples` (4–10 kata, tanpa koma/kata -ly) | seret atau ketuk kata |
| Spot the mistake | pasangan `wrong`/`right` tiap lesson | pilih Correct / Has a mistake |

**Kuis di Lesson (langkah Check)** berisi **15–20 soal** per lesson (`LESSON_QUIZ_MIN/MAX`): soal `quiz` buatan sendiri
(sebagian diubah jadi isi kosong/ketik) ditambah benar/salah, cocokkan arti, dan susun kata dari isi lesson itu sendiri
(`buildLessonQuiz`). Urutannya tetap dan jenisnya tidak berturut-turut sama. Menambah isi `quiz`/`examples` di `content/*.js`
otomatis menambah soal, tanpa kode baru.

Layar Practice menampilkan **6 kartu** (Mixed + satu per jenis di atas), masing-masing **15 soal** (`PRACTICE_SIZE`).
Mixed memakai komposisi `MIXED_PLAN` (4/3/3/3/2). Skor terbaik tiap kartu disimpan di `state.practiceBest`,
dan sesi yang belum selesai bisa dilanjutkan lewat banner Resume. Soal ketik dan susun kata sengaja dibatasi
agar tidak menyalahkan jawaban lain yang sama-sama benar (mis. sinonim). Kesalahan semua jenis masuk ke Review.

## Catatan

- Kunci jawaban kuis dibuat dari latihan buku (buku tidak menyediakan kunci). Laporkan jika ada yang keliru.
- Nama lesson dan jumlahnya mengikuti buku. Mengubahnya membuat progres lama tidak cocok → Settings → Reset progress.
