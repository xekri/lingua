document.addEventListener("DOMContentLoaded", () => {
  const tas = document.getElementsByTagName("textarea");

  const onInput = () => {
    tas[1].value = convert(tas[0].value, document.getElementById("mode").checked ? 1 : 0);
  };

  for (const e of document.getElementsByClassName("trigger"))
    e.addEventListener("input", onInput)

  onInput();
});
