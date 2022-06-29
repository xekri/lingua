import fs from 'fs';
import yonh from 'yonh';
import jyutpingTableParser from 'jyutping-table-parser';
const jyutpingTable = jyutpingTableParser.parseJyutpingInput();
import OpenCC from 'opencc';

import replaceAll from '../pages/yue/replaceAll.mjs'
import show from '../pages/yue/show.mjs';

const prettifyEmc = x => replaceAll(x, [
  [/(?<![xhktp])$/, '0'],
  [/x$/, '1'],
  [/h$/, '2'],

  [/^gh/, 'h'],
  [/h/, 'x'],
  [/^g/g, 'c'],
  [/ng/g, 'g'],

  [/^c/g, 'ţ'],
  [/^z(?!s)/, 'ḑ'],
  [/^zs/, 'z'],
  [/^dzj/, 'dj'],
  [/^tsj/, 'tj'],
  [/^tsxj/, 'txj'],

  [/^kx/, 'ꝁ'],
  [/^tx/, 'ŧ'],
  [/^ţx/, 'ṯ'],
  [/^px/, 'ꝑ'],
]);

const yue = {};
for (const x of jyutpingTable.concat([
  { ch: '十', infoArray: [{ jyutping: ['sap6'] }] },
])) {
  if (!('infoArray' in x))
    continue;

  const c = x.ch;
  let mcs = yonh.lookup(replaceAll(c, [
    [/真/g, '眞'],
    [/慎/g, '愼'],
    [/顛/g, '顚'],

    [/既/g, '旣'],
    [/概/g, '槪'],

    [/研/g, '硏'],
    [/妍/g, '姸'],

    [/茲/g, '玆'],

    [/奇/g, '竒'],
    [/粵/g, '粤'],
    [/世/g, '丗'],
    [/[島嶋嶌]/g, '㠀'],
    [/呂/g, '吕'],
    [/崑/g, '崐'],
    [/劍/g, '𠠆'],
    [/啟/g, '啓'],
    [/鼓/g, '皼'],
    [/畝/g, '畞'],
    [/遥/g, '遙'],
    [/[笑咲]/g, '㗛'],
    [/聯/g, '聮'],
    [/高/g, '髙'],
    [/青/g, '靑'],
    [/𧶉/g, '賔'],
    [/籯/g, '籝'],
    [/聰/g, '聦'],
    [/眾/g, '衆'],
    [/衛/g, '衞'],
    [/衛/g, '衞'],
    [/勳/g, '勛'],
    [/胸/g, '胷'],
    [/享/g, '亯'],
    [/岩/g, '巖'],
    [/罐/g, '鑵'],
    [/污/g, '汙'],
  ]));

  if (!Array.isArray(mcs))
    mcs = [mcs];

  yue[c] = x.infoArray.map(info => {
    if (info.sc && /1\.[1-6]/.test(info.sc))
      return null;

    // skip simplified
    if (info.en == 's')
      return null;

    let [initial, final, tone] = info.jyutping[0]
      .match(/^([^ieaouy]*)(.*)([1-6])$/).slice(1);

    // skip irregular
    if (/^(eo|oet|e[ump]|a)$/.test(final))
      return null;

    tone = parseInt(tone);
    if (/[ktp]$/.test(final)) {
      if (![1, 3, 6].includes(tone))
        return null;

      tone = {
        1: 7,
        3: 8,
        6: 9,
      }[tone];

      final = replaceAll(final, [
        [/k$/, 'g'],
        [/t$/, 'n'],
        [/p$/, 'm'],
      ]);
    }
    tone = [null, 0, 1, 2, 4, 5, 6, 3, 3, 7][tone];
    const voice = 4 <= tone;
    tone = tone %= 4;

    initial = replaceAll(initial, [
      [/^k/, 'kx'],
      [/^g/, 'k'],
      [/^t/, 'tx'],
      [/^d/, 't'],
      [/^c/, 'ţx'],
      [/^z/, 'ţ'],
      [/^p/, 'px'],
      [/^b/, 'p'],
      [/^f/, 'pv'],
      [/^ng/, 'g'],
      [/^h/, 'x'],
      [/w/, 'v'],
    ]);

    final = replaceAll(final, [
      [/ng$/, 'g'],
      [/a/g, 'r'],
      [/rr/, 'a'],
      [/oe|eo/, 'w'],
      [/yu/, 'y'],
      [/(?<!^)i$/, 'j'],
      [/(?<!^)u$/, 'v'],
    ]);

    if (voice)
      initial = replaceAll(initial, [
        [/^k/, 'c'],
        [/^t/, 'd'],
        [/^ţ/, 'ḑ'],
        [/^p/, 'b'],
        [/^x/, 'h'],
        [/^s/, 'z'],
      ]);
    else
      initial = initial
        .replace(/^(?=[gnmljv]?$)/, 'q');

    if (tone < 2)
      initial = initial
        .replace(/(?<=^[cdḑb])(?!x)/, 'h')
        .replace(/(?<=^[cdḑb])x/, '');

    if (/^[kc]/.test(initial))
      final = final.replace(/wj/, 'y')
    //if (/^(q?m|px?|b)$/.test(initial))
    //final = final.replace(/ej/, 'i')

    final = final.replace(/wn/, 'on');

    if (mcs.some(mc => mc.initial.sjeng == '疑'))
      initial = initial.replace(/(?<=^q?)(?=[jv]?$)/, 'g');
    if (mcs.some(mc => mc.initial.sjeng == '日'))
      initial = initial.replace(/(?<=^q?)j?$/, 'ṅ');
    if (mcs.some(mc => ['匣', '云'].includes(mc.initial.sjeng)))
      initial = initial
        .replace(/^(?=[jv]?$)/, 'h')
        .replace(/^bv/, 'hv')
        ;
    if (mcs.some(mc => ['曉', '見', '溪'].includes(mc.initial.sjeng)))
      initial = initial
        .replace(/^q(?=[jv]?$)/, 'x')
        .replace(/^pv/, 'xv');
    if (mcs.some(mc => mc.initial.sjeng == '溪') && mcs.every(mc => mc.initial.sjeng != '曉'))
      initial = initial
        .replace(/^x/, 'kx');
    if (mcs.some(mc => mc.initial.sjeng == '滂'))
      initial = initial.replace(/^pv/, 'pxv');
    if (mcs.length && mcs.every(mc => !['精', '清', '從', '心', '邪',].includes(mc.initial.sjeng)))
      initial = replaceAll(initial, [
        [/^s/, 'ṡ'],
        [/^z/, 'ż'],
        [/^ţ/, 'ṫ'],
        [/^ḑ/, 'ḋ'],
      ])

    if (mcs.some(mc => ['蟹', '止'].includes(mc.final.sjep)))
      final = final.replace(/wj/, 'uj');
    if (mcs.some(mc => mc.final.sjep3 == '遇'))
      final = final
        .replace(/wj/, 'y')
        .replace(/ov/, 'u');
    if (mcs.some(mc => mc.final.sjep == '止'))
      final = final.replace(/ej/, 'i')
    if (mcs.some(mc => mc.final.sjep == '咸' && mc.final.ho == '開口' && mc.final.tongx == 1))
      final = final.replace(/rm/, 'om');
    /*if (mcs.some(mc => ['通', '江'].includes(mc.final.sjep)))
      final = final
        .replace(/g/, 'gv')*/

    if (/^[iyw]/.test(final))
      initial = initial.replace(/j$/, '')
    else if (/^u/.test(final))
      initial = initial.replace(/^v$/, '')

    if (/^w/.test(initial + final)) {
      initial = 'j';
      final = final.replace(/w/, 'o');
    }
    if (/v/.test(initial))
      final = final.replace(/rj/, 'i');

    initial = replaceAll(initial, [
      [/^(q?)ṅ/, '$1nj'],
      [/^ṡ/, 'sj'],
      [/^ż/, 'zj'],
      [/^ṫ(x?)/, 't$1j'],
      [/^ḋ([xh]?)/, 'd$1j'],

      [/^kx/, 'ꝁ'],
      [/^tx/, 'ŧ'],
      [/^ţx/, 'ṯ'],
      [/^px/, 'ꝑ'],
    ]);

    return {
      initial, final, tone, voice,
      mcs: mcs.map(x => prettifyEmc(x.roman)).join(',')
    }
  })
    .filter(y => y)
    .filter((it, i, self) =>
      self.slice(0, i).every(precedent =>
        ! /^q/.test(it.initial) || !(
          precedent.initial == it.initial.replace(/^q/, '')
          && precedent.final == it.final
        )
      )
    )
}

for (const configuration of ['jp2t'])
  for (const c in yue) {
    const cCorrect = new OpenCC(`${configuration}.json`).convertSync(c);
    if (c != cCorrect && cCorrect in yue) {
      console.log(`${configuration} ${c} -> ${cCorrect}`)
      delete yue[c];
    }
  }

const directory = '../pages/yue'
const pathTsv = directory + '/yue.tsv'
fs.writeFileSync(pathTsv, 'character\tinitial\tfinal\ttone\tmc\n')
for (let [c, vs] of Object.entries(yue))
  for (const v of vs)
    fs.appendFileSync(pathTsv, `${c}\t${v.initial}\t${v.final}\t${v.tone}\t${v.mcs}\n`);

fs.writeFileSync(directory + '/yue.json', JSON.stringify(yue));

const fromString = s =>
  [...s].map(c =>
    c in yue
      ? yue[c].map(x => show.unicode(x.initial, x.final, x.tone) + (x.mcs ? '' : '!'))
      : c
  );

const s = process.argv[2] || '君子聖哲';
for (const x of fromString(s))
  console.log(x);
