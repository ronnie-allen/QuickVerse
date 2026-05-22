const BOOKS = [
  { abbr: "GEN", name: "Genesis", taName: "ஆதியாகமம்", chapters: 50 },
  { abbr: "EXO", name: "Exodus", taName: "யாத்திராகமம்", chapters: 40 },
  { abbr: "LEV", name: "Leviticus", taName: "லேவியராகமம்", chapters: 27 },
  { abbr: "NUM", name: "Numbers", taName: "எண்ணாகமம்", chapters: 36 },
  { abbr: "DEU", name: "Deuteronomy", taName: "உபாகமம்", chapters: 34 },
  { abbr: "JOS", name: "Joshua", taName: "யோசுவா", chapters: 24 },
  { abbr: "JDG", name: "Judges", taName: "நியாயாதிபதிகள்", chapters: 21 },
  { abbr: "RUT", name: "Ruth", taName: "ரூத்", chapters: 4 },
  { abbr: "1SA", name: "1 Samuel", taName: "1 சாமுவேல்", chapters: 31 },
  { abbr: "2SA", name: "2 Samuel", taName: "2 சாமுவேல்", chapters: 24 },
  { abbr: "1KI", name: "1 Kings", taName: "1 இராஜாக்கள்", chapters: 22 },
  { abbr: "2KI", name: "2 Kings", taName: "2 இராஜாக்கள்", chapters: 25 },
  { abbr: "1CH", name: "1 Chronicles", taName: "1 நாளாகமம்", chapters: 29 },
  { abbr: "2CH", name: "2 Chronicles", taName: "2 நாளாகமம்", chapters: 36 },
  { abbr: "EZR", name: "Ezra", taName: "எஸ்றா", chapters: 10 },
  { abbr: "NEH", name: "Nehemiah", taName: "நெகேமியா", chapters: 13 },
  { abbr: "EST", name: "Esther", taName: "எஸ்தர்", chapters: 10 },
  { abbr: "JOB", name: "Job", taName: "யோபு", chapters: 42 },
  { abbr: "PSA", name: "Psalms", taName: "சங்கீதம்", chapters: 150 },
  { abbr: "PRO", name: "Proverbs", taName: "நீதிமொழிகள்", chapters: 31 },
  { abbr: "ECC", name: "Ecclesiastes", taName: "பிரசங்கி", chapters: 12 },
  { abbr: "SNG", name: "Song of Solomon", taName: "உன்னதப்பாட்டு", chapters: 8 },
  { abbr: "ISA", name: "Isaiah", taName: "ஏசாயா", chapters: 66 },
  { abbr: "JER", name: "Jeremiah", taName: "எரேமியா", chapters: 52 },
  { abbr: "LAM", name: "Lamentations", taName: "புலம்பல்", chapters: 5 },
  { abbr: "EZK", name: "Ezekiel", taName: "எசேக்கியேல்", chapters: 48 },
  { abbr: "DAN", name: "Daniel", taName: "தானியேல்", chapters: 12 },
  { abbr: "HOS", name: "Hosea", taName: "ஓசியா", chapters: 14 },
  { abbr: "JOL", name: "Joel", taName: "யோவேல்", chapters: 3 },
  { abbr: "AMO", name: "Amos", taName: "ஆமோஸ்", chapters: 9 },
  { abbr: "OBA", name: "Obadiah", taName: "ஒபதியா", chapters: 1 },
  { abbr: "JON", name: "Jonah", taName: "யோனா", chapters: 4 },
  { abbr: "MIC", name: "Micah", taName: "மீகா", chapters: 7 },
  { abbr: "NAM", name: "Nahum", taName: "நாகூம்", chapters: 3 },
  { abbr: "HAB", name: "Habakkuk", taName: "ஆபகூக்", chapters: 3 },
  { abbr: "ZEP", name: "Zephaniah", taName: "செப்பனியா", chapters: 3 },
  { abbr: "HAG", name: "Haggai", taName: "ஆகாய்", chapters: 2 },
  { abbr: "ZEC", name: "Zechariah", taName: "சகரியா", chapters: 14 },
  { abbr: "MAL", name: "Malachi", taName: "மல்கியா", chapters: 4 },
  { abbr: "MAT", name: "Matthew", taName: "மத்தேயு", chapters: 28 },
  { abbr: "MRK", name: "Mark", taName: "மாற்கு", chapters: 16 },
  { abbr: "LUK", name: "Luke", taName: "லூக்கா", chapters: 24 },
  { abbr: "JHN", name: "John", taName: "யோவான்", chapters: 21 },
  { abbr: "ACT", name: "Acts", taName: "அப்போஸ்தலர்", chapters: 28 },
  { abbr: "ROM", name: "Romans", taName: "ரோமர்", chapters: 16 },
  { abbr: "1CO", name: "1 Corinthians", taName: "1 கொரிந்தியர்", chapters: 16 },
  { abbr: "2CO", name: "2 Corinthians", taName: "2 கொரிந்தியர்", chapters: 13 },
  { abbr: "GAL", name: "Galatians", taName: "கலாத்தியர்", chapters: 6 },
  { abbr: "EPH", name: "Ephesians", taName: "எபேசியர்", chapters: 6 },
  { abbr: "PHP", name: "Philippians", taName: "பிலிப்பியர்", chapters: 4 },
  { abbr: "COL", name: "Colossians", taName: "கொலோசெயர்", chapters: 4 },
  { abbr: "1TH", name: "1 Thessalonians", taName: "1 தெசலோனிக்கேயர்", chapters: 5 },
  { abbr: "2TH", name: "2 Thessalonians", taName: "2 தெசலோனிக்கேயர்", chapters: 3 },
  { abbr: "1TI", name: "1 Timothy", taName: "1 தீமோத்தேயு", chapters: 6 },
  { abbr: "2TI", name: "2 Timothy", taName: "2 தீமோத்தேயு", chapters: 4 },
  { abbr: "TIT", name: "Titus", taName: "தீத்து", chapters: 3 },
  { abbr: "PHM", name: "Philemon", taName: "பிலேமோன்", chapters: 1 },
  { abbr: "HEB", name: "Hebrews", taName: "எபிரேயர்", chapters: 13 },
  { abbr: "JAM", name: "James", taName: "யாக்கோபு", chapters: 5 },
  { abbr: "1PE", name: "1 Peter", taName: "1 பேதுரு", chapters: 5 },
  { abbr: "2PE", name: "2 Peter", taName: "2 பேதுரு", chapters: 3 },
  { abbr: "1JN", name: "1 John", taName: "1 யோவான்", chapters: 5 },
  { abbr: "2JN", name: "2 John", taName: "2 யோவான்", chapters: 1 },
  { abbr: "3JN", name: "3 John", taName: "3 யோவான்", chapters: 1 },
  { abbr: "JUD", name: "Jude", taName: "யூதா", chapters: 1 },
  { abbr: "REV", name: "Revelation", taName: "வெளிப்படுத்தின விசேஷம்", chapters: 22 },
];

