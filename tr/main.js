document.addEventListener("DOMContentLoaded", () => {
  const tas = document.getElementsByTagName("textarea");
  const onInput = () => {
    tas[1].innerHTML = convert(tas[0].innerHTML);
  };
  tas[0].addEventListener("input", onInput);
  onInput();
});
