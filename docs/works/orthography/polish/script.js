const nuOrtho = (s, cyl) => {
  let r = s
  .toLowerCase()

  .replace(/ch/g, "x")

  .replace(/ą/g, "õ")
  .replace(/ę/g, "ẽ")
  .replace(/ó/g, "ō")
  .replace(/i/g, "í")
  .replace(/y/g, "i")

  .replace(/ć/g,  "t’")
  .replace(/dź/g, "d’")
  .replace(/ś/g,  "s’")
  .replace(/ź/g,  "z’")
  .replace(/ń/g,  "n’")
  .replace(/(?<![aeoyuõẽō])i(?=[aeoyuõẽō])/g, "’")

  .replace(/pi(?=[aeoyuõẽō])/g, "p’")
  .replace(/bi(?=[aeoyuõẽō])/g, "b’")
  .replace(/fi(?=[aeoyuõẽō])/g, "f’")
  .replace(/wi(?=[aeoyuõẽō])/g, "w’")
  .replace(/mi(?=[aeoyuõẽō])/g, "m’")

  .replace(/l/g,  "l’")
  .replace(/ł/g,  "l")
  .replace(/rz/g, "r’")

  .replace(/dż/g, "d\u0307")

  .replace(/cz/g, "k\u0307")
  .replace(/ż/g,  "g\u0307")
  .replace(/sz/g, "x\u0307")

  .replace(/c/g,  "k’")
  .replace(/dz/g, "g’")
  ;

  if(cyl)
    r = r
    .replace(/’/g, "ь")
    .replace(/e/g, "е")
    .replace(/a/g, "а")
    .replace(/u/g, "у")
    .replace(/ẽ/g, "ѧ")
    .replace(/õ/g, "ѫ")
    .replace(/i/g, "ы")
    .replace(/í/g, "и")
    .replace(/j/g, "й")

    .replace(/d\u0307/g, "џ")
    .replace(/g\u0307/g, "ж")
    .replace(/k\u0307/g, "ч")
    .replace(/x\u0307/g, "ш")

    .normalize("NFD")
    .replace(/o/g, "о")

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

    .replace(/k/g, "к")
    .replace(/g/g, "г")
    .replace(/x/g, "х")
    .replace(/h/g, "х")
    ;

  if(document.querySelector("input[name='uppercase']").checked)
    r = r.toUpperCase();

  r = r
  .replace(/i/g, "ı")
  .replace(/j/g, "ȷ")
  ;

  return r.normalize("NFC");
}

const update = () => {
  document.getElementById("sink-lat").value =
    nuOrtho(document.getElementById("source").value, false);

  document.getElementById("sink-cyl").value =
    nuOrtho(document.getElementById("source").value, true);

}

document.addEventListener("DOMContentLoaded", () => {

  for(const td of document.querySelectorAll(".nu td"))
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
      for(const cyl of [false, true]) {
        const tdNu = td.cloneNode(true);
        tdNu.innerHTML = nuOrtho(td.innerHTML, cyl);
        tr.appendChild(tdNu);
      }
    }
  })
});
