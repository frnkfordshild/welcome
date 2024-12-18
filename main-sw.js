const t = {
  SKIP_WAITING: "SKIP_WAITING",
  SET_SUBS_SYMKEYS: "SET_SUBS_SYMKEYS",
  REGISTER_WITH_ECHO: "REGISTER_WITH_ECHO"
}, s = () => {
  self.caches.keys().then((e) => {
    e.forEach((a) => self.caches.delete(a));
  });
};
self.oninstall = () => {
  s();
};
self.onactivate = () => {
  s();
};
self.ononline = () => {
  s();
};
self.addEventListener("message", (e) => {
  if (e.data)
    switch (e.data.type) {
      // Event to install latest service worker when available
      case t.SKIP_WAITING:
        self.skipWaiting();
        break;
    }
});
self.addEventListener("install", () => {
  self.skipWaiting();
});
