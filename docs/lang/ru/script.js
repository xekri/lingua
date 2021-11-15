const log = x => {
  console.log(x);
  return x;
};

const wordRe0 = "[\u0430-\u044f\u0451]+";

const replacements0 = [
  //[/э/g, "є"],
  //[/[её]/g, "ѥ"],
  [/[ёэ]/g, "е"],
  [/я/g, "ꙗ"],
  [/ю/g, "ꙕ"],
  [/и/g, "і"],
  [/ы/g, "ꙑ"],

  //[/(?<=[чжшщ])ѥ/g, "є"],
];

const wordRe1 = "[а-яёєѥꙗіꙑꙕѣѫѭѧѕ]+";

const replacements1 = [
  [/а/g, "ⰰ"],
  [/б/g, "ⰱ"],
  [/в/g, "ⰲ"],
  [/г/g, "ⰳ"],
  [/д/g, "ⰴ"],
  [/ѥ/g, "ⰵ"],
  [/ж/g, "ⰶ"],
  [/з/g, "ⰷ"],
  [/ѕ/g, "ⰸ"],
  [/і/g, "ⰺ"],
  [/й/g, "ⰹ"],
  [/к/g, "ⰽ"],
  [/л/g, "ⰾ"],
  [/м/g, "ⰿ"],
  [/н/g, "ⱀ"],
  [/о/g, "ⱁ"],
  [/п/g, "ⱂ"],
  [/р/g, "ⱃ"],
  [/с/g, "ⱄ"],
  [/т/g, "ⱅ"],
  [/у/g, "ⱆ"],
  [/ф/g, "ⱇ"],
  [/х/g, "ⱈ"],
  [/ц/g, "ⱌ"],
  [/ч/g, "ⱍ"],
  [/ш/g, "ⱎ"],
  [/щ/g, "ⱋ"],
  [/ъ/g, "ⱏ"],
  [/ꙑ/g, "ⱏⰺ"],
  [/ь/g, "ⱐ"],
  [/є/g, "ⱏⰵ"],
  [/ꙗ/g, "ⱐⰰ"],
  [/ꙕ/g, "ⱓ"],
  [/ѣ/g, "ⱑ"],
  [/ѫ/g, "ⱘ"],
  [/ѭ/g, "ⱙ"],
  [/ѧ/g, "ⱔ"],
];

document.addEventListener("DOMContentLoaded", () => {
  const [t0, t1, t2] = document.getElementsByTagName("textarea");

  const f0 = s => replaceWordsKeepCase(wordRe0, replacements0, s);
  const f1 = s => replaceWordsKeepCase(wordRe1, replacements1, s);

  const onInput1 = () => {
    t2.value = f1(t1.value);
  };

  const onInput0 = () => {
    t1.value = f0(t0.value);
    onInput1();
  };

  t0.addEventListener("input", onInput0);
  t1.addEventListener("input", onInput1);

  for (const e of document.querySelectorAll("[data-ru]"))
    e.innerHTML = f0(e.getAttribute("data-ru"));

  onInput0();
});

const convert = (replacements, s) =>
  replacements.reduce(
    (acc, [x, y]) =>
      acc.replace(x, y),
    s
      .toLowerCase()
      .normalize("NFC")
  );

const capitalize = s => s.charAt(0).toUpperCase() + s.slice(1);

const kase = s =>
  s == s.toUpperCase() ? "up" :
    s == capitalize(s) ? "cap" :
      "low";

const applyKeepCase = (s, f) =>
  ({
    up: x => x.toUpperCase(),
    low: x => x.toLowerCase(),
    cap: capitalize,
  })[kase(s)](f(s));

const replaceWordsKeepCase = (wordRe, replacements, s) =>
  s.replace(new RegExp(wordRe, "giu"), word =>
    convert(replacements, word)
  );
