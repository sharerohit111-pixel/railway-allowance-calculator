ALLOWANCE CALCULATOR FOR RAILWAY EMPLOYEES
Owner & Founder: Rohit Kumar

Files:
- index.html: app interface and Night Duty Allowance calculator
- manifest.webmanifest: installable PWA metadata
- sw.js: offline cache
- icon.svg, icon-192.png, icon-512.png: app icons

INSTALL ON ANDROID:
1. Upload all files in this folder to a GitHub repository (repository root).
2. In GitHub: Settings > Pages > Deploy from a branch > main > /(root) > Save.
3. Wait until GitHub Pages provides an HTTPS website address.
4. Open that HTTPS address in Chrome on Android.
5. Chrome menu (three dots) > Install app / Add to Home screen.

IMPORTANT:
- This is an installable Progressive Web App (PWA), not a signed APK.
- PWA installation requires hosting over HTTPS (GitHub Pages is suitable).
- Login buttons are visual placeholders only; real mobile OTP, email and Google authentication need a secure authentication backend.
- Calculator formula implemented: ((Basic Pay + DA) / 200) / 6 per hour; formula is not displayed in the app.
- The calculator uses the formula supplied for this prototype. Confirm current Railway eligibility/rules before relying on it for claims.
