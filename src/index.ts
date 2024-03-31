const fse = require('fs-extra');

import { Meta, Quran } from './models/qute';

export * from './models/qute';

export function loadQuran() {
  const meta = fse.readJsonSync('./quran/meta.json') as Meta;
  const ar = fse.readJsonSync('./quran/ar.json') as Quran;
  const id = fse.readJsonSync('./quran/meta.json') as Quran;

  return { meta, ar, id };
}
