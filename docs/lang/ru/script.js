const log = x => {
  console.log(x);
  return x;
};

const wordRe = "[\u0430-\u044f\u0451]+";

const replacements = [
  [/(?<=[гкхжчшщ])и/g, "ы"],

  [/э/g, "е"],
  [/я/g, "ꙗ"],
  [/ю/g, "ꙕ"],
  [/и/g, "і"],
  [/ы/g, "ꙑ"],
];

document.addEventListener("DOMContentLoaded", () => {
  const t0 = document.getElementById("0");
  const t1 = document.getElementById("1");

  const onInput = () => {
    t1.value = replaceWordsKeepCase(t0.value, convert);
  };

  t0.addEventListener("input", onInput);

  for (const e of document.querySelectorAll("[data-ru]"))
    e.innerHTML = replaceWordsKeepCase(e.getAttribute("data-ru"), convert);

  onInput();
});

const convert = s =>
  replacements.reduce(
    (acc, [x, y]) =>
      acc.replace(x, y),
    s
      .toLowerCase()
      .normalize("NFC")
  );

const capitalize = s => s.charAt(0).toUpperCase() + s.slice(1);

const kase = s =>
  s == s.toUpperCase() ? "up" :
    s == capitalize(s) ? "cap" :
      "low";

const applyKeepCase = (s, f) =>
  ({
    up: x => x.toUpperCase(),
    low: x => x.toLowerCase(),
    cap: capitalize,
  })[kase(s)](f(s));

const replaceWordsKeepCase = (s, f) =>
  s.replace(new RegExp(wordRe, "giu"), word =>
    applyKeepCase(word, f)
  );
