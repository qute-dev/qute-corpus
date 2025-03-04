const fse = require('fs-extra');

import path = require('path');
import { Meta, Quran, Tafsir } from './models/qute';

export * from './models/qute';

export function loadQuran() {
  const quranDir = path.join(__dirname, '../quran');
  const tafsirDir = path.join(__dirname, '../tafsir');

  const meta = fse.readJsonSync(path.join(quranDir, 'meta.json')) as Meta;
  const ar = fse.readJsonSync(path.join(quranDir, 'ar.json')) as Quran;
  const id = fse.readJsonSync(path.join(quranDir, 'id.json')) as Quran;

  const tafsirs = [
    fse.readJsonSync(path.join(tafsirDir, 'kemenag-wajiz-id.json')) as Tafsir,
    fse.readJsonSync(path.join(tafsirDir, 'kemenag-tahlili-id.json')) as Tafsir,
  ];

  return { meta, ar, id, tafsirs };
}
