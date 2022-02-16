const rules = [
  [/ö/g, "ǒ"],
  [/ü/g, "ǔ"],
  [/e/g, "ǎ"],
  [/i/g, "ǐ"],
  [/ı/g, "i"],
];

const convertLocal = s =>
  s.replace(/[\p{L}']+/ug, word =>
    applyKase(
      checkKase(word),
      convertWord(rules, word.toLocaleLowerCase("TR"))
    )
  );

document.addEventListener("DOMContentLoaded", () => {
  const tas = document.getElementsByTagName("textarea");

  const onInput = () => {
    tas[1].value = convertLocal(tas[0].value);
  };

  for (const e of document.getElementsByClassName("trigger"))
    e.addEventListener("input", onInput)

  onInput();
});
