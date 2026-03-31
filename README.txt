Oracle of Olympus — project layout
====================================

WEB (deploy all of this to Vercel, same as before)
  index.html                 — small menu (Oracle + teacher pages + printables)
  oracle_clues_final.html    — main laptop activity
  qr-code-pages/             — NFC passcode URLs (HTML + shared css/js)

PRINT (not required for the website to run)
  printables/                — PDFs: starting cards, scrolls, verdict, teacher sheet, data sheet

NOTES
  docs/DEPLOY-VERCEL.txt     — if the live site shows 404, read this
  docs/PUSH-TO-GITHUB.txt   — finish uploading: git remote + push (needs your login)

NFC tag URLs do not change — still .../qr-code-pages/qr-XXXX.html
