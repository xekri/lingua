document.addEventListener("DOMContentLoaded", () => {
  const ts = document.querySelectorAll("textarea");

  const f = () => {
    ts[1].value = convert[0](ts[0].value);
  };

  ts[0].addEventListener("input", f);
  f();

  for (const e of document.getElementsByClassName("phag"))
    e.innerHTML = convert[0](e.innerHTML);

  for (const button of document.querySelectorAll("button"))
    button.addEventListener("click", event => {
      ts[0].value += event.target.innerHTML;
      f();
    });

  for (const e of document.querySelectorAll("table td"))
    e.innerHTML = e.innerHTML
      ? `<button class="phag">${e.innerHTML}</button>`
      : ""
      ;

  for (const e of document.querySelectorAll("button"))
    e.addEventListener("click", ({ target }) => {
      ts[0].innerHTML += target.innerHTML;
      f();
    });
});

const table = [
  ["ꡝ", "q"],

  ["ꡀ", "k"],
  ["ꡁ", "kx"],
  ["ꡂ", "c"],
  ["ꡃ", "g"],
  ["ꡜ", "x"],
  ["ꡖ", "h"],

  ["ꡄ", "ᶄ"],
  ["ꡅ", "ᶄx"],
  ["ꡆ", "ꞔ"],
  ["ꡇ", "ᶃ"],
  ["ꡚ", "ᶍ"],
  ["ꡔ", "ꞕ"],
  ["ꡗ", "j"],
  ["ꡨ", "J"],
  ["ꡞ", "i"],
  ["ꡠ", "e"],

  ["ꡩ", "ʈ"],
  ["ꡪ", "ʈx"],
  ["ꡫ", "ɖ"],
  ["ꡬ", "ɳ"],
  ["ꡮ", "ʂ"],
  ["ꡚ", "ʐ"],
  ["ꡘ", "r"],
  ["ꡱ", "R"],

  ["ꡈ", "t"],
  ["ꡉ", "tx"],
  ["ꡊ", "d"],
  ["ꡋ", "n"],

  ["ꡐ", "ŧ"],
  ["ꡑ", "ŧx"],
  ["ꡒ", "đ"],
  ["ꡛ", "s"],
  ["ꡕ", "z"],
  ["ꡙ", "l"],

  ["ꡌ", "p"],
  ["ꡍ", "px"],
  ["ꡎ", "b"],
  ["ꡏ", "m"],
  ["ꡤ", "f"],
  ["ꡰ", "w"],
  ["ꡓ", "v"],
  ["ꡧ", "V"],
  ["ꡟ", "u"],
  ["ꡡ", "o"],

  ["ꡳ", "\u0328"]
];




const convert = [
  s0 => table.reduce((acc, [x, y]) => acc.replace(new RegExp(x, "g"), y), s0).normalize("NFC"),
  s1 => table.reduce((acc, [x, y]) => acc.replace(new RegExp(y, "g"), x), s1).normalize("NFC"),
];