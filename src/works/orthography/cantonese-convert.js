const conversion = {
  "cantonese pinyin": {
    "sumi":
      { "dz": "z"
      , "ts": "c"
      , "w": "v"
      , "aa": "ā"
      , "oey": "øy"
      , "oen": "øn"
      , "oeng": "ø̄ŋ"
      , "oet": "øt"
      , "oek": "ø̄k"
      , "oe": "ø̄"
      , "ng": "ŋ"
      , "1": "˥"
      , "2": "˧˥"
      , "3": "˧"
      , "4": "˧˩"
      , "5": "˩˧"
      , "6": "˩"
      , "7": "˥"
      , "8": "˧"
      , "9": "˩"
      }
  }
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

  inTa.addEventListener("input", () => {
    const input = inTa.value;

    const from = inSel.value;
    const to = outSel.value;

    const output = convert(from, to, input);
    outTa.value = output;
  });
});

const convert = (from, to, input) => {
  const output = input;
  const dic = conversion[from][to];
  return Object.keys(dic).reduce(
    (acc, k) => acc.replace(new RegExp(k, "g"), dic[k])
    , input
  );
}