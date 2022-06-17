const convert_ = converter(/\p{sc=Georgian}+/ug, [
  [/ა/g, 'a'],
  [/ბ/g, 'b'],
  [/გ/g, 'c'],
  [/დ/g, 'd'],
  [/ე/g, 'e'],
  [/ვ/g, 'v'],
  [/ზ/g, 'z'],
  [/ჱ/g, 'ê'], // obsolete
  [/თ/g, 't'],
  [/ი/g, 'i'],
  [/კ/g, 'ꝁ'],
  [/ლ/g, 'l'],
  [/მ/g, 'm'],
  [/ნ/g, 'n'],
  [/ჲ/g, 'j'], // obsolete
  [/ო/g, 'o'],
  [/პ/g, 'ᵽ'],
  [/ჟ/g, 'ẓ'],
  [/რ/g, 'r'],
  [/ს/g, 's'],
  [/ტ/g, 'ŧ'],
  [/ჳ/g, 'w'], // obsplete
  [/უ/g, 'u'],
  [/ფ/g, 'p'],
  [/ქ/g, 'k'],
  [/ღ/g, 'g'],
  [/ყ/g, 'ꝗ'],
  [/შ/g, 'ṣ'],
  [/ჩ/g, 'ṭ'],
  [/ც/g, 'ts'],
  [/ძ/g, 'dz'],
  [/წ/g, 'ŧs'],
  [/ჭ/g, 'ṯ'],
  [/ხ/g, 'x'],
  [/ჴ/g, 'q'], // obsolete
  [/ჯ/g, 'ḍ'],
  [/ჰ/g, 'h'],
  [/ჵ/g, 'ō'], // obsolete
]);

document.addEventListener('DOMContentLoaded', () => {
  for (const e of document.querySelectorAll('.ka'))
    e.innerHTML = convert_(e.innerHTML);

  for (const e of document.querySelectorAll('.ka-both'))
    e.innerHTML = e.innerHTML + '<br/>' + convert_(e.innerHTML);
});