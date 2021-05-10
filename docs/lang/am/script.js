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
    e.innerHTML = convert[1](e.innerHTML);
});

const table = [
  ["ա", "a"],
  ["բ", "b"],
  ["գ", "g"],
  ["դ", "d"],
  ["ե", "e"],
  ["զ", "z"],
  ["է", "ē"],
  ["ը", "ə"],
  ["թ	", "t'"],
  ["ժ", "ž"],
  ["ի", "i"],
  ["լ", "l"],
  ["խ", "x"],
  ["ծ", "c"],
  ["կ", "k"],
  ["հ", "h"],
  ["ձ", "ʒ"],
  ["ղ", "ğ"],
  ["ճ", "č"],
  ["մ", "m"],
  ["յ", "j"],
  ["ն", "n"],
  ["շ", "š"],
  ["ո", "o"],
  ["չ", "č'"],
  ["պ", "p"],
  ["ջ", "ǯ"],
  ["ռ", "ŕ"],
  ["ս", "s"],
  ["վ", "w"],
  ["տ", "t"],
  ["ր", "r"],
  ["ց", "c;"],
  ["ւ", "v"],
  ["փ", "p'"],
  ["ք", "k'"],
  ["օ", "ō"],
  ["ֆ", "f"],
  ["ու", "u"],
  ["և", "ev"],
];

const convert = [
  s => table.reduce((acc, [x, y]) => acc.replace(new RegExp(x, "gi"), y), s),
  s => table.reduce((acc, [x, y]) => acc.replace(new RegExp(y, "gi"), x), s),
]
