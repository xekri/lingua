document.addEventListener("DOMContentLoaded", () => {
  const [t0, t1] = document.getElementsByTagName("textarea");
  const onInput = () => {
    t1.value = convert(t0.value);
  };

  t0.addEventListener("input", onInput);
  onInput();

  for (const e of document.querySelectorAll("[data-ar]"))
    e.innerHTML = convert(e.getAttribute("data-ar"));
});

const convert = s =>
  [
    [/[إأ]/g, x => x.normalize("NFD")],

    [/ا/g, "a"],
    [/ب/g, "b"],
    [/ج/g, "c"],
    [/د/g, "d"],
    [/ذ/g, "ḋ"],
    [/ه/g, "e"],
    [/و/g, "v"],
    [/ز/g, "z"],
    [/ح/g, "h"],
    [/خ/g, "ḣ"],
    [/ط/g, "x"],
    [/ظ/g, "ẋ"],
    [/ي/g, "j"],
    [/ك/g, "k"],
    [/ل/g, "l"],
    [/م/g, "m"],
    [/ن/g, "n"],
    [/ع/g, "o"],
    [/غ/g, "ȯ"],
    [/ف/g, "p"],
    [/ص/g, "š"],
    [/ض/g, "ṧ"],
    [/ق/g, "q"],
    [/ر/g, "r"],
    [/س/g, "s"],
    [/ش/g, "ṡ"],
    [/ت/g, "t"],
    [/ث/g, "ṫ"],

    [/ة/g, "ṭ"],

    [/ى/g, "ā"],
    [/آ/g, "ā"],

    [/\u064e/g, "ạ"],
    [/\u064f/g, "u"],
    [/\u0650/g, "i"],

    [/\u064bạ?/g, "ą"],
    [/\u064c/g, "ų"],
    [/\u064d/g, "į"],

    [/[ء\u0654\u0655]/g, "ọ"], // hamza
    [/\u0652/g, ""],

    [/ạa(?![ạuiāūīąųį])/g, "ā"],
    [/uv(?![ạuiāūīąųį])/g, "ū"],
    [/ij(?![ạuiāūīąųį])/g, "ī"],

    [/(?<=ạ)v(?![ạuiāūīąųį])/g, "u"],
    [/(?<=ạ)j(?![ạuiāūīąųį])/g, "i"],

    [/([^ạuiāūīąųį])([ạuiāūīąųį]*)\u0651/g, "$1$1"],

    [/،/g, ","],
  ].reduce((acc, [x, y]) => acc.replace(x, y), s);

