verbose = true;

const convert0 = (s, mode) =>
  [
    [/अ/g, "a"],
    [/इ|\u093F/g, "i"],
    [/ऋ|\u0943/g, "ṛ"],
    [/ऌ|\u0962/g, "ḷ"],
    [/उ|\u0941/g, "u"],

    [/आ|\u093E/g, ["ā", "aa"]],
    [/ई|\u0940/g, ["ī", "ii"]],
    [/ॠ|\u0943/g, ["ṝ", "rr"]],
    [/ॡ|\u0963/g, ["ḹ", "ll"]],
    [/ऊ|\u0942/g, ["ū", "uu"]],

    [/ए|\u0947/g, "e"],
    [/ओ|\u094B/g, "o"],

    [/ऐ|\u0948/g, ["ē", "ai"]],
    [/औ|\u094C/g, ["ō", "au"]],

    [/(?<=[कचटतपखछठथफगजडदबघझढधभङञणनमशषसहयरलव])(?![\u094Diīeēaāoōuūṛṝḷḹ])/g, "a"],

    [/क/g, "k"],
    [/च/g, ["ᶄ", "kz"]],
    [/ट/g, ["ʈ", "tz"]],
    [/त/g, "t"],
    [/प/g, "p"],

    [/ख/g, "kh"],
    [/छ/g, ["ᶄh", "kzh"]],
    [/ठ/g, ["ʈh", "tzh"]],
    [/थ/g, "th"],
    [/फ/g, "ph"],

    [/ग/g, "c"],
    [/ज/g, ["ꞔ", "cz"]],
    [/ड/g, ["ɖ", "dz"]],
    [/द/g, "d"],
    [/ब/g, "b"],

    [/घ/g, "ch"],
    [/झ/g, ["ꞔh", "czh"]],
    [/ढ/g, ["ɖh", "dzh"]],
    [/ध/g, "dh"],
    [/भ/g, "bh"],

    [/ङ/g, "g"],
    [/ञ/g, ["ᶃ", "gz"]],
    [/ण/g, ["ɳ", "nz"]],
    [/न/g, "n"],
    [/म/g, "m"],
    [/\u0902/g, "q"], // anusvaara ं

    [/\u0903/g, "x"], // visarga ः
    [/श/g, ["ᶍ", "xz"]],
    [/ष/g, ["ʂ", "sz"]],
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

    //[/(?<=[iīIeēEaāAoōOuūUṙRḷL])ṙ(?=[iīIeēEaāAoōOuūUṙRḷL])/g, "r"],
    //[/(?<=[iīIeēEaāAoōOuūUṙRḷL])ḷ(?=[iīIeēEaāAoōOuūUṙRḷL])/g, "l"],
    //[/(?<![a-zA-Zīēāōūṙḷḳċġẋṫḍṅṡ])ṙ(?=[iīIeēEaāAoōOuūUr̄Rl̄L])/g, "r"],
    //[/(?<![a-zA-Zīēāōūṙḷḳċġẋṫḍṅṡ])ḷ(?=[iīIeēEaāAoōOuūUr̄Rl̄L])/g, "l"],

    [/(.)z\1z/g, "$1$1z"],

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

const table = [];

const convert1 = s =>
  s
    .replace(/ᶄ/g, "K")
    .replace(/ʈ/g, "T")
    .replace(/ꞔ/g, "C")
    .replace(/ɖ/g, "D")
    .replace(/ᶃ/g, "G")
    .replace(/ɳ/g, "N")
    .replace(/ᶍ/g, "X")
    .replace(/ʂ/g, "S")
    .replace(/ṙ/g, "y")
    .replace(/ḷ/g, "w")

    .replace(/kh/g, "ख")
    .replace(/Kh/g, "छ")
    .replace(/Th/g, "ठ")
    .replace(/th/g, "थ")
    .replace(/ph/g, "फ")

    .replace(/k/g, "क")
    .replace(/K/g, "च")
    .replace(/T/g, "ट")
    .replace(/t/g, "त")
    .replace(/p/g, "प")

    .replace(/ch/g, "घ")
    .replace(/Ch/g, "झ")
    .replace(/Dh/g, "ढ")
    .replace(/dh/g, "ध")
    .replace(/bh/g, "भ")

    .replace(/c/g, "ग")
    .replace(/C/g, "ज")
    .replace(/D/g, "ड")
    .replace(/d/g, "द")
    .replace(/b/g, "ब")

    .replace(/g/g, "ङ")
    .replace(/G/g, "ञ")
    .replace(/N/g, "ण")
    .replace(/n/g, "न")
    .replace(/m/g, "म")
    .replace(/q/g, "\u0902")

    .replace(/x/g, "\u0903")
    .replace(/X/g, "श")
    .replace(/S/g, "ष")
    .replace(/s/g, "स")

    .replace(/h/g, "ह")
    .replace(/j/g, "य")
    .replace(/y/g, "र")
    .replace(/w/g, "ल")
    .replace(/v/g, "व")

    .replace(/ā/g, "A")
    .replace(/ī/g, "I")
    .replace(/r̄/g, "R")
    .replace(/l̄/g, "L")
    .replace(/ū/g, "U")

    .replace(/(?<=[कचटतपखछठथफगजडदबघझढधभङञणनमशषसहयरलव])(?![airlueoAIRLU])/g, "\u094D")

    .replace(/(?<=[कचटतपखछठथफगजडदबघझढधभङञणनमशषसहयरलव])ai/g, "\u0948")
    .replace(/(?<=[कचटतपखछठथफगजडदबघझढधभङञणनमशषसहयरलव])au/g, "\u094C")

    .replace(/(?<=[कचटतपखछठथफगजडदबघझढधभङञणनमशषसहयरलव])a/g, "")
    .replace(/(?<=[कचटतपखछठथफगजडदबघझढधभङञणनमशषसहयरलव])i/g, "\u093F")
    .replace(/(?<=[कचटतपखछठथफगजडदबघझढधभङञणनमशषसहयरलव])r/g, "\u0943")
    .replace(/(?<=[कचटतपखछठथफगजडदबघझढधभङञणनमशषसहयरलव])l/g, "\u0962")
    .replace(/(?<=[कचटतपखछठथफगजडदबघझढधभङञणनमशषसहयरलव])u/g, "\u0941")
    .replace(/(?<=[कचटतपखछठथफगजडदबघझढधभङञणनमशषसहयरलव])e/g, "\u0947")
    .replace(/(?<=[कचटतपखछठथफगजडदबघझढधभङञणनमशषसहयरलव])o/g, "\u094B")

    .replace(/(?<=[कचटतपखछठथफगजडदबघझढधभङञणनमशषसहयरलव])A/g, "\u093E")
    .replace(/(?<=[कचटतपखछठथफगजडदबघझढधभङञणनमशषसहयरलव])I/g, "\u0940")
    .replace(/(?<=[कचटतपखछठथफगजडदबघझढधभङञणनमशषसहयरलव])R/g, "\u0943")
    .replace(/(?<=[कचटतपखछठथफगजडदबघझढधभङञणनमशषसहयरलव])L/g, "\u0963")
    .replace(/(?<=[कचटतपखछठथफगजडदबघझढधभङञणनमशषसहयरलव])U/g, "\u0942")

    .replace(/ai/g, "ऐ")
    .replace(/au/g, "औ")

    .replace(/a/g, "अ")
    .replace(/i/g, "इ")
    .replace(/r/g, "ऋ")
    .replace(/l/g, "ऌ")
    .replace(/u/g, "उ")
    .replace(/e/g, "ए")
    .replace(/o/g, "ओ")

    .replace(/A/g, "आ")
    .replace(/I/g, "ई")
    .replace(/R/g, "ॠ")
    .replace(/L/g, "ॡ")
    .replace(/U/g, "ऊ")

    .replace(/-/g, "ऽ")
    .replace(/,/g, "।")
    .replace(/\./g, "॥")

    .replace(/0/g, "०")
    .replace(/1/g, "१")
    .replace(/2/g, "२")
    .replace(/3/g, "३")
    .replace(/4/g, "४")
    .replace(/5/g, "५")
    .replace(/6/g, "६")
    .replace(/7/g, "७")
    .replace(/8/g, "८")
    .replace(/9/g, "९")
