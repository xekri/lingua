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

  .replace(/i/g, "и")
  .replace(/y/g, "ы")//ꙑ ъи
  .replace(/e/g, "э")
  .replace(/a/g, "а")
  .replace(/o/g, "о")
  .replace(/u/g, "у")

  .replace(/ьа/g, "я")
  .replace(/ьу/g, "ю")
  .replace(/ьэ/g, "е")
  .replace(/ьо/g, "ë")
  .replace(/ьѧ/g, "ѩ")
  .replace(/ьѫ/g, "ѭ")
  ;

  r = r.normalize("NFC")

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
