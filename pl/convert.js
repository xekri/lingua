const convertWord = s =>
  [
    [/ch/g, "h"],
    [/w/g, "v"],
    [/sz/g, "š"],
    [/cz/g, "č"],
    [/ż/g, "ž"],

    [/(?<=[tdr])(?=i)/g, "'"],

    [/l(?!i)/g, "lj"],
    [/łi/g, "l'i"],
    [/ł/g, "l"],
    [/rzy/g, "ri"],
    [/rz/g, "rj"],

    [/(?<=[sz])j/g, "'j"],
    [/ć|ci(?=[eaouęąó])/g, "tj"],
    [/ci/g, "ti"],
    [/dź|dzi(?=[eaouęąó])/g, "dj"],
    [/dzi/g, "di"],
    [/ś/g, "sj"],
    [/ź/g, "zj"],
    [/ń/g, "nj"],

    [/cji/g, "ci"],

    [/i(?=[eaouęąó])/g, "j"],
    [/i/g, "jy"],

    [/(?<=[sz])jr/g, "rj"],
    [/sjtj/g, "stj"],
    [/zjdj/g, "zdj"],

    [/^j(?=[ye])/g, ""],

    [/(?<![iyeaouęąó^])jy/g, "i"],
    [/(?<![iyeaouęąó^])je/g, "ě"],
  ]
    .map(([x, y]) =>
      [x, Array.isArray(y) ? y[mode] : y]
    )
    .reduce((acc, [x, y]) => acc.replace(x, y), s.normalize("NFC"))

const convertWordCyrl = s =>
  [
    [/^y/g, "jy"],
    [/i/g, "jy"],
    [/ě/g, "je"],

    [/ó/g, "ѡ"],

    [/jy/g, "і"],
    [/je/g, "ѥ"],
    [/ja/g, "ꙗ"],
    [/jo/g, "ю"],
    [/ju/g, "ѵ"],
    [/ję/g, "ѩ"],
    [/ją/g, "ѭ"],

    [/y/g, "ꙑ"],
    [/e/g, "є"],
    [/a/g, "а"],
    [/o/g, "о"],
    [/u/g, "у"],
    [/ę/g, "ѧ"],
    [/ą/g, "ѫ"],

    [/p/g, "п"],
    [/b/g, "б"],
    [/f/g, "ф"],
    [/v/g, "в"],
    [/m/g, "м"],

    [/k/g, "к"],
    [/g/g, "г"],
    [/h/g, "х"],

    [/t/g, "т"],
    [/d/g, "д"],
    [/s/g, "с"],
    [/z/g, "з"],
    [/n/g, "н"],
    [/l/g, "л"],
    [/r/g, "р"],

    [/ǯ/g, "џ"],
    [/č/g, "ч"],
    [/š/g, "ш"],
    [/ž/g, "ж"],
    [/c/g, "ц"],
    [/ʒ/g, "ѕ"],

    [/j/g, "ь"],
    [/'/g, "ъ"],
  ]
    .map(([x, y]) =>
      [x, Array.isArray(y) ? y[mode] : y]
    )
    .reduce((acc, [x, y]) => acc.replace(x, y), s.normalize("NFC"))

const applyKase = {
  lower: s => s.toLowerCase(),
  upper: s => s.toUpperCase(),
  capital: s => s.slice(0, 1).toUpperCase() + s.slice(1),
};

const convert = (s, cyrl) =>
  s.replace(/\p{L}+/ug, word => {
    let kase = Object.keys(applyKase).filter(kase => word == applyKase[kase](word));
    kase = kase == [] ? null : kase[0];

    word = convertWord(word.toLowerCase())
    if (cyrl)
      word = convertWordCyrl(word)
    if (kase) {
      word = applyKase[kase](word)
    }
    return word
  });
