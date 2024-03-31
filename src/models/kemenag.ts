export interface QuranSurah {
  id: number;
  arabic: string;
  latin: string;
  transliteration: string;
  translation: string;
  num_ayah: number;
  page: number;
  location: 'Makkiyah' | 'Madaniyah';
  updated_at?: string;
}

export interface QuranAyah {
  id: number;
  surah_id: number;
  ayah: number;
  page: number;
  quarter_hizb: number;
  juz: number;
  manzil: number;
  arabic: string;
  kitabah: string;
  latin: string;
  arabic_words: string[];
  translation: string;
  footnotes: string;
  updated_at?: string;
  surah: QuranSurah;
}

export interface QuranTafsir extends QuranAyah {
  tafsir: {
    wajiz: string;
    tahlili: string;
  };
}
