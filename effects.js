
// edistymispalkki
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


// Käynnistetään efektit
updateProgress();