const BOOK_ABBR_MAP = {};
for (const b of BOOKS) {
  BOOK_ABBR_MAP[b.name.toLowerCase()] = b.abbr;
  BOOK_ABBR_MAP[b.abbr.toLowerCase()] = b.abbr;
}

const TRANSLATIONS = {
  tovbsi: { file: 'data/tovbsi.json', label: 'TOVBSI', badge: 'தமிழ் (TOVBSI)' },
  niv: { file: 'data/niv.json', label: 'NIV', badge: 'English (NIV)' },
  amp: { file: 'data/amp.json', label: 'AMP', badge: 'English (AMP)' },
};

let currentData = null;
let currentTranslation = 'tovbsi';
let currentBook = null;
let currentChapter = null;
let currentVerse = null;
let currentVerseText = '';

const el = (id) => document.getElementById(id);

function updateTranslationBadge(key) {
  const t = TRANSLATIONS[key];
  if (t) {
    el('translation-badge').querySelector('.badge-text').textContent = t.badge;
  }
}

async function loadTranslation(key) {
  const t = TRANSLATIONS[key];
  if (!t) return;
  try {
    const url = chrome.runtime.getURL(t.file);
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    currentData = await res.json();
    currentTranslation = key;
    updateTranslationBadge(key);
    populateBooks();
    clearBrowse();
    clearSearch();
    enableCopyBtn(false);
  } catch (err) {
    console.error('Failed to load', t.file, err);
    currentData = null;
    el('browse-display').innerHTML = '<div class="placeholder-text">Failed to load ' + t.label + '</div>';
  }
}

