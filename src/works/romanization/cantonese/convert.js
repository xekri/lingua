const combGraveToneAbove = "\u0340";
const combAcuteToneAbove = "\u0341";
const combMacronAbove = "\u0304";
const combMacronBelow = "\u0331";
const combBreve = "\u0306";
const combDiaer = "\u0308";
const grave = "\u0301";
const acute = "\u0304";
const dot = "\u02D9";

const tones =
  { none:
    [...Array(9)].map(i => (c, f, v) => c + f + v)

  , diacritic:
    [ combGraveToneAbove
    , combAcuteToneAbove
    , ""
    , combMacronBelow + combGraveToneAbove
    , combMacronBelow + combAcuteToneAbove
    , combMacronBelow
    , combMacronAbove
    , ""
    , combMacronBelow
    ].map(t => (c, v, f) => c + v + t + f)

  , ascii:
    String.raw`\,/,,x\,x/,x,-,,x`.split(",")
    .map(t => (c, v, f) => c + v + f + t)

  , ipa:
    "˥˧ ˧˥ ˧ ˧˩ ˩˧ ˩ ˥ ˧ ˩".split(" ")
    .map(t => (c, v, f) => c + v + f + t)

  , number:
    [...Array(9).keys()]
    .map(i => (c, v, f) => c + v + f + (i + 1))

  , alphabet:
    [...Array(9).keys()]
    .map(i => (c, v, f) => {
      if(["ŋ", "m"].includes(v)) c = v;
      c = c || "x";
      let vf = v + f;
      if([0, 3, 6].includes(i)) c = c.toUpperCase();
      if([1, 4, 6].includes(i)) vf = vf.toUpperCase();
      if([3, 4, 5, 8].includes(i)) vf += "x";
      return c + vf;
    })
  , mixed:
    [ combGraveToneAbove
    , combAcuteToneAbove
    , ""
    , combGraveToneAbove
    , combAcuteToneAbove
    , ""
    , combMacronAbove
    , ""
    , ""
    ].map((t, i) => (c, v, f) => c + v + t + f + ([3, 4, 5, 8].includes(i) ? "x" : ""))
  };

const pinyinToSumi = (input, ascii=false, toneType="diacritic", showsLen=true, ruby=false, alphabet=true, diaeresis=false) =>
  input
  .replace(
    /((?<c>b|p|m|f|dz?|ts?|ŋ|ng?|l|gw?|kw?|h|w|z|c|s|j)?(?<v>i|yu?|u|oe?|eo?|aa?)(?<f>y|i|u|ng?|m|k|t|p)?|(?<n>ŋ|ng|m))(?<t>[1-9])?/ug,
    (...args) => {
      let {c, v, f, n, t} = args.slice(-1)[0];

      console.assert(n || v);
      if(n) {
        n = n.replace("ng", "ŋ");
        c = "";
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
      if(diaeresis) {
        if(c === "")
          c = "x";
        c += combDiaer;
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

      let ret = t ? tones[toneType][parseInt(t) - 1](c, v, f) : c + v + f;
      if(ascii) {
        ret = ret
          .replace(/ŋ/g, "q")
          .replace(/ø/g, "w");
      }
      if(!ruby && !diaeresis)
        ret += "{{{space}}}";
      return ret;
    }
  )
  .replace(/\{\{\{space\}\}\}(?=[a-zŋøA-ZŊØ])/g, " ")
  .replace(/\{\{\{space\}\}\}/g, "")
  .replace("（", "(")
  .replace("）", ")")
  .replace("「", "‹")
  .replace("」", "›")
  .replace("『", "«")
  .replace("』", "»")
  .replace("。", ".")
  .replace("、", ",")
  ;

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

