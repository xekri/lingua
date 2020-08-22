const nuOrtho = (s, cyr) => {
  let r = s.toLowerCase();

  r = [
    [/ы/g, "i"],
    [/э/g, "e"],
    [/а/g, "a"],
    [/о/g, "o"],
    [/у/g, "u"],

    [/и/g, "ji"],
    [/е/g, "jo"],
    [/я/g, "ja"],
    [/ё/g, "jȯ"],
    [/ю/g, "ju"],

    [/ь/g, "j"],
    [/ъ/g, "v"],

    [/й/g, "j"],

    [/п/g, "p"],
    [/б/g, "b"],
    [/ф/g, "f"],
    [/в/g, "w"],
    [/м/g, "m"],

    [/т/g, "t"],
    [/д/g, "d"],
    [/с/g, "s"],
    [/з/g, "z"],
    [/н/g, "n"],
    [/л/g, "l"],
    [/р/g, "r"],

    [/к/g, "c"],
    [/г/g, "g"],
    [/х/g, "x"],

    [/ч/g, "c\u0307"],
    [/ж/g, "g\u0307"],
    [/ш/g, "x\u0307"],

    [/ц/g, "c\u0308"],
    [/щ/g, "t\u0307"],

    [/(?<![a-z\u0307\u0308])ji/g, "i"],
  ].reduce((acc, [x, y]) => acc.replace(x, y), r);

  if (cyr)
    r = [
      [/(?<![a-z\u0307\u0308])i/g, "ji"],

      [/t\u0307/g, "щ"],
      [/c\u0308/g, "ц"],

      [/c\u0307/g, "ч"],
      [/g\u0307/g, "ж"],
      [/x\u0307/g, "ш"],

      [/ji/g, "и"], //і
      [/ja/g, "я"], //ꙗ
      [/jo/g, "е"],
      [/jȯ/g, "ё"],
      [/ju/g, "ю"],

      [/i/g, "ꙑ"],
      [/ė/g, "э"], //є
      [/a/g, "а"],
      [/o/g, "о"],
      [/u/g, "у"],

      [/j/g, "ь"],
      [/v/g, "ъ"],

      [/c/g, "к"],
      [/g/g, "г"],
      [/x/g, "х"],

      [/t/g, "т"],
      [/d/g, "д"],
      [/s/g, "с"],
      [/z/g, "з"],
      [/n/g, "н"],
      [/l/g, "л"],
      [/r/g, "р"],

      [/p/g, "п"],
      [/b/g, "б"],
      [/f/g, "ф"],
      [/w/g, "в"],
      [/m/g, "м"]
    ].reduce((acc, [x, y]) => acc.replace(x, y), r);

  if (!cyr)
    r = r
    .replace(/(?<=[cgx\u0307])ji/g, "i")
    .replace(/(?<=[cgx\u0307])jo/g, "e")

    .replace(/i/g, "ı")
    .replace(/j/g, "ȷ");

  return r.normalize("NFC")
}

document.addEventListener("DOMContentLoaded", () => {
  const sink = document.getElementById("sink");
  const sinkCyr = document.getElementById("sink-cyr");

  const update = () => {
    const s = document.getElementById("source").value

    sink.value = nuOrtho(s, false);
    sinkCyr.value = nuOrtho(s, true)

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
      `${nuOrtho(string), false} <span class="cyr">${string}</span>`
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