import Converter from './Converter';
import Textareas from '../components/textareas'
import { replaceAll } from './util';

export default () => {
  const { convert } = new class extends Converter {
    wordRe = /\S+/g
    locale0 = 'fa-IR'
    locale1 = 'en-GB'

    convertWord = (word: string) => replaceAll(word, [
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

      [/^ای/g, 'ī'], //ii
      [/^او/g, 'ū'], //uu
      [/ی/g, 'j'],
      [/و/g, 'v'],

      [/آ/g, 'ā'], //aa
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

      [/ه/g, 'ḩ'],//hw

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
      [/غ/g, 'ġ'], //gw

      [/ف/g, 'f'],
      [/ق/g, 'q'],
      [/ر/g, 'r'],

      [/س/g, 's'],
      [/ش/g, 'š'], //sy

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
    ])
  }()

  return <>
    <h2>persian </h2>
    <table>
      <tr>
        <th>updated at</th>
        <td>2022-06-17</td>
      </tr>
    </table>

    <Textareas lang='fa' dir='rtl' convert={convert}>{
      `اَ اِ اُ آ ای او ب پ ج چ د ذ ه و ز ژ ح خ ط ظ ی ک گ ل م ن ع غ ف ص ض ق ر س ش ت ث

اِعلامِیه جَهانی حُقوق بَشَر
مادهٔ ۱
تَمامِ اَفْرادِ بَشَر آزاد بِدُنْیا میایَنْد وَ اَز لَحَظِ حَیثیَّت وَ حُقوق با هَم بَرابَرَنْد.
هَمه دارایِ عَقل وَ وِجْدان میباشَند وَ بایَد نِسْبَت بیِکدیگَر با روحِ بِرادَری رَفْتار کَنَنْد.
`
    }</Textareas>

    <aside>
      <a href='https://unicode.org/udhr/d/udhr_pes_1.html'>source of default text</a>
    </aside>
  </>
}