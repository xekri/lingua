const log = x => {
  console.log(x);
  return x;
};

document.addEventListener("DOMContentLoaded", () => {
  const t0 = document.getElementById("0");
  const t1 = document.getElementById("1");

  const onInput = () => {
    t1.value = replaceWords(t0.value);
  };

  t0.addEventListener("input", onInput);

  onInput();
})

const replaceLowerCaseWord = s =>
  s
    .normalize("NFC")
    .toLowerCase()
    .replace(/ch/g, "x")

    .replace(/ti/g, "ťi")
    .replace(/tí/g, "ťí")
    .replace(/di/g, "ďi")
    .replace(/dí/g, "ďí")
    .replace(/ni/g, "ňi")
    .replace(/ní/g, "ňí")
    .replace(/(?<=[pbfvmszlc])(?=[ií])/g, "j")
    .replace(/y/g, "i")
    .replace(/ý/g, "í")

    .replace(/tě/g, "ťe")
    .replace(/dě/g, "ďe")
    .replace(/ně/g, "ňe")
    .replace(/ě/g, "je")
  ;

const capitalize = s => s.charAt(0).toUpperCase() + s.slice(1);

const kase = s =>
  s == s.toUpperCase() ? "up" :
    s == capitalize(s) ? "cap" :
      "low";

const applyWithCase = (s, f) =>
  ({
    up: x => x.toUpperCase(),
    low: x => x.toLowerCase(),
    cap: capitalize,
  })[kase(s)](f(s.toLowerCase()));

const replaceWords = text =>
  text.replace(/[a-záéěčďíňóřšťúůýž]+/gi, word =>
    applyWithCase(word, replaceLowerCaseWord)
  );
