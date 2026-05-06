// seuraa mitkä luukut on jo avattu (set estää duplikaatit)
let openedHatches = new Set();

// laskee viikon aloituspäivän ===
function getWeekDate(weekIndex) {
  let d = new Date(SUMMER_START);
  d.setDate(d.getDate() + weekIndex * 7);
  return d;
}

// muotoilee päivämäärän suomalaiseen muotoon ===
function formatDate(d) {
  return d.toLocaleDateString('fi-FI', { day: 'numeric', month: 'numeric' });
}

// laskee ISO-viikkonumeron ===
function getWeekNumber(d) {
  let jan4 = new Date(d.getFullYear(), 0, 4);
  let dayOfYear = (d - new Date(d.getFullYear(), 0, 0)) / 86400000;
  let weekOfYear = Math.ceil((dayOfYear + jan4.getDay() - 1) / 7);
  return weekOfYear;
}

// onko viikko jo alkanut? ===
function isUnlocked(weekIndex) {
  let today = new Date();
  today.setHours(0, 0, 0, 0);
  let weekStart = getWeekDate(weekIndex);
  return today >= weekStart;
}

// kalenteri grid rakentaminen ===
function buildCalendar() {
  let cal = document.getElementById('calendar');

  for (let i = 0; i < 13; i++) {

    // laskee viikon alku- ja loppupäivän
    let weekStart = getWeekDate(i);
    let weekEnd = new Date(weekStart);
    weekEnd.setDate(weekEnd.getDate() + 6);

    let wn = getWeekNumber(weekStart);
    let unlocked = isUnlocked(i);
    let content = weekContents[i];
    let cat = categories[content.cat];

    // tarkistaa onko tämä juuri meneillään oleva viikko
    let today = new Date();
    today.setHours(0, 0, 0, 0);
    let isCurrent = unlocked && !isUnlocked(i + 1);

    // luo kortti-elementin
    let card = document.createElement('div');
    card.className = 'hatch' + (unlocked ? '' : ' locked');
    card.id = 'hatch-' + i;

    // avattu näyttää napin, lukittu näyttää avauspäivämäärän
    let openAreaHtml = unlocked
      ? `<div class="open-area"><span class="open-icon">☀️</span> Avaa luukku</div>`
      : `<div class="lock-area"><span class="lock-icon">🔒</span><span class="lock-text">Aukeaa ${formatDate(weekStart)}</span></div>`;

    // sisältöalue rakennetaan vain avatuille luukuille
    let contentHtml = unlocked ? `
      <div class="content-peek" id="peek-${i}">
        <div class="content-category" style="color:${cat.color}">${cat.emoji} ${content.cat}</div>
        <div class="content-title">${content.title}</div>
        <div class="content-desc">${content.desc.substring(0, 80)}…</div>
        <div class="map-badge">📍 ${content.loc}</div>
      </div>` : '';

    // kokoaa kortin HTML
    card.innerHTML = `
      ${isCurrent ? '<div class="today-badge">Tämä viikko</div>' : ''}
      <div class="hatch-color-band" style="background:${bandColors[i]}"></div>
      <div class="hatch-body">
        <div class="week-number">${wn}</div>
        <div class="week-label">Viikko</div>
        <div class="week-dates">${formatDate(weekStart)} – ${formatDate(weekEnd)}</div>
        ${openAreaHtml}
        ${contentHtml}
      </div>`;

    // klikkaus-kuuntelija vain avatuille luukuille
    if (unlocked) {
      card.addEventListener('click', () => toggleHatch(i, content, cat, wn, weekStart, weekEnd));
    }

    cal.appendChild(card);
  }
}

// luukun avaaminen -- ensimmäinen klikkaus avaa luukun, toinen avaa infoikkunan
function toggleHatch(i, content, cat, wn, weekStart, weekEnd) {

  // jos jo avattu → avaa infoikkuna
  if (openedHatches.has(i)) {
    openInfoikkuna(content, cat, wn, weekStart, weekEnd);
    return;
  }

  // merkitsee avatuksi
  openedHatches.add(i);

  let card = document.getElementById('hatch-' + i);
  card.classList.add('opened');

  // näyttää sisällön animaatiolla
  let peek = document.getElementById('peek-' + i);
  if (peek) {
    peek.style.display = 'block';
    peek.classList.add('animating');
    setTimeout(() => peek.classList.remove('animating'), 500);
  }

  // vaihtaa napin avatuksi
  let openArea = card.querySelector('.open-area');
  if (openArea) openArea.innerHTML = '🎉 Avattu! Klikkaa lisätietoja';
}

// käynnistää kalenterin kun sivu latautuu
buildCalendar();
