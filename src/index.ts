const fse = require('fs-extra');

import path = require('path');
import { Meta, Quran } from './models/qute';

export * from './models/qute';

export function loadQuran() {
  const dir = path.join(__dirname, '../quran');

  const meta = fse.readJsonSync(path.join(dir, 'meta.json')) as Meta;
  const ar = fse.readJsonSync(path.join(dir, 'ar.json')) as Quran;
  const id = fse.readJsonSync(path.join(dir, 'meta.json')) as Quran;

  return { meta, ar, id };
}
