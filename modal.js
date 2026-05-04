// Tallentaa Google Maps -linkin karttanappia varten
let currentMapUrl = '';

// === MODAALIN AVAAMINEN ===
function openModal(content, cat, wn, weekStart, weekEnd) {

  // Täytetään modaalin kentät
  document.getElementById('modal-week').textContent = `Viikko ${wn} · ${formatDate(weekStart)}–${formatDate(weekEnd)}`;
  document.getElementById('modal-title').textContent = content.title;

  let catEl = document.getElementById('modal-category');
  catEl.textContent = cat.emoji + ' ' + content.cat;
  catEl.style.background = cat.color;

  document.getElementById('modal-desc').textContent = content.desc;
  document.getElementById('modal-location-text').textContent = content.loc;

  // Tallennetaan kartan URL
  currentMapUrl = content.mapUrl;

  // Avataan modaali
  document.getElementById('modal-overlay').classList.add('active');
}

// === MODAALIN SULKEMINEN (taustaa klikkaamalla) ===
function closeModal(e) {
  if (e.target === document.getElementById('modal-overlay')) {
    document.getElementById('modal-overlay').classList.remove('active');
  }
}

// === MODAALIN SULKEMINEN (X-painikkeella) ===
function closeModalBtn() {
  document.getElementById('modal-overlay').classList.remove('active');
}

// === KARTAN AVAAMINEN ===
function openMap() {
  if (currentMapUrl) window.open(currentMapUrl, '_blank');
}
