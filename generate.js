const yonh = require("yonh");
const pinyin = require("pinyin");

const divide = syllable => {
  const atone = syllable
    .normalize("NFD")
    .replace(/[\u0304\u0301\u030C\u0300]/, "")
    .normalize("NFC");

  return [
    atone,
    /[āēīōūǖ]/.test(syllable) ? 0 :
      /[áéíóúǘ]/.test(syllable) ? 1 :
        /[ǎěǐǒǔǚ]/.test(syllable) ? 2 :
          /[àèìòùǜ]/.test(syllable) ? 3 :
            4
  ];
};

const convertAtone = atone =>
  atone
    .replace(/(?<=^[jqx])u|ü|yu/, "v")
    .replace(/(?<=^[zcsr]|[zcs]h)i/, "")
    .replace(/(?<=^[bpmf])o$/, "uo")

    .replace(/^j/, "g")
    .replace(/^q/, "k")
    .replace(/^x/, "h")
    .replace(/^zh/, "ž")
    .replace(/^ch/, "č")
    .replace(/^sh/, "š")
    .replace(/^r/, "j")

    .replace(/ng/, "q")

    .replace(/^yi/, "i")
    .replace(/^wu/, "u")
    .replace(/^y/, "i")
    .replace(/^w/, "u")
    .replace(/v/, "y")

    .replace(/ao/, "au")
    .replace(/ioŋ/, "yq")
    .replace(/oŋ/, "uq")
    .replace(/o/, "e")

    .replace(/e(?=[nq])/, "")
    .replace(/(?<=[iyu])e(?=[iu])/, "")
  ;

const convertChar = (c, pinyin) => {
  let [atone, tone] = divide(pinyin);
  atone = convertAtone(atone);

  let emcs = yonh.lookup(c);
  if (!Array.isArray(emcs))
    emcs = [emcs];

  if (emcs.some(emc => /m$/.test(emc.roman)) && emcs.every(emc => !/n$/.test(emc.roman)))
    atone = atone.replace(/n$/, "m");

  if (emcs.some(emc => /^ng/.test(emc.roman)) && emcs.every(emc => !/^[riuyeoa]/.test(emc.roman)))
    atone = atone.replace(/^(?=[iuyea])/, "q");

  if (emcs.some(emc => /^[czs]/.test(emc.roman)) && emcs.every(emc => !/^[gkh]/.test(emc.roman)))
    atone = atone
      .replace(/^g/, "z")
      .replace(/^k/, "c")
      .replace(/^h/, "s")
      ;

  if (emcs.some(emc => /^m/.test(emc.roman)) && emcs.every(emc => !/^[riuyeoa]/.test(emc.roman)))
    atone = atone.replace(/^(?=u)/, "w");

  if (emcs.some(emc => /^nj/.test(emc.roman)))
    atone = atone.replace(/^j/, "ň");

  for (const c of ["k", "t", "p"])
    if (emcs.length && emcs.every(emc => new RegExp(`${c}$`).test(emc.roman))) {
      atone = atone.replace(/(?<![mnq])$/, c);
      break;
    }

  //const tones = ["-", "+", "1", "2", ""];
  const tones = ["⁻", "⁺", "¹", "²", ""];
  return atone + tones[tone];
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
      ? convertPunc(hans.charAt(i))
      : pinyins.map(pinyin => convertChar(hans.charAt(i), pinyin)))
  ;

const convert = s =>
  [].concat.apply([],
    s
      .split(/(?<=\p{sc=Han})(?!\p{sc=Han})|(?<!\p{sc=Han})(?=\p{sc=Han})/ug)
      .map(chunk => (/^\p{sc=Han}+$/u.test(chunk)
        ? convertHans
        : convertPunc)(chunk)
      )
  );

if (require.main === module) {
  console.log(convert("零一二三四五六七八九十"));
  const arg = process.argv[2] || "我愛你！";

  convertSent(arg)
    .map(x => Array.isArray(x) && x.length == 1 ? x[0] : x)
    .forEach(x => console.log(x));
}

exports.convert = convert;