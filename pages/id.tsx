import { replaceAll } from "../utils/util"
import Converter from '../utils/Converter'
import Textareas from '../components/textareas'

export default () => {
  const { convert } = new class extends Converter {
    wordRe = /[a-zé]+/ig
    locale = 'id-ID'

    convertWord = (s: string) => replaceAll(s.normalize("NFC"), [
      [/j/g, 'ď'], //dj
      [/c/g, 'ť'], //tj
      [/sy/g, 'š'], //sj
      [/ny/g, 'ň'], //sj
      [/y/g, 'j'],
      [/v/g, 'f'],
      [/w/g, 'v'],
      [/kh/g, 'x'],
      [/g/g, 'c'],
      [/nc/g, 'g'],

      [/aa/g, 'ā'],
      [/ee/g, 'ē'],
      [/ii/g, 'ī'],
      [/oo/g, 'ō'],
      [/uu/g, 'ū'],
    ])
  }()

  return <>
    <h2>indonesian</h2>
    <Textareas lang='id' convert={convert}>{
      `Pernyataan Umum tentang Hak-Hak Asasi Manusia
Pasal 1
Semua orang dilahirkan merdeka dan mempunyai martabat dan hak-hak yang sama.
Mereka dikaruniai akal dan hati nurani dan hendaknya bergaul satu sama lain dalam semangat persaudaraan.`
    }</Textareas>


    <div className='tables'>
      <table>
        <tr>
          <th style={{ writingMode: 'horizontal-tb' }}>post-reform</th>
          <td rowSpan={3}>a</td>
          <td rowSpan={3}>b</td>
          <td>c</td>
          <td rowSpan={3}>d</td>
          <td rowSpan={2}>e</td>
          <td rowSpan={3}>f</td>
          <td rowSpan={2}>g</td>
          <td rowSpan={3}>h</td>
          <td rowSpan={3}>i</td>
          <td>j</td>
          <td rowSpan={3}>k</td>
          <td>kh</td>
          <td rowSpan={3}>l</td>
          <td rowSpan={3}>m</td>
          <td rowSpan={3}>n</td>
          <td rowSpan={2}>ng</td>
          <td>ny</td>
          <td rowSpan={3}>o</td>
          <td rowSpan={3}>p</td>
          <td rowSpan={3}>q</td>
          <td rowSpan={3}>r</td>
          <td rowSpan={3}>s</td>
          <td>sy</td>
          <td rowSpan={3}>t</td>
          <td>u</td>
          <td rowSpan={3}>v</td>
          <td rowSpan={3}>w</td>
          <td rowSpan={2}>x</td>
          <td>y</td>
          <td rowSpan={3}>z</td>
        </tr>
        <tr>
          <th>pre-reform</th>
          <td rowSpan={2}>tj</td>
          <td rowSpan={2}>dj</td>
          <td>ch</td>
          <td rowSpan={2}>nj</td>
          <td rowSpan={2}>sj</td>
          <td>oe</td>
          <td rowSpan={2}>j</td>
        </tr>
        <tr>
          <th>proposed</th>
          <td>e è</td>
          <td>c</td>
          <td>x</td>
          <td>g</td>
          <td>u</td>
          <td></td>
        </tr>
        <tr>
          <th>IPA</th>
          <td>[a]</td>
          <td>[b]</td>
          <td>[t͡ʃ]</td>
          <td>[d]</td>
          <td>[ə] [e]</td>
          <td>[f]</td>
          <td>[g]</td>
          <td>[h]</td>
          <td>[i]</td>
          <td>[d͡ʒ]</td>
          <td>[k]</td>
          <td>[x]</td>
          <td>[l]</td>
          <td>[m]</td>
          <td>[n]</td>
          <td>[ŋ]</td>
          <td>[ɲ]</td>
          <td>[o]</td>
          <td>[p]</td>
          <td>[k]</td>
          <td>[r]</td>
          <td>[s]</td>
          <td>[ʃ]</td>
          <td>[t]</td>
          <td>[u]</td>
          <td>[v]</td>
          <td>[w]</td>
          <td></td>
          <td>[j]</td>
          <td>[z]</td>
        </tr>
      </table>
    </div>
  </>
}