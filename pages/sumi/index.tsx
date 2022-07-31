const dictionary = [
  ['xabe', 'verb', 'HAVE', 'G have A. posess. own. contain.', 'La habere',],
  ['nori', 'verb', 'KNOW', 'G know A.', 'Gr γνωρίζειν',],
  ['dike', 'verb', 'SAY', 'G say A to D.', 'La dīcere',],
  ['hama', 'verb', 'GOOD', 'G be {-:bad, +:good} to D.', 'La amāre',],
  ['vive', 'verb', 'LIVE', 'A be {0:dead, >:alive}.', 'La vīvere',],
  ['kǫmų', 'verb', 'COMMON', 'G be same by A:measure with D.', 'La commūnis',],
  ['tĕla', 'verb', 'STAR', 'A be celestial body.', 'La stēlla',],
  ['liqe', 'verb', 'LIQUID', 'A be liquid.', 'La līquēre',],
  ['solĭ', 'verb', 'SOLID', 'A be solid.', 'La solidus',],
  ['!heri', 'verb', 'GAS', 'A be gas.', 'Gr ᾱήρ',],
  ['kĭkŭ', 'verb', 'CIRCLE', 'A be circle.', 'La circulus',],
  ['luki', 'verb', 'LIGHT', 'A:light.', 'La lūx lūcis',],
  ['xomį', 'verb', 'MAN', 'A be person.', 'La homō hominis',],
  ['veni', 'verb', 'MOVE', 'from G A move to D. go. come.', 'La venir',],
  ['vero', 'verb', 'TRUE', 'G be {0:false, 1:true}.', 'La vērus',],
  ['lįqe', 'verb', 'DISTANT', 'G have A:distance from D.', 'La linquere',],
  ['păti', 'verb', 'PART', 'G have A:part. phase.', 'La partis',],
  ['kŏsa', 'verb', 'CAUSE', 'G cause D:result.', 'La caussa',],
  ['liya', 'verb', 'BIND', 'G be {bound by, free of} A to D.', 'La ligāre',],
  ['dŏmi', 'verb', 'WAKE', 'A be {0:asleep, +:wake}.', 'La dormīre',],
  ['juri', 'verb', 'LAW', 'G:law order A to D', 'La jūs jūris',],
  ['rŭro', 'verb', 'RED', 'G emit A:red light.', 'La ruber rubrī',],
  ['qano', 'verb', 'BLUE', 'G emit A:blue light.', 'Gr κύανος',],
  ['viri', 'verb', 'GREEN', 'G emit A:gree light.', 'La viridis',],
  ['ramo', 'verb', 'LIMB', 'G:trunc forks at A to D:limb', 'La rāmus',],
  ['pŭsa', 'verb', 'PUSH', 'G apply A:force to D. push. pull.', 'La pulsāre',],
  ['seka', 'verb', 'CUT', 'G be cut by A into D.', 'La secāre',],
  ['huti', 'verb', 'USE', 'G provide A:functionality to D.', 'La ūtī',],
  ['duna', 'verb', 'CAN', 'A be {0:impossible, +:possible, every:necessary}.', 'Gr δύνασθαι',],
  ['sęti', 'verb', 'SENSE', 'G give A:stimulus to D:sensor.', 'La sentīre',],
  ['puro', 'verb', 'MIKS', 'G contain A:noise.', 'La pūrus',],
  ['kale', 'verb', 'HOT', 'G have A:temparature.', 'La calēre',],
  ['măno', 'verb', 'BIG', 'G be {few:small, many:big}.', 'La magnus',],
  ['seqi', 'verb', 'FOLLOW', 'G precede by A:measure D.', 'La sequī',],
  ['hate', 'verb', 'CHANGE', 'G:material be converted through A into D.', 'La alterāre',],
  ['tĕmį', 'verb', 'BORDER', 'G have A:{-:inside, 0:border, +:outside}.', 'La terminus',],
  ['nĕte', 'verb', 'CONNECT', 'G be connected by A to D', 'La nectere',],
  ['hĕro', 'verb', 'SICK', 'A be {0:sound, +:sick}', 'La aeger aegrī',],
  ['hape', 'verb', 'OPEN', 'G {0:close, +:open} at A:hole to D.', 'La aperīre',],
  ['nami', 'verb', 'WAVE', 'A be wave.', 'Ja なみ',],
  ['hovo', 'verb', 'EGG', 'G lay A:egg containing D. fruit.', 'La ōvum',],
  ['tuve', 'verb', 'BUILD', 'G build A:machine. structure.', 'La struere',],
  ['hite', 'verb', 'REPEAT', 'A repeat.', 'La iterum',],
  ['bibe', 'verb', 'CONSUME', 'G:food be consumed by A for D.', 'La bibere',],

  ['mu', 'number', 'NULL', 'null.', 'Zh 無',],
  ['lę', 'number', 'ZERO', '0.', 'Zh 零',],
  ['hį', 'number', 'ONE', '1.', 'Zh 一',],
  ['ri', 'number', 'TWO', '2.', 'Zh 二',],
  ['są', 'number', 'THREE', '3.', 'Zh 三',],
  ['si', 'number', 'FOUR', '4.', 'Zh 四',],
  ['go', 'number', 'FIVE', '5.', 'Zh 五',],
  ['dŭ', 'number', 'SIX', '6.', 'Zh 六',],
  ['kĭ', 'number', 'SEVEN', '7.', 'Zh 七',],
  ['pă', 'number', 'EIGHT', '8.', 'Zh 八',],
  ['ku', 'number', 'NINE', '9.', 'Zh 九',],
  ['yĭ', 'number', 'TEN', '10.', 'Zh 十',],
  ['pį', 'number', 'DYNAMIC', '', 'Zh 變',],

  ['yę', 'number', 'EVERY', 'every. all.', 'Zh 全',],
  ['vą', 'number', 'NORM', '(subjective) normal. average', 'Zh 凡',],
  ['qą', 'number', 'MORE', 'more than (default: 0)', 'Zh 更',],
  ['tą', 'number', 'INCREASE', '(precedes change per time)', 'Zh 增',],

  ['ho', 'pronoun', 'WHAT', 'what.', 'Zh 何',],
  ['pi', 'pronoun', 'IT', 'it.', 'Zh 彼',],
  ['ga', 'proverb', 'I', 'G:i am telling this:A to D:thou.', 'Zh 我',],
  ['mį', 'special', 'QUOTE', '(precedes a loan word.) G have in A:language have A:name', 'Zh 名',],
  ['hă', 'special', 'CLAUSE', '(turn a sentence into a noun.)', 'Zh 曰',],
  ['de', 'special', 'DO', '(precedes a verb)', 'Zh 是',],

  ['ji', 'special', 'G-GEN', '', 'a priori',],
  ['ja', 'special', 'G-ACC', '', 'a priori',],
  ['ju', 'special', 'G-DAT', '', 'a priori',],
  ['vi', 'special', 'S-GEN', '', 'a priori',],
  ['va', 'special', 'S-ACC', '', 'a priori',],
  ['vu', 'special', 'S-DAT', '', 'a priori',],

  ['hi', 'conjunction', 'AND', 'and', 'Zh 與',],
  ['hŏ', 'conjunction', 'OR', 'or', 'Zh 或',],

  ['ramo veni', 'verb compound', '', 'leg.', '', '',],
  ['ramo huti', 'verb compound', '', 'arm.', '', '',],
  /*
  ['', 'verb', 'ROUTE', 'from G:source A:route lead to D:destination.', '道',],
  ['', 'verb', 'SYMMMETRY', 'G be {0: symmetry, +:assynmetry} by A:measure with D.', '',],
  ['', 'verb', 'WORTH', 'G is worth D.', '價',],
  ['', 'verb', 'BEGIN', 'A {0:begin, 1:end}.', '始',],
  ['', 'verb', 'TIME', 'G be time followed by A.', '時',],
  ['', 'verb', 'BONE', 'G have A:bone. frame.', '骨',],
  ['', 'verb', 'BODY', 'G operates A:interface to influence A.', '體',],
  ['', 'verb', 'DENSE', '', '密',],
  ['', '!', 'NOT', 'not. no.', '毋',],
  ['', '!', 'OF', 'of. -ish.', '之',],
  ['fą', 'number', 'NEGATIVE', 'minus.', '反',],
  */
]

