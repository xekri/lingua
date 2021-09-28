const convertWord = w => w
  .toLowerCase()
  .normalize("NFC")

  .replace(/å/g, "ꜵ")
  .replace(/ć/g, "ŧ")
  .replace(/d\u0301/g, "dĭ")
  .replace(/dz/g, "ʒ")
  .replace(/dž/g, "ď")
  .replace(/ě/g, "æ")
  .replace(/h/g, "x")
  .replace(/ĺ/g, "lĭ")
  .replace(/ń/g, "nĭ")
  .replace(/ŕ/g, "rĭ")
  .replace(/ś/g, "sĭ")
  .replace(/š/g, "ẋ")
  .replace(/t\u0301/g, "tĭ")
  .replace(/ų/g, "ǫ")
  .replace(/v/g, "w")
  .replace(/ź/g, "zĭ")

  .replace(/^i/g, "y")
  .replace(/i/g, "jy")
  .replace(/y/g, "i")

  .replace(/^j(?=[ieę])/g, "")
  //.replace(/(?<=[yiuaꜵæeoĕŏęǫ])j(?=[eę])/g, "")

  .replace(/a/g, "а")
  .replace(/ꜵ/g, "а")
  .replace(/b/g, "б")
  .replace(/c/g, "ц")
  .replace(/ŧ/g, "щ")
  .replace(/č/g, "ч")
  .replace(/d/g, "д")
  .replace(/đ/g, "җ")
  .replace(/ď/g, "ђ")
  .replace(/e/g, "є")
  .replace(/ė/g, "ь")
  .replace(/ę/g, "ѧ")
  .replace(/ĭ/g, "ь")
  .replace(/æ/g, "ѣ")
  .replace(/f/g, "ф")
  .replace(/g/g, "г")
  .replace(/x/g, "х")
  .replace(/i/g, "и")
  .replace(/k/g, "к")
  .replace(/l/g, "л")
  .replace(/m/g, "м")
  .replace(/n/g, "н")
  .replace(/o/g, "о")
  .replace(/ȯ/g, "ъ")
  .replace(/ŭ/g, "ъ")
  .replace(/p/g, "п")
  .replace(/r/g, "р")
  .replace(/s/g, "с")
  .replace(/š/g, "ш")
  .replace(/t/g, "т")
  .replace(/u/g, "у")
  .replace(/ǫ/g, "ѫ")
  .replace(/w/g, "в")
  .replace(/z/g, "з")
  .replace(/ž/g, "ж")
  .replace(/j/g, "й")

  .replace(/йи/g, "і")
  .replace(/йа/g, "ꙗ")
  .replace(/йє/g, "ѥ")
  .replace(/йѧ/g, "ѩ")
  .replace(/йо/g, "ю")
  .replace(/йu/g, "ѵ")
  .replace(/йų/g, "ѭ")
  ;

const capitalize = w =>
  w.slice(0, 1).toUpperCase() + w;

const kase = w =>
  w == w.toUpperCase()
    ? "up"
    : w == capitalize(w)
      ? "cap"
      : "low"
  ;

const applyCase = (c, w) =>
  ({
    up: x => x.toUpperCase(),
    cap: capitalize,
    low: x => x.toLowerCase(),
  })[c](w);

const convertWordWithCase = w =>
  applyCase(kase(w), convertWord(w));

const convertText = s => s
  .normalize("NFC")
  .replace(/[a-zěęųåėȯćđčžšĺńŕśź\u0301]+/ig, convertWordWithCase);

document.addEventListener("DOMContentLoaded", () => {
  const [ta0, ta1] = document.querySelectorAll("textarea");

  const f = () => {
    ta1.value = convertText(ta0.value);
  };

  ta0.addEventListener("input", f);
  f();

  for (const td of document.querySelectorAll(".isv, .isv-tds td"))
    td.innerHTML = convertText(td.innerHTML);
});
