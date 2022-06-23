import { replaceAll } from "../utils/util"
import Converter from '../utils/Converter'
import Textareas from '../components/textareas'

export default () => {
  const { convert } = new class extends Converter {
    wordRe = /\S+/ig
    locale = 'ka-GE'

    convertWord = (s: string) => replaceAll(s, [
      [/ა/g, 'a'],
      [/ბ/g, 'b'],
      [/გ/g, 'c'],
      [/დ/g, 'd'],
      [/ე/g, 'e'],
      [/ვ/g, 'v'],
      [/ზ/g, 'z'],
      [/ჱ/g, 'ê'], // obsolete
      [/თ/g, 't'],
      [/ი/g, 'i'],
      [/კ/g, 'ꝁ'],
      [/ლ/g, 'l'],
      [/მ/g, 'm'],
      [/ნ/g, 'n'],
      [/ჲ/g, 'j'], // obsolete
      [/ო/g, 'o'],
      [/პ/g, 'ꝑ'],
      [/ჟ/g, 'ẓ'],
      [/რ/g, 'r'],
      [/ს/g, 's'],
      [/ტ/g, 'ŧ'],
      [/ჳ/g, 'w'], // obsplete
      [/უ/g, 'u'],
      [/ფ/g, 'p'],
      [/ქ/g, 'k'],
      [/ღ/g, 'g'],
      [/ყ/g, 'ꝗ'],
      [/შ/g, 'ṣ'],
      [/ჩ/g, 'ṭ'],
      [/ც/g, 'ts'],
      [/ძ/g, 'dz'],
      [/წ/g, 'ŧs'],
      [/ჭ/g, 'ṯ'],
      [/ხ/g, 'x'],
      [/ჴ/g, 'q'],
      [/ჯ/g, 'ḍ'],
      [/ჰ/g, 'h'],
      [/ჵ/g, 'ō'],

      [/ჶ/g, 'f'],
      [/ჷ/g, 'ǝ'],
      [/ჸ/g, "'"],
    ])
  }()

  return <>
    <h2>georgian</h2>
    <Textareas lang='ka' convert={convert}>{
      `ა ბ გ დ ე ვ ზ ჱ თ ი კ ლ მ ნ ჲ ო პ ჟ რ ს ტ ჳ უ ფ ქ ღ ყ შ ჩ ც ძ წ ჭ ხ ჴ ჯ ჰ ჵ ჶ ჷ ჸ

ადამიანთა უფლებების საყოველთაო დეკლარაცია
მუხლი 1.
ყოველი ადამიანი იბადება თავისუფალი და თანასწორი თავისი ღირსებითა და უფლებებით.
მათ მინიჭებული აქვთ გონება და სინდისი და ერთმანეთის მიმართ უნდა ექცეოდნენ ძმობის სულისკვეთებით.`
    }</Textareas>
    <a href='https://unicode.org/udhr/d/udhr_nld.html'>source of default text</a>
  </>
}
