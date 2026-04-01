Oracle of Olympus — project layout
====================================

WEB (deploy all of this to Vercel)
  index.html                 — public landing only (Class 4 → Enter → Oracle)
  assets/landing-bg.png      — background photo for index (keep with site)
  oracle_clues_final.html    — main laptop activity
  qr-code-pages/             — passcode pages (NFC URL, QR scan, or read digits)

TEACHER (bookmark direct URLs; not linked from the public landing)
  .../qr-code-pages/index.html     — passcode / NFC page list
  .../printables/01_....pdf etc.   — PDFs

PRINT
  printables/                — PDFs

NOTES
  docs/DEPLOY-VERCEL.txt     — if the live site shows 404, read this
  docs/PUSH-TO-GITHUB.txt    — git remote + push

Passcode page URLs — .../qr-code-pages/qr-XXXX.html (one NFC in storage is enough if other stops use print/QR only)
