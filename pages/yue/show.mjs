import replaceAll from './replaceAll.mjs';

export default {
  unicode: (initial, final, tone) =>
    (
      final == '' ? initial + ['', '\u0301', '\u0307', null][tone] :
        initial
        + replaceAll(final, [
          //[/w/, 'ơ'],
          //[/r/, 'ă'],
          [/(?<=[iuyeowơară])/, ['', '\u0301', '\u0307', '!'][tone]],
          [/i(?![\u0301\u0307])/, 'ı'],
          [/i\u0307/, 'i'],
          [/!g$/, 'k'],
          [/!n$/, 't'],
          [/!m$/, 'p'],
        ])
    )
      .normalize('NFKC'),

  ascii: (initial, final, tone) =>
    replaceAll(initial, [
      [/^ꝁ/, 'kx'],
      [/^ŧ/, 'tx'],
      [/^ṯ/, 'ţx'],
      [/^ꝑ/, 'px'],

      [/^ţ/, 'ts'],
      [/^ḑ/, 'dz'],

      [/j([xh])/, '$1j'],
    ])
    + replaceAll(final + tone, [
      [/0$/, ''],
      [/1$/, 'q'],
      [/2$/, 's'],
      [/g3$/, 'k'],
      [/n3$/, 't'],
      [/m3$/, 'p'],
    ])
}