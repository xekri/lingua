const nuOrtho = s =>
  s
  .toLowerCase()

  .replace(/dž/g, "ǯ")
  //.replace(/č/g, "")
  //.replace(/š/g, "x\u030C")
  //.replace(/ž/g, "")

  .replace(/ť/g, "t́")
  .replace(/ď/g, "d́")
  //.replace(/ś/g, "s")
  //.replace(/ź/g, "z")
  .replace(/ň/g, "ń")
  .replace(/ř/g, "ŕ")
  .replace(/ľ/g, "ĺ")

  .replace(/ć/g, "ť")
  .replace(/đ/g, "ď")

  .replace(/ç/g, "ǩ")
  .replace(/ʒ/g, "ǧ")

  .replace(/ṱ/g, "tl")
  .replace(/ḓ/g, "dl")

  .replace(/ṙ/g, "r\u0304")
  .replace(/ŕ/g, "r\u0304\u0301")
  .replace(/ŀ/g, "l\u0304")
  .replace(/ĺ/g, "l\u0304\u0301")

  .replace(/ę/g, "ẽ")
  .replace(/ų/g, "õ")

  .replace(/è/g, "ĭ")
  .replace(/ò/g, "ŭ")

  .replace(/ı/g, "ĭj")

  .replace(/ý/g, "-y")
  .replace(/í/g, "-i")
  .replace(/á/g, "-a")
  .replace(/é/g, "-e")
  .replace(/ì/g, "=i")

  .replace(/c/g, "c")
  .replace(/dz/g, "ʒ")

  .replace(/v/g, "w")
  .replace(/ù/g, "v")

  .replace(/h/g, "x")
  .replace(/dz/g, "ʒ")

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
