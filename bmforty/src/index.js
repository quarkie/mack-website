const GROUPS = {
  '/q3x8': 'Mack',
  '/v9m2': 'Utz',
  '/z7r5': '00WC',
  '/k4p1': 'FFW',
  '/s2t9': 'Sonstige',
};

function renderPage(path) {
  const group = GROUPS[path] || 'Unknown';
  return `<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>40</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css">
<style>
:root {
  --accent: #5c7c6b;
  --accent-light: #7a9a89;
  --accent-dark: #3d5c4a;
  --background-body: #0a0c0b;
  --background: #0a0c0b;
  --text-main: #e8e8e8;
  --text-bright: #fff;
  --links: #7a9a89;
  --focus: #5c7c6b;
  --border: #e8e8e8;
  --button-base: #0a0c0b;
  --button-hover: #5c7c6b;
  --form-placeholder: #556;
  --form-text: #e8e8e8;
}
body {
  max-width: 540px;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  overflow-x: hidden;
  background: #0a0c0b;
  color: #e8e8e8;
  font-family: system-ui, -apple-system, sans-serif;
}
.hero {
  position: relative;
  width: 100%;
  margin-bottom: 1.2rem;
}
.hero img {
  width: 100%;
  height: auto;
  display: block;
}
.hero-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem 1.5rem 1rem;
  background: linear-gradient(transparent, rgba(10,12,11,.85) 40%, rgba(10,12,11,1));
}
.hero-overlay h1 {
  font-size: 2.8rem;
  font-weight: 900;
  letter-spacing: .08em;
  text-transform: uppercase;
  margin: 0 0 .3rem;
  line-height: 1.1;
  border: none;
}
.hero-overlay h1 span { color: var(--accent-light); }
.hero-overlay .subline {
  font-size: .9rem;
  color: #99a;
  letter-spacing: .2em;
  text-transform: uppercase;
  margin: 0;
}
.content { padding: 0 1.5rem 2rem; margin-top: -0.3rem; overflow: visible; }
p { font-size: 1.1rem; line-height: 1.7; }
.gift {
  border-left: 4px solid var(--accent);
  padding: .8em 1em;
  margin: 2rem 0;
  font-style: italic;
  background: #0f1210;
}
.deadline {
  color: var(--accent-light);
  font-weight: 700;
  margin-top: 1.5rem;
  font-size: 1rem;
}
.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: .8rem;
  margin-bottom: .5rem;
}
@media (max-width: 480px) {
  .hero { margin-bottom: .8rem; }
  .hero img { max-height: 33vh; object-fit: cover; object-position: center 62%; }
  .hero-overlay { padding: 1.1rem 1rem .8rem; }
  .content { padding: 0 1rem 1.2rem; margin-top: 0; }
  .form-grid { grid-template-columns: 1fr; }
  .btn-row { gap: .7rem; }
  button { min-width: 0; }
}
input[type="text"], input[type="number"] {
  background: #0f1210;
  color: #e8e8e8;
  border: 2px solid #2a3530;
  padding: .6em .8em;
  width: 100%;
  box-sizing: border-box;
  font-size: 1rem;
  transition: border-color .2s;
}
input[type="text"]:focus, input[type="number"]:focus { border-color: var(--accent); outline: none; }
label { font-size: .85rem; color: #889; margin-bottom: .2em; display: block; }
.btn-row { display: flex; gap: 1rem; margin-top: 1.2rem; flex-wrap: wrap; }
button {
  background: #0a0c0b;
  color: #e8e8e8;
  border: 2px solid #e8e8e8;
  padding: .7em 1.4em;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: .05em;
  flex: 1;
  min-width: 140px;
  transition: all .15s;
}
button:hover, button:focus { background: var(--accent); border-color: var(--accent); color: #fff; }
button.nein { border-color: #3a3a3a; color: #778; }
button.nein:hover { background: #1a1f1c; border-color: var(--accent-dark); color: #ccc; }
button.btn-active {
  background: var(--accent);
  border-color: var(--accent);
  color: #fff;
}
button.nein.btn-active {
  background: #1b2420;
  border-color: var(--accent-dark);
  color: #d3ded8;
}
.ohnein { position: absolute; left: -9999px; opacity: 0; height: 0; width: 0; }
#feedback {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: .8rem;
  width: min(92vw, 540px);
  padding: .7em .9em;
  border: 2px solid #7a9a89;
  color: #e8e8e8;
  display: none;
  font-weight: 700;
  text-align: center;
  background: rgba(15,18,16,.96);
  z-index: 9998;
  box-shadow: 0 6px 24px rgba(0,0,0,.35);
}
#feedback.show { display: block; }
.existing-note {
  border: 1px solid #436253;
  border-left: 5px solid #7a9a89;
  background: #141b18;
  color: #d5e7de;
  padding: .65rem .75rem;
  margin: 0 0 .9rem;
  font-weight: 600;
  line-height: 1.45;
  display: none;
}
.route-hint {
  position: fixed;
  right: .45rem;
  bottom: .35rem;
  font-size: .62rem;
  letter-spacing: .03em;
  color: #7a9a89;
  opacity: .06;
  user-select: text;
}
.route-hint:hover { opacity: .4; }
</style>
</head>
<body>

<div class="hero">
  <img src="/bg.jpeg" alt="">
  <div class="hero-overlay">
    <h1><span>40</span> Jahre</h1>
    <div class="subline">Dienstag &mdash; 04. August 2026 &mdash; ab 16 Uhr</div>
  </div>
</div>

<div class="content">

<p>Herzliche Einladung zu meinem Geburtstag.<br>
Gem&uuml;tliche Gartenfeier bei mir zu Hause.</p>

<div class="gift">Wer unbedingt etwas schenken will: Die Urlaubskasse freut sich.</div>

<p class="deadline">Bitte R&uuml;ckmeldung bis 01.07. an mich oder hier &uuml;ber das Formular:</p>

<form id="rsvp-form" autocomplete="off">
  <div id="existing-note" class="existing-note"></div>
  <div class="form-grid">
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" name="name" placeholder="z.B. Max">
    </div>
    <div>
      <label for="count">Personenanzahl</label>
      <input type="number" id="count" name="count" placeholder="z.B. 2" min="1" max="20">
    </div>
  </div>

  <label class="ohnein" for="website">Website</label>
  <input class="ohnein" type="text" id="website" name="website" tabindex="-1" autocomplete="off">

  <div class="btn-row">
    <button type="button" id="btn-ja">Komme</button>
    <button type="button" id="btn-nein" class="nein">Leider nicht</button>
  </div>
</form>

<div id="feedback"></div>

</div>
<div class="route-hint">${escapeHtml(group)} ${escapeHtml(path)}</div>

<script>
(function() {
  var route = ${JSON.stringify(path)};
  var form = document.getElementById('rsvp-form');
  var feedback = document.getElementById('feedback');
  var existingNote = document.getElementById('existing-note');
  var btnJa = document.getElementById('btn-ja');
  var btnNein = document.getElementById('btn-nein');
  var currentStatus = '';

  function getCookie(name) {
    var match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
    return match ? match[1] : null;
  }

  function showFeedback(message) {
    feedback.textContent = message;
    feedback.className = 'show';
    setTimeout(function() { feedback.className = ''; }, 4500);
  }

  function setSelectedStatus(status) {
    btnJa.classList.toggle('btn-active', status === 'ja');
    btnNein.classList.toggle('btn-active', status === 'nein');
    btnJa.setAttribute('aria-pressed', status === 'ja' ? 'true' : 'false');
    btnNein.setAttribute('aria-pressed', status === 'nein' ? 'true' : 'false');
  }

  function isValid() {
    var name = form.elements['name'].value.trim();
    var count = form.elements['count'].value.trim();

    if (!name && !count) {
      showFeedback('Bitte Name oder Personenanzahl eintragen.');
      return false;
    }

    if (count) {
      var parsed = parseInt(count, 10);
      if (!/^[0-9]+$/.test(count) || parsed < 1 || parsed > 20) {
        showFeedback('Personenanzahl bitte zwischen 1 und 20.');
        return false;
      }
    }

    return true;
  }

  function submit(status) {
    if (!isValid()) return;
    var payloadCount = status === 'nein' ? '' : (form.elements['count'].value || '');

    fetch('/rsvp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        p: route,
        n: form.elements['name'].value.trim(),
        c: payloadCount,
        s: status,
        w: form.elements['website'].value,
        v: getCookie('vid') || ''
      })
    })
    .then(function(r) { return r.json(); })
    .then(function(data) {
      if (data && data.error) {
        showFeedback('Bitte Eingaben pruefen.');
        return;
      }

      var wasStatus = currentStatus;
      currentStatus = status;
      setSelectedStatus(status);

      if (wasStatus === 'ja' && status === 'nein') {
        form.elements['count'].value = '';
      }

      showFeedback(data && data.updated
        ? 'Danke, deine Rueckmeldung wurde aktualisiert.'
        : (status === 'ja'
          ? 'Danke fuer deine Rueckmeldung. Wir freuen uns auf dich.'
          : 'Danke fuer deine Rueckmeldung.'));

      existingNote.textContent = status === 'ja'
        ? 'Du hast bereits zugesagt. Du kannst deine Angaben jederzeit anpassen.'
        : 'Du hast bereits abgesagt. Du kannst deine Angaben jederzeit anpassen.';
      existingNote.style.display = 'block';
    })
    .catch(function() {
      showFeedback('Fehler. Versuch es nochmal.');
    });
  }

  function loadExisting() {
    var vid = getCookie('vid') || '';
    if (!vid) return;

    fetch('/rsvp?p=' + encodeURIComponent(route) + '&v=' + encodeURIComponent(vid))
      .then(function(r) { return r.json(); })
      .then(function(data) {
        if (!data || !data.ok || !data.found || !data.rsvp) return;
        var r = data.rsvp;
        form.elements['name'].value = r.name || '';
        form.elements['count'].value = r.count || '';
        currentStatus = r.status || '';
        setSelectedStatus(currentStatus);
        existingNote.textContent = r.status === 'ja'
          ? 'Du hast bereits zugesagt. Du kannst deine Angaben jederzeit anpassen.'
          : 'Du hast bereits abgesagt. Du kannst deine Angaben jederzeit anpassen.';
        existingNote.style.display = 'block';
      })
      .catch(function() {});
  }

  btnJa.addEventListener('click', function() { submit('ja'); });
  btnNein.addEventListener('click', function() { submit('nein'); });
  loadExisting();
})();
</script>
</body>
</html>`;
}

