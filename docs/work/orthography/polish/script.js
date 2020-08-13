const nuOrtho = s => {
  let r = s
  .toLowerCase()

  .replace(/ę/g, "ѧ")
  .replace(/ą/g, "ѫ")
  .replace(/ó/g, "u")

  .replace(/cz/g, "ч")
  .replace(/ż/g,  "ж")
  .replace(/sz/g, "ш")
  .replace(/ch|h/g, "х")
  .replace(/k/g, "к")
  .replace(/g/g, "г")
  .replace(/p/g, "п")
  .replace(/b/g, "б")
  .replace(/f/g, "ф")
  .replace(/w/g, "в")
  .replace(/m/g, "м")

  //.replace(/(?<=[чшж])y/g, "i")

  .replace(/l/g, "ль")
  .replace(/ł(?=i)/g, "лъ")
  .replace(/льi/g, "лi")
  .replace(/ł/g, "л")

  .replace(/rz/g, "rь")
  .replace(/r(?=i)/g, "rъ")
  .replace(/rьi/g, "ri")
  .replace(/r/g, "р")

  .replace(/(?<=[td])(?=i)/g, "ъ")
  .replace(/ć|c(i(?=[yeaouѧѫ]))/g, "tь")
  .replace(/c(?=i)/g, "t")
  .replace(/dź|dz(i(?=[yeaouѧѫ]))/g, "dь")
  .replace(/dz(?=i)/g, "d")

  .replace(/(?<=c)ji/g, "i")
  //.replace(/(?<=c)j/g, "i")
  .replace(/(?<=[sz])ji/g, "ъi")
  .replace(/(?<=[sz])j/g, "ъj")

  .replace(/ś|s(i(?=[yeaouѧѫ]))/g, "sь")
  .replace(/ź|z(i(?=[yeaouѧѫ]))/g, "zь")
  .replace(/ń|n(i(?=[yeaouѧѫ]))/g, "nь")

  .replace(/t/g, "т")
  .replace(/d/g, "д")
  .replace(/s/g, "с")
  .replace(/z/g, "з")
  .replace(/n/g, "н")
  .replace(/c/g, "ц")

  .replace(/(?<=[пбфвмкгх])i(?=[yaueoѧѫ])/g, "ь")
  //.replace(/i(?=[yaueoѧѫо̄])/g, "j")

  // rom to cyr (simple)
  .replace(/(?<=[тдрл])j/g, "ъь")
  .replace(/j(?![ieaouѧѫ])/g, "й")
  .replace(/j/g, "ь")

  //.replace(/(?<=[сз])ьр/g, "рь")
  //.replace(/ь(?=.ь)/g, "")

  .replace(/i/g, "ꙇ")//иі
  .replace(/y/g, "ꙑ")//ы ъи
  .replace(/e/g, "є")
  .replace(/a/g, "а")
  .replace(/o/g, "о")
  .replace(/u/g, "у")

  .replace(/ьа/g, "ꙗ")
  .replace(/ьу/g, "ѵ")//ю
  .replace(/ьє/g, "ѥ")//е
  .replace(/ьо/g, "ю")//ë
  .replace(/ьѧ/g, "ѩ")
  .replace(/ьѫ/g, "ѭ")

.normalize("NFC")
  ;

  if(! document.getElementById("cyrillic").checked) {
    r = r
    .replace(/ч/g, "č")
    .replace(/ж/g, "ž")
    .replace(/ш/g, "š")

    .replace(/ц/g, "ĉ")

    .replace(/к/g, "c")
    .replace(/г/g, "g")
    .replace(/х/g, "x")

    .replace(/п/g, "p")
    .replace(/б/g, "b")
    .replace(/ф/g, "f")
    .replace(/в/g, "w")
    .replace(/м/g, "m")

    .replace(/т/g, "t")
    .replace(/д/g, "d")
    .replace(/с/g, "s")
    .replace(/з/g, "z")
    .replace(/н/g, "n")
    .replace(/л/g, "l")
    .replace(/р/g, "r")

    .replace(/[ꙑы]/g, "i")
    .replace(/є/g, "e")
    .replace(/а/g, "a")
    .replace(/о/g, "o")
    .replace(/у/g, "u")
    .replace(/ѧ/g, "ę")//ẽ
    .replace(/ѫ/g, "ǫ")//õ

    .replace(/[ꙇиі]/g, "ǐ")//ji
    .replace(/ꙗ/g, "ja")
    .replace(/ѵ/g, "ju")
    .replace(/ѥ/g, "ě")//je
    .replace(/ю/g, "jo")
    .replace(/ѩ/g, "ę\u030C")//ję
    .replace(/ѭ/g, "jǫ")

    //.replace(/(?<![čžšĉcgxpbfwmtdsznlr])j([iyueoaęǫ])/g, "$1\u030C")

    .replace(/[ьй]/g, "j")
    .replace(/ъ/g, "'")
    //.replace(/(?<=[čžš])'(?=[ie])/g, "")

    .normalize("NFC")
    ;
  }

  if(document.getElementById("uppercase").checked)
    r = r.toUpperCase()
  return r;
}

const update = () => {
  console.log("!")

  /*
  document.getElementById("sink-lat").value =
    nuOrtho(document.getElementById("source").value, false);
  */

  document.getElementById("sink-cyr").value =
    nuOrtho(document.getElementById("source").value);

  document.getElementById("tweet")
  .setAttribute("href", `https://twitter.com/intent/tweet?text=${
    encodeURIComponent(
      document.getElementById("source").value
      //+ "\n" + document.getElementById("sink-lat").value
      + "\n" + document.getElementById("sink-cyr").value
    )
  }`)
}

document.addEventListener("DOMContentLoaded", () => {
  for(const td of document.querySelectorAll(".nu td"))
    if(/.*?\{.*\}.*?/.test(td.innerHTML))
      td.innerHTML = td.innerHTML.replace(/^\{(.+)\}$/g, (match, p1) => `<span class="as-is">${p1}</span>`)
    else
      td.innerHTML = nuOrtho(td.innerHTML) + `<br/><span class='original'>${td.innerHTML}</span>`

  for(const e of document.getElementsByClassName("trigger"))
    e.addEventListener("input", update);

  update();

  document.querySelectorAll(".add-new tr")
  .forEach(tr => {
    const td = tr.lastElementChild;
    if(td.tagName == "TD") {
      const tdNu = td.cloneNode(true);
      tdNu.innerHTML = nuOrtho(td.innerHTML);
      tr.appendChild(tdNu);
    }
  });
});
