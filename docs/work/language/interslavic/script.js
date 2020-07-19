document.addEventListener("DOMContentLoaded", async () => {
  const replace = (await import("./replace.js")).default

  const chkUp = document.querySelector("input[name='uppercase']");
  const chkCy = document.querySelector("input[name='cyrillic']");
  const src =  document.getElementById("src")
  const tweet =  document.getElementById("tweet")

  for(const el of document.querySelectorAll(".replaced, .has-td-replaced td")) {
    el.setAttribute("data-text", el.innerHTML)
    el.innerHTML = replace(el.innerHTML, chkUp.checked, chkCy.checked);
  }

  for(const el of document.querySelectorAll(".replaced, .has-td-replaced td"))
    el.innerHTML = replace(el.innerHTML, chkUp.checked, chkCy.checked);

  const onInput = () => {
    document.getElementById("sink").value = replace(src.value, chkUp.checked, chkCy.checked)

    tweet.setAttribute("href", encodeURI(`https://twitter.com/share?text=${
      src.value
      + "\n---\n" + replace(src.value, false, false)
      + "\n---\n" + replace(src.value, false, true)
      + "\n---\n" + replace(src.value, true, false)
      + "\n---\n" + replace(src.value, true, true)
    }`))
  }

  const onCheck = () => {
    for(const el of document.querySelectorAll(".replaced, .has-td-replaced td")) {
      el.innerHTML = replace(el.getAttribute("data-text"), chkUp.checked, chkCy.checked);
      el.setAttribute("data-cyrillic", chkCy.checked)
    }
  }

  for(const el of [src, chkUp, chkCy])
    el.addEventListener("input", onInput);

  for(const el of [chkUp, chkCy])
    el.addEventListener("input", onCheck);

  onCheck();
  onInput();
});