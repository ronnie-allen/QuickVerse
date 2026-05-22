const fs = require('fs');
const path = require('path');

const API_BASE = 'https://rest.api.bible/v1';
const API_KEY = 'VNOFzG7ZMZf-LFfAFs9Zn';

const BIBLE_IDS = {
  NIV: '78a9f6124f344018-01',
  AMP: 'a81b73293d3080c9-01',
};

const BOOKS = [
  { abbr: 'GEN', name: 'Genesis', chapters: 50 },
  { abbr: 'EXO', name: 'Exodus', chapters: 40 },
  { abbr: 'LEV', name: 'Leviticus', chapters: 27 },
  { abbr: 'NUM', name: 'Numbers', chapters: 36 },
  { abbr: 'DEU', name: 'Deuteronomy', chapters: 34 },
  { abbr: 'JOS', name: 'Joshua', chapters: 24 },
  { abbr: 'JDG', name: 'Judges', chapters: 21 },
  { abbr: 'RUT', name: 'Ruth', chapters: 4 },
  { abbr: '1SA', name: '1 Samuel', chapters: 31 },
  { abbr: '2SA', name: '2 Samuel', chapters: 24 },
  { abbr: '1KI', name: '1 Kings', chapters: 22 },
  { abbr: '2KI', name: '2 Kings', chapters: 25 },
  { abbr: '1CH', name: '1 Chronicles', chapters: 29 },
  { abbr: '2CH', name: '2 Chronicles', chapters: 36 },
  { abbr: 'EZR', name: 'Ezra', chapters: 10 },
  { abbr: 'NEH', name: 'Nehemiah', chapters: 13 },
  { abbr: 'EST', name: 'Esther', chapters: 10 },
  { abbr: 'JOB', name: 'Job', chapters: 42 },
  { abbr: 'PSA', name: 'Psalms', chapters: 150 },
  { abbr: 'PRO', name: 'Proverbs', chapters: 31 },
  { abbr: 'ECC', name: 'Ecclesiastes', chapters: 12 },
  { abbr: 'SNG', name: 'Song of Solomon', chapters: 8 },
  { abbr: 'ISA', name: 'Isaiah', chapters: 66 },
  { abbr: 'JER', name: 'Jeremiah', chapters: 52 },
  { abbr: 'LAM', name: 'Lamentations', chapters: 5 },
  { abbr: 'EZK', name: 'Ezekiel', chapters: 48 },
  { abbr: 'DAN', name: 'Daniel', chapters: 12 },
  { abbr: 'HOS', name: 'Hosea', chapters: 14 },
  { abbr: 'JOL', name: 'Joel', chapters: 3 },
  { abbr: 'AMO', name: 'Amos', chapters: 9 },
  { abbr: 'OBA', name: 'Obadiah', chapters: 1 },
  { abbr: 'JON', name: 'Jonah', chapters: 4 },
  { abbr: 'MIC', name: 'Micah', chapters: 7 },
  { abbr: 'NAM', name: 'Nahum', chapters: 3 },
  { abbr: 'HAB', name: 'Habakkuk', chapters: 3 },
  { abbr: 'ZEP', name: 'Zephaniah', chapters: 3 },
  { abbr: 'HAG', name: 'Haggai', chapters: 2 },
  { abbr: 'ZEC', name: 'Zechariah', chapters: 14 },
  { abbr: 'MAL', name: 'Malachi', chapters: 4 },
  { abbr: 'MAT', name: 'Matthew', chapters: 28 },
  { abbr: 'MRK', name: 'Mark', chapters: 16 },
  { abbr: 'LUK', name: 'Luke', chapters: 24 },
  { abbr: 'JHN', name: 'John', chapters: 21 },
  { abbr: 'ACT', name: 'Acts', chapters: 28 },
  { abbr: 'ROM', name: 'Romans', chapters: 16 },
  { abbr: '1CO', name: '1 Corinthians', chapters: 16 },
  { abbr: '2CO', name: '2 Corinthians', chapters: 13 },
  { abbr: 'GAL', name: 'Galatians', chapters: 6 },
  { abbr: 'EPH', name: 'Ephesians', chapters: 6 },
  { abbr: 'PHP', name: 'Philippians', chapters: 4 },
  { abbr: 'COL', name: 'Colossians', chapters: 4 },
  { abbr: '1TH', name: '1 Thessalonians', chapters: 5 },
  { abbr: '2TH', name: '2 Thessalonians', chapters: 3 },
  { abbr: '1TI', name: '1 Timothy', chapters: 6 },
  { abbr: '2TI', name: '2 Timothy', chapters: 4 },
  { abbr: 'TIT', name: 'Titus', chapters: 3 },
  { abbr: 'PHM', name: 'Philemon', chapters: 1 },
  { abbr: 'HEB', name: 'Hebrews', chapters: 13 },
  { abbr: 'JAM', name: 'James', chapters: 5 },
  { abbr: '1PE', name: '1 Peter', chapters: 5 },
  { abbr: '2PE', name: '2 Peter', chapters: 3 },
  { abbr: '1JN', name: '1 John', chapters: 5 },
  { abbr: '2JN', name: '2 John', chapters: 1 },
  { abbr: '3JN', name: '3 John', chapters: 1 },
  { abbr: 'JUD', name: 'Jude', chapters: 1 },
  { abbr: 'REV', name: 'Revelation', chapters: 22 },
];

