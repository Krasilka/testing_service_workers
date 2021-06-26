self.addEventListener("install", (e) => {
    const saveMainCache = async () => {
       const cache = await caches.open("v1");
       return cache.add('index.html'); };
    e.waitUntil(saveMainCache());
 });
 self.addEventListener("fetch", (e) => {
    const cacheFirst = async () => {
       const response = await caches.match(e.request);
       return response || fetch(e.request); };
    e.respondWith(cacheFirst());
 });