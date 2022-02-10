const convert = s => s.replace(/[A-Z][a-z]*/g, syl => syl
  .toLowerCase()

  .replace(/(?<=^[kcg])vi/, "\u116C")
  .replace(/(?<=^[kcg])vei/, "\u1180")
  .replace(/(?<=^[kcg])ve/, "\u117F")
  .replace(/(?<=^[kcg])vai/, "\u116B")
  .replace(/(?<=^[kcg])va/, "\u116A")

  .replace(/^q$/, "ㅇ")

  .replace(/^k$/, "ㄱ")
  .replace(/^c$/, "ㄲ")
  .replace(/^g$/, "ㆁ")

  .replace(/^s$/, "ㅅ")
  .replace(/^z$/, "ㅆ")
  .replace(/^l$/, "ㄹ")

  .replace(/^t$/, "ㄷ")
  .replace(/^d$/, "ㄸ")
  .replace(/^n$/, "ㄴ")

  .replace(/^p$/, "ㅂ")
  .replace(/^b$/, "ㅃ")
  .replace(/^m$/, "ㅁ")

  .replace(/^qv$/, "ㅎ")
  .replace(/^v$/, "ㆅ")

  // intial
  .replace(/^kv/, "<initial>\u112B")
  .replace(/^cv/, "<initial>\u112C")
  .replace(/^gv/, "<initial>\u111D")

  .replace(/^k/, "<initial>\u1100")
  .replace(/^c/, "<initial>\u1101")
  .replace(/^g/, "<initial>\u114C")

  .replace(/^t/, "<initial>\u1103")
  .replace(/^d/, "<initial>\u1104")
  .replace(/^n/, "<initial>\u1102")

  .replace(/^s/, "<initial>\u1109")
  .replace(/^z/, "<initial>\u110A")
  .replace(/^l/, "<initial>\u1105")

  .replace(/^p/, "<initial>\u1107")
  .replace(/^b/, "<initial>\u1108")
  .replace(/^m/, "<initial>\u1106")

  //.replace(/^j/, "<initial>\u1140")
  .replace(/^qv/, "<initial>\u111D")
  .replace(/^v/, "<initial>\u1158")

  .replace(/^q/, "<initial>\u110B")
  .replace(/^(?=[a-z])/, "\u1147")
  .replace(/<initial>/, "")

  // medial

  .replace(/jej/, "\u1168")
  .replace(/jaj/, "\u1164")
  .replace(/joj/, "\u1188")
  .replace(/juj/, "\u1194")

  .replace(/ji/, "\uD7C4")
  .replace(/je/, "\u1167")
  .replace(/ja/, "\u1163")
  .replace(/jo/, "\u116D")
  .replace(/ju/, "\u1172")

  .replace(/ei/, "\u1166")
  .replace(/ai/, "\u1162")
  .replace(/oi/, "\u116C")
  .replace(/ui/, "\u1171")

  .replace(/i/, "\u1175")
  .replace(/e/, "\u1165")
  .replace(/a/, "\u1161")
  .replace(/o/, "\u1169")
  .replace(/u/, "\u116E")

  // terminal
  .replace(/k$/, "\u11A8")
  .replace(/c$/, "\u11A8")
  .replace(/g$/, "\u11F0")

  .replace(/s$/, "\u11BA")
  .replace(/z$/, "\u11BB")
  .replace(/l$/, "\u11AF")

  .replace(/t$/, "\u11AE")
  .replace(/d$/, "\uD7CD")
  .replace(/n$/, "\u11AB")

  .replace(/p$/, "\u11B8")
  .replace(/b$/, "\uD7E6")
  .replace(/m$/, "\u11B7")

  //.replace(/j$/, "\u11EB")
  .replace(/v$/, "\u11C2")

  .normalize("NFC")
);

console.log(convert(process.argv[2] || "NitPonGo No KaNCuLu PeuKi"))
