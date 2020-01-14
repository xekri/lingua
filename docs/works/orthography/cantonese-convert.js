const dic =
  { "dz": "z"
  , "ts": "c"
  , "ng": "ŋ"
  , "aa": "a\u0304"
  , "oey": "øy"
  , "oen": "øn"
  , "oet": "øt"
  , "oeŋ": "ø\u0304ŋ"
  , "oek": "ø\u0304k"
  , "oe":  "ø\u0304"
  , "w": "v"
  , "h": "x"
};

let convert = {}
convert["cantonese pinyin"] = {}
convert["cantonese pinyin"]["sumi"] = input => {
  let output =
    Object.keys(dic).reduce(
      (acc, k) => acc.replace(new RegExp(k, "g"), dic[k])
      , input
    );
  const lowDc = true ? "\u0317" : "\u0331";
  const tones =
    [ "\u0302"
    , "\u030C"
    , ""
    , lowDc + "\u0302" //"\u032D"
    , lowDc + "\u030C" //"\u032C"
    , lowDc //
    , "\u0301"
    , ""
    , lowDc
    ]
  return output.replace(
    new RegExp(`(([iyue(ø\u0304?)oa(a\u0304?)])([iyuktpŋnm])?|([ŋm]))([1-9])`, "g"),
    (m, m1, m2, m3, m4, m5) =>
      m2 ?
        `${m2}${tones[parseInt(m5) - 1]}${m3 || ""}`
      :
        `${m1}\u0304${tones[parseInt(m5) - 1]}`
    );
};

window.addEventListener("load", () => {
  const converter =
    document
    .getElementById("cantonese")
    .getElementsByClassName("converter")[0];

  const inDiv = converter.getElementsByClassName("from")[0]
  const outDiv = converter.getElementsByClassName("to")[0]

  const inTa = inDiv.getElementsByTagName("textarea")[0];
  const outTa = outDiv.getElementsByTagName("textarea")[0];

  const inSel = inDiv.getElementsByTagName("select")[0];
  const outSel = outDiv.getElementsByTagName("select")[0];

  const f = () => {
    const input = inTa.value;

    const from = inSel.value;
    const to = outSel.value;

    const output = convert[from][to](input);
    outTa.value = output;
  }
  for(const e of document.getElementsByClassName("trigger"))
    e.addEventListener("input", f);
  f();

  for(const e of document.getElementsByClassName("cantonese-example"))
    e.innerHTML = convert["cantonese pinyin"]["sumi"](e.nextElementSibling.textContent);
});
