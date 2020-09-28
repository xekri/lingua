document.addEventListener("DOMContentLoaded", async () => {
  const replacePl = (await import("./replace.js")).default;

  const chkUp = document.getElementById("uppercase");
  const chkCy = document.getElementById("cyrillic");
  const source = document.getElementById("source");
  const sink = document.getElementById("sink");

  const update = () => {
    sink.value =
      replacePl(source.value, chkUp.checked, chkCy.checked);

    document.getElementById("tweet")
      .setAttribute("href", `https://twitter.com/intent/tweet?text=${
      encodeURIComponent(
        source.value
        //+ "\n" + document.getElementById("sink-lat").value
        + "\n" + sink.value
      )
    }`)
  }

  for (const td of document.querySelectorAll(".nu td"))
    if (/.*?\{.*\}.*?/.test(td.innerHTML))
      td.innerHTML = td.innerHTML.replace(/^\{(.+)\}$/g, (match, p1) => `<span class="as-is">${p1}</span>`)
  else
    td.innerHTML = replacePl(td.innerHTML, false, true) + `<br/><span class='original'>${td.innerHTML}</span>`

  for (const e of document.getElementsByClassName("trigger"))
    e.addEventListener("input", update);

  update();

  document.querySelectorAll(".add-new tr")
    .forEach(tr => {
      const td = tr.lastElementChild;
      if (td.tagName == "TD") {
        const tdNu = td.cloneNode(true);
        tdNu.innerHTML = replacePl(td.innerHTML);
        tr.appendChild(tdNu);
      }
    });
});