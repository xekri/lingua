const convertWord = s => s
  .toLowerCase()
  .replace(/dz/g, "ʒ")
  .replace(/dž/g, "ǯ")
  .replace(/ģ/g, "gj")
  .replace(/ķ/g, "kj")
  .replace(/ļ/g, "lj")
  .replace(/ņ/g, "nj")
  .normalize("NFC")
  ;

const capitalize = word =>
  word.charAt(0).toUpperCase() + word.slice(1);

const convertWordAll = s =>
  s.replace(/[aābcčdeēfgģhiījkķlļmnņoprsštuūvzž]+/ig, word => {
    const t =
      word == word.toUpperCase()
        ? "up"
        : word == capitalize(word)
          ? "cap"
          : "low";

    return {
      up: x => x.toUpperCase(),
      cap: capitalize,
      low: x => x,
    }[t](convertWord(
      word
        .toLowerCase()
    ));
  });

document.addEventListener("DOMContentLoaded", () => {
  const [ta0, ta1] = document.getElementsByTagName("textarea");
  const f = () => {
    ta1.value = convertWordAll(ta0.value);
  };
  ta0.addEventListener("input", f);
  f();

  for (const e of document.querySelectorAll(".la-table td, .la"))
    e.innerHTML = convert(e.innerHTML);
});