function renderStats(rsvps, visits, resetDone) {
  const grouped = {};
  for (const r of rsvps) {
    if (!grouped[r.gruppe]) grouped[r.gruppe] = { ja: [], nein: [] };
    grouped[r.gruppe][r.status === 'ja' ? 'ja' : 'nein'].push(r);
  }

  const visitCounts = {};
  for (const v of visits) {
    visitCounts[v.gruppe] = (visitCounts[v.gruppe] || 0) + 1;
  }

  let html = `<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Stats</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css">
<style>
:root { --background-body:#0a0c0b; --background:#0a0c0b; --text-main:#e8e8e8; --border:#e8e8e8; }
body { background:#0a0c0b; color:#e8e8e8; font-family:system-ui,sans-serif; max-width:900px; margin:0 auto; padding:2rem; }
table { width:100%; border-collapse:collapse; margin:1.5rem 0; }
th, td { border:1px solid #2a3530; padding:.5em .7em; text-align:left; }
th { background:#0f1210; color:#7a9a89; }
.summary { border:2px solid #5c7c6b; padding:1em; margin-bottom:2rem; }
h2 { border-bottom:2px solid #5c7c6b; padding-bottom:.3em; color:#7a9a89; }
h1 { color:#e8e8e8; }
.actions { display:flex; gap:.6rem; align-items:center; flex-wrap:wrap; margin:.8rem 0 1.4rem; }
.action-links { display:flex; gap:.5rem; flex-wrap:wrap; }
.action-links a { border:1px solid #2a3530; padding:.25rem .55rem; text-decoration:none; border-radius:3px; }
.debug-links { display:flex; flex-wrap:wrap; gap:.55rem; margin:.2rem 0 .2rem; }
.debug-links a { border:1px solid #2a3530; padding:.25rem .55rem; text-decoration:none; border-radius:3px; }
.danger { background:#240b0b; border-color:#a34343; color:#ffd8d8; }
.notice { border:1px solid #2a3530; background:#0f1210; padding:.45rem .7rem; color:#7a9a89; }
.trace-open { white-space: nowrap; }
.trace-modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, .72);
  display: none;
  z-index: 9999;
  padding: 1rem;
}
.trace-modal:target { display: block; }
.trace-card {
  max-width: 760px;
  width: min(100%, 760px);
  max-height: calc(100vh - 2rem);
  margin: 0 auto;
  overflow: auto;
  background: #0f1210;
  border: 2px solid #5c7c6b;
  padding: .9rem 1rem;
}
.trace-head { display: flex; justify-content: space-between; gap: .8rem; align-items: center; margin-bottom: .55rem; }
.trace-head h3 { margin: 0; border: 0; color: #7a9a89; }
.trace-close { text-decoration: none; border: 1px solid #2a3530; padding: .25rem .55rem; border-radius: 3px; }
.trace-grid {
  margin-top: .35rem;
  display: grid;
  grid-template-columns: 10rem 1fr;
  gap: .25rem .55rem;
  font-size: .9rem;
}
.trace-grid .k { color: #7a9a89; }
.trace-grid .v { word-break: break-word; }
</style>
</head>
<body>
<h1>Stats</h1>`;

  html += `<div class="actions">
<form method="post" action="/stats/reset" onsubmit="return confirm('Delete all RSVP and visit data?');">
  <button type="submit" class="danger">Reset All Data</button>
</form>
<form method="post" action="/stats/logout">
  <button type="submit">Logout</button>
</form>
<div class="action-links">
  <a href="/stats/traces">View All Traces</a>
  <a href="/stats/export.json">Export JSON</a>
  <a href="/stats/export.csv">Export CSV</a>
</div>
${resetDone ? '<div class="notice">Reset complete.</div>' : ''}
</div>`;

  html += `<div class="summary"><h2>Debug Links</h2><div class="debug-links">`;
  for (const [route, group] of Object.entries(GROUPS)) {
    html += `<a href="${route}" target="_blank" rel="noreferrer">${escapeHtml(group)} ${escapeHtml(route)}</a>`;
  }
  html += `</div></div>`;

  html += `<div class="summary"><h2>Overview</h2><table><tr><th>Group</th><th>Visits</th><th>Yes</th><th>People (est.)</th><th>No</th></tr>`;
  for (const g of ['Mack', 'Utz', '00WC', 'FFW', 'Sonstige']) {
    const data = grouped[g] || { ja: [], nein: [] };
    const personCount = data.ja.reduce((sum, r) => {
      const c = parseInt(r.count, 10);
      return sum + (c > 0 ? c : 1);
    }, 0);
    html += `<tr><td>${g}</td><td>${visitCounts[g] || 0}</td><td>${data.ja.length}</td><td>${personCount}</td><td>${data.nein.length}</td></tr>`;
  }
  html += `</table></div>`;

  let traceModals = '';
  html += `<h2>All Responses</h2><table><tr><th>Group</th><th>Name</th><th>People</th><th>Status</th><th>Timestamp</th><th>Edited</th><th>Trace</th></tr>`;
  let traceIdx = 0;
  for (const r of rsvps.sort((a, b) => b.ts.localeCompare(a.ts))) {
    const trace = r.trace || {};
    const summaryParts = [trace.country, trace.city, trace.ipMasked].filter(Boolean);
    const traceSummary = summaryParts.length ? summaryParts.join(' | ') : 'details';
    const traceId = `trace-${traceIdx++}`;
    html += `<tr><td>${r.gruppe}</td><td>${escapeHtml(r.name || '-')}</td><td>${escapeHtml(r.count || '-')}</td><td>${r.status === 'ja' ? 'Yes' : 'No'}</td><td>${new Date(r.ts).toLocaleString('en-GB')}</td><td>${r.editedAt ? escapeHtml(new Date(r.editedAt).toLocaleString('en-GB')) : '-'}</td><td><a class="trace-open" href="#${traceId}">View</a><br><small>${escapeHtml(traceSummary)}</small></td></tr>`;
    traceModals += `<div id="${traceId}" class="trace-modal"><div class="trace-card"><div class="trace-head"><h3>Trace Details</h3><a class="trace-close" href="#">Close</a></div><div class="trace-grid"><div class="k">group</div><div class="v">${escapeHtml(r.gruppe || '-')}</div><div class="k">name / people</div><div class="v">${escapeHtml(r.name || '-')} / ${escapeHtml(r.count || '-')}</div><div class="k">status / ts</div><div class="v">${escapeHtml(r.status || '-')} / ${escapeHtml(new Date(r.ts).toLocaleString('en-GB'))}</div><div class="k">created / edited</div><div class="v">${escapeHtml([r.createdAt ? new Date(r.createdAt).toLocaleString('en-GB') : '', r.editedAt ? new Date(r.editedAt).toLocaleString('en-GB') : ''].filter(Boolean).join(' / ') || '-')}</div><div class="k">visitorId</div><div class="v">${escapeHtml(r.visitorId || '-')}</div><div class="k">ipMasked</div><div class="v">${escapeHtml(trace.ipMasked || '-')}</div><div class="k">ipHash</div><div class="v">${escapeHtml(trace.ipHash || '-')}</div><div class="k">country / region / city</div><div class="v">${escapeHtml([trace.country, trace.region, trace.city].filter(Boolean).join(' / ') || '-')}</div><div class="k">colo / asn / org</div><div class="v">${escapeHtml([trace.colo, trace.asn ? `AS${trace.asn}` : '', trace.org].filter(Boolean).join(' / ') || '-')}</div><div class="k">language</div><div class="v">${escapeHtml(trace.lang || '-')}</div><div class="k">referrer</div><div class="v">${escapeHtml(trace.ref || '-')}</div><div class="k">user-agent</div><div class="v">${escapeHtml(trace.ua || '-')}</div><div class="k">tls / botScore</div><div class="v">${escapeHtml([trace.tls, trace.botScore].filter(Boolean).join(' / ') || '-')}</div></div></div></div>`;
  }
  html += `</table>${traceModals}</body></html>`;

  return html;
}

