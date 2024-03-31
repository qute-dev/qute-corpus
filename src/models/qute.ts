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

export interface Verse {
  id: number;
  chapter: number;
  verse: number;
  page: number;
  hizb: number;
  juz: number;
  manzil: number;
  text?: string;
  words?: string[];
  footnotes?: string;
}

export interface Tafsir {
  id: number;
  chapter: number;
  verse: number;
  text: string;
}
