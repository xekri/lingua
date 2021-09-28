const log = x => {
  console.log(x);
  return x;
};

document.addEventListener("DOMContentLoaded", () => {
  const t0 = document.getElementById("0");
  const t1 = document.getElementById("1");
  const t2 = document.getElementById("2");

  const onInput = () => {
    t1.value = replacePolishWordsKeepCase(t0.value, convert0);
    t2.value = replaceNewPolishWordsKeepCase(t1.value, convert1);
  };

  t0.addEventListener("input", onInput);

  onInput();

  for (const e of document.querySelectorAll(".pl, .pl-table td"))
    e.innerHTML = replaceNewPolishWordsKeepCase(replacePolishWordsKeepCase(e.innerHTML, convert0), convert1);
})

const convert0 = s =>
  s
    .toLowerCase()
    .replace(/ą/g, "ǫ")
    .replace(/ó/g, "ō")
    .replace(/c?h/g, "x")
    .replace(/sz/g, "š")
    .replace(/cz/g, "ť")
    .replace(/dż/g, "ď")
    .replace(/ż/g, "ž")

    .replace(/l/g, "lj")
    .replace(/lji/g, "li")
    .replace(/ł/g, "l")
    .replace(/rzy/g, "ri")
    .replace(/rz/g, "rj")

    .replace(/(?<=[sz])j/g, "'j")

    .replace(/dź|dzi(?=[eaouęǫō])/g, "dj")
    .replace(/dzi/g, "di")
    .replace(/ć|ci(?=[eaouęǫō])/g, "tj")
    .replace(/ci/g, "ti")

    .replace(/ś/g, "sj")
    .replace(/ź/g, "zj")
    .replace(/ń/g, "nj")

    .replace(/cji/g, "ci")
    .replace(/i(?=[eaouęǫō])/g, "j")

    .replace(/dz/g, "ʒ")

    .replace(/i/g, "ji")
    .replace(/y/g, "i")

    .replace(/sj([tm])j/g, "s$1j")

    .replace(/(?<=[ieaouęǫō])j(?![ieaouęǫō])/g, "i")
    .replace(/(?<=^|[ieaouęǫō])j(?=[ieę])/g, "")

    .normalize("NFC");

const convert1 = s =>
  s
    .toLowerCase()

    .replace(/ō/g, "ӧ")

    //.replace(/ji/g, "і")
    //y.replace(/je/g, "ѥ")
    //.replace(/ja/g, "ꙗ")
    //.replace(/jo/g, "ю")
    //.replace(/ju/g, "ѵ")
    //.replace(/ję/g, "ѩ")
    //.replace(/jǫ/g, "ѭ")

    .replace(/i/g, "и")
    .replace(/e/g, "є")
    .replace(/a/g, "а")
    .replace(/o/g, "о")
    .replace(/u/g, "у")
    .replace(/ę/g, "ѧ")
    .replace(/ǫ/g, "ѫ")

    .replace(/p/g, "п")
    .replace(/b/g, "б")
    .replace(/f/g, "ф")
    .replace(/w/g, "в")
    .replace(/m/g, "м")

    .replace(/k/g, "к")
    .replace(/g/g, "г")
    .replace(/x/g, "х")

    .replace(/t/g, "т")
    .replace(/d/g, "д")
    .replace(/s/g, "с")
    .replace(/z/g, "з")
    .replace(/n/g, "н")
    .replace(/l/g, "л")
    .replace(/r/g, "р")

    .replace(/ť/g, "ч")
    .replace(/ď/g, "џ")
    .replace(/š/g, "ш")
    .replace(/ž/g, "ж")
    .replace(/c/g, "ц")
    .replace(/ʒ/g, "ѕ")

    .replace(/j/g, "ь")
    .replace(/'/g, "ъ")

    .normalize("NFC");

const capitalize = s => s.charAt(0).toUpperCase() + s.slice(1);

const kase = s =>
  s == s.toUpperCase() ? "up" :
    s == capitalize(s) ? "cap" :
      "low";

const applyKeepCase = (s, f) =>
  ({
    up: x => x.toUpperCase(),
    low: x => x.toLowerCase(),
    cap: capitalize,
  })[kase(s)](f(s));

const replacePolishWordsKeepCase = (s, f) =>
  s.replace(/[a-pr-uwyzóęąćśźżńł]+/gi, word =>
    applyKeepCase(word, f)
  );

const replaceNewPolishWordsKeepCase = (s, f) =>
  s.replace(/[a-gi-pr-uwxzōęǫǐěǎǒǔťďšžʒ'\u030C]+/gi, word =>
    applyKeepCase(word, f)
  );
