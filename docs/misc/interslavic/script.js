const myOrtho = s =>
  s
  .toLowerCase()

  .replace(/š/g, "ᶊ")
  .replace(/ž/g, "ᶎ")
  .replace(/č/g, "ꞔ")

  .replace(/dz/g, "ʣ") //ǳ
  .replace(/dᶎ/g, "ʤ") //ǆ

  //.replace(/v/g, "v")
  .replace(/ù/g, "w")
  .replace(/h/g, "x")
  //.replace(/dz/g, "q")
  //.replace(/dž/g, "q̌")

  //.replace(/ť/g, "t")
  //.replace(/ď/g, "d")
  .replace(/ś/g, "š")
  .replace(/ź/g, "ž")
  //.replace(/ň/g, "n")
  //.replace(/ř/g, "r")
  //.replace(/ľ/g, "l")

  .replace(/ć/g, "t́")
  .replace(/đ/g, "d́")
  .replace(/ç/g, "ḱ")
  .replace(/ʒ/g, "ǵ")

  .replace(/ę/g, "ẽ")
  .replace(/ų/g, "õ")

  .replace(/i/g, "ji")

  .normalize("NFD")
  //.replace(/i/g, "ji")
  //.replace(/y/g, "i")

  //.replace(/i/g, "ı")
  .replace(/j/g, "ȷ")
  .normalize("NFC")
  ;

document.addEventListener("DOMContentLoaded", () => {

  document.getElementById("source")
  .addEventListener("input", event => {
    document.getElementById("sink").value =
      myOrtho(event.srcElement.value)
    });

  document.querySelectorAll("#vocabulary tbody tr")
  .forEach(tr => {
    const td = tr.lastElementChild.cloneNode(true);
    console.assert(td.tagName === "TD");
    td.innerHTML = myOrtho(td.innerHTML)
    tr.appendChild(td)
  })

});
