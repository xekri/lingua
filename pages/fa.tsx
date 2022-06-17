import { useState } from 'react';
import style from '../styles/style.module.sass'

const convertWord = (word: string) => {
  const map: Array<[RegExp, string]> = [
    [/۰/g, '0'],
    [/۱/g, '1'],
    [/۲/g, '2'],
    [/۳/g, '3'],
    [/۴/g, '4'],
    [/۵/g, '5'],
    [/۶/g, '6'],
    [/۷/g, '7'],
    [/۸/g, '8'],
    [/۹/g, '9'],

    [/\u200C/, '-'],

    [/^ای/g, 'ī'],
    [/^او/g, 'ū'],
    [/ی/g, 'j'],
    [/و/g, 'v'],

    [/آ/g, 'ā'],
    [/^ا\u0650/g, 'i'],
    [/^ا\u064F/g, 'u'],
    [/^ا\u064E?/g, 'a'],
    [/ا/g, 'ā'],

    [/\u064E/g, 'a'],
    [/\u0650/g, 'i'],
    [/\u064F/g, 'u'],
    [/\u064B/g, 'ą'], //aw

    // hamze
    [/ء/g, "'"],
    [/\u0654/g, "i"],

    [/ب/g, 'b'],
    [/پ/g, 'p'],

    [/ج/g, 'c'],
    [/چ/g, 'ç'],//ky

    [/ه/g, 'ḩ'],

    [/ز/g, 'z'],
    [/ژ/g, 'ž'],//zy

    [/ح/g, 'h'],
    [/خ/g, 'x'],

    [/ک/g, 'k'],
    [/گ/g, 'g'],

    [/ل/g, 'l'],
    [/م/g, 'm'],
    [/ن/g, 'n'],

    [/ع/g, "'"], //ø
    [/غ/g, 'ġ'],

    [/ف/g, 'f'],
    [/ق/g, 'q'],
    [/ر/g, 'r'],

    [/س/g, 's'],
    [/ش/g, 'š'],

    [/ت/g, 't'],
    [/ث/g, 'ṫ'],
    [/د/g, 'd'],
    [/ذ/g, 'ḋ'],

    [/ط/g, 'ṭ'],
    [/ض/g, 'ḍ'],
    [/ص/g, 'ṣ'],
    [/ظ/g, 'ẓ'],

    [/\u0652/g, ''],
    [/([^aiu])([aiu]?)\u0651/g, '$1$1$2'],
    [/،/g, ','],
  ]

  return map.reduce((acc, [x, y]) => acc.replace(x, y), word);
}

const convert = text =>
  text.replace(/[^ ]+/g, convertWord)

const defaultValue =
  'اَ اِ اُ آ ای او ب پ ج چ د ذ ه و ز ژ ح خ ط ظ ی ک گ ل م ن ع غ ف ص ض ق ر س ش ت ث\n\n'
  + 'اِعلامِیه جَهانی حُقوق بَشَر\n'
  + 'مادهٔ ۱\n'
  + 'تَمامِ اَفْرادِ بَشَر آزاد بِدُنْیا میایَنْد وَ اَز لَحَظِ حَیثیَّت وَ حُقوق با هَم بَرابَرَنْد.\n'
  + 'هَمه دارایِ عَقل وَ وِجْدان میباشَند وَ بایَد نِسْبَت بیِکدیگَر با روحِ بِرادَری رَفْتار کَنَنْد.\n'

export default () => {
  const [text, setText] = useState({
    datum: convert(defaultValue)
  })

  const onChange = (event) => {
    setText({ datum: convert(event.target.value) })
  }

  return <>
    <h2>persian </h2>

    <table>
      <tr>
        <th>updated at</th>
        <td>2022-06-17</td>
      </tr>
    </table>

    <div className={style.textareas} >
      <textarea onChange={onChange} lang="fa" dir="rtl" defaultValue={defaultValue}></textarea>
      <textarea value={text.datum} readOnly></textarea>
    </div>
    <aside>
      <a href='https://unicode.org/udhr/d/udhr_pes_1.html'>source of default value</a>

    </aside>
  </>
}