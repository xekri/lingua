import Converter from '../utils/Converter'
import Textareas from '../components/textareas'
import { replaceAll } from '../utils/util'

export default () => {
  const { convert } = new class extends Converter {
    wordRe = /\S+/iug
    locale = 'he'
    hasCase = false

    convertWord = (word: string) => replaceAll(word.normalize('NFKD'), [
      [/א/g, 'a'],
      [/ב/g, 'b'],
      [/ג/g, 'c'],
      [/ד/g, 'd'],
      [/ה/g, 'e'],
      [/ו/g, 'v'],
      [/ז/g, 'z'],
      [/ח/g, 'h'],
      [/ט/g, 'ṭ'],//
      [/י/g, 'j'],
      [/[כך]/g, 'k'],
      [/ל/g, 'l'],
      [/[מם]/g, 'm'],
      [/[נן]/g, 'n'],
      [/ס/g, 'x'],
      [/ע/g, 'o'],
      [/[פף]/g, 'p'],
      [/[צץ]/g, 'ṣ'],
      [/ק/g, 'q'],
      [/ר/g, 'r'],
      [/ש\u05C1/g, 'š'],
      [/ש\u05C2/g, 'ŝ'],
      [/ש/g, 's'],
      [/ת/g, 't'],

      [/(.)\u05BC/g, '$1$1'],

      [/\u05B0/g, '\''],
      [/\u05B1/g, 'ĕ'],
      [/\u05B2/g, 'ă'],
      [/\u05B3/g, 'ŏ'],
      [/\u05B4/g, 'i'],
      [/\u05B5/g, 'ē'],
      [/\u05B6/g, 'ė'],
      [/\u05B7/g, 'ȧ'],
      [/\u05B8/g, 'ȯ'],
      [/\u05B9/g, 'ō'],
      [/\u05BB/g, 'u'],
    ]).normalize('NFKC')
  }()

  return <>
    <h2>hebrew</h2>
    <Textareas lang='he' dir='rtl' convert={convert}>{
      `א ב ג ד ה ו ז ח ט י כ ל מ נ ס ע פ צ ק ר שׁשׂ ת

הכרזה לכל באי עולם בדבר זכויות האדם
סעיף א.
כל בני אדם נולדו בני חורין ושווים בערכם ובזכויותיהם.
כולם חוננו בתבונה ובמצפון, לפיכך חובה עליהם לנהוג איש ברעהו ברוח של אחוה.
`
    }</Textareas>
    <a href='https://unicode.org/udhr/d/udhr_heb.html'>source of default text</a>
  </>
}
