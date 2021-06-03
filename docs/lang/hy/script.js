"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const ts = [document.getElementById("0"), document.getElementById("1")];

  const f = i => () => {
    ts[1 - i].value = convert[i](ts[i].value);
  };

  for (const i of [0, 1]) ts[i].addEventListener("input", f(i));

  f(0)();

  for (const e of document.getElementsByClassName("hy")) e.innerHTML = e.innerHTML ? `${convert[1](e.innerHTML)} (${e.innerHTML})` : "";
});
const table = [["ա", "a"], ["բ", "b"], ["գ", "c"], ["դ", "d"], ["ե", "e"], ["զ", "z"], ["է", "ē"], ["ը", "ə"], ["թ", "t'"], ["ժ", "ẓ"], ["ի", "i"], ["լ", "l"], ["խ", "x"], ["ց", "ŧ'"], ["ծ", "ŧ"], ["ք", "k'"], ["կ", "k"], ["հ", "h"], ["ձ", "đ"], ["ղ", "g"], ["չ", "ṭ'"], ["ճ", "ṭ"], ["մ", "m"], ["յ", "j"], ["ն", "n"], ["շ", "ṣ"], //["ու", "u"],
["ո", "o"], ["փ", "p'"], ["պ", "p"], ["ջ", "ḍ"], ["ռ", "r"], ["ս", "s"], ["վ", "w"], ["տ", "t"], ["ր", "y"], ["ւ", "v"], ["օ", "ō"], ["ֆ", "f"], ["և", "ew"], ["․", ":"], ["։", "."], ["֊", "-"], ["՜", "!"], ["՛", "*"], ["՞", "?"]];
const convert = [s => table.reduce((acc, [x, y]) => acc.replaceAll(x, y).replaceAll(x.toUpperCase(), y.toUpperCase()), s), s => table.reduce((acc, [x, y]) => acc.replaceAll(y, x).replaceAll(y.toUpperCase(), x.toUpperCase()), s)];