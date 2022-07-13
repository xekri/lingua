import Converter from '../utils/Converter'
import Textareas from '../components/textareas'
import { replaceAll } from '../utils/util'

export default () => {
  const { convert } = new class extends Converter {
    wordRe = /\S+/iug
    locale = 'bo'
    hasCase = false

    convertWord = (word: string) => replaceAll(word.normalize('NFC'), [
      [/ཨ/g, 'q'],

      [/ཀ/g, 'k'],
      [/ཁ/g, 'ꝁ'],
      [/ག/g, 'c'],
      [/གྷ/g, 'ꞓ'],
      [/ང/g, 'g'],
      [/ཧ/g, 'x'],
      [/འ/g, 'h'],

      [/ཅ/g, 'tj'],
      [/ཆ/g, 'ŧj'],
      [/ཇ/g, 'dj'],
      [/ཛྷ/g, 'đj'],
      [/ཉ/g, 'nj'],
      [/ཡ/g, 'j'],
      [/ཤ/g, 'sj'],
      [/ཞ/g, 'zj'],

      [/ཊ/g, 'tr'],
      [/ཋ/g, 'ŧr'],
      [/ཌ/g, 'dr'],
      [/ཌྷ/g, 'đr'],
      [/ཎ/g, 'sr'],
      [/ཥ/g, 'zr'],
      [/ར/g, 'r'],

      [/ཏ/g, 't'],
      [/ཐ/g, 'ŧ'],
      [/ད/g, 'd'],
      [/དྷ/g, 'đ'],
      [/ན/g, 'n'],

      [/ཙ/g, 'ţ'],
      [/ཚ/g, 'ṯ'],
      [/ཛ/g, 'ḑ'],
      [/ཛྷ/g, 'ḏ'],
      [/ལ/g, 'l'],
      [/ས/g, 's'],
      [/ཟ/g, 'z'],

      [/པ/g, 'p'],
      [/ཕ/g, 'ꝑ'],
      [/བ/g, 'b'],
      [/བྷ/g, 'ƀ'],
      [/མ/g, 'm'],
      [/ཝ/g, 'v'],

      [new RegExp('ཀཱ'.replace(/ཀ/, ''), 'g'), 'ha'],
      [new RegExp('ཀྱ'.replace(/ཀ/, ''), 'g'), 'ja'],
      [new RegExp('ཀྲ'.replace(/ཀ/, ''), 'g'), 'ra'],
      [new RegExp('ཀླ'.replace(/ཀ/, ''), 'g'), 'la'],
      [new RegExp('ཀྭ'.replace(/ཀ/, ''), 'g'), 'va'],

      [new RegExp('གྷ'.replace(/ག/, ''), 'g'), 'xa'],

      [new RegExp('རྐ'.replace(/ར/, ''), 'g'), 'ka'],
      [new RegExp('རྟ'.replace(/ར/, ''), 'g'), 'ta'],
      [new RegExp('རྩ'.replace(/ར/, ''), 'g'), 'ţa'],
      [new RegExp('རྤ'.replace(/ར/, ''), 'g'), 'pa'],

      [new RegExp('རྒ'.replace(/ར/, ''), 'g'), 'ca'],
      [new RegExp('རྗ'.replace(/ར/, ''), 'g'), 'dja'],
      [new RegExp('རྡ'.replace(/ར/, ''), 'g'), 'da'],
      [new RegExp('རྫ'.replace(/ར/, ''), 'g'), 'ḑa'],
      [new RegExp('རྦ'.replace(/ར/, ''), 'g'), 'ba'],

      [new RegExp('རྔ'.replace(/ར/, ''), 'g'), 'ga'],
      [new RegExp('རྙ'.replace(/ར/, ''), 'g'), 'nja'],
      [new RegExp('རྣ'.replace(/ར/, ''), 'g'), 'na'],
      [new RegExp('རྨ'.replace(/ར/, ''), 'g'), 'ma'],

      [/a(.a)/g, '$1'],

      [/a?\u0F72/g, 'i'],
      [/a?\u0F74/g, 'u'],
      [/a?\u0F7A/g, 'e'],
      [/a?\u0F7C/g, 'o'],

      [/་/g, ' '],
      [/༌/g, ''],

      [/༄༅/g, '␂'],
      [/༺/g, '('],
      [/༻/g, ')'],
      [/༉/g, '- '],
      [/།/g, ','],
      [/༎/g, '.'],
      [/༈/g, '§'],

      [/༠/g, '0'],
      [/༡/g, '1'],
      [/༢/g, '2'],
      [/༣/g, '3'],
      [/༤/g, '4'],
      [/༥/g, '5'],
      [/༦/g, '6'],
      [/༧/g, '7'],
      [/༨/g, '8'],
      [/༩/g, '9'],
    ]).normalize('NFKC')
  }()

  return <>
    <h2>tibetan</h2>
    <Textareas lang='bo' convert={convert}>{
      `ཀ ཁ ག ང ཅ ཆ ཇ ཉ ཏ ཐ ད ན ཙ ཚ ཛ ཝ པ ཕ བ མ ཞ ཟ འ ཡ ར ལ ཤ ས ཧ ཨ

༄༅༎ ཡོངས་ཁྱབ་གསལ་བསྒྲགས་འགྲོ་བ་མིའི་ཐོབ་ཐང༌།
དོན་ཚན་དང་པོ།
འགྲོ་བ་མིའི་རིགས་རྒྱུད་ཡོངས་ལ་སྐྱེས་ཙམ་ཉིད་ནས་ཆེ་མཐོངས་དང༌། ཐོབ་ཐངགི་རང་དབང་འདྲ་མཉམ་དུ་ཡོད་ལ། ཁོང་ཚོར་རང་བྱུང་གི་བློ་རྩལ་དང་བསམ་ཚུལ་བཟང་པོ་འདོན་པའི་འོས་བབས་ཀྱང་ཡོད། དེ་བཞིན་ཕན་ཚུན་གཅིག་གིས་གཅིག་ལ་བུ་སྤུན་གྱི་འདུ་ཤེས་འཛིན་པའི་བྱ་སྤྱོད་ཀྱང་ལག་ལེན་བསྟར་དགོས་པ་ཡིན༎
`
    }</Textareas>
    <a href='https://unicode.org/udhr/d/udhr_bod.html'>source of default text</a>
  </>
}
