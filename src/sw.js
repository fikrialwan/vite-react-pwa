import { precacheAndRoute } from 'workbox-precaching'

precacheAndRoute(self.__WB_MANIFEST)

async function networkFirst(request) {
    try {
        const networkResponse = await fetch(request);
        if (networkResponse.ok) {
            const cache = await caches.open("vitereactpwacache");
            cache.put(request, networkResponse.clone());
        }
        return networkResponse;
    } catch (error) {
        const cachedResponse = await caches.match(request);
        return cachedResponse || Response.error();
    }
}

self.addEventListener("fetch", (event) => {
    const url = new URL(event.request.url);
    if (url.pathname.match(/^\/api/)) {
        event.respondWith(networkFirst(event.request));
    }
});