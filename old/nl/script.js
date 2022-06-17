const convert_ = converter(/\p{L}+/ug, [
  [/(?<!au)x/g, 'ks'],
  [/^z/, 's'],
  [/^v/, 'f'],
  [/ch/g, 'x'],
  [/ij/g, 'ī'],
  [/aa/g, 'ā'],
  [/ee/g, 'ē'],
  [/éé/g, 'ḗ'],
  [/oo/g, 'ō'],
  [/uu/g, 'ū'],
]);

document.addEventListener('DOMContentLoaded', () => {
  for (const e of document.querySelectorAll('.nl'))
    e.innerHTML = convert_(e.innerHTML);
});