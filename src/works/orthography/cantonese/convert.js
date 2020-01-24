var honziToJytpiq;
const req = new XMLHttpRequest();
req.open("GET", "/submodules/jyutping-table/list.tsv");
req.send();
req.addEventListener("load", () => {
  const honzis = {};
  req.responseText
    .split("\n")
    .slice(1)
    .forEach(line => {
      const [key, _, val] = line.split("\t");
      if(! honzis[key])
        honzis[key] = val;
    });
  honziToJytpiq = input => input.replace(/\p{sc=Han}/ug, match => honzis[match] || match);
});

const elemStr = (tag, s) => `<${tag}>${s}</${tag}>`;

const tones =
  { diacritic:
    [ "\u0302"
    , "\u030C"
    , ""//"\u0304"
    , "\u0316\u0302"//"\u032D"
    , "\u0316\u030C"//"\u032C"
    , "\u0316"//"\u0316"
    , "\u0301"
    , ""//"\u0304"
    , "\u0316"//"\u0316"
    ]
    , ascii:
      String.raw`\,/,-,\\,//,=,,-,=`.split(",")//.map(s => elemStr("sup", s))
    , ipa:
      "˥˧ ˧˥ ˧ ˧˩ ˩˧ ˩ ˥ ˧ ˩".split(" ").map(s => elemStr("sup", s))
    , number:
      "1 2 3 4 5 6 7 8 9".split(" ").map(s => elemStr("sup", s))
  };

const pinyinToSumi = (input, ascii=false, toneType="diacritic", showsLen=true) =>
  input.replace(
    /((?<c>b|p|m|f|dz?|ts?|ng?|l|gw?|kw?|h|w|z|c|s|j)?(?<v>i|yu?|u|oe?|eo?|aa?)(?<f>y|i|u|ng?|m|k|t|p)?|(?<n>ng|m))(?<t>[1-9])?/g,
    (...args) => {
      let {c, v, f, n, t} = args.slice(-1)[0];
      t = t && toneType !== "none" ? tones[toneType][parseInt(t) - 1] : "";
      let ret = "";

      if(v && n || !v && !n) return args[0];
      if(n) {
        n = n ? n.replace("ng", "ŋ") : "";
        ret = n + t;
      }
      else if(v) {
        c = c ? c
          .replace("ng", "ŋ")
          .replace("ts", "c")
          .replace("dz", "z")
          .replace("w", "v") : "";
        v = v
          .replace("aa", "A")
          .replace("a", "a'")
          .replace("A", "a")
          .replace(/oe|eo/, "ø")
          .replace("yu", "y");
        f = f ? f
          .replace("ng", "ŋ")
          .replace("y", "i") : "";

        let short = "";
        if(v === "a'") {
          v = "a";
          short = "'";
        }
        else if(showsLen && [/ø[int]/, /ei/, /ou/, /[iu][ŋk]/].some(re => (v + f).match(re)))
          short = "'";

        ret += c + v;
        if(toneType === "diacritic")
          ret += t + short + f;
        else
          ret += short + f + t;
      }

      if(ascii)
        ret = ret
          .replace("ø", "w")
          .replace("ŋ", "q")
      else
        ret = ret.replace("'", "\u02BC");

      return ret;
    }
  );

