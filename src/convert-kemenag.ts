const fse = require('fs-extra');

import {
  Chapter,
  LocationType,
  QuranAyah,
  QuranSurah,
  QuranTafsir,
  Verse,
} from './models';

console.log('Converting RAW Quran Kemenag');
const surahs = fse.readJsonSync('./raw/kemenag/quran-surah.json') as {
  data: QuranSurah[];
};

const ayahs = fse.readJsonSync('./raw/kemenag/quran-ayah.json') as {
  data: QuranAyah[];
};

const tafsirs = fse.readJsonSync('./raw/kemenag/quran-tafsir.json') as {
  data: QuranTafsir[];
};

console.log('Converting META surahs...');
const chaptersMeta: Chapter[] = surahs.data.map((s) => ({
  id: s.id,
  chapter: s.id,
  verses: s.num_ayah,
  page: s.page,
  arabic: s.arabic,
  name: s.transliteration,
  location: s.location.toLowerCase() as LocationType,
}));

console.log('Converting AR surahs...');
const chaptersAr: Chapter[] = surahs.data.map((s) => ({
  id: s.id,
  chapter: s.id,
  verses: s.num_ayah,
  page: s.page,
  arabic: s.arabic?.trim(),
  name: s.arabic?.trim(),
  location: s.location.toLowerCase() as LocationType,
}));

console.log('Converting ID surahs...');
const chaptersId: Chapter[] = surahs.data.map((s) => ({
  id: s.id,
  chapter: s.id,
  verses: s.num_ayah,
  page: s.page,
  arabic: s.arabic?.trim(),
  name: s.transliteration?.trim(),
  translation: s.translation?.trim(),
  location: s.location.toLowerCase() as LocationType,
}));

console.log('Converting META ayahs...');
const versesMeta: Verse[] = ayahs.data.map((a) => ({
  id: a.id,
  chapter: a.surah_id,
  verse: a.ayah,
  page: a.page,
  hizb: a.quarter_hizb,
  juz: a.juz,
  manzil: a.manzil,
}));

console.log('Converting AR ayahs...');
const versesAr: Verse[] = ayahs.data.map((a) => ({
  id: a.id,
  chapter: a.surah_id,
  verse: a.ayah,
  page: a.page,
  hizb: a.quarter_hizb,
  juz: a.juz,
  manzil: a.manzil,
  text: a.arabic?.trim(),
  words: a.arabic_words,
}));

console.log('Converting ID ayahs...');
const versesId: Verse[] = ayahs.data.map((a) => ({
  id: a.id,
  chapter: a.surah_id,
  verse: a.ayah,
  page: a.page,
  hizb: a.quarter_hizb,
  juz: a.juz,
  manzil: a.manzil,
  text: a.translation?.trim(),
  footnotes: a.footnotes?.trim(),
  // TODO: convert words
  words: [],
}));

console.log('Writing quran meta...');
fse.writeJSONSync(
  './quran/meta.json',
  { chapters: chaptersMeta, verses: versesMeta },
  { spaces: 2 }
);

console.log('Writing quran AR...');
fse.writeJSONSync(
  './quran/ar.json',
  { lang: 'ar', chapters: chaptersAr, verses: versesAr },
  { spaces: 2 }
);

console.log('Writing quran ID...');
fse.writeJSONSync(
  './quran/id.json',
  { lang: 'id', chapters: chaptersId, verses: versesId },
  { spaces: 2 }
);

// TODO: convert tafsir to qute
console.log('Converting tafsir...');
