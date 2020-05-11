const nuOrtho = (s, cyr) => {
  let r = s
  .toLowerCase()

  //.replace(/dz/g, "ʒ")
  .replace(/ch/g, "x")

  .replace(/ą/g, "o\u0303")
  .replace(/ę/g, "e\u0303")
  .replace(/ó/g, "o\u0304")

  .replace(/l/g,  "l\u0301")
  .replace(/ł/g,  "l")
  .replace(/rz/g, "r\u0301")

  .replace(/dż/g, "d\u0307")

  .replace(/cz/g, "c\u0307")
  .replace(/ż/g,  "g\u0307")
  .replace(/sz/g, "x\u0307")

  .replace(/ć|ci(?=[yaueo])/g,  "t\u0301")
  .replace(/dź|dzi(?=[yaueo])/g, "d\u0301")
  .replace(/ś|si(?=[yaueo])/g,  "s\u0301")
  .replace(/ź|zi(?=[yaueo])/g,  "z\u0301")
  .replace(/ń|ni(?=[yaueo])/g,  "n\u0301")

  .replace(/ci/g,  "t\u0301y")
  .replace(/dzi/g,  "d\u0301y")

  .replace(/(?<=[bpmfwn])i(?=[yaueo])/g, "\u0301")
  .replace(/(?<=[bpmfwn])ii/g, "\u0301yj")
  .replace(/(?<=[bpmfwn])i/g, "\u0301y")

  .replace(/(?<=[sz])ii/g,  "\u0301yj")
  .replace(/(?<=[sz])i/g,  "\u0301y")

  .replace(/c(?!\u0307)/g, "c\u0301")
  .replace(/k/g, "c")
  .replace(/dz/g, "g\u0301")

  .replace(/(?<=([^\u0301]|[cg\u0301]))ji/g,  "i")

  .replace(/i(?=[yaueo])/g,  "j")
  .replace(/ii/g,  "jyj")
  .replace(/i/g,  "jy")

  .replace(/y/g, "i")
  .replace(/(?<![a-z\u0301-\u0307])j(?=i)/g, "")
  ;

  if(cyr)
    r = r
    .replace(/e\u0303/g, "ѧ")
    .replace(/o\u0303/g, "ѫ")

    .replace(/\u0301/g, "ь")
    .replace(/e/g, "є")
    .replace(/a/g, "а")
    .replace(/o/g, "о")
    .replace(/u/g, "у")
    .replace(/i/g, "и")
    .replace(/j/g, "й")

    .replace(/d\u0307/g, "џ")
    .replace(/g\u0307/g, "ж")
    .replace(/c\u0307/g, "ч")
    .replace(/x\u0307/g, "ш")

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
    .replace(/i/g, "ı")
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
      td.innerHTML = td.innerHTML.replace(/^\{|\}$/g, "")
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
