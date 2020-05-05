const nuOrtho = s =>
  s
  .toLowerCase()

  .replace(/ę/g, "ẽ")
  .replace(/ų/g, "õ")

  .replace(/ť/g, "t́")
  .replace(/ď/g, "d́")

  .replace(/ć/g, "ť")
  .replace(/đ/g, "ď")

  .replace(/č/g, "ǩ")
  .replace(/dž/g, "ǯ")
  .replace(/ž/g, "ǧ")

  .replace(/ç/g, "ḱ") //k̂
  .replace(/ʒ/g, "ǵ") //ĝ

  .replace(/c/g, "c")
  .replace(/dz/g, "ʒ")

  .replace(/h/g, "x")
  //.replace(/i/g, "ı")
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
