const convertWord = (xss, s) =>
  xss
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

const convert = (xss, s) =>
  s.replace(/\p{L}+/ug, word =>
    applyKase(
      getKase(word),
      convertWord(xss, word.toLowerCase())
    )
  );
