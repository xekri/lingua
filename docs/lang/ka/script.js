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

  for (const e of document.getElementsByClassName("ka"))
    e.innerHTML = `${convert[1](e.innerHTML)} (${e.innerHTML})`;
});

const table = [
  ["კ", "k'"],
  ["პ", "p'"],
  ["წ", "ŧ'"],
  ["ჭ", "ṭ'"],
  ["ტ", "t'"],
  ["ა", "a"],
  ["ბ", "b"],
  ["გ", "c"],
  ["დ", "d"],
  ["ე", "e"],
  ["ვ", "w"],
  ["ზ", "z"],
  ["თ", "t"],
  ["ი", "i"],
  ["ლ", "l"],
  ["მ", "m"],
  ["ნ", "n"],
  ["ო", "o"],
  ["ჟ", "ẓ"],
  ["რ", "r"],
  ["ს", "s"],
  ["უ", "u"],
  ["ფ", "p"],
  ["ქ", "k"],
  ["ღ", "g"],
  ["ყ", "q"],
  ["შ", "ṣ"],
  ["ჩ", "ṭ"],
  ["ც", "ŧ"],
  ["ძ", "đ"],
  ["ხ", "x"],
  ["ჯ", "ḍ"],
  ["ჰ", "h"],
  ["ჶ", "f"],
  ["ჴ", "q"],
];

const convert = [
  s => table.reduce((acc, [x, y]) => acc.replace(new RegExp(x, "gi"), y), s),
  s => table.reduce((acc, [x, y]) => acc.replace(new RegExp(y, "gi"), x), s),
]
