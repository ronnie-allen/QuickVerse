# Bible Verse Extractor

Chrome extension to browse and copy Bible verses in **TOVBSI** (Tamil), **NIV** (English), and **AMP** (English). One-click copy to paste into Google Docs or anywhere.

## Install

1. Open `chrome://extensions/` in Chrome
2. Enable **Developer mode** (top-right toggle)
3. Click **Load unpacked**
4. Select this folder

## Usage

- Click the extension icon
- Select a translation (TOVBSI / NIV / AMP)
- **Browse** tab: pick Book → Chapter → Verse
- **Search** tab: type a reference like `John 3:16` and press Enter
- Click **Copy to Clipboard**
- `Ctrl+V` into Google Docs or anywhere

## Data

| Translation | Source | Status |
|---|---|---|
| TOVBSI (Tamil) | Public domain, bundled | ✅ Included |
| NIV (English) | Copyright Biblica | Included (generated via API.Bible) |
| AMP (English) | Copyright Lockman Foundation | Included (generated via API.Bible) |

## Build from scratch

```bash
# 1. Fetch TOVBSI (public domain - no key needed)
node scripts/fetch-tovbsi.js

# 2. Fetch NIV + AMP (requires API.Bible key)
# Edit scripts/fetch-eng.js and set API_KEY
node scripts/fetch-eng.js

# 3. Package
bash scripts/package.sh
```

## Share

Zip the folder (excluding `scripts/` and `README.md`) and share with friends.
