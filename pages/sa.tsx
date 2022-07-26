import { replaceAll } from "../utils/util"
import Converter from '../utils/Converter'
import Textareas from '../components/textareas'

export default () => {
  const { convert } = new class extends Converter {
    wordRe = /\S+/ig
    locale = 'sa-IN'

    convertWord = (s: string) => replaceAll(s.normalize("NFC"), [
      [/(?<=[कचटतपखछठथफगजडदबघझढधभङञणनमशषसहयरलव])(?![\u093F\u0943\0962\u0941\u093E\u0940\u0943\u0963\u0942\u0947\u094B\u0948\u094C\u094D])/g, "a"],

      [/अ/g, "a"],
      [/इ|\u093F/g, "j"],
      [/ऋ|\u0943/g, "r"],
      [/ऌ|\u0962/g, "l"],
      [/उ|\u0941/g, "v"],

      [/\u094D/g, ""],
      [/आ|\u093E/g, "ā"],
      [/ई|\u0940/g, "i"],
      [/ॠ|\u0943/g, "ṝ"],
      [/ॡ|\u0963/g, "ḹ"],
      [/ऊ|\u0942/g, "u"],

      [/ए|\u0947/g, "aj"],
      [/ओ|\u094B/g, "av"],

      [/ऐ|\u0948/g, "āj"],
      [/औ|\u094C/g, "āv"],

      [/क/g, "q"],
      [/च/g, "k"],
      [/ट/g, "ṭ"],
      [/त/g, "t"],
      [/प/g, "p"],

      [/ख/g, "ꝗ"],
      [/छ/g, "ꝁ"],
      [/ठ/g, "ṯ"],
      [/थ/g, "ŧ"],
      [/फ/g, "ꝑ"],

      [/ग/g, "c"],
      [/ज/g, "y"],
      [/ड/g, "ḍ"],
      [/द/g, "d"],
      [/ब/g, "b"],

      [/घ/g, "ꞓ"],
      [/झ/g, "ɏ"],
      [/ढ/g, "ḏ",],
      [/ध/g, "đ"],
      [/भ/g, "ƀ"],

      [/ङ/g, "g"],
      [/ञ/g, "n"],
      [/ण/g, "ṇ"],
      [/न/g, "n"],
      [/म/g, "m"],

      [/श/g, "x"],
      [/ष/g, "ṣ"],
      [/स/g, "s"],

      [/ह/g, "h"],
      [/य/g, "j"],
      [/र/g, "r"],
      [/ल/g, "l"],
      [/व/g, "v"],

      [/\u0903/g, "s"], // visarga

      // anusvaara
      [/\u0902(?=[xṣs])/g, "n"],
      [/\u0902/g, "m"],

      [/\u0902/g, "M"],

      [/ऽ/g, "'"],

      [/०/g, "0"],
      [/१/g, "1"],
      [/२/g, "2"],
      [/३/g, "3"],
      [/४/g, "4"],
      [/५/g, "5"],
      [/६/g, "6"],
      [/७/g, "7"],
      [/८/g, "8"],
      [/९/g, "9"],

      [/\u0930/g, "\u0307"], // nuktaa ़
      [/।/g, ","],
      [/॥/g, "."],
      [/॰/g, "'"]
    ])
  }()

  const td = c =>
    <td>{c}<br />{convert(c).replace(/a/, '')}</td>


  return <>
    <h2>sanskrit</h2>
    <Textareas lang='sa' convert={convert}>{
      `मानवाधिकाराणां जागत-अभिघोषणायाः पंचाशत्तमा वर्षपूर्तिः।
अनुच्छेदः १
सर्वे मानवाः स्वतन्त्राः समुत्पन्नाः वर्तन्ते अपि च, गौरवदृशा अधिकारदृशा च समानाः एव वर्तन्ते। एते सर्वे चेतना-तर्क-शक्तिभ्यां सुसम्पन्नाः सन्ति।
अपि च, सर्वेऽपि बन्धुत्व-भावनया परस्परं व्यवहरन्तु।`
    }</Textareas>
    <a href='https://unicode.org/udhr/d/udhr_san.html'>source of default text</a>

    <div className='tables'>
      <table className="no-top">
        <tr>
          <th rowSpan={5}></th>
          <th colSpan={3}>unvoiced</th>
          <th colSpan={8}>voiced</th>
        </tr>
        <tr>
          <th colSpan={5} style={{ textAlign: 'center' }}>obstruent</th>
          <th colSpan={6}>sonorant</th>
        </tr>
        <tr>
          <th colSpan={7} style={{ textAlign: 'center' }}>consonant</th>
          <th colSpan={4}>vowel</th>
        </tr>
        <tr>
          <th rowSpan={2} className='v'>fricative</th>
          <th colSpan={4}>plossive</th>
          <th rowSpan={2} className='v'>nasal</th>
          <th rowSpan={2} className='v'>approximant</th>
          <th colSpan={2}>simple</th>
          <th colSpan={2}>complex</th>
        </tr>
        <tr className='v-parent'>
          <th>+ aspirated</th>
          <th>- aspirated</th>
          <th>- aspirated</th>
          <th>+ aspirated</th>
          <th>- long</th>
          <th>+ long</th>
          <th>- long</th>
          <th>+ long</th>
        </tr>
        <tr>
          <th>guttural</th>
          <td></td>
          {td('ख')}
          {td('क')}
          {td('ग')}
          {td('घ')}
          {td('ङ')}
          {td('ह')}
          <td>अ<br />{convert('अ')}</td>
          <td>आ<br />{convert('आ')}</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th>palatal</th>
          {td('श')}
          {td('छ')}
          {td('च')}
          {td('ज')}
          {td('झ')}
          {td('ञ')}
          {td('य')}
          {td('इ')}
          <td>ई<br />{convert('ई')}</td>
          <td>ए<br />{convert('ए')}</td>
          <td>ए<br />{convert('ऐ')}</td>
        </tr>
        <tr>
          <th>retroflex</th>
          {td('ष')}
          {td('ठ')}
          {td('ट')}
          {td('ड')}
          {td('ढ')}
          {td('ण')}
          {td('र')}
          <td>ऋ<br />{convert('ऋ')}</td>
          <td>ॠ<br />{convert('ॠ')}</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th>dental</th>
          {td('स')}
          {td('थ')}
          {td('त')}
          {td('द')}
          {td('ध')}
          {td('न')}
          {td('ल')}
          <td>ऌ<br />{convert('ऌ')}</td>
          <td>ॡ<br />{convert('ॡ')}</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th>labial</th>
          <td></td>
          {td('फ')}
          {td('प')}
          {td('ब')}
          {td('भ')}
          {td('म')}
          {td('व')}
          {td('उ')}
          {td('ऊ')}
          <td>ओ<br />{convert('ओ')}</td>
          <td>औ<br />{convert('औ')}</td>
        </tr>
        <tr>
          <th></th>
          <td>कः<br />{convert('कः').replace(/qa/, '')}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>कं<br />{convert('कं').replace(/qa/, '')}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
  </>
}