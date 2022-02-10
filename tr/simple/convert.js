const xss = [
  [/ö/g, "ǒ"],
  [/ü/g, "ǔ"],
  [/e/g, "ǎ"],
  [/i/g, "ǐ"],
  [/ı/g, "i"],
];

const convert = s =>
  s.replace(/[\p{L}']+/ug, word =>
    applyKase(
      checkKase(word),
      convertWord(xss, word.toLocaleLowerCase("TR"))
    )
  );
