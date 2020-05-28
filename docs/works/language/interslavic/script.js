document.addEventListener("DOMContentLoaded", () => {
  const chkUp = document.querySelector("input[name='uppercase']");
  const src =  document.getElementById("src")

  const replace = (s, cyr) => {
    let r =
    [ [/ć/g, "ť"]
    , [/dž/g, "ď"]

    , [/h/g, "x"]

    , [/š/g, "x̌"]
    ,	[/č/g, "ǩ"]
    , [/ž/g, "ǧ"]

    //, [/ě/g]
    , [/ę/g, "ẽ"]
    , [/ų/g, "õ"]
    ]
    .reduce((acc, [x, y]) => acc.replace(x, y), s.normalize("NFC"))

    if(chkUp.checked)
      r = r.toUpperCase()
    else
      r = r
      .replace(/i/g, "ı")
      .replace(/j/g, "ȷ")

    return r
  }

  for(const el of document.querySelectorAll(".replaced, .has-td-replaced td"))
    el.innerHTML = replace(el.innerHTML);

  const onInput = () => {
    document.getElementById("sink").value = replace(src.value)
  }

  src.addEventListener("input", onInput);
  chkUp.addEventListener("input", onInput);
  onInput();
});