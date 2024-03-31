export interface Chapter {
  id: number;
  name: string;
  arabic: string;
  latin: string;
  verses: number;
  page: number;
  location: 'makkiyah' | 'madaniyah';
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
