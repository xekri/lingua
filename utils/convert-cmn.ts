const yonh = require('yonh');
import pinyin from 'pinyin';
import { replaceAll } from './util';

const splitTone = (syllable: string): [string, number] => {
  syllable = syllable.normalize('NFD');

  let tone = 4;
  for (const [i, c] of ['\u0304', '\u0301', '\u030C', '\u0300'].entries())
    if (syllable.includes(c)) {
      syllable = syllable.replace(c, '')
      tone = i;
      break;
    }

  return [syllable.normalize('NFC'), tone];
};

const convertAtone = (atone: string): string =>
  replaceAll(atone, [
    [/(?<=^[jqx])u/, 'ü'],
    [/^j/, 'g'],
    [/^q/, 'k'],
    [/^x/, 'h'],

    [/^zh/, 'ḍ'],
    [/^ch/, 'ṭ'],
    [/^sh/, 'ṣ'],
    [/^c/, 'q'],
    [/(?<=^[ḍṭṣrzqs])i/, 'ï'],
    [/^g/, 'c'],
    [/ng$/, 'g'],

    [/(?<=^[bpmf])o$/, 'uo'],

    [/^yi/, 'i'],
    [/^wu/, 'u'],
    [/^yu/, 'ü'],
    [/^y/, 'i'],
    [/^w/, 'u'],

    [/ü/, 'y'],

    [/ao/, 'au'],
    [/ioŋ/, 'yg'],
    [/oŋ/, 'ug'],
    [/o/, 'e'],
    [/(?<=[iyu])e(?=[iugn])/, ''],

    [/ï/, 'ii'],
  ])

const convertChar = (c: string, roman: string): string => {
  let [atone, tone] = splitTone(roman);
  atone = convertAtone(atone);

  let emcs: any = yonh.lookup(c);
  if (!Array.isArray(emcs))
    emcs = [emcs];

  if (emcs.some(emc => /m$/.test(emc.roman)) && emcs.every(emc => !/n$/.test(emc.roman)))
    atone = atone.replace(/n$/, "m");

  if (emcs.some(emc => /^ng/.test(emc.roman)) && emcs.every(emc => !/^[riuyeoaj]/.test(emc.roman)))
    atone = atone.replace(/^(?=[iuyea])/, "g");

  if (emcs.some(emc => /^[zqs]/.test(emc.roman)) && emcs.every(emc => !/^[gkh]/.test(emc.roman)))
    atone = replaceAll(atone, [
      [/^c(?=[iy])/, "z"],
      [/^k(?=[iy])/, "q"],
      [/^h(?=[iy])/, "s"],
    ])

  /*
  if (emcs.some(emc => /^q/.test(emc.roman)) && emcs.every(emc => !/^[riuyeoaj]/.test(emc.roman)))
    atone = atone.replace(/^(?=[iuyea])/, "q");

  if (emcs.some(emc => /^q/.test(emc.roman)) && emcs.every(emc => !/^gh/.test(emc.roman)))
    atone = atone.replace(/^(?=[iuyea])/, "h");

  if (emcs.some(emc => /^[riuyeoa]/.test(emc.roman)) && emcs.every(emc => !/^j/.test(emc.roman)))
    atone = atone.replace(/^(?=[iuyea])/, "h");
  */

  if (emcs.some(emc => /^j/.test(emc.roman)) && emcs.every(emc => !/^n[jr]/.test(emc.roman)))
    atone = atone.replace(/^r/, "j");

  if (emcs.some(emc => /^m/.test(emc.roman)) && emcs.every(emc => !/^[riuyeoaj]/.test(emc.roman)))
    atone = atone
      .replace(/^(?=u)/, "w");

  for (const c of ["k", "t", "p"])
    if (emcs.length && emcs.every(emc => new RegExp(`${c}$`).test(emc.roman))) {
      atone = atone.replace(/(?<![mng])$/, c);
      break;
    }

  return atone
    .replace(/(?<=[ea])|(?<=[iuy])(?![iuyea])/, ["\u0304", "\u0301", "\u0309", "\u0300", ""][tone])
    .normalize("NFC")
    //.replace(/i/, "ı")
    //.replace(/^./, x => x.toUpperCase())
    ;
};

const convertPunc = (s: string): string =>
  replaceAll(s, [
    [/　/, ' '],
    [/。/, '. '],
    [/，/, ', '],
    [/？/, '? '],
    [/！/, '! '],
    [/（/, ' ('],
    [/）/, ') '],
    [/「/, ` '`],
    [/」/, `' `],
  ])

const convertHans = (hans: string) =>
  pinyin(hans, { heteronym: true, segment: 'nodejieba' }).map((romans, i) =>
    romans[0] == hans.charAt(i)
      ? hans.charAt(i)
      : Object.fromEntries([
        ['han', hans.charAt(i)],
        ['romans', romans.map(roman =>
          convertChar(hans.charAt(i), roman))
        ]
      ])
  )

const convertChunk = (chunk: string) =>
  /^\p{sc=Han}+$/u.test(chunk) ?
    convertHans(chunk)
    : [{ text: convertPunc(chunk) }]

type CmnFragment = ({ han: string, romans: string[] } | { text: string })

export default (s: string): CmnFragment[] =>
  s
    .split(/(?<=\p{sc=Han})(?!\p{sc=Han})|(?<!\p{sc=Han})(?=\p{sc=Han})/ug)
    .map(convertChunk)
    .flat()