function getTranslationLabel() {
  return TRANSLATIONS[currentTranslation].label;
}

function populateBooks() {
  const sel = el('book-select');
  sel.innerHTML = '<option value="">Book</option>';
  const isTamil = currentTranslation === 'tovbsi';
  for (const book of BOOKS) {
    const opt = document.createElement('option');
    opt.value = book.abbr;
    opt.textContent = isTamil
      ? `${book.taName} (${book.name})`
      : book.name;
    sel.appendChild(opt);
  }
  sel.disabled = false;
  el('chapter-select').innerHTML = '<option value="">Ch</option>';
  el('chapter-select').disabled = true;
  el('verse-select').innerHTML = '<option value="">V</option>';
  el('verse-select').disabled = true;
}

function populateChapters(bookAbbr) {
  const sel = el('chapter-select');
  sel.innerHTML = '<option value="">Ch</option>';
  const book = BOOKS.find(b => b.abbr === bookAbbr);
  if (!book) return;
  for (let i = 1; i <= book.chapters; i++) {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = i;
    sel.appendChild(opt);
  }
  sel.disabled = false;
}

function populateVerses(bookAbbr, chapterNum) {
  const sel = el('verse-select');
  sel.innerHTML = '<option value="">V</option>';
  if (!currentData || !currentData[bookAbbr] || !currentData[bookAbbr][String(chapterNum)]) return;
  const verses = currentData[bookAbbr][String(chapterNum)];
  const keys = Object.keys(verses).sort((a, b) => parseInt(a) - parseInt(b));
  for (const k of keys) {
    const opt = document.createElement('option');
    opt.value = k;
    opt.textContent = k;
    sel.appendChild(opt);
  }
  sel.disabled = false;
}

function renderVerseDisplay(container, bookAbbr, chapterNum, verseNum, text, bookName) {
  const ref = `${bookName} ${chapterNum}:${verseNum}`;
  container.innerHTML = `
    <div class="verse-text-row">
      <span class="verse-number-badge">${verseNum}</span>
      <span class="verse-text">${text}</span>
    </div>
    <span class="verse-ref">${ref} (${getTranslationLabel()})</span>
  `;
  container.classList.add('has-verse');
}

function showVerse(bookAbbr, chapterNum, verseNum) {
  if (!currentData || !currentData[bookAbbr]) return false;
  const ch = currentData[bookAbbr][String(chapterNum)];
  if (!ch) return false;
  const text = ch[String(verseNum)];
  if (!text) return false;

  const book = BOOKS.find(b => b.abbr === bookAbbr);
  currentVerseText = text;
  currentBook = bookAbbr;
  currentChapter = chapterNum;
  currentVerse = verseNum;

  renderVerseDisplay(el('browse-display'), bookAbbr, chapterNum, verseNum, text, book ? book.name : bookAbbr);
  enableCopyBtn(true);
  return true;
}

function clearBrowse() {
  currentVerseText = '';
  el('browse-display').innerHTML = '<div class="placeholder-text">Select a verse to view</div>';
  el('browse-display').classList.remove('has-verse');
}

