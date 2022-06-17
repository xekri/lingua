const convertWord = (rules, word) =>
  rules
    .reduce((acc, [x, y]) =>
      acc.replace(x, y), word.normalize("NFKC")
    )
    .normalize("NFKC");

const applyKase = (kase, s) => {
  switch (kase) {
    case null:
      return s;
    case "lower":
      return s.toLowerCase();
    case "upper":
      return s.toUpperCase();
    case "capital":
      return s.slice(0, 1).toUpperCase() + s.slice(1);
    default:
      return s;
  }
};

const getKase = s => {
  for (const kase of ["lower", "upper", "capital"]) {
    if (s == applyKase(kase, s))
      return kase;
  }
  return null;
}

const convertWords = (regexp, rules, ignoreCases, s) =>
  s.replace(regexp, word => {
    const wordConverted = convertWord(rules, word.toLowerCase());
    return ignoreCases ? wordConverted :
      applyKase(
        getKase(word),
        wordConverted
      );
  });

const converter = (regexp, rules, ignoreCases = true) => {
  document.addEventListener("DOMContentLoaded", () => {
    const textareas = document.getElementsByTagName("textarea");

    for (const i of [0, 1])
      textareas[i].addEventListener('scroll', () => {
        textareas[1 - i].scrollTop = textareas[i].scrollTop;
      });

    const onInput = () =>
      textareas[1].value = convertWords(
        regexp,
        rules,
        true,
        textareas[0].value,
      );

    for (const e of document.getElementsByClassName("trigger"))
      e.addEventListener("input", onInput)

    onInput();
  });
  return x => convertWords(regexp, rules, ignoreCases, x);
};