function renderMujre() {
  const rows = Object.entries(GROUPS)
    .map(([path, group]) => `<tr><td>${escapeHtml(group)}</td><td><code>${escapeHtml(path)}</code></td></tr>`)
    .join('');

  return `<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow,noarchive">
<title>mujre</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css">
<style>
:root { --background-body:#0a0c0b; --background:#0a0c0b; --text-main:#e8e8e8; --border:#2a3530; }
body { max-width: 560px; margin: 0 auto; padding: 1.2rem; background:#0a0c0b; color:#e8e8e8; font-family:system-ui,sans-serif; }
h1 { margin: 0 0 .8rem; font-size: 1.1rem; color: #7a9a89; border: 0; }
table { width: 100%; border-collapse: collapse; }
th, td { border: 1px solid #2a3530; padding: .45rem .6rem; text-align: left; }
th { color: #7a9a89; }
code { color: #e8e8e8; }
</style>
</head>
<body>
<h1>mujre</h1>
<table>
<tr><th>Gruppe</th><th>Pfad</th></tr>
${rows}
</table>
</body>
</html>`;
}

function renderStatsLogin(hasError) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow,noarchive">
<title>Stats Login</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css">
<style>
:root { --background-body:#0a0c0b; --background:#0a0c0b; --text-main:#e8e8e8; --border:#2a3530; }
body { max-width: 420px; margin: 0 auto; padding: 1.2rem; background:#0a0c0b; color:#e8e8e8; font-family:system-ui,sans-serif; }
h1 { color:#e8e8e8; }
.err { border:1px solid #7a2b2b; background:#200f0f; color:#ffb3b3; padding:.55rem .7rem; margin-bottom:.8rem; }
</style>
</head>
<body>
<h1>Stats Login</h1>
${hasError ? '<div class="err">Invalid password.</div>' : ''}
<form method="post" action="/stats/login" autocomplete="off">
  <label for="pw">Password</label>
  <input type="password" id="pw" name="pw" required>
  <button type="submit">Login</button>
</form>
</body>
</html>`;
}

function renderAllTraces(rsvps) {
  let html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow,noarchive">
<title>All Traces</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css">
<style>
:root { --background-body:#0a0c0b; --background:#0a0c0b; --text-main:#e8e8e8; --border:#2a3530; }
body { background:#0a0c0b; color:#e8e8e8; font-family:system-ui,sans-serif; max-width:1200px; margin:0 auto; padding:1.2rem; }
table { width:100%; border-collapse:collapse; margin:1rem 0; }
th, td { border:1px solid #2a3530; padding:.4rem .55rem; text-align:left; vertical-align:top; font-size:.88rem; }
th { background:#0f1210; color:#7a9a89; position:sticky; top:0; }
.back { border:1px solid #2a3530; padding:.25rem .55rem; text-decoration:none; border-radius:3px; }
</style>
</head>
<body>
<a class="back" href="/stats">Back to Stats</a>
<h1>All Traces</h1>
<table>
<tr><th>Timestamp</th><th>Group</th><th>Name</th><th>People</th><th>Status</th><th>visitorId</th><th>ipMasked</th><th>ipHash</th><th>country</th><th>region</th><th>city</th><th>colo</th><th>asn</th><th>org</th><th>lang</th><th>ref</th><th>ua</th><th>tls</th><th>botScore</th></tr>`;

  for (const r of rsvps.sort((a, b) => b.ts.localeCompare(a.ts))) {
    const t = r.trace || {};
    html += `<tr><td>${escapeHtml(new Date(r.ts).toLocaleString('en-GB'))}</td><td>${escapeHtml(r.gruppe || '-')}</td><td>${escapeHtml(r.name || '-')}</td><td>${escapeHtml(r.count || '-')}</td><td>${escapeHtml(r.status || '-')}</td><td>${escapeHtml(r.visitorId || '-')}</td><td>${escapeHtml(t.ipMasked || '-')}</td><td>${escapeHtml(t.ipHash || '-')}</td><td>${escapeHtml(t.country || '-')}</td><td>${escapeHtml(t.region || '-')}</td><td>${escapeHtml(t.city || '-')}</td><td>${escapeHtml(t.colo || '-')}</td><td>${escapeHtml(t.asn || '-')}</td><td>${escapeHtml(t.org || '-')}</td><td>${escapeHtml(t.lang || '-')}</td><td>${escapeHtml(t.ref || '-')}</td><td>${escapeHtml(t.ua || '-')}</td><td>${escapeHtml(t.tls || '-')}</td><td>${escapeHtml(t.botScore || '-')}</td></tr>`;
  }

  html += `</table></body></html>`;
  return html;
}

function getCookieValue(cookieHeader, name) {
  const cookies = String(cookieHeader || '').split(';');
  const prefix = `${name}=`;
  for (const c of cookies) {
    const trimmed = c.trim();
    if (trimmed.startsWith(prefix)) return trimmed.slice(prefix.length);
  }
  return '';
}

async function sha256Hex(input) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(String(input)));
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, '0')).join('');
}

