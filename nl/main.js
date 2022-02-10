const xss = [
  [/(?<!au)x/g, "ks"],
  [/^z/, "s"],
  [/ch/g, "x"],
  [/ij/g, "ī"],
  [/aa/g, "ā"],
  [/ee/g, "ē"],
  [/oo/g, "ō"],
  [/uu/g, "ū"],
];

document.addEventListener("DOMContentLoaded", () => {
  const tas = document.getElementsByTagName("textarea");

  const onInput = () => {
    tas[1].value = convert(xss, tas[0].value);
  };

  for (const e of document.getElementsByClassName("trigger"))
    e.addEventListener("input", onInput)

  onInput();
});
