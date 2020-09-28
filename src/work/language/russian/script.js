const nuOrthoCyr = s => {
  let r = s.toLowerCase();

  r = [
    [/(?<![а-я])и/g, "ы"],
    [/(?<=[гкхжчшщ])и/g, "ы"],

    [/и/g, "ꙇ"],
    [/ы/g, "и"],
    [/ю/g, "ѵ"],
    [/я/g, "ꙗ"]
    //, [/ё/g, "е\u0307"]
    //, [/е/g, "ѥ"]
  ].reduce((acc, [x, y]) => acc.replace(x, y), r);

  if (document.getElementById("uppercase").checked)
    r = r.toUpperCase()
  return r.normalize("NFC")
}

const nuOrtho = s => {
  let r = s.toLowerCase();

  r = [
    [/(?<![а-я])и/g, "ы"],
    [/(?<=[гкхжчшщ])и/g, "ы"],

    [/ы/g, "i"],
    [/э/g, "e"],
    [/а/g, "a"],
    [/о/g, "o"],
    [/у/g, "u"]

    ,
    [/(?<=[пбфвмдтсзнлцкгх])и/g, "\u0313i"],
    [/(?<=[пбфвмдтсзнлцкгх])е/g, "\u0313o"],
    [/(?<=[пбфвмдтсзнлцкгх])я/g, "\u0313a"],
    [/(?<=[пбфвмдтсзнлцкгх])ё/g, "\u0313ȯ"],
    [/(?<=[пбфвмдтсзнлцкгх])ю/g, "\u0313u"]

    ,
    [/(?<=[пбфвмдтсзнлцкгх])ь/g, "\u0313"]

    ,
    [/и/g, "ji"],
    [/е/g, "jo"],
    [/я/g, "ja"],
    [/ё/g, "jȯ"],
    [/ю/g, "ju"]

    ,
    [/ь/g, "j"],
    [/ъ/g, "v"]

    ,
    [/й/g, "j"]

    ,
    [/п/g, "p"],
    [/б/g, "b"],
    [/ф/g, "f"],
    [/в/g, "w"],
    [/м/g, "m"]

    ,
    [/т/g, "t"],
    [/д/g, "d"],
    [/с/g, "s"],
    [/з/g, "z"],
    [/н/g, "n"],
    [/л/g, "l"],
    [/р/g, "r"]

    ,
    [/к/g, "c"],
    [/г/g, "g"],
    [/х/g, "x"]

    ,
    [/щ/g, "шч"],
    [/ч/g, "c\u0307"],
    [/ж/g, "g\u0307"],
    [/ш/g, "x\u0307"],
    [/ц/g, "c\u0308"]

    ,
    [/i/g, "ı"],
    [/j/g, "ȷ"]
  ].reduce((acc, [x, y]) => acc.replace(x, y), r);;

  if (document.getElementById("uppercase").checked)
    r = r.toUpperCase().replace(/ȷ/g, "J")

  return r.normalize("NFC");
}

document.addEventListener("DOMContentLoaded", () => {
  const sink = document.getElementById("sink");
  const sinkCyr = document.getElementById("sink-cyr");

  const update = () => {
    const s = document.getElementById("source").value

    sink.value = nuOrtho(s);
    sinkCyr.value = nuOrthoCyr(s)

    document.getElementById("tweet")
      .setAttribute("href", `https://twitter.com/intent/tweet?text=${
      encodeURIComponent(
        s
        + "\n\n" + sink.value
        + "\n\n" + sinkCyr.value
      )
    }`)
  }

  for (const td of document.querySelectorAll(".nu-table td"))
    td.innerHTML =
    td.innerHTML
    .replace(/\!\{(.+)\}|.+/, (match, pattern, offset, string) =>
      pattern ?
      `<span class="abbr">${pattern}</span>` :
      `${nuOrtho(string)} <span class="cyr">${string}</span>`
    )

  for (const e of document.getElementsByClassName("trigger"))
    e.addEventListener("input", update);

  update();

  document.querySelectorAll(".add-new tr")
    .forEach(tr => {
      const td = tr.lastElementChild;
      if (td.tagName == "TD") {
        const tdNu = td.cloneNode(true);
        tdNu.innerHTML = nuOrtho(td.innerHTML, false);
        tr.appendChild(tdNu);
      }
    })
});