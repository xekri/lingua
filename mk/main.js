const xss = [
  [/ѓ/g, "ђ"],
  [/ќ/g, "щ"],
  [/ј/g, "й"],
];

document.addEventListener("DOMContentLoaded", () => {
  const textareas = document.getElementsByTagName("textarea");

  const onInput = () => {
    textareas[1].value = convert(
      xss,
      textareas[0].value
    );
  };

  for (const e of document.getElementsByClassName("trigger"))
    e.addEventListener("input", onInput)

  onInput();
});
