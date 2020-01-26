const combGraveToneAbove = "\u0340";
const combAcuteToneAbove = "\u0341";
const combMacronBelow = "\u0331";
const combMacronAbove = "\u0304";
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
  , suffix:
    [ grave
    , acute
    , ""
    , "-" + combGraveToneAbove
    , "-" + combAcuteToneAbove
    , "-"
    , dot
    , ""
    , "-"
    ]
  , ascii:
    String.raw`\,/,-,\\,//,=,,-,=`.split(",")
  , ipa:
    "˥˧ ˧˥ ˧ ˧˩ ˩˧ ˩ ˥ ˧ ˩".split(" ")
  , number:
    "1 2 3 4 5 6 7 8 9".split(" ")
  };

const pinyinToSumi = (input, ascii=false, toneType="diacritic", showsLen=false, ruby=false) =>
  input
  .replace(
    /((?<c>b|p|m|f|dz?|ts?|ng?|l|gw?|kw?|h|w|z|c|s|j)?(?<v>i|yu?|u|oe?|eo?|aa?)(?<f>y|i|u|ng?|m|k|t|p)?|(?<n>ng|m))(?<t>[1-9])?/ug,
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

      if(! ruby)
        ret += " ";

      return ret;
    }
  )
  .replace(/，/g, ruby ? "，" : ", ")
  .replace(/。/g, ruby ? "。" : ". ")
  .replace(/？/g, ruby ? "？" : "? ")
  .replace(/！/g, ruby ? "！" : "! ")
  .replace(/（/g, ruby ? "（" : " (")
  .replace(/）/g, ruby ? "）" : ") ")
  .replace(/「/g, ruby ? "「" : !ascii ? "‘ " : " ' ")
  .replace(/」/g, ruby ? "」" : !ascii ? "’ " : " ' ")
  .replace(/『/g, ruby ? "『" : !ascii ? "“ " : " \" ")
  .replace(/』/g, ruby ? "』" : !ascii ? "” " : " \" ");

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

