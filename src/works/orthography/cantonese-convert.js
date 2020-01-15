const dcs =
  { short: ["", "\u0306", "\u032E", "\u032F", "\u0307", "\u0331"][5]
  , low:   ["\u0317", "\u0331", "\u0316"][2]
  , high:  ""
  };
const dic =
  { "ng": "ŋ"
  , "ts": "c"
  , "dz": "z"
  , "aa": "ā"
  , "a":  `a${dcs.short}`
  , "ā":  "a"
  , "iŋ": `i${dcs.short}ŋ`
  , "ik": `i${dcs.short}k`
  , "uŋ": `u${dcs.short}ŋ`
  , "uk": `u${dcs.short}k`
  , "ei": `e${dcs.short}i`
  , "ou": `o${dcs.short}u`
  , "oey": `ø${dcs.short}i`
  , "oen": `ø${dcs.short}n`
  , "oet": `ø${dcs.short}t`
  , "oe":  "ø" // ŋ, k
  , "w": "v"
  , "h": "x"
};
const tones =
[ "\u0302"
, "\u030C"
, dcs.high
, [dcs.low + "\u0302", "\u032D"][1]
, [dcs.low + "\u030C", "\u032C"][1]
, dcs.low //
, "\u0301"
, dcs.high
, dcs.low
]

const res =
  { c: "[bpmfdtnl(gv?)(kv?)ŋxvzcsj]"
  , v: `[iyueøoa]${dcs.short}?`
  , f: "[iuktpŋnm]"
  , n: "[ŋm]"
  }

let convert = {}
convert["cantonese pinyin"] = {}
convert["cantonese pinyin"]["sumi"] = input => {
  let output =
    Object.keys(dic).reduce(
      (acc, k) => acc.replace(new RegExp(k, "g"), dic[k])
      , input
    );
  return output.replace(
    new RegExp(`((?<c>${res.c})?(?<v>${res.v})(?<f>${res.f})?|(?<n>${res.n}))(?<t>[1-9])?`, "g"),
    (...args) => {
      const {c, v, f, n, t} = args.slice(-1)[0];
      // return ["", v, f, n, t];
      return (
        v ?
          `${c || ""}${v}${tones[parseInt(t) - 1] || ""}${f || ""}`
        : n ?
          `${n}\u0304${tones[parseInt(t) - 1] || ""}`
        :
          ""
      );
    }
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

  for(const e of document.querySelectorAll("#cantonese-pinyin tbody")) {
    const tbody = e.cloneNode(true);
    for(const tr of tbody.querySelectorAll("tr"))
      for(const td of tr.querySelectorAll("td"))
        td.innerText = convert["cantonese pinyin"]["sumi"](td.innerText);
    document.getElementById("cantonese-me").append(tbody);
  }

  for(const tr of document.querySelectorAll("#cantonese-tone tr")) {
    console.log("19950725");
    if(tr.querySelectorAll("th")[0].textContent === "me") {
      for(const i in [...Array(9).keys()]) {
        const td = document.createElement("td");
        td.innerText = `i${tones[i]}`;
        tr.appendChild(td);
      }
      break;
    }
  }
});
