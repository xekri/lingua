document.addEventListener("DOMContentLoaded", () => {
  const textareas = document.getElementsByTagName("textarea");

  const onInput = () => {
    textareas[1].value = convert(textareas[0].value);
  };

  for (const element of document.getElementsByClassName("trigger"))
    element.addEventListener("input", onInput)

  onInput();
});
