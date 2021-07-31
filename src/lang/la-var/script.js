document.addEventListener("DOMContentLoaded", () => {
  const ts = [
    document.getElementById("0"),
    document.getElementById("1"),
  ];

  const f = () => {
    ts[1].value = applyAllKeepCase(ts[0].value, convert);
  };
  ts[0].addEventListener("input", f);

  f();

  for (const e of document.querySelectorAll("la, .las td"))
    e.innerHTML = applyAllKeepCase(e.innerHTML, convert);
});

const table = [
  ["x", "ks"],
  ["c", "k"],
  ["g", "c"],
  ["qu", "q"],
  ["ae", "ai"],
  ["oe", "oi"],
  ["ā", "ax"],
  ["ē", "ex"],
  ["ī", "ix"],
  ["ō", "ox"],
  ["ū", "ux"],
];

const convert =
  s => table.reduce((acc, [x, y]) => acc
    .replace(new RegExp(x, "g"), y),
    s.toLowerCase()
  ).normalize("NFC");

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

const applyAllKeepCase = (s, f) =>
  s.replace(/[a-zāēīōū]+/g, word =>
    applyKeepCase(word, f)
  );
