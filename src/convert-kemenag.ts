const fse = require('fs-extra');

import {
  BaseVerse,
  Chapter,
  LocationType,
  QuranAyah,
  QuranSurah,
  QuranTafsir,
  TafsirVerse,
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

console.log('Converting ID (wajiz)tafsirs...');
const tafsirWajizId: TafsirVerse[] = tafsirs.data.map((a) => ({
  id: a.id,
  chapter: a.surah_id,
  verse: a.ayah,
  text: a.tafsir.wajiz?.trim(),
  arabic: a.arabic?.trim(),
  translation: a.translation?.trim(),
}));

console.log('Converting ID (tahlili) tafsirs...');
const tafsirTahliliId: TafsirVerse[] = tafsirs.data.map((a) => ({
  id: a.id,
  chapter: a.surah_id,
  verse: a.ayah,
  text: a.tafsir.tahlili?.trim(),
  arabic: a.arabic?.trim(),
  translation: a.translation?.trim(),
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

console.log('Writing tafsir-wajiz ID...');
fse.writeJSONSync(
  './tafsir/kemenag-wajiz-id.json',
  {
    lang: 'id',
    title: 'Wajiz',
    author: 'Kemenag RI',
    chapters: chaptersId,
    verses: tafsirWajizId,
  },
  { spaces: 2 }
);

console.log('Writing tafsir-tahlili ID...');
fse.writeJSONSync(
  './tafsir/kemenag-tahlili-id.json',
  {
    lang: 'id',
    title: 'Tahlili',
    author: 'kemenag',
    chapters: chaptersId,
    verses: tafsirTahliliId,
  },
  { spaces: 2 }
);

// TODO: convert tafsir to qute
console.log('Converting tafsir...');
