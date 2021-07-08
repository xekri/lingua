const xss = [

];

document.addEventListener("DOMContentLoaded", () => {
  const [ta0, ta1] = document.querySelectorAll("textarea");
  ta1.value = ta0.value
    .replace(/ /g, "")
});
