document.addEventListener("DOMContentLoaded", () => {
  const taIn = document.getElementById("in");
  const taOut = document.getElementById("out");

  const chkUndot = document.querySelector("input[name='undot']");
  const selCase = document.querySelector("select[name='case']");

  const f = () => {
    let s = taIn.value;
    if(chkUndot.checked)
      s = s
      .replace(/i/g, "ı")
      .replace(/j/g, "ȷ")
      ;
    switch(selCase.value) {
      case "upper":
        s = s.toUpperCase().replace(/ȷ/g, "J");
        break;
      case "lower":
        s = s.toLowerCase()
        break;
    }

    taOut.value = s;
  };

  for(const e of document.querySelectorAll(".trigger"))
    e.addEventListener("input", f);

  f();
})
