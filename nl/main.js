converter(/\p{L}+/ug, [
  [/(?<!au)x/g, "ks"],
  [/^z/, "s"],
  [/ch/g, "x"],
  [/ij/g, "ī"],
  [/aa/g, "ā"],
  [/ee/g, "ē"],
  [/oo/g, "ō"],
  [/uu/g, "ū"],
]);
