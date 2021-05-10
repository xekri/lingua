document.addEventListener("DOMContentLoaded", () => {
  for (const tr of document.querySelectorAll("#vocabulary tr")) {
    const td = tr.children[1];
    td.textContent = td.textContent
      .normalize("NFC")

      .replace(/c/g, "č")
      .replace(/ṭ/g, "c")
      .replace(/j/g, "ǯ")
      .replace(/ḍ/g, "ʒ")
      .replace(/[ṅñṇ]/g, "ŋ")
      .replace(/y/g, "j")
      .replace(/ś/g, "š")
      .replace(/s/g, "þ")
      .replace(/ṣ/g, "s")

      .replace(/(?<=[kčctp])h/g, "x")

      .replace(/e/g, "ë")
      .replace(/ai/g, "e")
      .replace(/au/g, "ö")

      .replace(/a/g, "a")
      .replace(/ā/g, "ä")
      .replace(/i/g, "ï")
      .replace(/ī/g, "i")
      .replace(/ū/g, "ü")
      .replace(/ṛ/g, "r")
      .replace(/ḷ/g, "l")
      .replace(/ṝ/g, "rr")
      .replace(/ḹ/g, "ll")

      .replace(/ṁ/g, "n")
      .replace(/ḥ/g, "x");
  }

});