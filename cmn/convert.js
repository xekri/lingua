const yonh = require("yonh");
const pinyin = require("pinyin");

const splitTone = syllable => {
  syllable = syllable.normalize("NFD");

  let tone = 4;
  for (const [i, c] of ["\u0304", "\u0301", "\u030C", "\u0300"].entries())
    if (syllable.includes(c)) {
      syllable = syllable.replace(c, "")
      tone = i;
      break;
    }

  return [syllable.normalize("NFC"), tone];
};

const convertAtone = atone =>
  atone
    .replace(/(?<=^[jqx])u/, "ü")
    .replace(/^j/, "g")
    .replace(/^q/, "k")
    .replace(/^h/, "x")

    .replace(/^zh/, "ḍ")
    .replace(/^ch/, "ṭ")
    .replace(/^sh/, "ṣ")
    .replace(/(?<=^[ḍṭṣrzcS])i/, "ï")

    .replace(/(?<=^[bpmf])o$/, "uo")

    .replace(/ng/, "ŋ")

    .replace(/^yi/, "i")
    .replace(/^wu/, "u")
    .replace(/^yu/, "ü")
    .replace(/^y/, "i")
    .replace(/^w/, "u")


    .replace(/ï/, "ii")
    .replace(/ü/, "y")

    .replace(/ao/, "au")
    .replace(/ioŋ/, "yŋ")
    .replace(/oŋ/, "uŋ")
    .replace(/o/, "e")
    .replace(/(?<=[iyu])e(?=[iuŋn])/, "")
  ;

const convertChar = (c, pinyin) => {
  let [atone, tone] = splitTone(pinyin);
  atone = convertAtone(atone);

  let emcs = yonh.lookup(c);
  if (!Array.isArray(emcs))
    emcs = [emcs];

  if (emcs.some(emc => /m$/.test(emc.roman)) && emcs.every(emc => !/n$/.test(emc.roman)))
    atone = atone.replace(/n$/, "m");

  if (emcs.some(emc => /^ng/.test(emc.roman)) && emcs.every(emc => !/^[riuyeoaj]/.test(emc.roman)))
    atone = atone.replace(/^(?=[iuyea])/, "ŋ");

  if (emcs.some(emc => /^[zcs]/.test(emc.roman)) && emcs.every(emc => !/^[gkh]/.test(emc.roman)))
    atone = atone
      .replace(/^g(?=[iy])/, "z")
      .replace(/^k(?=[iy])/, "c")
      .replace(/^x(?=[iy])/, "s")
      ;

  if (emcs.some(emc => /^q/.test(emc.roman)) && emcs.every(emc => !/^[riuyeoaj]/.test(emc.roman)))
    atone = atone.replace(/^(?=[iuyea])/, "q");

  if (emcs.some(emc => /^q/.test(emc.roman)) && emcs.every(emc => !/^gh/.test(emc.roman)))
    atone = atone.replace(/^(?=[iuyea])/, "h");

  if (emcs.some(emc => /^[riuyeoa]/.test(emc.roman)) && emcs.every(emc => !/^j/.test(emc.roman)))
    atone = atone.replace(/^(?=[iuyea])/, "h");

  if (emcs.some(emc => /^j/.test(emc.roman)) && emcs.every(emc => !/^n[jr]/.test(emc.roman)))
    atone = atone.replace(/^r/, "j");

  if (emcs.some(emc => /^m/.test(emc.roman)) && emcs.every(emc => !/^[riuyeoaj]/.test(emc.roman)))
    atone = atone
      .replace(/^u$/, "muu")
      .replace(/^(?=u)/, "m");

  for (const c of ["k", "t", "p"])
    if (emcs.length && emcs.every(emc => new RegExp(`${c}$`).test(emc.roman))) {
      atone = atone.replace(/(?<![mnŋ])$/, c);
      break;
    }

  return atone
    .replace(/(?<=[ea])|(?<=[iuy])(?![iuyea])/, ["\u0304", "\u0301", "\u0309", "\u0300", ""][tone])
    .normalize("NFC")
    //.replace(/i/, "ı")
    //.replace(/^./, x => x.toUpperCase())
    ;
};

const convertPunc = s => s
  .replace(/　/, " ")
  .replace(/。/, ". ")
  .replace(/，/, ", ")
  .replace(/？/, "? ")
  .replace(/！/, "! ")
  .replace(/（/, " (")
  .replace(/）/, ") ")
  .replace(/「/, ` "`)
  .replace(/」/, `" `)

const convertHans = hans =>
  pinyin(hans).map((pinyins, i) =>
    pinyins[0] == hans.charAt(i)
      ? hans.charAt(i)
      : pinyins.map(pinyin => convertChar(hans.charAt(i), pinyin)))
  ;

const convert = s =>
  [].concat.apply([],
    s
      .split(/(?<=\p{sc=Han})(?!\p{sc=Han})|(?<!\p{sc=Han})(?=\p{sc=Han})/ug)
      .map((chunk, i) => (/^\p{sc=Han}+$/u.test(chunk)
        ? convertHans
        : convertPunc)(chunk)
      )
  );

if (require.main === module) {
  console.log(convert("零一二三四五六七八九十"));
  const arg = process.argv[2] || "我愛你！";

  convert(arg)
    .map(x => Array.isArray(x) && x.length == 1 ? x[0] : x)
    .forEach(x => console.log(x));
}

exports.convert = convert;
