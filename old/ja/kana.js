const replace = (s, rules) =>
  rules.reduce((acc, [x, y]) => acc.replace(x, y), s).normalize('NFKC');

const fromKana = kana => replace(kana, [
  [/か\u309A/g, 'ga'],
  [/き\u309A/g, 'gi'],
  [/く\u309A/g, 'gu'],
  [/け\u309A/g, 'ge'],
  [/こ\u309A/g, 'go'],

  [/か/g, 'ka'],
  [/き/g, 'ki'],
  [/く/g, 'ku'],
  [/け/g, 'ke'],
  [/こ/g, 'ko'],
  [/が/g, 'ca'],
  [/ぎ/g, 'ci'],
  [/ぐ/g, 'cu'],
  [/げ/g, 'ce'],
  [/ご/g, 'co'],

  [/さ/g, 'sa'],
  [/し/g, 'si'],
  [/す/g, 'su'],
  [/せ/g, 'se'],
  [/そ/g, 'so'],
  [/ざ/g, 'za'],
  [/じ/g, 'zi'],
  [/ず/g, 'zu'],
  [/ぜ/g, 'ze'],
  [/ぞ/g, 'zo'],

  [/た/g, 'ta'],
  [/ち/g, 'ti'],
  [/つ/g, 'tu'],
  [/て/g, 'te'],
  [/と/g, 'to'],
  [/だ/g, 'da'],
  [/ぢ/g, 'di'],
  [/づ/g, 'du'],
  [/で/g, 'de'],
  [/ど/g, 'do'],

  [/な/g, 'na'],
  [/に/g, 'ni'],
  [/ぬ/g, 'nu'],
  [/ね/g, 'ne'],
  [/の/g, 'no'],

  [/は/g, 'pa'],
  [/ひ/g, 'pi'],
  [/ふ/g, 'pu'],
  [/へ/g, 'pe'],
  [/ほ/g, 'po'],
  [/ば/g, 'ba'],
  [/び/g, 'bi'],
  [/ぶ/g, 'bu'],
  [/べ/g, 'be'],
  [/ぼ/g, 'bo'],

  [/ま/g, 'ma'],
  [/み/g, 'mi'],
  [/む/g, 'mu'],
  [/め/g, 'me'],
  [/も/g, 'mo'],

  [/や/g, 'ja'],
  [/𛀆/g, 'ji'],
  [/ゆ/g, 'ju'],
  [/𛀁/g, 'je'],
  [/よ/g, 'jo'],

  [/ら/g, 'la'],
  [/り/g, 'li'],
  [/る/g, 'lu'],
  [/れ/g, 'le'],
  [/ろ/g, 'lo'],

  [/わ/g, 'va'],
  [/ゐ/g, 'vi'],
  [/𛄟/g, 'vu'],
  [/ゑ/g, 've'],
  [/を/g, 'vo'],

  [/あ/g, 'a'],
  [/い/g, 'i'],
  [/う/g, 'u'],
  [/え/g, 'e'],
  [/お/g, 'o'],
]);

const hang = latn => replace(latn, [
  [/k(?=j?[aiueo])/g, '\u1100<HEAD>'],
  [/c(?=j?[aiueo])/g, '\u1101<HEAD>'],
  [/g(?=j?[aiueo])/g, '\u114C<HEAD>'],
  [/s(?=j?[aiueo])/g, "\u1109<HEAD>"],
  [/z(?=j?[aiueo])/g, "\u110A<HEAD>"],
  [/t(?=j?[aiueo])/g, "\u1103<HEAD>"],
  [/d(?=j?[aiueo])/g, "\u1104<HEAD>"],
  [/n(?=j?[aiueo])/g, "\u1102<HEAD>"],
  [/p(?=j?[aiueo])/g, "\u1107<HEAD>"],
  [/b(?=j?[aiueo])/g, "\u1108<HEAD>"],
  [/m(?=j?[aiueo])/g, "\u1106<HEAD>"],
  [/l(?=j?[aiueo])/g, "\u1105<HEAD>"],
  [/v(?=j?[aiueo])/g, "\u111D<HEAD>"],
  [/(?<!<HEAD>)j(?=[aiueo])/g, "\u1140<HEAD>"],
  [/(?<!<HEAD>|j)(?=[aiueo])/g, "\u110B<HEAD>"],
  [/<HEAD>/g, ""],

  [/jaj/g, "\u1164"],
  [/aj/g, "\u1162"],
  [/ej/g, "\u1166"],

  [/ja/g, "\u1163<CODA>"],
  [/ji/g, '\uD7C4<CODA>'],
  [/ju/g, '\u1172<CODA>'],
  [/je/g, '\u1167<CODA>'],
  [/jo/g, '\u116D<CODA>'],
  [/a/g, "\u1161<CODA>"],
  [/i/g, '\u1175<CODA>'],
  [/u/g, '\u116E<CODA>'],
  [/e/g, '\u1165<CODA>'],
  [/o/g, '\u1169<CODA>'],

  [/<CODA>k/g, '\u11A8'],
  [/<CODA>c/g, '\u11A9'],
  [/<CODA>g/g, '\u11BC'],
  [/<CODA>s/g, '\u11BA'],
  [/<CODA>z/g, '\u11BB'],
  [/<CODA>t/g, '\u11AE'],
  [/<CODA>d/g, '\uD7CD'],
  [/<CODA>n/g, '\u11AB'],
  [/<CODA>p/g, "\u11B8"],
  [/<CODA>b/g, "\uD7E6"],
  [/<CODA>m/g, "\u11B7"],
  [/<CODA>j/g, "\u11EB"],
  [/<CODA>l/g, "\u11AF"],
  [/<CODA>v/g, "\u11E2"],
  [/<CODA>/g, ""],

  [/k/g, 'ㄱ'],
  [/c/g, 'ㄲ'],
  [/g/g, 'ㆁ'],
  [/s/g, "ㅅ"],
  [/z/g, "ㅆ"],
  [/t/g, "ㄷ"],
  [/d/g, "ㄸ"],
  [/n/g, "ㄴ"],
  [/p/g, "ㅂ"],
  [/b/g, "ㅃ"],
  [/m/g, "ㅁ"],
  [/j/g, "ㅿ"],
  [/l/g, "ㄹ"],
  [/v/g, "ㅱ"],
]);

console.log(hang(process.argv[2] || 'nitpongo'))