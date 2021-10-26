const log = x => {
  console.log(x);
  return x;
};

document.addEventListener("DOMContentLoaded", () => {
  const [t0, t1, t2] = document.getElementsByTagName("textarea");
  const input = document.getElementsByTagName("input")[0];

  const onInput = () => {
    t1.value = replacePolishWordsKeepCase(t0.value, convert0);
    t2.value = replaceNewPolishWordsKeepCase(t1.value, x => convert1(x, input.checked));

    for (const e of document.querySelectorAll("[data-pl]"))
      e.innerHTML = replaceNewPolishWordsKeepCase(replacePolishWordsKeepCase(e.getAttribute("data-pl"), convert0), x => convert1(x, input.checked));
  };

  for (const e of [input, t0])
    e.addEventListener("input", onInput);

  onInput();

  for (const e of document.querySelectorAll(".pl, .pl-table td"))
    e.innerHTML = replaceNewPolishWordsKeepCase(replacePolishWordsKeepCase(e.innerHTML, convert0), x => convert1(x, input.checked));
})

const convert0 = s =>
  s
    .toLowerCase()
    .replace(/ó/g, "ō")
    .replace(/ch/g, "x")
    .replace(/w/g, "v")
    .replace(/sz/g, "š")
    .replace(/cz/g, "č")
    .replace(/dż/g, "ǯ")
    .replace(/ż/g, "ž")
    .replace(/(?<=[čǯšž])y/, "i")

    .replace(/l/g, "lj")
    .replace(/lji/g, "li")
    .replace(/ł/g, "l")
    .replace(/rzy/g, "ri")
    .replace(/rz/g, "rj")

    .replace(/(?<=[sz])j/g, "'j")

    .replace(/dź|dzi(?=[eaouęąō])/g, "dj")
    .replace(/dzi/g, "di")
    .replace(/ć|ci(?=[eaouęąō])/g, "tj")
    .replace(/ci/g, "ti")

    .replace(/ś/g, "sj")
    .replace(/ź/g, "zj")
    .replace(/ń/g, "nj")

    .replace(/cji/g, "ci")
    .replace(/i(?=[eaouęąō])/g, "j")

    .replace(/dz/g, "ʒ")

    .replace(/i/g, "ji")
    .replace(/y/g, "i")

    .replace(/sj([tm])j/g, "s$1j")

    //.replace(/(?<=[ieaouęąō])j(?![ieaouęąō])/g, "i")
    //.replace(/(?<=^|[ieaouęąō])j(?=[ieę])/g, "")

    .normalize("NFC");

const convert1 = (s, iotate) =>
  s
    .toLowerCase()

    .replace(/ō/g, "ѡ")

    .replace(/ji/g, x => iotate ? "і" : x)
    .replace(/je/g, x => iotate ? "ѥ" : x)
    .replace(/ja/g, x => iotate ? "ꙗ" : x)
    .replace(/jo/g, x => iotate ? "ю" : x)
    .replace(/ju/g, x => iotate ? "ѵ" : x)
    .replace(/ję/g, x => iotate ? "ѩ" : x)
    .replace(/ją/g, x => iotate ? "ѭ" : x)

    .replace(/i/g, x => iotate ? "ꙑ" : "и")
    .replace(/e/g, "є")
    .replace(/a/g, "а")
    .replace(/o/g, "о")
    .replace(/u/g, "у")
    .replace(/ę/g, "ѧ")
    .replace(/ą/g, "ѫ")

    .replace(/p/g, "п")
    .replace(/b/g, "б")
    .replace(/f/g, "ф")
    .replace(/v/g, "в")
    .replace(/m/g, "м")

    .replace(/k/g, "к")
    .replace(/g/g, "г")
    .replace(/x/g, "х")
    .replace(/h/g, "ғ")

    .replace(/t/g, "т")
    .replace(/d/g, "д")
    .replace(/s/g, "с")
    .replace(/z/g, "з")
    .replace(/n/g, "н")
    .replace(/l/g, "л")
    .replace(/r/g, "р")

    .replace(/č/g, "ч")
    .replace(/ǯ/g, "џ")
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
  s.replace(/[a-pr-vxzōęąʒǐěǎǒǔťďčǯšž'\u030C]+/gi, word =>
    applyKeepCase(word, f)
  );
