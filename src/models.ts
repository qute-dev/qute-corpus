export interface Chapter {
  id: number;
  arabic: string;
  latin: string;
  transliteration: string;
  num_ayah: number;
  page: number;
  location: 'Makkiyah' | 'Madinah';
}

export interface Verse {
  id: number;
  surah_id: number;
  ayah: number;
  page: number;
  quarter_hizb: number;
  juz: number;
  manzil: number;
  text: string;
  words: string[];
  footnotes: string;
}
