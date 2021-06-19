const toneSymbols = [..."ˋˊˉˈ"]

const tone3 = (final, tone) =>
  tone == 3
    ? final
      .replace(/g$/, "k")
      .replace(/n$/, "t")
      .replace(/m$/, "p")
    : final
  ;

exports.modifier = (initial, final, tone) =>
  initial + final + toneSymbols[tone];

exports.ascii = (initial, final, tone) =>
  (initial + final)
    .replace(/^ŧ/, "ts")
    .replace(/^đ/, "dz")
    .replace(/^ṣ/, "sj")
    .replace(/^ẓ/, "zj")
    .replace(/^ṭ/, "tj")
    .replace(/^ḍ/, "dj")
    .replace(/^ṇ/, "nj")
    .replace(/jx/, "xj")
    .replace(/ơ/, "eo")
    .replace(/$/, tone);

exports.combining = (initial, final, tone) =>
  tone == 3 ?
    initial + tone3(final, tone)
      .replace(/r/, "ӑ")
    :
    (initial + final)
      .replace(/(?<=[iyueơora])|(?<=^[gm])$/, ["\u0300", "\u0301", ""][tone])
      .replace(/r/, "ӑ")
      .normalize("NFC");

exports.alphabet = (initial, final, tone) =>
  (initial + final + tone)
    .replace(/0$/, "h")
    .replace(/1$/, "x")
    .replace(/2$/, "")
    .replace(/g3$/, "k")
    .replace(/n3$/, "t")
    .replace(/m3$/, "p")

exports.coda = (initial, final, tone) =>
  (initial + final + tone)
    .replace(/j0$/, "e")
    .replace(/v0$/, "o")
    .replace(/g0$/, "c")
    .replace(/n0$/, "d")
    .replace(/m0$/, "b")
    .replace(/0$/, "l")

    .replace(/j1$/, "i")
    .replace(/v1$/, "u")
    .replace(/g1$/, "h")
    .replace(/n1$/, "z")
    .replace(/m1$/, "w")
    .replace(/1$/, "q")

    .replace(/2$/, "")

    .replace(/g3$/, "k")
    .replace(/n3$/, "t")
    .replace(/m3$/, "p")

exports.greek = (initial, final, tone) =>
  (initial + tone3(final, tone))
    .replace(/xi/, ["ἳ", "ἵ", "ἱ"][Math.min(tone, 2)])
    .replace(/xu/, ["ὣ", "ὥ", "ὡ"][Math.min(tone, 2)])
    .replace(/xy/, ["ὓ", "ὕ", "ὑ"][Math.min(tone, 2)])
    .replace(/xe/, ["ἓ", "ἕ", "ἑ"][Math.min(tone, 2)])
    .replace(/xo/, ["ὃ", "ὅ", "ὁ"][Math.min(tone, 2)])
    .replace(/xơ/, ["ᾣ", "ᾥ", "ᾡ"][Math.min(tone, 2)])
    .replace(/xa/, ["ἣ", "ἥ", "ἡ"][Math.min(tone, 2)])
    .replace(/xr/, ["ἃ", "ἅ", "ἁ"][Math.min(tone, 2)])

    .replace(/i/, ["ὶ", "ί", "ι"][Math.min(tone, 2)])
    .replace(/u/, ["ὼ", "ώ", "ω"][Math.min(tone, 2)])
    .replace(/y/, ["ὺ", "ύ", "υ"][Math.min(tone, 2)])
    .replace(/e/, ["ὲ", "έ", "ε"][Math.min(tone, 2)])
    .replace(/o/, ["ὸ", "ό", "ο"][Math.min(tone, 2)])
    .replace(/ơ/, ["ῲ", "ῴ", "ῳ"][Math.min(tone, 2)])
    .replace(/a/, ["ὴ", "ή", "η"][Math.min(tone, 2)])
    .replace(/r/, ["ὰ", "ά", "α"][Math.min(tone, 2)])

    .replace(/q/g, "ϙ")

    .replace(/k/g, "κ")
    .replace(/c/g, "γ")
    .replace(/g/g, "ξ")
    .replace(/h/g, "χ")

    .replace(/^ṭ/, "tj")
    .replace(/^ḍ/, "dj")
    .replace(/^ṇ/, "nj")
    .replace(/^ṣ/, "sj")
    .replace(/^ẓ/, "zj")

    .replace(/t/g, "τ")
    .replace(/d/g, "δ")
    .replace(/n/g, "ν")

    .replace(/^ŧ/, "τσ")
    .replace(/^đ/, "δσ")
    .replace(/^l/, "λ")
    .replace(/s/, "σ")
    .replace(/z/, "ζ")

    .replace(/p/g, "π")
    .replace(/b/g, "β")
    .replace(/m/g, "μ")
    .replace(/f/g, "φ")
    .replace(/w/g, "ψ")

    .replace(/j$/, "ι")
    .replace(/v$/, "υ")
    .replace(/j/g, "ϸ")
    .replace(/v/g, "ϝ")
