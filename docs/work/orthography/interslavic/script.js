const nuOrtho = s =>
  s
  .toLowerCase()

  .replace(/v/g, "w")
  .replace(/h/g, "x")
  .replace(/i/g, "jy")
  .replace(/y/g, "i")

  .replace(/č/g, "c\u0307")
  .replace(/š/g, "x\u0307")
  .replace(/ž/g, "g\u0307")

  .replace(/ť/g, "tj")
  .replace(/ď/g, "dj")
  .replace(/ś/g, "sj")
  .replace(/ź/g, "zj")
  .replace(/ň/g, "nj")
  .replace(/ř/g, "rj")
  .replace(/ľ/g, "lj")

  .replace(/ć/g, "t\u0301")
  .replace(/đ/g, "d\u0301")

  .replace(/ç/g, "c\u0301")
  .replace(/ʒ/g, "g\u0301")

  //.replace(/ṱ/g, "t\u0306")
  //.replace(/ḓ/g, "d\u0306")

  .replace(/ṙ/g, "r\u0304")
  .replace(/ŕ/g, "r\u0304j")
  .replace(/ŀ/g, "l\u0304")
  .replace(/ĺ/g, "l\u0304j")

  .replace(/ę/g, "e\u0303")
  .replace(/ų/g, "o\u0303")

  .replace(/è/g, "i\u0306")
  .replace(/ò/g, "u\u0306")

  .replace(/ı/g, "i\u0306’")

  .replace(/å/g, "ꜵ")
  .replace(/ě/g, "æ")

  .replace(/ý/g, "-y")
  .replace(/í/g, "-i")
  .replace(/á/g, "-a")
  .replace(/é/g, "-e")
  .replace(/ì/g, "=i")

  .replace(/c(?![\u0301-\u0308])/g, "c\u0308")
  .replace(/k/g, "c")

  //.replace(/e/g, "jo")

  .replace(/i/g, "ı")
  .replace(/j/g, "ȷ")
  ;

const update = () => {
  document.getElementById("sink").value =
    nuOrtho(document.getElementById("source").value);
}

document.addEventListener("DOMContentLoaded", () => {

  document.getElementById("source")
  .addEventListener("input", update);

  update();

  document.querySelectorAll(".add-new tr")
  .forEach(tr => {
    const td = tr.lastElementChild.cloneNode(true);
    if(td.tagName == "TD") {
      td.innerHTML = nuOrtho(td.innerHTML);
      tr.appendChild(td);
    }
  })

});
