/* ez-OPR service worker — network-first untuk fail app, cache-first untuk aset */
const CACHE = 'ezopr-v110';
const ASET = [
  './', './index.html', './config.js', './manifest.json',
  './logo.png', './icon-192.png', './icon-512.png'
];

self.addEventListener('install', e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASET)).then(()=>self.skipWaiting()));
});

self.addEventListener('activate', e=>{
  e.waitUntil(
    caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener('fetch', e=>{
  const req = e.request;
  if(req.method !== 'GET') return;

  const url = new URL(req.url);
  // Jangan sentuh panggilan Firebase, Gemini atau OpenAI
  if(/googleapis\.com|firebaseio\.com|firebaseapp\.com|openai\.com/.test(url.hostname)
     && !/gstatic\.com/.test(url.hostname)) return;

  // Aset luar (SDK, pustaka PDF): cache-first
  if(url.origin !== location.origin){
    e.respondWith(
      caches.match(req).then(hit => hit || fetch(req).then(res=>{
        const copy = res.clone();
        caches.open(CACHE).then(c=>c.put(req, copy));
        return res;
      }).catch(()=>hit))
    );
    return;
  }

  // Fail app sendiri: network-first supaya kemas kini terus masuk
  e.respondWith(
    fetch(req).then(res=>{
      const copy = res.clone();
      caches.open(CACHE).then(c=>c.put(req, copy));
      return res;
    }).catch(()=> caches.match(req).then(hit => hit || caches.match('./index.html')))
  );
});
