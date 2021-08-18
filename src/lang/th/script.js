document.addEventListener("DOMContentLoaded", () => {
  const ts = [
    document.getElementById("0"),
    document.getElementById("1"),
  ];

  const f = i => () => {
    ts[1 - i].value = convert[i](ts[i].value);
  };

  for (const i of [0, 1])
    ts[i].addEventListener("input", f(i));

  f(0)();

  for (const e of document.getElementsByClassName("gr"))
    e.innerHTML = `${convert[1](e.innerHTML)} (${e.innerHTML})`;
});

const table = [
  ["ก", "k"],
  ["ข", "kx"],
  ["ค", "c"],
  ["ฆ", "ch"],
  ["ง", "g"],
  ["ห", "x"],
  ["อ", "q"],
  ["ฮ", "h"],

  ["จ", "ᶄ"],
  ["ฉ", "ᶄx"],
  ["ช", "ꞔ"],
  ["ฌ", "ꞔh"],
  ["ญ", "ᶃ"],
  ["ย", "j"],
  ["ศ", "ᶍ"],

  ["ฎ", "ʈ"],
  ["ฏ", "ʈ"],
  ["ฐ", "ʈx"],
  ["ฑ", "ɖ"],
  ["ฒ", "ɖh"],
  ["ณ", "ɳ"],
  ["ร", "r"],
  ["ษ", "ʂ"],

  ["ด", "t"],
  ["ต", "t"],
  ["ถ", "tx"],
  ["ท", "d"],
  ["ธ", "dh"],
  ["น", "n"],
  ["ล", "l"],
  ["ส", "s"],
  ["ฬ", "ḷ"],

  ["บ", "p"],
  ["ผ", "px"],
  ["พ", "b"],
  ["ภ", "bh"],
  ["ม", "m"],
  ["ว", "v"],

  ["า", "ā"],
  ["\u0e25", "i"],
  ["\u0e34", "ī"],
];

const convert = [
  s => table.reduce((acc, [x, y]) => acc
    .replace(new RegExp(x, "g"), y)
    .replace(new RegExp(x.toUpperCase(), "g"), y.toUpperCase()),
    s.normalize("NFD"))
    .normalize("NFC"),
  s => table.reduce((acc, [x, y]) => acc
    .replace(new RegExp(y, "g"), x)
    .replace(new RegExp(y.toUpperCase(), "g"), x.toUpperCase()),
    s.normalize("NFD"))
    .normalize("NFC"),
];
