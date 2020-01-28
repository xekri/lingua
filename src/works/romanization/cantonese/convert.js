const combGraveToneAbove = "\u0340";
const combAcuteToneAbove = "\u0341";
const combMacronAbove = "\u0304";
const combMacronBelow = "\u0331";
const combBreve = "\u0306";
const grave = "\u0301";
const acute = "\u0304";
const dot = "\u02D9";

const tones =
  { diacritic:
    [ combGraveToneAbove
    , combAcuteToneAbove
    , ""
    , combMacronBelow + combGraveToneAbove
    , combMacronBelow + combAcuteToneAbove
    , combMacronBelow
    , combMacronAbove
    , ""
    , combMacronBelow
    ]
  , ascii:
    String.raw`\,/,-,\\,//,=,,-,=`.split(",")
  , ipa:
    "˥˧ ˧˥ ˧ ˧˩ ˩˧ ˩ ˥ ˧ ˩".split(" ")
  , number:
    "1 2 3 4 5 6 7 8 9".split(" ")
  };

const pinyinToSumi = (input, ascii=false, toneType="diacritic", showsLen=true, ruby=false, alphabet=false) =>
  input
  .replace(
    /((?<c>b|p|m|f|dz?|ts?|ng?|l|gw?|kw?|h|w|z|c|s|j)?(?<v>i|yu?|u|oe?|eo?|aa?)(?<f>y|i|u|ng?|m|k|t|p)?|(?<n>ng|m))(?<t>[1-9])?/ug,
    (...args) => {
      let {c, v, f, n, t} = args.slice(-1)[0];
      const tIdx = parseInt(t) - 1;
      t = t && !["none", "alphabet"].includes(toneType) ? tones[toneType][tIdx] : "";
      let ret = "";

      if(v && n || !v && !n) return args[0];
      if(n) {
        n = n.replace("ng", "ŋ");
        c = toneType === "alphabet" ? n : "";
        v = n;
        f = "";
      }
      else if(v) {
        c =
          c ?
            c
            .replace("ng", "ŋ")
            .replace("ts", "c")
            .replace("dz", "z")
            .replace("w", "v")
          : toneType === "alphabet" ?
            "x"
          :
            "";
        v = v
          .replace("aa", "A")
          .replace("a", "a" + combBreve)
          .replace("A", "a")
          .replace(/oe|eo/, "ø")
          .replace("yu", "y");
        f =
          f ?
            f
              .replace("ng", "ŋ")
              .replace("y", "i")
          :
            "";
      }

      let isShort = false;
      if(v === "a" + combBreve) {
        isShort = true;
        v = "a";
      }
      else if(showsLen && [/ø[int]/, /ei/, /ou/, /[iu][ŋk]/].some(re => (v + f).match(re)))
        isShort = true;

      if(isShort) {
        if(alphabet)
          f += f;
        else
          v += combBreve;
      }

      ret = c + v
      if(toneType === "diacritic")
        ret += t + f;
      else
        ret += f + t;

      if(ascii) {
        ret = ret
          .replace(/ŋ/g, "q")
          .replace(/ø/g, "w");
      }

      if(toneType === "alphabet") {
        if([0, 3, 6].includes(tIdx))
          ret = ret[0].toUpperCase() + ret.substring(1);
        if([1, 4, 6].includes(tIdx))
          ret = ret[0] + ret.substring(1).toUpperCase();
        if([3, 4, 5, 8].includes(tIdx))
          ret += "x";
      }

      if(!ruby)
        ret += "{{{space}}}";

      return ret;
    }
  )
  .replace(/\{\{\{space\}\}\}(?=[a-zA-Z])/g, " ")
  .replace(/\{\{\{space\}\}\}/g, "");

var honziToJytpiq;
var honzisToJytpiq;

const req = new XMLHttpRequest();
req.open("GET", "/submodules/jyutping-table/list.tsv");
req.send();
req.addEventListener("load", () => {
  honziToJytpiq = {};
  req.responseText
    .split("\n")
    .slice(1)
    .forEach(line => {
      const [key, _, val] = line.split("\t");
      if(! honziToJytpiq[key])
        honziToJytpiq[key] = val;
    });
  honzisToJytpiq = input => input.replace(/\p{sc=Han}/ug, match => honziToJytpiq[match] || match);
});

