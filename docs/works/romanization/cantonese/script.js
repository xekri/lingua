req.addEventListener("load", () => {
  const converter = document.querySelector(".converter");

  const from = converter.querySelector(".from");
  const toSelect = converter.querySelector(".to-select");
  const to = converter.querySelector(".to");

  const chkLet = converter.querySelector("input[name='letter']");
  const selTone = converter.querySelector("select[name='tone']");
  const chkLen = converter.querySelector("input[name='omit-length']");
  const chkRub = converter.querySelector("input[name='ruby']");
  const chkAlp = converter.querySelector("input[name='alphabet']");
  //const chkDia = converter.querySelector("input[name='diaeresis']");

  const tweet = document.querySelector(`a.tweet`);

  const honziToMyPinyinElement = (honzi, args, ruby) => {
    const jytpiqs = honziToJytpiqs[honzi];
    return jytpiqs ?
      `${ruby ? `<ruby>${honzi}<rt class='my-pinyin'>` : "<span class='my-pinyin'>"}${
        jytpiqs.length == 1 ?
          pinyinToMine(jytpiqs[0], ...args)
        :
          `<select>${
            jytpiqs.map((jytpiq, i) =>
              (x => `<option value='${x}'}>${x}</option>`)(pinyinToMine(jytpiq, ...args))
            )
            .join("")
          }</select>`
      }${ruby ? "</rt></ruby>" : "</span>"}`
    :
      honzi
    ;
  }

  const selectsParentToSpansParent = e => {
    for(const select of e.querySelectorAll(".my-pinyin select")) {
      select.replaceWith(document.createTextNode(select.value));
    }
  };

  const onSelect = () => {
    to.innerHTML = "";
    for(const child of toSelect.childNodes) {
      const appended = child.cloneNode(true);
      if(child.hasChildNodes()) {
        const select = child.querySelector("select");
        const selectAppended = appended.querySelector("select");
        if(selectAppended)
          selectAppended.replaceWith(select.value);
      }
      to.appendChild(appended);
    }
    for(const e of [toSelect, to])
      for(const span of e.querySelectorAll("span.my-pinyin + span.my-pinyin"))
        span.insertAdjacentText("beforebegin", " ");

    setTweet();
  };

  const setTweet = () =>
    tweet.setAttribute("href",
      "https://twitter.com/share?text="
      + encodeURI(from.value + "\n" + to.innerText)
      + `&url=${window.location.href}#cantonese`
      + "&hashtags=sumi_cantonese_romanization"
      + `&via=sumigv`
      );

  const onInput = () => {
    const args = [chkLet.checked, selTone.value, !chkLen.checked, chkRub.checked, !chkAlp.checked];

    const value =
      [ [/\n/g, "<br/>"]
      , ["（", " ("]
      , ["）", ") "]
      , ["「", " ‹"]
      , ["」", "› "]
      , ["『", " «"]
      , ["』", "» "]
      , ["。", ". "]
      , ["、", ", "]
      , ["？", "? "]
      , ["！", "! "]
      ]
      .reduce((acc, [x, y]) => acc.replace(x, y), pinyinToMine(from.value, ...args))
      ;

    toSelect.innerHTML =
      chkRub.checked ?
        [...value]
        .map(honzi => honziToMyPinyinElement(honzi, args, true))
        .join("")
      :
        value.replace(/\p{sc=Han}/ug, honzi => honziToMyPinyinElement(honzi, args, false))
      ;

    onSelect();
    for(const e of converter.querySelectorAll(".my-pinyin select"))
      e.addEventListener("input", onSelect);
  };

  onInput();
  for(const e of converter.querySelectorAll(".trigger"))
    e.addEventListener("input", onInput);

  const canto = document.querySelector(".example .cantonese-pinyin");
  for(const mode of ["diacritic", "ascii", "alphabet"]) {
    const my = document.querySelector(`.example .author-${mode}`);
    [...canto.cloneNode(true).querySelectorAll("tr")].slice(1).forEach(tr => {
      tr.innerHTML =
        pinyinToMine(tr.innerHTML, mode !== "diacritic", mode, true, false, true);
      my.appendChild(tr)
    });
  }

  document.querySelectorAll("#cantonese-pinyin tbody").forEach((e, i) => {
    const tbody = e.cloneNode(true);
    for(const tr of tbody.querySelectorAll("tr"))
      for(const td of tr.querySelectorAll("td"))
        td.innerHTML = pinyinToMine(td.innerText, false, "diacritic").replace("w", "v").replace("∅", "(x)");
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
    e.innerHTML = pinyinToMine(e.innerHTML).replace(" ", "");

  const e = document.querySelector("#千字文 div");
  e.innerHTML =
    [...e.innerHTML]
    .map(honzi => honziToMyPinyinElement(honzi, [], true))
    .join("")
    ;
  selectsParentToSpansParent(e);
});
