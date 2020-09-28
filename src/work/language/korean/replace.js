export default (s, cy) => {
  let r = s
    .normalize("NFD")
    .replace(/ㅏ/g, "a")
    .replace(/ㅓ/g, "e")
    .replace(/ㅗ/g, "o")
    .replace(/ㅜ/g, "u")
    .replace(/ㅡ/g, "y")
    .replace(/ㅣ/g, "i")

    .replace(/ㅐ/g, "ai")
    .replace(/ㅔ/g, "ei")
    .replace(/ㅚ/g, "oi")
    .replace(/ㅟ/g, "ui")
    .replace(/ㅢ/g, "yi")

    .replace(/ㅑ/g, "ia")
    .replace(/ㅕ/g, "ie")
    .replace(/ㅛ/g, "io")
    .replace(/ㅠ/g, "iu")
    .replace(/ㅒ/g, "iai")
    .replace(/ㅖ/g, "iei")

    .replace(/ㅘ/g, "oa")
    .replace(/ㅝ/g, "ue")
    .replace(/ㅚ/g, "oi")
    .replace(/ㅟ/g, "ui")

    .replace(/ㅙ/g, "oai")
    .replace(/ㅞ/g, "uei")

    .replace(/ㆁ/g, "ŋ")
    .replace(/ㄱ/g, "g")
    .replace(/ㄲ/g, "gg")
    .replace(/ㅋ/g, "c")
    .replace(/ㅇ/g, "h")
    .replace(/ㅎ/g, "x")
    .replace(/ㆅ/g, "xx")

    .replace(/ㄴ/g, "n")
    .replace(/ㄷ/g, "d")
    .replace(/ㄸ/g, "dd")
    .replace(/ㅌ/g, "t")
    .replace(/ㅿ/g, "z")
    .replace(/ㅅ/g, "s")
    .replace(/ㅆ/g, "ss")
    .replace(/ㄹ/g, "l")

    .replace(/ㅈ/g, "ʣ")
    .replace(/ㅉ/g, "dʣ")
    .replace(/ㅊ/g, "ʦ")

    .replace(/ㅁ/g, "m")
    .replace(/ㅂ/g, "b")
    .replace(/ㅃ/g, "bb")
    .replace(/ㅍ/g, "p")

  //.normalize("NFC")

  r = r
    .replace(/i/g, "ı")
    .replace(/j/g, "ȷ")

  return r;
}