function clearSearch() {
  el('search-display').innerHTML = '<div class="placeholder-text">Enter a reference to search</div>';
  el('search-display').classList.remove('has-verse');
}

function enableCopyBtn(enabled) {
  el('copy-btn').disabled = !enabled;
}

async function copyToClipboard() {
  if (!currentVerseText) return;
  const book = BOOKS.find(b => b.abbr === currentBook);
  const ref = `${book ? book.name : currentBook} ${currentChapter}:${currentVerse}`;
  const text = `"${currentVerseText}" — ${ref} (${getTranslationLabel()})`;

  try {
    await navigator.clipboard.writeText(text);
    showToast();
  } catch {
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast();
  }
}

const BOOK_NAME_ALIASES = {
  'psalms': 'PSA', 'psalm': 'PSA', 'ps': 'PSA',
  'genesis': 'GEN', 'gen': 'GEN', 'ge': 'GEN',
  'exodus': 'EXO', 'exod': 'EXO', 'ex': 'EXO',
  'leviticus': 'LEV', 'lev': 'LEV', 'le': 'LEV',
  'numbers': 'NUM', 'num': 'NUM', 'nu': 'NUM',
  'deuteronomy': 'DEU', 'deut': 'DEU', 'de': 'DEU',
  'joshua': 'JOS', 'josh': 'JOS', 'jos': 'JOS',
  'judges': 'JDG', 'judg': 'JDG', 'jdg': 'JDG',
  'ruth': 'RUT', 'rut': 'RUT',
  '1 samuel': '1SA', '1samuel': '1SA', '1 sam': '1SA', '1sam': '1SA',
  '2 samuel': '2SA', '2samuel': '2SA', '2 sam': '2SA', '2sam': '2SA',
  '1 kings': '1KI', '1kings': '1KI', '1 kin': '1KI', '1kin': '1KI',
  '2 kings': '2KI', '2kings': '2KI', '2 kin': '2KI', '2kin': '2KI',
  '1 chronicles': '1CH', '1chronicles': '1CH', '1 chr': '1CH', '1chr': '1CH',
  '2 chronicles': '2CH', '2chronicles': '2CH', '2 chr': '2CH', '2chr': '2CH',
  'ezra': 'EZR', 'ezr': 'EZR',
  'nehemiah': 'NEH', 'neh': 'NEH',
  'esther': 'EST', 'est': 'EST',
  'job': 'JOB',
  'proverbs': 'PRO', 'prov': 'PRO', 'pro': 'PRO',
  'ecclesiastes': 'ECC', 'eccles': 'ECC', 'ecc': 'ECC',
  'song of solomon': 'SNG', 'song': 'SNG', 'sos': 'SNG',
  'song of songs': 'SNG',
  'isaiah': 'ISA', 'isa': 'ISA',
  'jeremiah': 'JER', 'jer': 'JER', 'je': 'JER',
  'lamentations': 'LAM', 'lam': 'LAM', 'la': 'LAM',
  'ezekiel': 'EZK', 'ezek': 'EZK', 'ezk': 'EZK',
  'daniel': 'DAN', 'dan': 'DAN', 'da': 'DAN',
  'hosea': 'HOS', 'hos': 'HOS',
  'joel': 'JOL', 'jol': 'JOL',
  'amos': 'AMO', 'amo': 'AMO',
  'obadiah': 'OBA', 'obad': 'OBA', 'oba': 'OBA',
  'jonah': 'JON', 'jon': 'JON',
  'micah': 'MIC', 'mic': 'MIC',
  'nahum': 'NAM', 'nah': 'NAM',
  'habakkuk': 'HAB', 'hab': 'HAB',
  'zephaniah': 'ZEP', 'zeph': 'ZEP', 'zep': 'ZEP',
  'haggai': 'HAG', 'hag': 'HAG',
  'zechariah': 'ZEC', 'zech': 'ZEC', 'zec': 'ZEC',
  'malachi': 'MAL', 'mal': 'MAL',
  'matthew': 'MAT', 'matt': 'MAT', 'mat': 'MAT',
  'mark': 'MRK', 'mrk': 'MRK',
  'luke': 'LUK', 'luk': 'LUK',
  'john': 'JHN', 'jhn': 'JHN',
  'acts': 'ACT', 'act': 'ACT',
  'romans': 'ROM', 'rom': 'ROM', 'ro': 'ROM',
  '1 corinthians': '1CO', '1corinthians': '1CO', '1 cor': '1CO', '1cor': '1CO',
  '2 corinthians': '2CO', '2corinthians': '2CO', '2 cor': '2CO', '2cor': '2CO',
  'galatians': 'GAL', 'gal': 'GAL', 'ga': 'GAL',
  'ephesians': 'EPH', 'eph': 'EPH',
  'philippians': 'PHP', 'phil': 'PHP', 'php': 'PHP',
  'colossians': 'COL', 'col': 'COL',
  '1 thessalonians': '1TH', '1thessalonians': '1TH', '1 thes': '1TH', '1thes': '1TH',
  '2 thessalonians': '2TH', '2thessalonians': '2TH', '2 thes': '2TH', '2thes': '2TH',
  '1 timothy': '1TI', '1timothy': '1TI', '1 tim': '1TI', '1tim': '1TI',
  '2 timothy': '2TI', '2timothy': '2TI', '2 tim': '2TI', '2tim': '2TI',
  'titus': 'TIT', 'tit': 'TIT',
  'philemon': 'PHM', 'philem': 'PHM', 'phm': 'PHM',
  'hebrews': 'HEB', 'heb': 'HEB',
  'james': 'JAM', 'jam': 'JAM',
  '1 peter': '1PE', '1peter': '1PE', '1 pet': '1PE', '1pet': '1PE',
  '2 peter': '2PE', '2peter': '2PE', '2 pet': '2PE', '2pet': '2PE',
  '1 john': '1JN', '1john': '1JN', '1 jn': '1JN', '1jn': '1JN',
  '2 john': '2JN', '2john': '2JN', '2 jn': '2JN', '2jn': '2JN',
  '3 john': '3JN', '3john': '3JN', '3 jn': '3JN', '3jn': '3JN',
  'jude': 'JUD', 'jud': 'JUD',
  'revelation': 'REV', 'rev': 'REV', 're': 'REV',
};

