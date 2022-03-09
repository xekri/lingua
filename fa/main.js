const convert_ = converter(/(\p{L}|[،\u0654\u0652])+/ug, [
  [/أ/g, 'â'],
  [/ئ/g, 'î'],
  [/ؤ/g, 'û'],

  [/آ/g, 'a'],
  [/^ا/g, 'y'],
  [/ا/g, 'a'],
  [/ی/g, 'i'],
  [/و/g, 'u'],

  [/\u064E/g, 'y'],
  [/\u0650/g, 'j'],
  [/\u064F/g, 'v'],

  [/ء/g, 'q'],
  [/\u0654/g, 'q'],

  [/ن/g, 'n'],
  [/م/g, 'm'],
  [/ل/g, 'l'],
  [/ر/g, 'r'],

  [/پ/g, 'p'],
  [/ب/g, 'b'],
  [/ف/g, 'f'],

  [/ک/g, 'k'],
  [/گ/g, 'c'],
  [/خ/g, 'x'],
  [/غ/g, 'h'],

  [/ت/g, 't'],
  [/د/g, 'd'],
  [/ث/g, 'ţ'],
  [/ذ/g, 'ḑ'],
  [/س/g, 's'],
  [/ز/g, 'z'],

  [/چ/g, 'ť'],
  [/ج/g, 'ď'],
  [/ش/g, 'š'],
  [/ژ/g, 'ž'],

  [/ق/g, 'ḳ'],
  [/ط/g, 'ṭ'],
  [/ض/g, 'ḍ'],
  [/ص/g, 'ṣ'],
  [/ظ/g, 'ẓ'],

  [/ه/g, 'e'],
  [/ح/g, 'o'],
  [/ع/g, 'q'],

  [/\u0652/g, ''],
  [/(.)\u0651/g, '$1$1'],
  [/،/g, ','],
]);

document.addEventListener('DOMContentLoaded', () => {
  const trs = document.querySelectorAll('table tr');
  'ی ه و ن م ل گ ک ق ف غ ع ظ ط ض ص ش س ژ ز ر ذ د خ ح چ ج ث ت پ ب ا ء'.split(' ')
    .forEach((x) => {
      trs[0].innerHTML += `<td>${x}</td>`;
      trs[1].innerHTML += `<td>${convert_(x)}</td>`;
    })
});
