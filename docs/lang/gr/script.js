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

const table = [//gjwy
  ["α", "a"],
  ["ᾱ", "a\u0304"],
  ["β", "b"],
  ["γ", "c"],
  ["δ", "d"],
  ["ε", "e"],
  ["ϝ", "v"],
  ["ζ", "z"],
  ["η", "e\u0304"],
  ["θ", "y"],
  ["ι", "i"],
  ["κ", "k"],
  ["λ", "l"],
  ["μ", "m"],
  ["ν", "n"],
  ["ξ", "ks"],
  ["ο", "o"],
  ["π", "p"],
  ["ϙ", "q"],
  ["ρ", "r"],
  ["σ", "s"],
  ["ς", "s"],
  ["τ", "t"],
  ["υ", "u"],
  ["ῡ", "u\u0304"],
  ["φ", "f"],
  ["χ", "x"],
  ["ψ", "ps"],
  ["ω", "o\u0304"],

  ["[··]", ":"],
  ["[;;]", "?"],

  ["\u0313", ""], // comma above
  ["(?<=r)\u0314", ""], // reversed comma above
  ["([ieaou]\\S*)\u0314", "h$1"], // reversed comma above
  //["\u0301", ""], // acute above
  //["\u0300", ""], // grave above
  ["\u0345", "i"], // iota subscript
  ["\u0342", "\u0302"], // perispomeni
  ["\u0304(?=\u0302)", ""],
  ["\u0345", "i"], // iota subscript
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
