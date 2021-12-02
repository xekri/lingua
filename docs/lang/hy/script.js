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

  for (const e of document.getElementsByClassName("hy"))
    e.innerHTML = e.innerHTML ? `${convert[1](e.innerHTML)}<br>${e.innerHTML}` : "";
});

const table = [
  ["ա", "a"],
  ["բ", "b"],
  ["գ", "g"],
  ["դ", "d"],
  ["ե", "e"],
  ["զ", "z"],
  ["է", "ẹ"],
  ["ը", "ə"],
  ["թ", "t'"],
  ["ժ", "ẓ"],
  ["ի", "i"],
  ["լ", "l"],
  ["խ", "x"],
  ["ց", "c'"],
  ["ծ", "c"],
  ["ք", "k'"],
  ["կ", "k"],
  ["հ", "h"],
  ["ձ", "ʒ"],
  ["ղ", "ḷ"],
  ["չ", "ṭ'"],
  ["ճ", "ṭ"],
  ["մ", "m"],
  ["յ", "j"],
  ["ն", "n"],
  ["շ", "ṣ"],
  //["ու", "u"],
  ["ո", "o"],
  ["փ", "p'"],
  ["պ", "p"],
  ["ջ", "ḍ"],
  ["ռ", "r"],
  ["ս", "s"],
  ["վ", "w"],
  ["տ", "t"],
  ["ր", "ṛ"],
  ["ւ", "v"],
  ["օ", "ọ"],
  ["ֆ", "f"],
  ["և", "ew"],
  ["․", ":"],
  ["։", "."],
  ["֊", "-"],
  ["՜", "!"],
  ["՛", "*"],
  ["՞", "?"],
];

const convert = [
  s => table.reduce((acc, [x, y]) =>
    acc
      .replaceAll(x, y)
      .replaceAll(x.toUpperCase(), y.toUpperCase()),
    s),
  s => table.reduce((acc, [x, y]) =>
    acc
      .replaceAll(y, x)
      .replaceAll(y.toUpperCase(), x.toUpperCase()),
    s),
];