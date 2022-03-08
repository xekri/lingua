converter(/\p{L}+/ug, [
  [/x/g, "ks"],
  [/c/g, "k"],
  [/g/g, "c"],
  [/ae/g, "ai"],
  [/oe/g, "oi"],
  //[/ā/g, "aa"],
  //[/ē/g, "ee"],
  //[/ī/g, "ii"],
  //[/ō/g, "oo"],
  //[/ū/g, "uu"],
]);
