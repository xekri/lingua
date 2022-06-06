const convert_ = converter(/[a-zé]+/ug, [
  [/j/g, 'dj'],
  [/c/g, 'tj'],
  [/y/g, 'j'],
  [/v/g, 'f'],
  [/w/g, 'v'],
  [/kh/g, 'x'],
  [/g/g, 'c'],
  [/ng/g, 'g'],
]);
