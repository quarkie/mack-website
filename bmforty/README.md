# bmforty

Geburtstagseinladung als Cloudflare Worker mit KV-Storage.

## Setup

```bash
npm install
```

Stats-Passwort als Secret setzen (Production):

```bash
npx wrangler secret put STATS_PASSWORD
```

Lokal in `.dev.vars`:

```
STATS_PASSWORD="dein-passwort"
```

## Dev

```bash
npm run dev
```

Erreichbar unter `http://localhost:8787/q3x8` (oder ein anderer Gruppenpfad).

## Deploy

```bash
npm run deploy
```

Deployed auf `40.mack-dev.de`. Route ist in `wrangler.toml` konfiguriert.

## Pfade

| Pfad | Gruppe |
|------|--------|
| `/q3x8` | Mack |
| `/v9m2` | Utz |
| `/z7r5` | 00WC |
| `/k4p1` | FFW |
| `/s2t9` | Sonstige |
| `/stats` | Admin-Dashboard |
