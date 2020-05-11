const nuOrtho = s =>
  s
  .toLowerCase()

  // pre
  .replace(/ch/g, "x")

  // main
  .replace(/ą/g, "õ")
  .replace(/ę/g, "ẽ")
  .replace(/ó/g, "ō")

  .replace(/ć|ci(?=[aeoyuõẽō])/g,   "t́")
  .replace(/dź|dzi(?=[aeoyuõẽō])/g, "d́")
  .replace(/si(?=[aeoyuõẽō])/g,     "ś")
  .replace(/zi(?=[aeoyuõẽō])/g,     "ź")
  .replace(/ni(?=[aeoyuõẽō])/g,     "ń")

  .replace(/l/g,  "ĺ")
  .replace(/ł/g,  "l")
  .replace(/rz/g, "ŕ")

  .replace(/dż/g, "ď")

  .replace(/cz/g, "ǩ")
  .replace(/ż/g,  "ǧ")
  .replace(/sz/g, "x̌")

  .replace(/c/g,  "ḱ")
  .replace(/dz/g, "ǵ")

  .replace(/h/g, "x")
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
