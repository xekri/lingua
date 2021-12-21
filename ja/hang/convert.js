const convert = s => s.replace(/[A-Z][a-z]*/g, syl => syl
  .toLowerCase()

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
  .replace(/^v$/, "ㅱ")

  .replace(/^q$/, "ㆆ")

  /*
  .replace(/^i$/, "ㅣ")
  .replace(/^e$/, "ㅓ")
  .replace(/^a$/, "ㅏ")
  .replace(/^o$/, "ㅗ")
  .replace(/^u$/, "ㅜ")
  .replace(/^ji$/, "ㅣ")
  .replace(/^je$/, "ㅓ")
  .replace(/^ja$/, "ㅏ")
  .replace(/^jo$/, "ㅗ")
  .replace(/^ju$/, "ㅜ")
  */

  // intial
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

  .replace(/^j/, "<initial>\u1140")
  .replace(/^v/, "<initial>\u111D")

  .replace(/^q/, "<initial>\u1159")
  .replace(/^(?=[a-z])/, "\u110B")
  .replace(/<initial>/, "")

  // medial

  .replace(/vei/, "\u1170")
  .replace(/vai/, "\u118A")
  .replace(/vi/, "\u1171")
  .replace(/ve/, "\u116F")
  .replace(/va/, "\u1189")

  .replace(/jei/, "\u1168")
  .replace(/jai/, "\u1164")
  .replace(/joi/, "\u1188")
  .replace(/jui/, "\u1194")

  .replace(/ei/, "\u1166")
  .replace(/ai/, "\u1162")
  .replace(/oi/, "\u116C")
  .replace(/ui/, "\u1171")

  .replace(/jeu/, "\u117E")
  .replace(/jau/, "\u11A4")

  .replace(/iu/, "\u119B")
  .replace(/eu/, "\u117B")
  .replace(/au/, "\u1177")
  .replace(/ou/, "\u1183")

  .replace(/ji/, "\uD7C4")
  .replace(/je/, "\u1167")
  .replace(/ja/, "\u1163")
  .replace(/jo/, "\u116D")
  .replace(/ju/, "\u1172")

  .replace(/i/, "\u1175")
  .replace(/e/, "\u1165")
  .replace(/a/, "\u1161")
  .replace(/o/, "\u1169")
  .replace(/u/, "\u116E")

  // terminal
  .replace(/k$/, "\u11A8")
  .replace(/g$/, "\u11F0")
  .replace(/s$/, "\u11BA")
  .replace(/z$/, "\u11BB")
  .replace(/t$/, "\u11AE")
  .replace(/d$/, "\uD7CD")
  .replace(/n$/, "\u11AB")
  .replace(/p$/, "\u11B8")
  .replace(/b$/, "\uD7E6")
  .replace(/m$/, "\u11B7")
  .replace(/j$/, "\u11EB")
  .replace(/l$/, "\u11AF")
  .replace(/v$/, "\u11E2")

  .normalize("NFC")
);

console.log(convert(process.argv[2] || "NitPonGo No KaNCuLu PeuKi"))
