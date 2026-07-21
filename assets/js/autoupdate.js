/* 自動強制更新：偵測到新版本即清快取重載（開啟、切回前景、每 3 分鐘檢查） */
(() => {
  const BUILD = "cmf2026-cn-v42-20260721-autoupdate";
  const src = (document.currentScript && document.currentScript.src) || "";
  const root = src.replace(/assets\/js\/autoupdate\.js.*$/, "");
  let checking = false;
  const check = async () => {
    if (checking || !navigator.onLine) return;
    checking = true;
    try {
      const res = await fetch(root + "sw.js?chk=" + Date.now(), { cache: "no-store" });
      const txt = await res.text();
      const m = txt.match(/VERSION = "([^"]+)"/);
      if (m && m[1] !== BUILD) {
        const k = "cmf-auto-reloaded";
        if (sessionStorage.getItem(k) !== m[1]) {
          sessionStorage.setItem(k, m[1]);
          try {
            if (window.caches) { const keys = await caches.keys(); await Promise.all(keys.map((x) => caches.delete(x))); }
            if (navigator.serviceWorker) { const regs = await navigator.serviceWorker.getRegistrations(); await Promise.all(regs.map((r) => r.update())); }
          } catch (_) {}
          const u = new URL(location.href);
          u.searchParams.set("r", Date.now().toString(36));
          location.replace(u.toString());
        }
      }
    } catch (_) {}
    checking = false;
  };
  check();
  document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible") check(); });
  window.addEventListener("focus", check);
  setInterval(() => { if (document.visibilityState === "visible") check(); }, 180000);
})();
