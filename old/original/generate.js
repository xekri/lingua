const fs = require('fs');

const ps = 'A I R L U O H Ẓ Z W E X S̩ S F Ꝗ Ꝁ Ṯ Ŧ ꝑ Q K Ṭ T P G C Ḍ D B Ŋ Ɲ Ṇ N M'.split(' ')

const forbidden = /(.)\1|^[^AIRLU]+$/;

const ss2 = ps.flatMap(p0 => ps.flatMap(p1 => p0 + p1))
  .filter(it => !forbidden.test(it))
  ;
fs.writeFileSync('./2.txt', ss2.join('\n'));

const ss3 = ss2.flatMap(s => ps.flatMap(p => s + p))
  .filter(it => !forbidden.test(it))
  ;
fs.writeFileSync('./3.txt', ss3.join('\n'));