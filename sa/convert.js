const convert = (s, mode) =>
  [
    [/(?<=[कचटतपखछठथफगजडदबघझढधभङञणनमशषसहयरलव])(?![\u093F\u0943\0962\u0941\u093E\u0940\u0943\u0963\u0942\u0947\u094B\u0948\u094C])/g, "a"],

    [/अ/g, "a"],
    [/इ|\u093F/g, "j"],
    [/ऋ|\u0943/g, "r"],
    [/ऌ|\u0962/g, "l"],
    [/उ|\u0941/g, "v"],

    [/आ|\u093E/g, "ā"],
    [/ई|\u0940/g, "i"],
    [/ॠ|\u0943/g, "ṛ"],
    [/ॡ|\u0963/g, "ḷ"],
    [/ऊ|\u0942/g, "u"],

    [/ए|\u0947/g, "aj"],
    [/ओ|\u094B/g, "av"],

    [/ऐ|\u0948/g, "āj"],
    [/औ|\u094C/g, "āv"],

    [/क/g, "k"],
    [/च/g, "ᶄ"],
    [/ट/g, "ʈ"],
    [/त/g, "t"],
    [/प/g, "p"],

    [/ख/g, "kh"],
    [/छ/g, "ᶄh"],
    [/ठ/g, "ʈh"],
    [/थ/g, "th"],
    [/फ/g, "ph"],

    [/ग/g, "c"],
    [/ज/g, "ꞔ"],
    [/ड/g, "ɖ"],
    [/द/g, "d"],
    [/ब/g, "b"],

    [/घ/g, "ch"],
    [/झ/g, "ꞔh"],
    [/ढ/g, "ɖh",],
    [/ध/g, "dh"],
    [/भ/g, "bh"],

    [/ङ/g, "g"],
    [/ञ/g, "n"],
    [/ण/g, "ɳ"],
    [/न/g, "n"],
    [/म/g, "m"],
    [/\u0902/g, "n"], // anusvaara

    [/\u0903/g, "s"], // visarga
    [/श/g, "ᶍ"],
    [/ष/g, "ʂ"],
    [/स/g, "s"],

    [/ह/g, "h"],
    [/य/g, "j"],
    [/र/g, "r"],
    [/ल/g, "l"],
    [/व/g, "v"],

    [/ऽ/g, "'"],

    [/०/g, "0"],
    [/१/g, "1"],
    [/२/g, "2"],
    [/३/g, "3"],
    [/४/g, "4"],
    [/५/g, "5"],
    [/६/g, "6"],
    [/७/g, "7"],
    [/८/g, "8"],
    [/९/g, "9"],

    [/\u094D/g, ""],

    [/\u0930/g, "\u0307"], // nuktaa ़
    [/।/g, ","],
    [/॥/g, "."],
    [/॰/g, "'"],

  ]
    .map(([x, y]) =>
      [x, Array.isArray(y) ? y[mode] : y]
    )
    .reduce((acc, [x, y]) => acc.replace(x, y), s.normalize("NFD"))
    .normalize("NFC")
