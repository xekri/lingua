document.addEventListener("DOMContentLoaded", () => {
  const replace = (s, up, cy) => {
    let r =
    [ [/ć/g, "ť"]
    , [/đ/g, "ď"]
    //, [/dž/g, "ď"]

    , [/h/g, "x"]
    , [/v/g, "w"]

    , [/š/g, "x̌"]
    //,	[/č/g, "č"]
    , [/ž/g, "ǧ"]

    , [/å/g, "ꜵ"]

    , [/ę/g, "ẽ"]
    , [/ų/g, "õ"]

    , [/c/g, "c̀"]
    , [/k/g, "c"]
    ]
    .reduce((acc, [x, y]) => acc.replace(x, y), s.normalize("NFC"))

    if(cy)
      r =
      [ [/x̌/g, "ш"]
      , [/č/g, "ч"]
      , [/ǧ/g, "ж"]
      , [/ė/g, "ь\u0301"]
      , [/ȯ/g, "ъ\u0301"]
      , [/ẽ/g, "ѧ"]
      , [/õ/g, "ѫ"]
      , [/ě/g, "ѣ"]
      , [/ꜵ/g, "а"]

      , [/ť/g, "щ"]
      , [/ď/g, "җ"]

      , [/ĺ/g, "lь"]
      , [/ń/g, "nь"]
      , [/ŕ/g, "rь"]
      , [/t́/g, "tь"]
      , [/d́/g, "dь"]
      , [/ś/g, "sь"]
      , [/ź/g, "zь"]

      , [/c̀/g, "ц"]

      , [/a/g, "а"]
      , [/b/g, "б"]
      , [/c/g, "к"]
      , [/d/g, "д"]
      , [/e/g, "е"]
      , [/f/g, "ф"]
      , [/g/g, "г"]
      , [/[iı]/g, "и"]
      , [/[jȷ]/g, "ь"]
      , [/l/g, "л"]
      , [/m/g, "м"]
      , [/n/g, "н"]
      , [/o/g, "о"]
      , [/p/g, "п"]
      , [/r/g, "р"]
      , [/s/g, "с"]
      , [/t/g, "т"]
      , [/u/g, "у"]
      , [/w/g, "в"]
      , [/x/g, "ж"]
      , [/y/g, "ъ"] //ꙑ
      , [/z/g, "з"]

      //, [/й(?=[йиуеоаѧѫѣ]|[ьъ]\u0301)/g, "ь"]
      //, [/(?<![йиуеоаѧѫѣ]|[ьъ]\u0301)й/g, "ь"]
      ]
      .reduce((acc, [x, y]) => acc.replace(x, y), r)

    if(up)
      r = r.toUpperCase()
    else if(! cy)
      r = r
      .replace(/i/g, "ı")
      .replace(/j/g, "ȷ")

    return r
  }

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

    tweet.setAttribute("href", encodeURI(`https://twiter.com/intent/tweet?text=${
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