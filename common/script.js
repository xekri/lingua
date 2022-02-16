const convertWord = (rules, s) =>
  rules
    .reduce((acc, [x, y]) =>
      acc.replace(x, y), s.normalize("NFC")
    )
    .normalize("NFC");

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

const convert = (regexp, rules, s) =>
  s.replace(regexp, word =>
    applyKase(
      getKase(word),
      convertWord(rules, word.toLowerCase())
    )
  );

const converter = (regexp, rules) =>
  document.addEventListener("DOMContentLoaded", () => {
    const textareas = document.getElementsByTagName("textarea");

    const onInput = () => {
      textareas[1].value = convert(
        regexp,
        rules,
        textareas[0].value
      );
    };

    for (const e of document.getElementsByClassName("trigger"))
      e.addEventListener("input", onInput)

    onInput();
  });
