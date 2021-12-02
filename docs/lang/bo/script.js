document.addEventListener("DOMContentLoaded", () => {
  const ts = document.querySelectorAll("textarea");

  const f = () => {
    ts[1].value = convert(ts[0].value);
  };

  ts[0].addEventListener("input", f);
  f();

  for (const e of document.getElementsByClassName("bo"))
    e.innerHTML = convert(e.innerHTML);

  for (const td of document.querySelectorAll(".bo-tds td"))
    td.innerHTML += "<br>" + convert(td.innerHTML)


  for (const button of document.querySelectorAll("button"))
    button.addEventListener("click", event => {
      ts[0].value += event.target.innerHTML;
      f();
    });
});

const maybeA = "<<<maybe a>>>";
const table = [
  ["ཨ", "q"],

  ["ཀ", "k"],
  ["ཁ", "kx"],
  ["ག", "c"],
  ["གྷ", "ch"],
  ["ང", "g"],
  ["ཧ", "x"],
  ["འ", "h"],

  ["ཅ", "ṫ"],
  ["ཆ", "ṫx"],
  ["ཇ", "ḋ"],
  ["ཉ", "ṅ"],
  ["ཡ", "j"],
  ["ཤ", "ṡ"],
  ["ཞ", "ż"],

  ["ཊ", "ʈ"],
  ["ཋ", "ʈx"],
  ["ཌ", "ɖ"],
  ["ཌྷ", "ɖh"],
  ["ཎ", "ɳ"],
  ["ཥ", "ʂ"],

  ["ཏ", "t"],
  ["ཐ", "tx"],
  ["ད", "d"],
  ["དྷ", "dh"],
  ["ན", "n"],
  ["ར", "r"],

  ["ཙ", "ŧ"],
  ["ཚ", "ŧx"],
  ["ཛ", "đ"],
  ["ཛྷ", "đh"],
  ["ལ", "l"],
  ["ས", "s"],
  ["ཟ", "z"],

  ["པ", "p"],
  ["ཕ", "px"],
  ["བ", "b"],
  ["བྷ", "bh"],
  ["མ", "m"],
  ["ཝ", "v"],

  ["ཀཱ".replace(/ཀ/, ""), "ha"],
  ["ཀྱ".replace(/ཀ/, ""), "ja"],
  ["ཀྲ".replace(/ཀ/, ""), "ra"],
  ["ཀླ".replace(/ཀ/, ""), "la"],
  ["ཀྭ".replace(/ཀ/, ""), "va"],

  ["གྷ".replace(/ག/, ""), "xa"],

  ["རྐ".replace(/ར/, ""), "ka"],
  ["རྟ".replace(/ར/, ""), "ta"],
  ["རྩ".replace(/ར/, ""), "ŧa"],
  ["རྤ".replace(/ར/, ""), "pa"],

  ["རྒ".replace(/ར/, ""), "ca"],
  ["རྗ".replace(/ར/, ""), "ḋa"],
  ["རྡ".replace(/ར/, ""), "da"],
  ["རྫ".replace(/ར/, ""), "đa"],
  ["རྦ".replace(/ར/, ""), "ba"],

  ["རྔ".replace(/ར/, ""), "ga"],
  ["རྙ".replace(/ར/, ""), "ṅa"],
  ["རྣ".replace(/ར/, ""), "na"],
  ["རྨ".replace(/ར/, ""), "ma"],

  ["a(.a)", "$1"],

  ["a?" + "ཨི".replace(/ཨ/, ""), "i"],
  ["a?" + "ཨུ".replace(/ཨ/, ""), "u"],
  ["a?" + "ཨེ".replace(/ཨ/, ""), "e"],
  ["a?" + "ཨོ".replace(/ཨ/, ""), "o"],

  ["་", " "],
  ["༌", ""],

  ["༄༅", "␂"],
  ["༺", "("],
  ["༻", ")"],
  ["༉", "- "],
  ["།", ","],
  ["༎", "."],
  ["༈", "§"],

  ["༠", "0"],
  ["༡", "1"],
  ["༢", "2"],
  ["༣", "3"],
  ["༤", "4"],
  ["༥", "5"],
  ["༦", "6"],
  ["༧", "7"],
  ["༨", "8"],
  ["༩", "9"],
];

const convert = s =>
  table.reduce((acc, [x, y]) => acc.replace(new RegExp(x, "g"), y), s);
