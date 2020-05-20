const nuOrtho = (s, up) => {
  let r = s.toLowerCase();

  r =
    [ [/ы/g, "i"]
    , [/э/g, "e"]
    , [/а/g, "a"]
    , [/о/g, "o"]
    , [/у/g, "u"]
    , [/и/g, "i\u0307"]
    , [/е/g, "e\u0307"]
    , [/я/g, "a\u0307"]
    , [/ё/g, "é"]
    , [/ю/g, "u\u0307"]

    , [/ь/g, "ĭ"]
    , [/ъ/g, "ŭ"]

    , [/й/g, "j"] //j̄

    , [/щ/g, "x\u030Ck\u0323"]
    //, [/жд/g, "d\u030C"]

    , [/ч/g, "k\u0323"]
    , [/ж/g, "g\u030C"]
    , [/ш/g, "x\u030C"]

    , [/ц/g,  "c"]
    //, [/дз/g, "g\u030F"]

    , [/п/g, "p"]
    , [/б/g, "b"]
    , [/ф/g, "f"]
    , [/в/g, "w"]
    , [/м/g, "m"]

    , [/т/g, "t"]
    , [/д/g, "d"]
    , [/с/g, "s"]
    , [/з/g, "z"]
    , [/н/g, "n"]
    , [/л/g, "l"]
    , [/р/g, "r"]

    , [/к/g, "k"]
    , [/г/g, "g"]
    , [/х/g, "x"]
    ].reduce((acc, [x, y]) => acc.replace(x, y), r);

  r = r
  .replace(/(?<=[kgx\u030C\u0323].)\u0307/g, "")
  .replace(/(?<![a-zĭŭj̄é\u0323\u030C\u0307])i\u0307/g, "i")
  .replace(/(?<=[ieéaou\u0307]i)\u0307/ug, "")
  ;

  if(up)
    r = r.toUpperCase();
  else
    r = r
    .replace(/i/g, "ı")
    .replace(/j/g, "ȷ")
    ;

  return r.normalize("NFC");
}

document.addEventListener("DOMContentLoaded", () => {
  const sink = document.getElementById("sink");

  const update = () => {
    sink.value =
      nuOrtho(document.getElementById("source").value, false);

    document.getElementById("tweet")
    .setAttribute("href", `https://twitter.com/intent/tweet?text=${
      encodeURIComponent(
        document.getElementById("source").value
        + "\n" + sink.value
      )
    }`)
  }

  const checkUc = document.querySelector("input[name='uppercase']");

  for(const td of document.querySelectorAll(".nu td"))
    td.innerHTML = nuOrtho(td.innerHTML, checkUc.checked)

  document.getElementById("source")
  .addEventListener("input", update);

  checkUc
  .addEventListener("input", update);

  update();

  document.querySelectorAll(".add-new tr")
  .forEach(tr => {
    const td = tr.lastElementChild;
    if(td.tagName == "TD") {
      const tdNu = td.cloneNode(true);
      tdNu.innerHTML = nuOrtho(td.innerHTML, false);
      tr.appendChild(tdNu);
    }
  })
});
