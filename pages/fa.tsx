import Converter from '../utils/Converter';
import Textareas from '../components/textareas'
import { replaceAll } from '../utils/util';

export default () => {
  const { convert } = new class extends Converter {
    wordRe = /\S+/g
    locale = 'fa-IR'

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
      [/\u064B/g, 'ą'],

      // hamze
      [/ء/g, "'"],
      [/\u0654/g, "i"],

      [/ب/g, 'b'],
      [/پ/g, 'p'],

      [/ج/g, 'c'],
      [/چ/g, 'ç'],

      [/ه/g, 'e'],

      [/ز/g, 'z'],
      [/ژ/g, 'ž'],

      [/ح/g, 'h'],
      [/خ/g, 'x'],

      [/ک/g, 'k'],
      [/گ/g, 'g'],

      [/ل/g, 'l'],
      [/م/g, 'm'],
      [/ن/g, 'n'],

      [/ع/g, "o"],
      [/غ/g, 'ġ'],

      [/ف/g, 'f'],
      [/ق/g, 'q'],
      [/ر/g, 'r'],

      [/س/g, 's'],
      [/ش/g, 'š'],

      [/ت/g, 't'],
      [/ث/g, 'ŧ'],
      [/د/g, 'd'],
      [/ذ/g, 'đ'],

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
    <h2>persian</h2>
    <table>
      <tr>
        <th>updated at</th>
        <td>2022-06-17</td>
      </tr>
    </table>

    <Textareas lang='fa' dir='rtl' convert={convert}>{
      `اَ اِ اُ آ ای او ب پ ج چ د ذ ه و ز ژ ح خ ط ظ ی ک گ ل م ن ع غ ف ص ض ق ر س ش ت ث

اِعلامیهِ جَهانی حُقوقِ بَشَر
مادّهٔ اَوَّل
تَمامِ اَفْرادِ بَشَر آزاد بِدُنْیا میایَنْد وَ اَز لَحَظِ حَیثیَّت وَ حُقوق با هَم بَرابَرَنْد.
هَمه دارایِ عَقل وَ وِجْدان میباشَند وَ بایَد نِسْبَت بیِکدیگَر با روحِ بِرادَری رَفْتار کَنَنْد.
`
    }</Textareas>

    <aside>
      <a href='https://unicode.org/udhr/d/udhr_pes_1.html'>source of default text</a>
    </aside>

    <div className='tables'>
      <table>
        <tr>
          <th></th>
          <th>i</th>
          <th>ī</th>
          <th>y</th>
          <th>u</th>
          <th>ū</th>
          <th>w</th>
          <th>a</th>
          <th>ā</th>
        </tr>
        <tr>
          <th>script</th>
          <td>اِ</td>
          <td colSpan={2}>ی</td>
          <td>اُ</td>
          <td colSpan={2}>و</td>
          <td>اَ</td>
          <td>ا</td>
        </tr>
        <tr>
          <th>early new persian</th>
          <td>i</td>
          <td>ī</td>
          <td>ē</td>
          <td>u</td>
          <td>ū</td>
          <td>ō</td>
          <td>a</td>
          <td>ā</td>
        </tr>
        <tr>
          <th>afghan</th>
          <td>e</td>
          <td>i</td>
          <td>ē</td>
          <td>o</td>
          <td>u</td>
          <td>ō</td>
          <td>a</td>
          <td>ā</td>
        </tr>
        <tr>
          <th>iran</th>
          <td>e</td>
          <td colSpan={2}>i</td>
          <td>o</td>
          <td colSpan={2}>u</td>
          <td>a</td>
          <td>ā</td>
        </tr>
        <tr>
          <th>tajik</th>
          <td colSpan={2}>i</td>
          <td>e</td>
          <td colSpan={2}>u</td>
          <td>o</td>
          <td>a</td>
          <td>ā</td>
        </tr>
      </table>
    </div>
  </>
}