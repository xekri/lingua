const nuOrtho = s =>
  s
  .toLowerCase()

  // pre
  .replace(/ch/g, "x")

  // main
  .replace(/ą/g, "õ")
  .replace(/ę/g, "ẽ")
  .replace(/ó/g, "ō")

  .replace(/ci(?=[aeoyuõẽō])|c(?=i)|ć/g,    "t́")
  .replace(/dzi(?=[aeoyuõẽō])|dz(?=i)|dź/g, "d́")
  .replace(/si(?=[aeoyuõẽō])|s(?=i)/g,      "ś")
  .replace(/zi(?=[aeoyuõẽō])|z(?=i)/g,      "ź")
  .replace(/ni(?=[aeoyuõẽō])|n(?=i)/g,      "ń")

  .replace(/pi(?=[aeoyuõẽō])|p(?=i)/g,      "ṕ")
  .replace(/bi(?=[aeoyuõẽō])|b(?=i)/g,      "b́")
  .replace(/fi(?=[aeoyuõẽō])|f(?=i)/g,      "f́")
  .replace(/wi(?=[aeoyuõẽō])|w(?=i)/g,      "ẃ")
  .replace(/mi(?=[aeoyuõẽō])|m(?=i)/g,      "ḿ")

  .replace(/l/g,  "ĺ")
  .replace(/ł/g,  "l")
  .replace(/rz/g, "ŕ")

  .replace(/dż/g, "ď")

  .replace(/cz/g, "ǩ")
  .replace(/ż/g,  "ǧ")
  .replace(/sz/g, "x̌")

  .replace(/c/g,  "ḱ")
  .replace(/dz/g, "ǵ")

  //.replace(/h/g, "x")
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
