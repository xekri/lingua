const dcs =
  { short: ["", "\u0306", "\u032E", "\u032F", "\u0307", "\u0331", "\u0313", "\u030A"][7]
  , low:   ["\u0317", "\u0331", "\u0316"][2]
  , high:  ""
  , long:  "\u0304"
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
  { "unicode":
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
  , "ascii":
    [ "\\"
    , "/"
    , ""
    , "\\\\"
    , "//"
    , "="
    , "-"
    , ""
    , "="
    ]
  };

const res =
  { c: "[bpmfdtnl(gv?)(kv?)ŋxvzcsj]"
  , v: `[iyueøoa]${dcs.short}?`
  , f: "[iuktpŋnm]"
  , n: "[ŋm]"
  }

let convert = {}
cantToSumi = (input, ascii=false) => {
  let output =
    Object.keys(dic).reduce(
      (acc, k) => acc.replace(new RegExp(k, "g"), dic[k])
      , input
    );
  output = output.replace(
    new RegExp(`((?<c>${res.c})?(?<v>${res.v})(?<f>${res.f})?|(?<n>${res.n}))(?<t>[1-9])?`, "g"),
    (...args) => {
      const {c, v, f, n, t} = args.slice(-1)[0];
      // return ["", v, f, n, t];
      return (
        v ?
          `${c || ""}${v}${ascii ? "" : tones["unicode"][parseInt(t) - 1] || ""}${f || ""}${ascii ? tones["ascii"][parseInt(t) - 1]: ""}`
        : n ?
          `${n}${dcs.long}${tones[ascii ? "ascii": "unicode"][parseInt(t) - 1] || ""}`
        :
          ""
      );
    }
  );
  if(ascii)
    output = output
    .replace(new RegExp(dcs.short,"g"), "'")
    .replace(new RegExp(`ŋ`, "g"), "q")
    .replace(new RegExp(`([qm]${dcs.long})`, "g"), "$1$1")
    .replace(new RegExp("ø", "g"), "w");

  return output;
};

window.addEventListener("load", () => {
  const converter =
    document
    .getElementById("cantonese")
    .querySelector(".converter");

  const inTa = converter.querySelector(".from textarea");
  const outTa = converter.querySelector(".to textarea");

  const inSel = converter.querySelector(".from select");
  const outSel = converter.querySelector(".to select");

  const outChk = converter.querySelector(".to input");
  console.log(outChk);

  const f = () => {
    outTa.value = cantToSumi(inTa.value, outSel.value === "sumi-ascii");
  }
  for(const e of document.getElementsByClassName("trigger"))
    e.addEventListener("input", f);
  f();

  for(const e of document.getElementsByClassName("cantonese-example"))
    e.innerHTML = cantToSumi(e.nextElementSibling.nextElementSibling.textContent);
  for(const e of document.getElementsByClassName("cantonese-example-ascii"))
    e.innerHTML = cantToSumi(e.nextElementSibling.textContent, true);

  document.querySelectorAll("#cantonese-pinyin tbody").forEach((e, i) => {
    const tbody = e.cloneNode(true);
    for(const tr of tbody.querySelectorAll("tr"))
      for(const td of tr.querySelectorAll("td"))
        td.innerText = cantToSumi(td.innerText).replace(dcs.long, i === 0 ? "" : dcs.long);
      document.getElementById("cantonese-me").append(tbody);
  });

  for(const tr of document.querySelectorAll("#cantonese-tone tr")) {
    if(tr.querySelectorAll("th")[0].textContent === "me") {
      for(const i in [...Array(9).keys()]) {
        const td = document.createElement("td");
        td.innerText = `i${tones["unicode"][i]}`;
        tr.appendChild(td);
      }
      break;
    }
  }
  for(const tr of document.querySelectorAll("#cantonese-tone tr")) {
    if(tr.querySelectorAll("th")[0].textContent === "me-ascii") {
      for(const i in [...Array(9).keys()]) {
        const td = document.createElement("td");
        td.innerText = tones["ascii"][i];
        tr.appendChild(td);
      }
      break;
    }
  }

  for(const e of document.querySelectorAll(".cantonese-short"))
    e.innerText += dcs.short;
  for(const e of document.querySelectorAll(".cantonese-long"))
    e.innerText += dcs.long;
});
