import { replaceAll } from "../utils/util"
import Converter from '../utils/Converter'
import Textareas from '../components/textareas'

export default () => {
  const { convert } = new class extends Converter {
    wordRe = /\S+/iug
    locale0 = 'nl-NL'
    locale1 = 'en-GB'

    convertWord = (s: string) => replaceAll(s, [
      [/(?<!au)x/g, 'ks'],
      [/^z/, 's'],
      [/^v/, 'f'],
      [/ch/g, 'x'],
      [/ij/g, 'ī'],
      [/aa/g, 'ā'],
      [/ee/g, 'ē'],
      [/éé/g, 'ḗ'],
      [/oo/g, 'ō'],
      [/uu/g, 'ū'],
    ])
  }()

  return <>
    <h2>dutch</h2>
    <Textareas lang='nl' convert={convert}>{
      `UNIVERSELE VERKLARING VAN DE RECHTEN VAN DE MENS

Artikel 1
Alle mensen worden vrij en gelijk in waardigheid en rechten geboren.
Zij zijn begiftigd met verstand en geweten, en behoren zich jegens elkander in een geest van broederschap te gedragen.`
    }</Textareas>
    <a href='https://unicode.org/udhr/d/udhr_nld.html'>source of default text</a>

    <div className='tables'>
      <table>
        <tr>
          <th></th>
          <th>i</th>
          <th>he</th>
          <th>she</th>
          <th>it</th>
          <th>we</th>
          <th>ye</th>
          <th>they</th>
        </tr>
        <tr>
          <th>nominative</th>
          {'ik hij zij het wij jij zij'.split(' ').map((w, i) => <td key={i}>{convert(w)}</td>)}
        </tr>
        <tr>
          <th>oblique</th>
          {'mij hem haar het ons u hen'.split(' ').map((w, i) => <td key={i}>{convert(w)}</td>)}
        </tr>
        <tr>
          <th>posessive</th>
          {'mijn zijn haar zijn ons uw hun'.split(' ').map((w, i) => <td key={i}>{convert(w)}</td>)}
        </tr>
        <tr>
          <th>‘be’</th>
          <td>{convert('ben')}</td>
          <td colSpan={3}>{convert('is')}</td>
          <td colSpan={3}>{convert('zijn')}</td>
        </tr>
        <tr>
          <th>‘have’</th>
          <td>{convert('heb')}</td>
          <td colSpan={3}>{convert('heeft')}</td>
          <td colSpan={3}>{convert('hebben')}</td>
        </tr>
        <tr>
          <th>‘make’</th>
          <td>{convert('maak')}</td>
          <td colSpan={3}>{convert('maakt')}</td>
          <td colSpan={3}>{convert('maken')}</td>
        </tr>
      </table>
    </div>
  </>
}
