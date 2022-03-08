const fs = require('fs');

const vs = 'a i u ą į ų y j v'.split(' ');
const cs = 'n j r l v o h ẓ z w e x s̩ s f ꝗ ꝁ ṯ ŧ ᵽ q k ṭ t p g c ḍ d b'.split(' ')

const syllables = cs.flatMap(c => vs.flatMap(v => c + v))
//.filter(it => !/ /.test(it))
fs.writeFileSync('./syllable.txt', syllables.join('\n'));

const syllable2 = syllables.flatMap(s0 => syllables.flatMap(s1 => s0 + s1));
fs.writeFileSync('./syllable2.txt', syllable2.join('\n'));