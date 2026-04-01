/**
 * POST JSON { "pin": "3141" } → full teacher list payload.
 * Wrong pin → 401 (no list in response). List is not embedded in static HTML.
 */
const PIN = '3141';

const PAYLOAD = {
  ok: true,
  lead:
    'Upload this whole qr-code-pages folder together with assets/ (passcode pages use the same background image as the landing page). Each page shows one 4-digit code. Open it with an NFC tap (URL written to a tag), a QR scan (point a phone camera at a printed code), or by reading the digits aloud from a printout. Teams type the code on the laptop. You only need one NFC tag in outside storage if other stops use printed QRs or slips — see TEACHER-WHICH-CODE-WHERE.txt.',
  note:
    'Digits must match PASSWORDS in oracle_clues_final.html. See TEACHER-WHICH-CODE-WHERE.txt for the hybrid NFC + QR/print layout.',
  items: [
    {
      href: '/qr-code-pages/qr-7392.html',
      label: 'qr-7392.html',
      desc: 'Suggested code for first unlock (Clue I) — e.g. starting pack / first tag',
    },
    {
      href: '/qr-code-pages/qr-5814.html',
      label: 'qr-5814.html',
      desc: 'After shed → Gazebo / Clue II',
    },
    {
      href: '/qr-code-pages/qr-9260.html',
      label: 'qr-9260.html',
      desc: 'Table tennis / Clue III',
    },
    {
      href: '/qr-code-pages/qr-3048.html',
      label: 'qr-3048.html',
      desc: 'Football goal / Clue IV',
    },
    {
      href: '/qr-code-pages/qr-1675.html',
      label: 'qr-1675.html',
      desc: 'Storytelling chair / Clue V',
    },
  ],
};

module.exports = function handler(req, res) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false });
    return;
  }
  let pin = '';
  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    pin = String((body && body.pin) || '').replace(/\s/g, '');
  } catch {
    res.status(400).json({ ok: false });
    return;
  }
  if (pin !== PIN) {
    res.status(401).json({ ok: false });
    return;
  }
  res.status(200).json(PAYLOAD);
};
