// Offline cache dengan strategi stale-while-revalidate:
//  - file dilayani dari cache (cepat, bisa offline), lalu diam-diam diperbarui dari jaringan;
//  - perubahan file muncul pada pembukaan berikutnya, TANPA perlu menaikkan versi CACHE.
// Naikkan CACHE hanya jika daftar ASSETS berubah (file ditambah/dihapus/diganti nama).
const CACHE = "grammar-journey-v10";
const ASSETS = [
  "./",
  "./index.html",
  "./css/styles.css",
  "./js/modules.js",
  "./content/01-parts-of-speech.js",
  "./content/02-nouns.js",
  "./content/03-pronouns.js",
  "./content/04-verbs.js",
  "./content/05-adjectives.js",
  "./content/06-adverbs.js",
  "./content/07-prepositions.js",
  "./content/08-conjunctions.js",
  "./content/09-countable.js",
  "./content/10-gender.js",
  "./content/11-number.js",
  "./js/app.js",
  "./js/questions.js",
  "./js/practice.js",
  "./manifest.webmanifest",
  "./assets/favicon.svg"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const request = event.request;
  if (request.method !== "GET" || new URL(request.url).origin !== self.location.origin) return;

  event.respondWith(caches.open(CACHE).then(async cache => {
    const cached = await cache.match(request);
    const network = fetch(request).then(response => {
      if (response.ok) cache.put(request, response.clone());
      return response;
    });
    if (cached) { network.catch(() => {}); return cached; }   // perbarui di belakang layar
    try { return await network; }
    catch {
      // Offline & belum ada di cache: hanya halaman yang jatuh ke index.html; file lain gagal dengan jelas.
      return request.mode === "navigate" ? cache.match("./index.html") : Response.error();
    }
  }));
});