const translate = s =>
  dictionary.reduce((acc, [word, clas, code]) => code == '' ? acc : acc.replace(new RegExp(`(?<![A-Z])${code}(?![A-Z])`, 'g'), word), s)

const count = {}
for (const [word] of dictionary)
  if (word in count && word != '')
    count[word] += 1
  else
    count[word] = 1
for (const word in count)
  if (count[word] == 1)
    delete count[word]

export default () => <>
  <h2>language</h2>

  {Object.entries(count)}

  influecend by lojban, toki pona.

  <h3>phonology and orthography</h3>
  <div className='tables'>
    <table>
      <tr className='v-parent'>
        <th></th>
        <th>velar</th>
        <th>palatal</th>
        <th>dental</th>
        <th>labial</th>
      </tr>
      <tr>
        <th>nasal</th>
        <td>g [ŋ]</td><td>r [ɳ~ɻ]</td><td>n</td><td>m</td>
      </tr>
      <tr>
        <th>voiced plosive</th>
        <td>c [g]</td><td>y [ɟ~dʲ]</td><td>d</td><td>b</td>
      </tr>
      <tr>
        <th>plosive</th>
        <td>q [k]</td><td>k [c~tʲ]</td><td>t</td><td>p</td>
      </tr>
      <tr>
        <th>fricative</th>
        <td>x [x~h]</td><td>l [ʂ]</td><td>s [s~θ]</td><td>f</td>
      </tr>
      <tr>
        <th>voiced fricative</th>
        <td>h [ɣ~ɦ]</td><td>j [ʐ]</td><td>z [z~ð]</td><td>v</td>
      </tr>
    </table>

    <table>
      <tr className='v-parent'>
        <th></th>
        <th>back</th>
        <th></th>
        <th>front</th>
      </tr>
      <tr>
        <th>high</th>
        <td>i</td><td></td><td>u</td>
      </tr>
      <tr>
        <th></th>
        <td>e</td><td></td><td>o</td>
      </tr>
      <tr>
        <th>low</th>
        <td></td><td>a</td><td></td>
      </tr>
    </table>
  </div>

  <ul>
    <li>coda
      <ul>
        <li>sound
          <ul>
            <li>(V)n(C) [◌̃]</li>
            <li>(V)t(C) [ʔ]</li>
          </ul>
        </li>
        <li>abbreviation
          <ul>
            <li>į, ę, ą, ǫ, ų = (i, e, a, o, u)n</li>
            <li>ĭ, ĕ, ă, ŏ, ŭ = (i, e, a, o, u)t</li>
          </ul>
        </li>
      </ul>
    </li>
    <li>phonotactics
      <ul>
        <li>consonant ⩴ ‘g’ | ... | ’v’</li>
        <li>vowel ⩴ ‘i’ | ... | ’u’</li>
        <li>syllable ⩴ consonant vowel (‘’ | ‘n’ | ‘t’)</li>
        <li>word ⩴ syllable+</li>
      </ul>
    </li>
    <li>word-initial syllables are low and the others are high.</li>
  </ul>


  <h3>syntactics</h3>
  <div className='tables'>
    <table>
      <tr>
        <td>i am a person</td>
        <td>{translate('I G-GEN S-ACC DO MAN')}</td>
      </tr>
      <tr>
        <td>i sense a star.</td>
        <td>{translate('STAR G-ACC S-GEN I G-GEN S-DAT DO SENSE')}</td>
      </tr>
      <tr>
        <td>i am <i>sumi</i>.</td>
        <td>{translate('I G-GEN S-GEN QUOTE sumi')}</td>
      </tr>
      <tr>
        <td>i like thou.</td>
        <td>{translate('I G-DAT S-GEN I G-GEN S-DAT DO MORE GOOD')}</td>
      </tr>
      <tr>
        <td>i like that thou like me.</td>
        <td>{translate('CLAUSE I G-GEN S-GEN I G-DAT S-DAT DO MORE GOOD(,) S-GEN I G-GEN S-DAT DO MORE GOOD')}</td>
      </tr>
    </table>
  </div>

  <h3>words</h3>
  <div className='tables'>
    <table>
      <tr>
        <th></th>
        <th></th>
        <th>class</th>
        <th>code</th>
        <th>content</th>
        <th>origin</th>
      </tr>{
        dictionary.map((word, i) =>
          <tr key={i}>
            <td>{i}</td>
            {
              word.map((x, j) =>
                <td key={`${i}-${j}`}>{x}</td>
              )
            }
          </tr>
        )
      }</table>
  </div>

  <h3>etymology</h3>
  <ul>
    <li>origin
      <ul>
        <li>conent word: latin, greek japanese (priority high to low)</li>
        <li>function word: chinese</li>
      </ul>
    </li>
    <li>use non-compound (mono-morpheme) word</li>
    <li>from latin
      <ul>
        <li>[ɡʷ]→c</li>
        <li>[g]→y</li>
        <li>[kʷ]→q</li>
        <li>[k]→k</li>
        <li>[r]→r</li>
        <li>[l]→g</li>
        <li>∅→h</li>
      </ul>
    </li>
  </ul>
</>
