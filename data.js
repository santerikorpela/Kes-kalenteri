// päivämäärät -- kesän aloitus- ja lopetuspäivä
let SUMMER_START = new Date('2026-04-26');
let SUMMER_END   = new Date('2026-08-16');

// kategoriat -- jokainen kategoria saa emojin ja värin
let categories = {
  'Konsertti':   { emoji: '🎵', color: '#9B59B6' },
  'Luonto':      { emoji: '🌿', color: '#2ECC71' },
  'Liikunta':    { emoji: '🏃', color: '#E67E22' },
  'Tapahtuma':   { emoji: '🎉', color: '#FF6B6B' },
  'Puutarha':    { emoji: '🌸', color: '#F39AC0' },
  'TIKO-kokous': { emoji: '👥', color: '#3ABEFF' },
  'Ruoka':       { emoji: '🍦', color: '#F39C12' },
  'Kulttuuri':   { emoji: '🎨', color: '#E74C3C' },
  'Retki':       { emoji: '⛵', color: '#1ABC9C' },
  'Haaste':      { emoji: '⚡', color: '#E74C3C' },
};

// viikkojen sisältö -- 13 luukkua, yksi per kesäviikko
let weekContents = [
  { cat: 'Konsertti',   title: 'Flow Festival -ennakko',        desc: 'Parhaat artistit tänä kesänä – katso lineup ja hanki liput ajoissa! Flow Festivalilla parhaat kansainväliset ja kotimaiset artistit.',    loc: 'Suvilahti, Helsinki',              mapUrl: 'https://maps.google.com/?q=Suvilahti+Helsinki' },
  { cat: 'Luonto',      title: 'Nuuksion kansallispuisto',       desc: 'Patikointi Nuuksioon! Hyvät reitit eri kuntotasoille. Mukaan eväät ja vedenpitävät kengät.',                                              loc: 'Nuuksio, Espoo',                   mapUrl: 'https://maps.google.com/?q=Nuuksion+kansallispuisto' },
  { cat: 'Liikunta',    title: 'Aamuuinti Hietaniemessä',        desc: 'Klassinen helsinkiläinen kesärituaali! Hietaniemen uimarannalle kello 7 – virkistävä aamuuinti ennen töitä.',                             loc: 'Hietaniemen uimaranta, Helsinki',  mapUrl: 'https://maps.google.com/?q=Hietaniemen+uimaranta+Helsinki' },
  { cat: 'Tapahtuma',   title: 'Tuomaan markkinat (kesä)',       desc: 'Kesäversio Tuomaan markkinoista Esplanadilla! Lähiruokaa, käsitöitä ja hyvää mieltä.',                                                    loc: 'Esplanadi, Helsinki',              mapUrl: 'https://maps.google.com/?q=Esplanadi+Helsinki' },
  { cat: 'Puutarha',    title: 'Kaisaniemen kasvitieteellinen',   desc: 'Retki Kaisaniemen puutarhaan – trooppiset kasvit ja rauhallinen piha kesken kaupungin.',                                                   loc: 'Kaisaniemen puutarha, Helsinki',   mapUrl: 'https://maps.google.com/?q=Kaisaniemen+kasvitieteellinen+puutarha' },
  { cat: 'TIKO-kokous', title: 'Kesäkokous & grillijuhlat',      desc: 'TIKOn virallinen kesäkokous + epävirallinen grillaaminen! Tervetuloa kaikki tikolaiset ja perheet.',                                      loc: 'TIKOn toimisto / piha',            mapUrl: 'https://maps.google.com/?q=Helsinki' },
  { cat: 'Ruoka',       title: 'Hakaniemen hallin jäätelöpäivä', desc: 'Maistelukierros Hakaniemen hallissa – parhaat jäätelöt ja kesäherkkuja. Perheystävällinen!',                                              loc: 'Hakaniemen kauppahalli, Helsinki', mapUrl: 'https://maps.google.com/?q=Hakaniemen+kauppahalli' },
  { cat: 'Kulttuuri',   title: 'HAM: Kesänäyttely',              desc: 'Helsingin taidemuseon kesänäyttely. Ilmainen sisäänpääsy lapsille – otetaan koko perhe mukaan!',                                          loc: 'HAM, Helsinki',                    mapUrl: 'https://maps.google.com/?q=Helsingin+taidemuseo+HAM' },
  { cat: 'Retki',       title: 'Suomenlinna-päiväretki',         desc: 'Lauttamatka Suomenlinnaan! Historian siipien havinaa, piknik linnoituksen nurmella ja merimaisema.',                                      loc: 'Suomenlinna, Helsinki',            mapUrl: 'https://maps.google.com/?q=Suomenlinna+Helsinki' },
  { cat: 'Liikunta',    title: 'Pyöräilyhaaste: Kehä I -ympäri', desc: 'Kaupunkipyöräilyhaaste! Kehä I:n ympäri pyörällä – noin 40 km, sopii kaikille. Yhdessä se sujuu!',                                      loc: 'Helsinki',                         mapUrl: 'https://maps.google.com/?q=Helsinki' },
  { cat: 'Tapahtuma',   title: 'Lux Helsinki (kesä-editio)',      desc: 'Kaupunkivaloshow Senaatintorilla – kaunis ilta perheen kanssa Helsingin sydämessä.',                                                      loc: 'Senaatintori, Helsinki',           mapUrl: 'https://maps.google.com/?q=Senaatintori+Helsinki' },
  { cat: 'Luonto',      title: 'Laajalahden lintureitti',         desc: 'Rauhallinen aamuretki Laajalahden luonnonsuojelualueelle. Lintuharrastajille ja luontorauhaa hakeville.',                                  loc: 'Laajalahti, Espoo',                mapUrl: 'https://maps.google.com/?q=Laajalahden+luonnonsuojelualue' },
  { cat: 'Haaste',      title: 'Kesäbingo 2026',                  desc: 'Viimeinen luukku: TIKOn kesäbingo! Kuinka monta kesäaktiviteettia sait tehtyä? Jaa tuloksesi!',                                           loc: 'Kaikkialla Helsingissä 🎉',        mapUrl: 'https://maps.google.com/?q=Helsinki' },
];

// väripalkit -- jokainen luukku saa oman värin yläreunaan
let bandColors = ['#3ABEFF','#FF6B6B','#2ECC71','#FFB800','#9B59B6','#E67E22','#1ABC9C','#F39C12','#E74C3C','#3ABEFF','#FF6B6B','#2ECC71','#FFB800'];
