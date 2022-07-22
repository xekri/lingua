import Converter from '../../utils/Converter'
import Textareas from '../../components/textareas'
import { replaceAll } from '../../utils/util'

export default () => {
  const { convert } = new class extends Converter {
    wordRe = /[a-z]+/iug
    locale = 'ja'
    hasCase = false

    convertWord = (word: string) => replaceAll(word.normalize('NFKD'), [
      [/ki/g, 'き'],
      [/ke/g, 'け'],
      [/ka/g, 'か'],
      [/ko/g, 'こ'],
      [/ku/g, 'く'],

      [/si/g, 'し'],
      [/se/g, 'せ'],
      [/sa/g, 'さ'],
      [/so/g, 'そ'],
      [/su/g, 'す'],

      [/ti/g, 'ち'],
      [/te/g, 'て'],
      [/ta/g, 'た'],
      [/to/g, 'と'],
      [/tu/g, 'つ'],

      [/ni/g, 'に'],
      [/ne/g, 'ね'],
      [/na/g, 'な'],
      [/no/g, 'の'],
      [/nu/g, 'ぬ'],

      [/li/g, 'り'],
      [/le/g, 'れ'],
      [/la/g, 'ら'],
      [/lo/g, 'ろ'],
      [/lu/g, 'る'],

      [/pi/g, 'ひ'],
      [/pe/g, 'へ'],
      [/pa/g, 'は'],
      [/po/g, 'ほ'],
      [/pu/g, 'ふ'],

      [/mi/g, 'み'],
      [/me/g, 'め'],
      [/ma/g, 'ま'],
      [/mo/g, 'も'],
      [/mu/g, 'む'],

      [/je/g, '𛀁'],
      [/ja/g, 'や'],
      [/jo/g, 'よ'],
      [/ju/g, 'ゆ'],

      [/wi/g, 'ゐ'],
      [/we/g, 'ゑ'],
      [/wa/g, 'わ'],

      [/n/g, 'ん'],

      [/i/g, 'い'],
      [/e/g, 'え'],
      [/a/g, 'あ'],
      [/o/g, 'お'],
      [/u/g, 'う'],
    ]).normalize('NFKC')
  }()

  return <>
    <h2>toki pona in kana</h2>
    <Textareas lang="tpo" dir='ja' convert={convert}>{
      `jan ali li kama lon nasin ni: ona li ken tawa li ken pali.
jan ali li kama lon sama.
jan ali li jo e ken pi pilin suli.
jan ali li ken pali e wile pona ona.
jan ali li wile pali kepeken nasin ni: ona li jan pona tawa jan ante.`
    }</Textareas>
    <a href='https://omniglot.com/conscripts/tokipona.htm'>source of default text</a>
  </>
}
