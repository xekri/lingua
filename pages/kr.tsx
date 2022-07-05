import { replaceAll } from "../utils/util"
import Converter from '../utils/Converter'
import Textareas from '../components/textareas'

export default () => {
  const { convert } = new class extends Converter {
    wordRe = /\S+/g
    locale = 'ko-KR'
    hasCase = false

    convertWord = (s: string) => replaceAll(s, [
      [/.+/, it => it.normalize('NFKD')],

      [/ᄋ/g, '<NoConsonant>'],

      [/ᄀ/g, 'K'],
      [/ᄏ/g, 'Ꝁ'],
      [/ᄁ/g, 'C'],
      [/ᄒ/g, 'X'],
      [/ᅘ/g, 'H'],
      [/ᅌ/g, 'G'],

      [/ᄌ/g, 'Ţ'],
      [/ᄎ/g, 'Ṯ'],
      [/ᄍ/g, 'Ḑ'],
      [/ᄉ/g, 'S'],
      [/ᄊ/g, 'Z'],

      [/ᄃ/g, 'T'],
      [/ᄐ/g, 'Ŧ'],
      [/ᄄ/g, 'D'],
      [/ᄂ/g, 'N'],
      [/ᄅ/g, 'L'],

      [/ᄇ/g, 'P'],
      [/ᄑ/g, 'Ꝑ'],
      [/ᄈ/g, 'B'],
      [/ᄆ/g, 'M'],

      [/ᄫ/g, 'Ph'],
      [/ᅗ/g, 'Ꝑh'],
      [/ᄬ/g, 'Bh'],
      [/ᄝ/g, 'Mh'],

      [/ᅡ/g, 'a'],
      [/ᅢ/g, 'ai'],
      [/ᅣ/g, 'ia'],
      [/ᅤ/g, 'iai'],

      [/ᅥ/g, 'e'],
      [/ᅦ/g, 'ei'],
      [/ᅧ/g, 'ie'],
      [/ᅨ/g, 'iei'],

      [/ᅩ/g, 'o'],
      [/ᅪ/g, 'oa'],
      [/ᅫ/g, 'oai'],
      [/ᅬ/g, 'oi'],
      [/ᅭ/g, 'io'],

      [/ᅮ/g, 'u'],
      [/ᅯ/g, 'ue'],
      [/ᅰ/g, 'uei'],
      [/ᅱ/g, 'ui'],
      [/ᅲ/g, 'iu'],

      [/ᅳ/g, 'y'],
      [/ᅴ/g, 'yi'],
      [/ᅵ/g, 'i'],

      [/<NoConsonant>(.)/g, (match, p) => p.toUpperCase()],
      [/<NoConsonant>/g, ''],

      [/ᆨ/g, 'k'],
      [/ᆩ/g, 'ꝁ'],
      [/ᆪ/g, 'ks'],
      [/ᆫ/g, 'n'],
      [/ᆬ/g, 'nţ'],
      [/ᆭ/g, 'nx'],
      [/ᆮ/g, 't'],
      [/ᆯ/g, 'l'],
      [/ᆰ/g, 'lk'],
      [/ᆱ/g, 'lm'],
      [/ᆲ/g, 'lp'],
      [/ᆳ/g, 'ls'],
      [/ᆴ/g, 'lŧ'],
      [/ᆵ/g, 'lꝑ'],
      [/ᆶ/g, 'lh'],
      [/ᆷ/g, 'm'],
      [/ᆸ/g, 'p'],
      [/ᆹ/g, 'ps'],
      [/ᆺ/g, 's'],
      [/ᆻ/g, 'z'],
      [/ᆼ/g, 'g'],
      [/ᆽ/g, 'ţ'],
      [/ᆾ/g, 'ṯ'],
      [/ᆿ/g, 'ꝁ'],
      [/ᇀ/g, 'ŧ'],
      [/ᇁ/g, 'ꝑ'],
      [/ᇂ/g, 'h'],

      [/.+/, it => it.normalize('NFKC')],
    ])
  }()

  return <>
    <h2>korean</h2>
    <Textareas lang='kr' convert={convert}>{
      `세계 닌권 선ᅌᅥᆫ
제1조
모든 닌간은 태어날 때부터 자유로우며 그 존ᅌᅥᆷ과 권리에 있어 동등하다.
닌간은 천부적으로 리성과 량심을 부여받았으며 서로 형제애의 정신으로 행동하여야 한다.`
    }</Textareas>
    <a href='https://unicode.org/udhr/d/udhr_kor.html'>source of default text</a> (modified)
  </>
}
