const convert = s => s
  .normalize("NFKC")

  .replace(/א/g, "A")
  .replace(/ב/g, "B")
  .replace(/ג/g, "C")
  .replace(/ד/g, "D")
  .replace(/ה/g, "E")
  .replace(/ו/g, "V")
  .replace(/ז/g, "Z")
  .replace(/ח/g, "H")
  .replace(/ט/g, "Ṭ")
  .replace(/י/g, "J")
  .replace(/[כך]/g, "K")
  .replace(/ל/g, "L")
  .replace(/[מם]/g, "M")
  .replace(/[נן]/g, "N")
  .replace(/ס/g, "X")
  .replace(/ע/g, "O")
  .replace(/[פף]/g, "P")
  .replace(/[צץ]/g, "Ṣ")
  .replace(/ק/g, "Q")
  .replace(/ר/g, "R")
  .replace(/שׁ|\u05E9\u05C1/g, "Š")
  .replace(/שׂ|\u05E9\u05C2/g, "Ŝ")
  .replace(/ש/g, "S")
  .replace(/ת/g, "T")

  .replace(/בּ/g, "b")
  .replace(/גּ/g, "c")
  .replace(/דּ/g, "d")
  .replace(/[כּךּ]/g, "k")
  .replace(/פּ/g, "p")
  .replace(/תּ/g, "t")

  .replace(/\u05B0/g, "'")
  .replace(/\u05B1/g, "ĕ")
  .replace(/\u05B2/g, "ă")
  .replace(/\u05B3/g, "ŏ")
  .replace(/\u05B4/g, "i")
  .replace(/\u05B5/g, "ē")
  .replace(/\u05B6/g, "e")
  .replace(/\u05B7/g, "a")
  .replace(/\u05B8/g, "o")
  .replace(/\u05B9/g, "ō")
  .replace(/\u05BB/g, "u")
  .replace(/\u05BC/g, "h")