function parseChapterText(content) {
  const verses = {};
  const regex = /\[(\d+)\]\s*/g;
  let lastIndex = -1;
  let lastNum = null;
  let match;

  while ((match = regex.exec(content)) !== null) {
    const num = parseInt(match[1]);
    if (lastNum !== null) {
      const textStart = lastIndex;
      const textEnd = match.index;
      let text = content.slice(textStart, textEnd).trim();
      verses[String(lastNum)] = text;
    }
    lastNum = num;
    lastIndex = regex.lastIndex;
  }

  if (lastNum !== null) {
    let text = content.slice(lastIndex).trim();
    verses[String(lastNum)] = text;
  }

  return verses;
}

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url, {
        headers: { 'api-key': API_KEY },
      });
      if (res.status === 429) {
        const wait = parseInt(res.headers.get('retry-after') || '30') * 1000;
        console.log(`  Rate limited. Waiting ${wait/1000}s...`);
        await sleep(wait);
        continue;
      }
      if (!res.ok) {
        const body = await res.text().catch(() => '');
        throw new Error(`HTTP ${res.status}: ${body.slice(0, 100)}`);
      }
      return res.json();
    } catch (err) {
      if (i === retries - 1) throw err;
      console.log(`  Retry ${i + 1}/${retries}...`);
      await sleep(2000);
    }
  }
}

async function fetchBible(label, bibleId) {
  console.log(`\n=== ${label} (${bibleId}) ===`);
  const result = {};
  let totalVerses = 0;

  for (const book of BOOKS) {
    console.log(`${book.name} (${book.abbr})`);
    result[book.abbr] = {};

    for (let ch = 1; ch <= book.chapters; ch++) {
      const chapterId = `${book.abbr}.${ch}`;
      const url = `${API_BASE}/bibles/${bibleId}/chapters/${chapterId}?content-type=text&include-verse-numbers=true&include-titles=false`;

      try {
        const data = await fetchWithRetry(url);

        if (data?.data?.content) {
          const verses = parseChapterText(data.data.content);
          result[book.abbr][String(ch)] = verses;
          totalVerses += Object.keys(verses).length;
        } else {
          result[book.abbr][String(ch)] = {};
        }
      } catch (err) {
        console.error(`  Ch ${ch} failed:`, err.message);
        result[book.abbr][String(ch)] = {};
      }

      if (ch % 5 === 0) {
        console.log(`  Ch ${ch}/${book.chapters}`);
      }
      await sleep(80);
    }

    console.log(`  Done (${Object.keys(result[book.abbr]).length} chapters)`);
  }

  return { data: result, totalVerses };
}

async function main() {
  const dataDir = path.join(__dirname, '..', 'data');
  fs.mkdirSync(dataDir, { recursive: true });

  for (const [label, bibleId] of Object.entries(BIBLE_IDS)) {
    const result = await fetchBible(label, bibleId);
    const outPath = path.join(dataDir, `${label.toLowerCase()}.json`);
    fs.writeFileSync(outPath, JSON.stringify(result.data, null, 2), 'utf-8');
    console.log(`\n✓ ${label}: ${result.totalVerses} verses → data/${label.toLowerCase()}.json`);
  }

  console.log('\nAll done!');
}

main().catch(err => {
  console.error('FATAL:', err);
  process.exit(1);
});
