const fs = require('fs');

const vs = 'A I U AA II UU'.split(' ');
const cs = 'I R L U O H Z Ẓ V E X S̩ S F Ꝗ Ꝁ Ṯ Ŧ Ᵽ Q K Ṯ T P G C Ḍ D B W Y Ṇ N M'.split(' ')

fs.writeFileSync('./syllable.txt',
  cs.flatMap(c => vs.flatMap(v => c + v))
    .filter(it => !/(.)\1\1|^(.)\2$/.test(it))
    .join('\n')
);