function parseReference(input) {
  input = input.trim();

  const match = input.match(/^(.+?)\s+(\d+):(\d+)$/);
  if (!match) return null;

  let bookName = match[1].trim().toLowerCase();
  const chapter = parseInt(match[2]);
  const verse = parseInt(match[3]);

  if (BOOK_ABBR_MAP[bookName]) {
    return { abbr: BOOK_ABBR_MAP[bookName], chapter, verse, bookName: match[1].trim() };
  }

  const numberedMatch = bookName.match(/^(\d+)\s+(.+)$/);
  if (numberedMatch) {
    bookName = numberedMatch[1] + ' ' + numberedMatch[2];
    bookName = bookName.replace(/\s+/g, ' ');
    if (BOOK_ABBR_MAP[bookName]) {
      return { abbr: BOOK_ABBR_MAP[bookName], chapter, verse, bookName: match[1].trim() };
    }
    for (const [alias, abbr] of Object.entries(BOOK_NAME_ALIASES)) {
      if (alias === bookName || alias.replace(/\s/g, '') === bookName.replace(/\s/g, '')) {
        return { abbr, chapter, verse, bookName: match[1].trim() };
      }
    }
  }

  for (const [alias, abbr] of Object.entries(BOOK_NAME_ALIASES)) {
    if (alias === bookName || alias.replace(/\s/g, '') === bookName.replace(/\s/g, '')) {
      return { abbr, chapter, verse, bookName: match[1].trim() };
    }
  }

  return null;
}

