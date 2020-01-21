window.addEventListener("load", () => {
  const converter = document.querySelector("#cantonese div.converter");

  const inTa = converter.querySelector(".from textarea");
  const outDiv = converter.querySelector(".to div");

  const chkLet = converter.querySelector("input[name='letter']");
  const selTone = converter.querySelector("select[name='tone']");
  const chkLen = converter.querySelector("input[name='length']");

  const tweet = document.querySelector(`#cantonese a.tweet`);

  const f = () => {
    outDiv.innerHTML = cantToSumi(inTa.value, chkLet.checked, selTone.value, chkLen.checked).replace(/\n/g, "<br/>");

    tweet.setAttribute("href",
    "https://twitter.com/intent/tweet?text="
      + encodeURI(outDiv.innerText)
      + `&url=${window.location.href}#cantonese`
      + "&hashtags=sumi_cantonese_romanization"
      + `&via=sumigv`
    );
  }

  for(const e of document.getElementsByClassName("trigger"))
    e.addEventListener("input", f);
  f();

  for(const ascii of [false, true]) {
    for(const e of document.getElementsByClassName(`cantonese-example${ascii ? "-ascii" : ""}`))
      e.innerHTML =
        cantToSumi(
          ascii ?
            e.nextElementSibling.textContent
          :
            e.nextElementSibling.nextElementSibling.textContent
          , ascii, ascii ? "ascii" : "diacritic"
        )
        .replace("(", "<br/>(");

    document.querySelectorAll("#cantonese-pinyin tbody").forEach((e, i) => {
      const tbody = e.cloneNode(true);
      for(const tr of tbody.querySelectorAll("tr"))
        for(const td of tr.querySelectorAll("td"))
          td.innerHTML = cantToSumi(td.innerText, ascii, ascii ? "ascii" : "diacritic");
      document.getElementById(`cantonese-me${ascii ? "-ascii" : ""}`).append(tbody);
    });

    for(const tr of document.querySelectorAll("#cantonese-tone tr")) {
      if(tr.querySelectorAll("th")[0].textContent === `sumi${ascii ? "-ASCII" : ""}`) {
        for(const i in [...Array(9).keys()]) {
          const td = document.createElement("td");
          td.innerHTML = `i${tones[ascii ? "ascii" : "diacritic"][i]}`;
          tr.appendChild(td);
        }
        break;
      }
    }

  }

  for(const e of document.querySelectorAll(".cantonese-short"))
    e.innerText += dcs.shortAbove;
});
