const convert = s => s
  .toLowerCase()
  .replace(/qu/g, "cu")
  //.replace(/g/g, "c")
  .replace(/x/g, "ks")
  //.replace(/ae/g, "ai")
  //.replace(/oe/g, "oi")
  //.toUpperCase()
  .normalize("NFC")
  ;

//æœꜷ

document.addEventListener("DOMContentLoaded", () => {
  const [ta0, ta1] = document.getElementsByTagName("textarea");
  const f = () => {
    ta1.value = convert(ta0.value);
  };
  ta0.addEventListener("input", f);
  f();

  for (const e of document.querySelectorAll(".la-table td, .la"))
    e.innerHTML = convert(e.innerHTML);
});