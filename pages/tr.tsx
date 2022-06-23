import { replaceAll } from '../utils/util'
import Converter from '../utils/Converter'
import Textareas from '../components/textareas'

class ConverterTr extends Converter {
  wordRe = /[a-zçğıİöşü]+/ig
  locale = 'tr-TR'

  convertWord = (word: string) => {
    const map: Array<[RegExp, string]> = [
      [/ı/g, "î"],
      [/i/g, "ǐ"],
      [/a/g, "â"],
      [/e/g, "ǎ"],
      [/o/g, "ô"],
      [/ö/g, "ǒ"],
      [/u/g, "û"],
      [/ü/g, "ǔ"],
    ]

    let r = ''
    let state = 0
    for (const c of replaceAll(word, map)) {
      const stateNew =
        /[âôîû]/i.test(c) ?
          0
          : /[ǎǒǐǔ]/i.test(c) ?
            1
            :
            state

      const vowelMap: Array<[RegExp, string]> = [
        [/[âǎ]/g, "a"],
        [/[ôǒ]/g, "o"],
        [/[îǐ]/g, "i"],
        [/[ûǔ]/g, "u"],
      ]

      if (state == stateNew)
        r += replaceAll(c, vowelMap)
      else {
        r += c
        state = stateNew
      }
    }

    return r
  }
}

export default () => {
  const { convert } = new ConverterTr()

  return <>
    <h2>turkish</h2>

    <Textareas lang='tr' convert={convert}>{
      `İnsan hakları evrensel beyannamesi
Madde 1
Bütün insanlar hür, haysiyet ve haklar bakımından eşit doğarlar.
Akıl ve vicdana sahiptirler ve birbirlerine karşı kardeşlik zihniyeti ile hareket etmelidirler.`
    }</Textareas>

    <aside>
      <a href='https://unicode.org/udhr/d/udhr_tur.html'>source of default text</a>
    </aside>
  </>
}
