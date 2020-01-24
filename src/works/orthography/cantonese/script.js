window.addEventListener("load", () => {
  const converter = document.querySelector("#cantonese .converter");

  const from = converter.querySelector(".from");
  const to = converter.querySelector(".to");

  const chkLet = converter.querySelector("input[name='letter']");
  const selTone = converter.querySelector("select[name='tone']");
  const chkLen = converter.querySelector("input[name='length']");

  const tweet = document.querySelector(`#cantonese a.tweet`);

  const f = () => {
    to.innerHTML = pinyinToSumi(honziToJytpiq(from.value), chkLet.checked, selTone.value, chkLen.checked).replace(/\n/g, "<br/>");

    tweet.setAttribute("href",
    "https://twitter.com/intent/tweet?text="
      + encodeURI(from.value + "\n" + to.innerText)
      + `&url=${window.location.href}#cantonese`
      + "&hashtags=sumi_cantonese_romanization"
      + `&via=sumigv`
    );
  }

  for(const e of document.getElementsByClassName("trigger"))
    e.addEventListener("input", f);
  f();

  for(const ascii of [false, true]) {
    const e = document.querySelector(`#cantonese .example .sumi${ascii ? "-ascii" : ""}`);
    let eCopied = e.nextElementSibling;
    if(!ascii)
      eCopied = eCopied.nextElementSibling;
    e.innerHTML = pinyinToSumi(eCopied.innerHTML.replace(/<\/?su[pb]>/g, ""), ascii, ascii ? "ascii" : "diacritic");
    e.querySelector("tr th").innerText = `sumi${ascii ? "-ASCII" : ""}`;

    document.querySelectorAll("#cantonese-pinyin tbody").forEach((e, i) => {
      const tbody = e.cloneNode(true);
      for(const tr of tbody.querySelectorAll("tr"))
        for(const td of tr.querySelectorAll("td"))
          td.innerHTML = pinyinToSumi(td.innerText, ascii, ascii ? "ascii" : "diacritic");
      document.getElementById(`cantonese-me${ascii ? "-ascii" : ""}`).append(tbody);
    });

    for(const tr of document.querySelectorAll("#cantonese-tone tr")) {
      if(tr.querySelectorAll("th")[0].textContent === `sumi${ascii ? "-ASCII" : ""}`) {
        for(const t of tones[ascii ? "ascii" : "diacritic"]) {
          const td = document.createElement("td");
          if(ascii) {
            td.innerHTML = `${t}`;
            td.innerHTML = td.textContent;
          }
          else
            td.innerHTML = `i${t}`;
          tr.appendChild(td);
        }
        break;
      }
    }

  }

  //for(const e of document.querySelectorAll(".cantonese-short"))
  //  e.innerText += dcs.shortAbove;
});
