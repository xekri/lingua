document.addEventListener("DOMContentLoaded", () => {
  const taIn = document.getElementById("in");
  const taOut = document.getElementById("out");
  const f = () => {
    taOut.value =
      taIn.value
      .replace(/i/g, "ı")
      .replace(/j/g, "ȷ")
      ;
  };

  taIn
  .addEventListener("input", f);
  f();
})

