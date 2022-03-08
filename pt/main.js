converter(/\p{L}+/ug, [
  [/(?<=^[nd])(?=([ao]s?|uma?|umas|uns|es[ts][ea]s?|aquel[ea]s?|is[ts]o|el[ea]s?)$)/, "'"],
  [/(?<=^n)(?=alguma?$)/, "'"],
  [/(?<=^d)(?=(aqui|aí|ali|onde)$)/, "'"],
  [/^à/, "a-a"],

  [/(?<=^(m|t|lh))(?=[oa]s?$)/, "'"],
  [/(?<=^[nv]o)-(?=l[oa]s?$)/, "'"],

  [/x/g, "cs"],
  [/nh/g, "ň"],
  [/lh/g, "ľ"],
  [/rr/g, "ŕ"],
]);