async function listKvByPrefix(env, prefix) {
  const out = [];
  let cursor = undefined;
  do {
    const list = await env.RSVP.list({ prefix, cursor });
    for (const key of list.keys) {
      const val = await env.RSVP.get(key.name);
      if (val) out.push(JSON.parse(val));
    }
    cursor = list.list_complete ? undefined : list.cursor;
  } while (cursor);
  return out;
}

function toCsvCell(v) {
  const s = String(v ?? '');
  return `"${s.replace(/"/g, '""')}"`;
}

function buildTraceExportRows(rsvps) {
  return rsvps
    .sort((a, b) => b.ts.localeCompare(a.ts))
    .map((r) => {
      const t = r.trace || {};
      return {
        ts: r.ts || '',
        createdAt: r.createdAt || '',
        editedAt: r.editedAt || '',
        group: r.gruppe || '',
        name: r.name || '',
        count: r.count || '',
        status: r.status || '',
        visitorId: r.visitorId || '',
        ipMasked: t.ipMasked || '',
        ipHash: t.ipHash || '',
        country: t.country || '',
        region: t.region || '',
        city: t.city || '',
        colo: t.colo || '',
        asn: t.asn || '',
        org: t.org || '',
        lang: t.lang || '',
        ref: t.ref || '',
        ua: t.ua || '',
        tls: t.tls || '',
        botScore: t.botScore || '',
      };
    });
}

