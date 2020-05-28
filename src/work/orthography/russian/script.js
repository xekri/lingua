const nuOrtho = (s, up) => {
  let r = s.toLowerCase();

  r =
  [ [/ы/g, "i"]
  , [/э/g, "e"]
  , [/а/g, "a"]
  , [/о/g, "o"]
  , [/у/g, "u"]
  , [/и/g, "ji"]
  , [/е/g, "je"]
  , [/я/g, "ja"]
  , [/ё/g, "jo\u0301"]
  , [/ю/g, "ju"]

  , [/ь/g, "j\u0306"]
  , [/ъ/g, "'"]

  , [/й/g, "j"]

  , [/щ/g, "шч"]
  //, [/жд/g, "d\u030C"]
  , [/ч/g, "k\u0302"]
  , [/ж/g, "g\u030C"]
  , [/ш/g, "x\u030C"]

  , [/ц/g,  "c"]

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

  , [/(?<=ji)j(?=[ie])/g, ""]
  , [/(?<=[kgx\u0302\u030C])j(?=[ie])/g, ""]
  , [/(?<!['a-z\u0301\u0306\u030C\u0302])ji/g, "i"]
  , [/(?<![ieaou])j\u0306(?![ieaou])/g, "j"]
  ].reduce((acc, [x, y]) => acc.replace(x, y), r);
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
      nuOrtho(document.getElementById("source").value, checkUc.checked);

    document.getElementById("tweet")
    .setAttribute("href", `https://twitter.com/intent/tweet?text=${
      encodeURIComponent(
        document.getElementById("source").value
        + "\n" + sink.value
      )
    }`)
  }

  const checkUc = document.querySelector("input[name='uppercase']");

  for(const td of document.querySelectorAll(".nu-table td"))
    td.innerHTML =
      td.innerHTML
      .replace(/\!\{(.+)\}|.+/, (match, pattern, offset, string) =>
        pattern
          ? `<span class="abbr">${pattern}</span>`
          : `${nuOrtho(string, checkUc.checked)} <span class="cyr">${string}</span>`
        )


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
