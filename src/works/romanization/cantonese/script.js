req.addEventListener("load", () => {
  const converter = document.querySelector(".converter");

  const from = converter.querySelector(".from");
  const to = converter.querySelector(".to");

  const chkLet = converter.querySelector("input[name='letter']");
  const selTone = converter.querySelector("select[name='tone']");
  const chkLen = converter.querySelector("input[name='omit-length']");
  const chkRub = converter.querySelector("input[name='ruby']");
  const chkAlp = converter.querySelector("input[name='alphabet']");
  const chkDia = converter.querySelector("input[name='diaeresis']");

  const tweet = document.querySelector(`a.tweet`);

  const f = () => {
    const args = [chkLet.checked, selTone.value, !chkLen.checked, chkRub.checked, chkAlp.checked, chkDia.checked];

    if(chkRub.checked) {
      to.innerHTML =
       [...from.value]
         .map(x => honziToJytpiq[x] ? `<ruby>${x}<rt>${pinyinToSumi(honziToJytpiq[x], ...args)}</rt></ruby>` : x)
         .join("")
         .replace(/\n/g, "<br/>");
    }
    else
      to.innerHTML = pinyinToSumi(honzisToJytpiq(from.value), ...args).replace(/\n/g, "<br/>");

    tweet.setAttribute("href",
      "https://twitter.com/share?text="
      + encodeURI(from.value + "\n" + to.innerText)
      + `&url=${window.location.href}#cantonese`
      + "&hashtags=sumi_cantonese_romanization"
      + `&via=sumigv`
    );
  }

  for(const e of document.getElementsByClassName("trigger"))
    e.addEventListener("input", f);
  f();

  const canto = document.querySelector(".example .cantonese-pinyin");
  for(const mode of ["diacritic", "ascii", "alphabet"]) {
    const my = document.querySelector(`.example .author-${mode}`);
    [...canto.cloneNode(true).querySelectorAll("tr")].slice(1).forEach(tr => {
      tr.innerHTML =
        pinyinToSumi(tr.innerHTML, mode !== "diacritic", mode, true, false, mode !== "diacritic");
      my.appendChild(tr)
    });
  }

  document.querySelectorAll("#cantonese-pinyin tbody").forEach((e, i) => {
    const tbody = e.cloneNode(true);
    for(const tr of tbody.querySelectorAll("tr"))
      for(const td of tr.querySelectorAll("td"))
        td.innerHTML = pinyinToSumi(td.innerText, false, "diacritic").replace("w", "v").replace("∅", "(x)");
    document.getElementById(`cantonese-me`).append(tbody);
  });

  for(const mode of ["diacritic", "ascii", "mixed"])
    for(const tr of document.querySelectorAll(".tone tr"))
      if(tr.querySelector("th").textContent.toLowerCase() === `sumı-${mode}`) {
        for(const t of tones[mode]) {
          const td = document.createElement("td");
          td.innerHTML = t("", mode === "ascii" ? "" : "𝑣", mode === "mixed" ? "𝑐" : "");
          tr.appendChild(td);
        }
      }

  for(const e of document.querySelectorAll(".cantonese"))
    e.innerHTML = pinyinToSumi(e.innerHTML).replace(" ", "");

  const e = document.querySelector("#千字文 div");
  e.innerHTML =
    [...e.innerHTML]
      .map(x =>
        honziToJytpiq[x] ?
          `<ruby>${x}<rt>${pinyinToSumi(honziToJytpiq[x], false, "diacritic", true, true, false)}</rt></ruby>`
        : x
      )
      .join("");
});