function maskIp(ip) {
  if (!ip) return '';
  if (ip.includes('.')) {
    const p = ip.split('.');
    if (p.length === 4) return `${p[0]}.${p[1]}.${p[2]}.x`;
  }
  if (ip.includes(':')) {
    const p = ip.split(':').filter(Boolean);
    return `${p.slice(0, 4).join(':')}::`;
  }
  return ip;
}

async function buildTrace(request) {
  const rawIp = (request.headers.get('CF-Connecting-IP') || request.headers.get('x-forwarded-for') || '').split(',')[0].trim();
  const cf = request.cf || {};
  return {
    ipMasked: maskIp(rawIp),
    ipHash: rawIp ? (await sha256Hex(`ip:${rawIp}`)).slice(0, 16) : '',
    ua: (request.headers.get('user-agent') || '').slice(0, 240),
    lang: (request.headers.get('accept-language') || '').slice(0, 120),
    ref: (request.headers.get('referer') || '').slice(0, 240),
    colo: String(cf.colo || ''),
    country: String(cf.country || ''),
    region: String(cf.regionCode || cf.region || ''),
    city: String(cf.city || ''),
    asn: String(cf.asn || ''),
    org: String(cf.asOrganization || ''),
    tls: String(cf.tlsVersion || ''),
    botScore: cf.botManagement && cf.botManagement.score !== undefined ? String(cf.botManagement.score) : '',
  };
}

