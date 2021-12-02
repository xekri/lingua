document.addEventListener("DOMContentLoaded", () => {
  const ts = [
    document.getElementById("0"),
    document.getElementById("1"),
  ];

  const f = i => () => {
    ts[1 - i].value = convert(ts[i].value);
  };

  for (const i of [0, 1])
    ts[i].addEventListener("input", f(i));

  f(0)();

  for (const e of document.getElementsByClassName("gr"))
    e.innerHTML = `${convert[1](e.innerHTML)} (${e.innerHTML})`;
});

const table = [
  ["eeuw", "ēU"],
  ["ieuw", "iU"],

  ["aa", "ā"],
  ["ee", "ē"],
  ["éé", "ḗ"],
  ["èè", "ḕ"],
  ["ij", "ī"],
  ["oo", "ō"],
  ["oe", "U"],
  ["ou", "oU"],
  ["au", "aU"],

  ["uu", "ǖ"],
  ["uw", "üU"],
  ["u", "ü"],

  ["U", "u"],
];

const replaceWordLower = s =>
  table.reduce(
    (acc, [x, y]) => acc.replace(new RegExp(x, "g"), y), s.normalize("NFD")
  )
    .normalize("NFC")
  ;

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
  })[kase(s)](f(s.toLowerCase()));

const replaceWordsKeepCase = (s, f) =>
  s.replace(/[a-zèé]+/gi, word =>
    applyKeepCase(word, f)
  );

const convert = s => replaceWordsKeepCase(s, replaceWordLower);