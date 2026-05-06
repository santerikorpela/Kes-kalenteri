// tallentaa google map-linkin karttanappia varten
let currentMapUrl = '';

// avaa infoikkunan ja täyttää viikon tiedoilla
function openInfoikkuna(content, cat, wn, weekStart, weekEnd) {
  document.getElementById('infoikkuna-week').textContent = `Viikko ${wn} · ${formatDate(weekStart)}–${formatDate(weekEnd)}`;
  document.getElementById('infoikkuna-title').textContent = content.title;

  let catEl = document.getElementById('infoikkuna-category');
  catEl.textContent = cat.emoji + ' ' + content.cat;
  catEl.style.background = cat.color;

  document.getElementById('infoikkuna-desc').textContent = content.desc;
  document.getElementById('infoikkuna-location-text').textContent = content.loc;

  currentMapUrl = content.mapUrl;

  document.getElementById('infoikkuna-overlay').classList.add('active');
}

// sulkee infoikkunan klikkaamalla taustaa
function closeInfoikkuna(e) {
  if (e.target === document.getElementById('infoikkuna-overlay')) {
    document.getElementById('infoikkuna-overlay').classList.remove('active');
  }
}

// sulkee infoikkunan X-painikkeella
function closeInfoikkunaBtn() {
  document.getElementById('infoikkuna-overlay').classList.remove('active');
}

// avaa google mapsin uuteen välilehteen
function openMap() {
  if (currentMapUrl) window.open(currentMapUrl, '_blank');
}