function escapeHtml(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    // Group invitation pages
    const gruppe = GROUPS[path];
    if (gruppe && request.method === 'GET') {
      const cookies = request.headers.get('Cookie') || '';
      const vidMatch = cookies.match(/vid=([^;]+)/);
      let vid = vidMatch ? vidMatch[1] : crypto.randomUUID();
      const isNew = !vidMatch;

      await env.RSVP.put(`visit:${gruppe}:${vid}`, JSON.stringify({
        ts: new Date().toISOString(),
        gruppe,
      }));

      const headers = { 'Content-Type': 'text/html;charset=utf-8' };
      if (isNew) {
        headers['Set-Cookie'] = `vid=${vid}; Path=/; Max-Age=31536000; SameSite=Lax`;
      }

      return new Response(renderPage(path), { status: 200, headers });
    }

    // RSVP prefill lookup
    if (path === '/rsvp' && request.method === 'GET') {
      const p = url.searchParams.get('p') || '';
      const v = url.searchParams.get('v') || '';
      const g = GROUPS[p];
      if (!g || !v) return Response.json({ ok: true, found: false });

      const existingRaw = await env.RSVP.get(`rsvp:${g}:${v}`);
      if (!existingRaw) return Response.json({ ok: true, found: false });

      const existing = JSON.parse(existingRaw);
      return Response.json({
        ok: true,
        found: true,
        rsvp: {
          name: existing.name || '',
          count: existing.count || '',
          status: existing.status || '',
          ts: existing.ts || '',
        },
      });
    }

    // RSVP submission
    if (path === '/rsvp' && request.method === 'POST') {
      try {
        const body = await request.json();
        const { p, n, c, s, w, v } = body;

        if (w) {
          return Response.json({ ok: true });
        }

        const g = GROUPS[p];
        if (!g) {
          return Response.json({ error: 'invalid' }, { status: 400 });
        }

        const name = (n || '').trim().slice(0, 200);
        const countRaw = s === 'nein' ? '' : String(c || '').trim();
        const countNum = countRaw ? parseInt(countRaw, 10) : null;

        if (!name && !countRaw) {
          return Response.json({ error: 'empty' }, { status: 400 });
        }

        if (countRaw && (!/^[0-9]+$/.test(countRaw) || !Number.isFinite(countNum) || countNum < 1 || countNum > 20)) {
          return Response.json({ error: 'invalid_count' }, { status: 400 });
        }

        const visitorId = v || 'anon-' + crypto.randomUUID();
        const key = `rsvp:${g}:${visitorId}`;
        const now = new Date().toISOString();
        const existingRaw = await env.RSVP.get(key);
        const existing = existingRaw ? JSON.parse(existingRaw) : null;
        const trace = await buildTrace(request);

        await env.RSVP.put(key, JSON.stringify({
          name,
          count: countRaw,
          status: s === 'ja' ? 'ja' : 'nein',
          gruppe: g,
          visitorId,
          createdAt: existing?.createdAt || existing?.ts || now,
          editedAt: existing ? now : '',
          trace,
          ts: now,
        }));

        return Response.json({ ok: true, updated: !!existing });
      } catch {
        return Response.json({ error: 'bad request' }, { status: 400 });
      }
    }

    if (path === '/stats/login' && request.method === 'GET') {
      return new Response(renderStatsLogin(url.searchParams.get('error') === '1'), {
        status: 200,
        headers: { 'Content-Type': 'text/html;charset=utf-8' },
      });
    }

    if (path === '/stats/login' && request.method === 'POST') {
      const form = await request.formData();
      const pw = String(form.get('pw') || '');
      if (pw !== env.STATS_PASSWORD) {
        return Response.redirect(`${url.origin}/stats/login?error=1`, 303);
      }

      const authToken = await sha256Hex(`stats:${env.STATS_PASSWORD}`);
      const secureAttr = url.protocol === 'https:' ? '; Secure' : '';
      return new Response(null, {
        status: 303,
        headers: {
          Location: '/stats',
          'Set-Cookie': `stats_auth=${authToken}; Path=/; HttpOnly; SameSite=Strict; Max-Age=86400${secureAttr}`,
        },
      });
    }

    if (path === '/stats/logout' && request.method === 'POST') {
      const secureAttr = url.protocol === 'https:' ? '; Secure' : '';
      return new Response(null, {
        status: 303,
        headers: {
          Location: '/stats/login',
          'Set-Cookie': `stats_auth=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0${secureAttr}`,
        },
      });
    }

    // Stats page
    if (path === '/stats') {
      const legacyPw = url.searchParams.get('pw');
      if (legacyPw) {
        if (legacyPw !== env.STATS_PASSWORD) {
          return Response.redirect(`${url.origin}/stats/login?error=1`, 303);
        }
        const authToken = await sha256Hex(`stats:${env.STATS_PASSWORD}`);
        const secureAttr = url.protocol === 'https:' ? '; Secure' : '';
        return new Response(null, {
          status: 303,
          headers: {
            Location: '/stats',
            'Set-Cookie': `stats_auth=${authToken}; Path=/; HttpOnly; SameSite=Strict; Max-Age=86400${secureAttr}`,
          },
        });
      }

      const expectedToken = await sha256Hex(`stats:${env.STATS_PASSWORD}`);
      const cookieToken = getCookieValue(request.headers.get('Cookie'), 'stats_auth');
      if (cookieToken !== expectedToken) {
        return Response.redirect(`${url.origin}/stats/login`, 303);
      }

      const rsvps = await listKvByPrefix(env, 'rsvp:');
      const visits = await listKvByPrefix(env, 'visit:');

      const resetDone = url.searchParams.get('reset') === '1';
      return new Response(renderStats(rsvps, visits, resetDone), {
        status: 200,
        headers: { 'Content-Type': 'text/html;charset=utf-8' },
      });
    }

    if (path === '/stats/traces' && request.method === 'GET') {
      const expectedToken = await sha256Hex(`stats:${env.STATS_PASSWORD}`);
      const cookieToken = getCookieValue(request.headers.get('Cookie'), 'stats_auth');
      if (cookieToken !== expectedToken) {
        return Response.redirect(`${url.origin}/stats/login`, 303);
      }

      const rsvps = await listKvByPrefix(env, 'rsvp:');
      return new Response(renderAllTraces(rsvps), {
        status: 200,
        headers: { 'Content-Type': 'text/html;charset=utf-8' },
      });
    }

    if (path === '/stats/export.json' && request.method === 'GET') {
      const expectedToken = await sha256Hex(`stats:${env.STATS_PASSWORD}`);
      const cookieToken = getCookieValue(request.headers.get('Cookie'), 'stats_auth');
      if (cookieToken !== expectedToken) {
        return Response.redirect(`${url.origin}/stats/login`, 303);
      }

      const rows = buildTraceExportRows(await listKvByPrefix(env, 'rsvp:'));
      return new Response(JSON.stringify(rows, null, 2), {
        status: 200,
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'Content-Disposition': 'attachment; filename="rsvp-traces.json"',
        },
      });
    }

    if (path === '/stats/export.csv' && request.method === 'GET') {
      const expectedToken = await sha256Hex(`stats:${env.STATS_PASSWORD}`);
      const cookieToken = getCookieValue(request.headers.get('Cookie'), 'stats_auth');
      if (cookieToken !== expectedToken) {
        return Response.redirect(`${url.origin}/stats/login`, 303);
      }

      const rows = buildTraceExportRows(await listKvByPrefix(env, 'rsvp:'));
      const cols = ['ts', 'createdAt', 'editedAt', 'group', 'name', 'count', 'status', 'visitorId', 'ipMasked', 'ipHash', 'country', 'region', 'city', 'colo', 'asn', 'org', 'lang', 'ref', 'ua', 'tls', 'botScore'];
      let csv = `${cols.join(',')}\n`;
      for (const row of rows) {
        csv += `${cols.map((c) => toCsvCell(row[c])).join(',')}\n`;
      }
      return new Response(csv, {
        status: 200,
        headers: {
          'Content-Type': 'text/csv;charset=utf-8',
          'Content-Disposition': 'attachment; filename="rsvp-traces.csv"',
        },
      });
    }

    if (path === '/stats/reset' && request.method === 'POST') {
      const expectedToken = await sha256Hex(`stats:${env.STATS_PASSWORD}`);
      const cookieToken = getCookieValue(request.headers.get('Cookie'), 'stats_auth');
      if (cookieToken !== expectedToken) {
        return Response.redirect(`${url.origin}/stats/login`, 303);
      }

      let cursor;
      do {
        const list = await env.RSVP.list({ cursor });
        for (const key of list.keys) {
          if (key.name.startsWith('rsvp:') || key.name.startsWith('visit:')) {
            await env.RSVP.delete(key.name);
          }
        }
        cursor = list.list_complete ? undefined : list.cursor;
      } while (cursor);

      return Response.redirect(`${url.origin}/stats?reset=1`, 303);
    }

    // Hidden mapping page for quick manual testing
    if (path === '/mujre' && request.method === 'GET') {
      return new Response(renderMujre(), {
        status: 200,
        headers: { 'Content-Type': 'text/html;charset=utf-8' },
      });
    }

    return new Response('404', { status: 404 });
  },
};

