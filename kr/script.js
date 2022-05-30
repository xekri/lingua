console.log(Hangul.disassemble('아'))

converter(/\p{sc=Hangul}+/ug, [
  [/./g, x => '<hangul>' + Hangul.disassemble(x).join('') + '</hangul>'],

  [/ㅇ/g, 'g'],

  [/ㄱ/g, 'k'],
  [/ㅋ/g, 'ꝅ'],
  [/ㄲ/g, 'c'],
  [/ㆁ/g, 'g'],
  [/ㅎ/g, 'x'],
  [/ㆅ/g, 'h'],

  [/ㅈ/g, 'ț'],
  [/ㅊ/g, 'ṯ'],
  [/ㅉ/g, 'd̦'],
  [/ㄹ/g, 'l'],
  [/ㅅ/g, 's'],
  [/ㅆ/g, 'z'],

  [/ㄷ/g, 't'],
  [/ㅌ/g, 'ŧ'],
  [/ㄸ/g, 'd'],
  [/ㄴ/g, 'n'],

  [/ㅂ/g, 'p'],
  [/ㅍ/g, 'ᵽ'],
  [/ㅃ/g, 'b'],
  [/ㅁ/g, 'm'],

  [/ㅏ/g, 'a'],
  [/ㅑ/g, 'ia'],
  [/ㅘ/g, 'ua'],

  [/ㅐ/g, 'ai'],
  [/ㅒ/g, 'iai'],
  [/ㅙ/g, 'uai'],

  [/ㅓ/g, 'e'],
  [/ㅕ/g, 'ie'],
  [/ㅝ/g, 'ue'],

  [/ㅔ/g, 'ei'],
  [/ㅖ/g, 'iei'],
  [/ㅞ/g, 'uei'],

  [/ㅗ/g, 'o'],
  [/ㅛ/g, 'io'],

  [/ㅜ/g, 'u'],
  [/ㅠ/g, 'iu'],

  [/ㅡ/g, 'y'],

  [/ㅣ/g, 'i'],
  [/ㅚ/g, 'oi'],
  [/ㅟ/g, 'ui'],
  [/ㅢ/g, 'yi'],

  //[/(?<=<hangul>)./g, x => x.toUpperCase()],
  [/<\/?hangul>/g, ''],
]);
