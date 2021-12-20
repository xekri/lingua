const convert = (s, mode) =>
  [
    [/अ/g, "a"],
    [/इ|\u093F/g, "i"],
    [/ऋ|\u0943/g, "r"],
    [/ऌ|\u0962/g, "l"],
    [/उ|\u0941/g, "u"],

    [/आ|\u093E/g, ["ā", "A"]],
    [/ई|\u0940/g, ["ī", "I"]],
    [/ॠ|\u0943/g, ["ṝ", "R"]],
    [/ॡ|\u0963/g, ["ḹ", "L"]],
    [/ऊ|\u0942/g, ["ū", "U"]],

    [/ए|\u0947/g, "e"],
    [/ओ|\u094B/g, "o"],

    [/ऐ|\u0948/g, ["ē", "E"]],
    [/औ|\u094C/g, ["ō", "O"]],

    [/(?<=[कचटतपखछठथफगजडदबघझढधभङञणनमशषसहयरलव])(?![\u094Diīeēaāoōuūṛṝḷḹ])/g, "a"],

    [/क/g, "k"],
    [/च/g, ["ᶄ", "K"]],
    [/ट/g, ["ʈ", "T"]],
    [/त/g, "t"],
    [/प/g, "p"],

    [/ख/g, ["kh"]],
    [/छ/g, ["ᶄh", "Kh"]],
    [/ठ/g, ["ʈh", "Th"]],
    [/थ/g, "th"],
    [/फ/g, "ph"],

    [/ग/g, "c"],
    [/ज/g, ["ꞔ", "C"]],
    [/ड/g, ["ɖ", "D"]],
    [/द/g, "d"],
    [/ब/g, "b"],

    [/घ/g, "ch"],
    [/झ/g, ["ꞔh", "Ch"]],
    [/ढ/g, ["ɖh", "Dh"]],
    [/ध/g, "dh"],
    [/भ/g, "bh"],

    [/ङ/g, "g"],
    [/ञ/g, ["ᶃ", "G"]],
    [/ण/g, ["ɳ", "N"]],
    [/न/g, "n"],
    [/म/g, "m"],
    [/\u0902/g, ["\u0328", "q"]], // anusvaara ं

    [/\u0903/g, "x"], // visarga ः
    [/श/g, ["ᶍ", "X"]],
    [/ष/g, ["ʂ", "S"]],
    [/स/g, "s"],

    [/ह/g, "h"],
    [/य/g, "j"],
    [/र/g, "r"],
    [/ल/g, "l"],
    [/व/g, "v"],

    [/ऽ/g, "-"],

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