export type LocationType = 'madaniyah' | 'makkiyah';

export interface Quran {
  lang: 'ar' | 'id';
  chapters: Chapter[];
  verses: Verse[];
}

export interface Meta {
  chapters: Chapter[];
  verses: Verse[];
}

export interface Chapter {
  id: number;
  name: string;
  arabic: string;
  translation?: string;
  verses: number;
  page: number;
  location: LocationType;
}

export interface BaseVerse {
  id: number;
  chapter: number;
  verse: number;
  text?: string;
}

export interface Verse extends BaseVerse {
  page: number;
  hizb: number;
  juz: number;
  manzil: number;
  words?: string[];
  footnotes?: string;
}

export interface Tafsir {
  lang: 'ar' | 'id';
  title: string;
  author: string;
  verses: TafsirVerse[];
}
export interface TafsirVerse extends BaseVerse {
  arabic: string;
  translation: string;
}
