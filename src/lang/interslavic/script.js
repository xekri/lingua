const convert = s => s
  .toLowerCase()
  .normalize("NFC")
  .replace(/å/g, "ꜵ")
  .replace(/ć/g, "ŧ")
  .replace(/č/g, "ṭ")
  .replace(/d́/g, "dj")
  //.replace(/đ/g, "")
  .replace(/dž/g, "ḍ")
  .replace(/ė/g, "ĭ")
  .replace(/ě/g, "æ")
  .replace(/h/g, "x")
  .replace(/ĺ/g, "lj")
  .replace(/ń/g, "nj")
  .replace(/ȯ/g, "ŭ")
  .replace(/ŕ/g, "rj")
  .replace(/ś/g, "sj")
  .replace(/š/g, "ṣ")
  .replace(/t́/g, "tj")
  //.replace(/ų/g, "ǫ")
  .replace(/v/g, "w")
  .replace(/ź/g, "zj")
  .replace(/ž/g, "ẓ")

/*
.replace(/a/g, "а")
.replace(/ꜵ/g, "о")
.replace(/c/g, "ц")
.replace(/ŧ/g, "щ")
.replace(/ṭ/g, "ч")
.replace(/dj/g, "дй")
.replace(/d/g, "д")
.replace(/đ/g, "җ")
.replace(/ḍ/g, "ђ")
.replace(/e/g, "є")
.replace(/ę/g, "ѧ")
.replace(/ĭ/g, "ь")
.replace(/æ/g, "ѣ")
.replace(/f/g, "ф")
.replace(/g/g, "г")
.replace(/x/g, "х")
.replace(/i/g, "йи")
.replace(/k/g, "к")
.replace(/lj/g, "лй")
.replace(/l/g, "л")
.replace(/m/g, "м")
.replace(/nj/g, "нй")
.replace(/n/g, "н")
.replace(/o/g, "о")
.replace(/ŭ/g, "ъ")
.replace(/p/g, "п")
.replace(/rj/g, "рй")
.replace(/r/g, "р")
.replace(/sj/g, "сй")
.replace(/s/g, "с")
.replace(/ṣ/g, "ш")
.replace(/tj/g, "тй")
.replace(/t/g, "т")
.replace(/u/g, "у")
.replace(/ų/g, "ѫ")
.replace(/w/g, "в")
.replace(/y/g, "и")
.replace(/zj/g, "зй")
.replace(/z/g, "з")
.replace(/ẓ/g, "ж")
.replace(/j/g, "й")

.replace(/йи/g, "і")
.replace(/йа/g, "ꙗ")
.replace(/йє/g, "ѥ")
.replace(/йѧ/g, "ѩ")
.replace(/йо/g, "ю")
.replace(/йu/g, "ѵ")
.replace(/йų/g, "ѭ")
*/

document.addEventListener("DOMContentLoaded", () => {
  const [ta0, ta1] = document.querySelectorAll("textarea");

  const f = () => {
    ta1.value = convert(ta0.value);
  };

  ta0.addEventListener("input", f);
  f();

  for (const td of document.querySelectorAll(".isv, .isv-tds td"))
    td.innerHTML = convert(td.innerHTML);
});