function showSearchResult(ref) {
  const container = el('search-display');
  if (!ref) {
    container.innerHTML = '<div class="placeholder-text">Enter a reference to search</div>';
    container.classList.remove('has-verse');
    return;
  }

  if (!currentData || !currentData[ref.abbr]) {
    container.innerHTML = `<div class="placeholder-text">Book not found in ${getTranslationLabel()}</div>`;
    container.classList.remove('has-verse');
    return;
  }

  const ch = currentData[ref.abbr][String(ref.chapter)];
  if (!ch) {
    container.innerHTML = `<div class="placeholder-text">Chapter ${ref.chapter} not found</div>`;
    container.classList.remove('has-verse');
    return;
  }

  const text = ch[String(ref.verse)];
  if (!text) {
    container.innerHTML = `<div class="placeholder-text">Verse ${ref.verse} not found</div>`;
    container.classList.remove('has-verse');
    return;
  }

  currentVerseText = text;
  currentBook = ref.abbr;
  currentChapter = ref.chapter;
  currentVerse = ref.verse;

  renderVerseDisplay(container, ref.abbr, ref.chapter, ref.verse, text, ref.bookName);
  enableCopyBtn(true);

  el('book-select').value = ref.abbr;
  populateChapters(ref.abbr);
  el('chapter-select').value = ref.chapter;
  populateVerses(ref.abbr, ref.chapter);
  el('verse-select').value = ref.verse;
}

function doSearch(input) {
  const ref = parseReference(input);
  if (ref) {
    showSearchResult(ref);
  } else {
    el('search-display').innerHTML = '<div class="placeholder-text">Invalid reference. Use format: Book Chapter:Verse</div>';
    el('search-display').classList.remove('has-verse');
    enableCopyBtn(false);
  }
}

function showToast() {
  const toast = el('toast');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2000);
}

el('translation-badge').addEventListener('click', (e) => {
  e.stopPropagation();
  el('dropdown-menu').classList.toggle('open');
  el('translation-badge').classList.toggle('open');
});

document.querySelectorAll('.dropdown-item').forEach(item => {
  item.addEventListener('click', () => {
    const key = item.dataset.value;
    document.querySelectorAll('.dropdown-item').forEach(d => d.classList.remove('selected'));
    item.classList.add('selected');
    el('dropdown-menu').classList.remove('open');
    el('translation-badge').classList.remove('open');
    if (key !== currentTranslation) {
      loadTranslation(key);
    }
  });
});

document.addEventListener('click', (e) => {
  if (!el('badge-wrapper').contains(e.target)) {
    el('dropdown-menu').classList.remove('open');
    el('translation-badge').classList.remove('open');
  }
});

el('book-select').addEventListener('change', () => {
  const val = el('book-select').value;
  if (!val) {
    el('chapter-select').innerHTML = '<option value="">Ch</option>';
    el('chapter-select').disabled = true;
    el('verse-select').innerHTML = '<option value="">V</option>';
    el('verse-select').disabled = true;
    clearBrowse();
    return;
  }
  populateChapters(val);
  el('verse-select').innerHTML = '<option value="">V</option>';
  el('verse-select').disabled = true;
  clearBrowse();
});

el('chapter-select').addEventListener('change', () => {
  const book = el('book-select').value;
  const ch = el('chapter-select').value;
  if (!book || !ch) {
    el('verse-select').innerHTML = '<option value="">V</option>';
    el('verse-select').disabled = true;
    clearBrowse();
    return;
  }
  populateVerses(book, ch);
  clearBrowse();
});

el('verse-select').addEventListener('change', () => {
  const book = el('book-select').value;
  const ch = el('chapter-select').value;
  const v = el('verse-select').value;
  if (!book || !ch || !v) {
    clearBrowse();
    return;
  }
  showVerse(book, ch, v);
});

el('search-input').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    doSearch(el('search-input').value);
  }
});

el('copy-btn').addEventListener('click', copyToClipboard);

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    el(btn.dataset.tab + '-tab').classList.add('active');
  });
});

loadTranslation('tovbsi');
