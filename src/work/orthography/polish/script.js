const nuOrtho = s => {
  let r = s
  .toLowerCase()

  // rom to rom (simple)
  .replace(/ę/g, "ẽ")
  .replace(/ą/g, "õ")
  .replace(/ó/g, "о̄")

  .replace(/cz/g, "č")
  .replace(/ż/g,  "ž")
  .replace(/sz/g, "š")
  .replace(/rz/g, "ř")
  .replace(/l/g, "ľ")
  .replace(/ł/g, "l")

  .replace(/dz/g, "ʒ")
  .replace(/dž/g, "ǯ")

  .replace(/ch|h/g, "x")

  // rom to rom (complex)
  .replace(/(?<![a-zẽõо̄čžšʒǯ])i/g, "y")
  .replace(/ć|c(i(?=[yeaouẽõо̄])|(?=i))/g, "ть")
  .replace(/dź|ʒ(i(?=[yeaouẽõо̄])|(?=i))/g, "дь")
  .replace(/ś|s(i(?=[yeaouẽõо̄])|(?=i))/g, "сь")
  .replace(/ź|z(i(?=[yeaouẽõо̄])|(?=i))/g, "зь")
  .replace(/ń|n(i(?=[yeaouẽõо̄])|(?=i))/g, "нь")

  .replace(/ľ/g,  "ль")
  .replace(/ř/g, "рь")

  .replace(/(?<=[pbfwmkgx])i(?=[yaueoẽõо̄])/g, "ь")

  .replace(/i(?=[yaueoẽõо̄])/g, "j")
  .replace(/(?<![ьij])i/g, "ji")

  .replace(/y/g, "i")

  // rom to cyr (simple)
  .replace(/(?<=[szcʒr])j/g, "й")
  .replace(/j(?![ieaouẽõо̄])/g, "й")
  .replace(/j/g, "ь")

  .replace(/i/g, "и")
  .replace(/e/g, "є")
  .replace(/a/g, "а")
  .replace(/o/g, "о")
  .replace(/u/g, "у")

  .replace(/ẽ/g, "ѧ")
  .replace(/õ/g, "ѫ")
  .replace(/о̄/g, "о̄")

  .replace(/ьи/g, "і")
  .replace(/ьа/g, "я")
  .replace(/ьу/g, "ю")
  .replace(/ьє/g, "ѥ")
  .replace(/ьо/g, "е")
  .replace(/ьѧ/g, "ѩ")
  .replace(/ьѫ/g, "ѭ")
  .replace(/ьо̄/g, "е̄")

  .replace(/t/g, "т")
  .replace(/d/g, "д")
  .replace(/s/g, "с")
  .replace(/z/g, "з")
  .replace(/n/g, "н")
  .replace(/l/g, "л")
  .replace(/r/g, "р")

  .replace(/c/g, "ц")
  .replace(/ʒ/g, "ѕ")

  .replace(/ǯ/g, "џ")//җ
  .replace(/č/g, "ч")
  .replace(/ž/g, "ж")
  .replace(/š/g, "ш")

  .replace(/p/g, "п")
  .replace(/b/g, "б")
  .replace(/f/g, "ф")
  .replace(/w/g, "в")
  .replace(/m/g, "м")

  .replace(/k/g, "к")
  .replace(/g/g, "г")
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
