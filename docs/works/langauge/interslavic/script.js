const replace = s =>
  [ ["h", "x"]
  , ["š", "x̌"]
  ,	["č", "ǩ"]
  , ["ž", "ǧ"]
  , ["ć", "ť"]
  , ["dž", "ď"]
  //, ["ě"]
  , ["ę", "ẽ"]
  , ["ų", "õ"]
  ]
  .reduce(([x, y], acc) => acc.replace(x, y), s)

document.addEventListener("DOMContentLoaded", () => {
  for(const el of document.querySelectorAll(".replaced"))
    el.innerHTML = replace(el.innerHTML);
});