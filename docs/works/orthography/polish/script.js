const nuOrtho = (s, cyr) => {
  let r = s
  .toLowerCase()
  .replace(/ą/g, "o\u0303")
  .replace(/ę/g, "e\u0303")
  .replace(/ó/g, "o\u0304")
  .replace(/ch/g, "x")
  .replace(/l/g,  "l\u0301")
  .replace(/ł/g,  "l")
  .replace(/dż/g, "d\u030C")
  .replace(/rz/g, "r\u0301")
  .replace(/cz/g, "c\u030C")
  .replace(/ż/g,  "g\u030C")
  .replace(/sz/g, "x\u030C")
  .normalize("NFD")
  .replace(/dz/g, "ʒ")

  .replace(/c\u0301|ci(?=[yaueo])/g, "t\u0301")
  .replace(/ʒ\u0301|ʒi(?=[yaueo])/g, "d\u0301")
  .replace(/cii/g, "t\u0301ii")
  .replace(/ʒii/g, "t\u0301ii")
  .replace(/ci/g, "t\u0301i")
  .replace(/ʒi/g, "d\u0301i")

  .replace(/(?<=[pbfwmszn])i(?=[yaueo])/g, "\u0301")
  .replace(/(?<=[pbfwmszn])ii/g, "\u0301ii")
  .replace(/(?<=[pbfwmszn])i/g, "\u0301i")

  .replace(/c(?!\u030C)/g, "c\u0301")
  .replace(/k/g, "c")
  .replace(/ʒ/g, "g\u0301")

  .replace(/i(?=[yaueo])/g, "j")
  .replace(/ji/g, "i")

  .replace(/(?<=[pbfwmsznlr]|[lrcg]\u0301)ji/g, "i")
  ;

  if(cyr)
    r = r
    .replace(/e\u0303/g, "ѧ")
    .replace(/o\u0303/g, "ѫ")

    .replace(/\u0301/g, "ь")
    .replace(/i/g, "и")
    .replace(/y/g, "ъи")
    .replace(/e/g, "є")
    .replace(/a/g, "а")
    .replace(/o/g, "о")
    .replace(/u/g, "у")
    .replace(/j/g, "й")

    .replace(/d\u030C/g, "џ")
    .replace(/g\u030C/g, "ж")
    .replace(/c\u030C/g, "ч")
    .replace(/x\u030C/g, "ш")

    .replace(/t/g, "т")
    .replace(/d/g, "д")
    .replace(/s/g, "с")
    .replace(/z/g, "з")
    .replace(/n/g, "н")
    .replace(/l/g, "л")
    .replace(/r/g, "р")

    .replace(/p/g, "п")
    .replace(/b/g, "б")
    .replace(/f/g, "ф")
    .replace(/w/g, "в")
    .replace(/m/g, "м")

    .replace(/c/g, "к")
    .replace(/g/g, "г")
    .replace(/x/g, "х")
    .replace(/h/g, "х")

    .replace(/(ь|(?<=(\s|^))й)и/g, "ꙇ")
    .replace(/(ь|(?<=(\s|^))й)а/g, "ꙗ")
    .replace(/(ь|(?<=(\s|^))й)у/g, "ю")
    .replace(/(ь|(?<=(\s|^))й)є/g, "ѣ")
    .replace(/(ь|(?<=(\s|^))й)о/g, "ѥ")
    .replace(/(ь|(?<=(\s|^))й)ѧ/g, "ѩ")
    .replace(/(ь|(?<=(\s|^))й)ѫ/g, "ѭ")
    ;

  if(document.querySelector("input[name='uppercase']").checked)
    r = r.toUpperCase();

  if(! cyr)
    r = r
    .replace(/i/g, "ı\u0301")
    .replace(/y/g, "ı")
    .replace(/j/g, "ȷ")
    ;

  return r.normalize("NFC");
}

const update = () => {
  document.getElementById("sink-lat").value =
    nuOrtho(document.getElementById("source").value, false);

  document.getElementById("sink-cyr").value =
    nuOrtho(document.getElementById("source").value, true);

  document.getElementById("tweet")
  .setAttribute("href", `https://twitter.com/intent/tweet?text=${
    encodeURIComponent(
      document.getElementById("source").value
      + "\n" + document.getElementById("sink-lat").value
      + "\n" + document.getElementById("sink-cyr").value
    )
  }`)
}

document.addEventListener("DOMContentLoaded", () => {

  for(const td of document.querySelectorAll(".nu td"))
    if(/.*?\{.*\}.*?/.test(td.innerHTML))
      td.innerHTML = td.innerHTML.replace(/^\{(.+)\}$/g, (match, p1) => `<span class="as-is">${p1}</span>`)
    else
      td.innerHTML = nuOrtho(td.innerHTML, false)

  document.getElementById("source")
  .addEventListener("input", update);

  document.getElementsByTagName("input")[0]
  .addEventListener("input", update);

  update();

  document.querySelectorAll(".add-new tr")
  .forEach(tr => {
    const td = tr.lastElementChild;
    if(td.tagName == "TD") {
      for(const cyr of [false, true]) {
        const tdNu = td.cloneNode(true);
        tdNu.innerHTML = nuOrtho(td.innerHTML, cyr);
        tr.appendChild(tdNu);
      }
    }
  })
});
