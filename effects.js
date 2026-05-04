// === EDISTYMISPALKKI ===
function updateProgress() {
  let now = new Date();
  let total   = SUMMER_END - SUMMER_START;
  let elapsed = now - SUMMER_START;
  let pct = Math.max(0, Math.min(100, (elapsed / total) * 100));

  document.getElementById('progress-fill').style.width = pct + '%';

  if (pct <= 0)        document.getElementById('progress-label').textContent = 'Kesä alkaa pian! 🌱';
  else if (pct >= 100) document.getElementById('progress-label').textContent = 'Kesä päättynyt 🍂';
  else                 document.getElementById('progress-label').textContent = `${Math.round(pct)}% kesästä eletty`;
}

// === HEINÄNKORRET ===
function buildGrass() {
  let g = document.getElementById('grass');

  for (let i = 0; i < 60; i++) {
    let b = document.createElement('div');
    b.className = 'grass-blade';

    let h = 20 + Math.random() * 40;
    b.style.height = h + 'px';
    b.style.left = (i / 60 * 100) + '%';
    b.style.animationDelay = (Math.random() * 3) + 's';
    b.style.animationDuration = (2 + Math.random() * 2) + 's';
    b.style.opacity = 0.6 + Math.random() * 0.4;
    b.style.background = `hsl(${120 + Math.random() * 30}, 60%, ${35 + Math.random() * 20}%)`;

    g.appendChild(b);
  }
}

// Käynnistetään efektit
buildGrass();
updateProgress();
