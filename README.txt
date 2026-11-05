Railway Allowance Calculator v2.0.0

Files:
- index.html: app UI and NDA/OTA calculation logic
- manifest.webmanifest: installable PWA manifest
- sw.js: offline caching service worker
- icon.svg: app icon

Deploy:
1. Back up your existing GitHub repository first.
2. Replace the repository's index.html, manifest.webmanifest, sw.js, and icon.svg with these files.
3. Commit changes to main branch. GitHub Pages should redeploy automatically.
4. Open the existing Pages URL. If old UI remains, refresh or clear site data/cache.

Important:
- NDA calculation retained from the existing app: hourly = (Basic Pay + DA Amount) / 1200.
- OTA logic follows the supplied OTA code and configured post defaults/thresholds.
- Ad areas are placeholders only. No ad network is active; AdSense approval and publisher code are required.
- Premium/payment, login, cloud history and PDF export are not active yet.
- This is an independent utility, not an official Indian Railways app. Verify all applicable rules before using calculations for claims.
