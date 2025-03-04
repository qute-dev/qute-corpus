"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadQuran = void 0;
const fse = require('fs-extra');
const path = require("path");
__exportStar(require("./models/qute"), exports);
function loadQuran() {
    const quranDir = path.join(__dirname, '../quran');
    const tafsirDir = path.join(__dirname, '../tafsir');
    const meta = fse.readJsonSync(path.join(quranDir, 'meta.json'));
    const ar = fse.readJsonSync(path.join(quranDir, 'ar.json'));
    const id = fse.readJsonSync(path.join(quranDir, 'id.json'));
    const tafsirs = [
        fse.readJsonSync(path.join(tafsirDir, 'tafsir-wajiz-id.json')),
        fse.readJsonSync(path.join(tafsirDir, 'tafsir-tahlili-id.json')),
    ];
    return { meta, ar, id, tafsirs };
}
exports.loadQuran = loadQuran;
