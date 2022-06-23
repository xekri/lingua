import { replaceAll } from "../utils/util"
import Converter from '../utils/Converter'
import Textareas from '../components/textareas'

/*
const convertWordCyrl = s =>
  [
    [/^y/g, "jy"],
    [/i/g, "jy"],
    [/ě/g, "je"],

    [/ó/g, "ѡ"],

    [/jy/g, "і"],
    [/je/g, "ѥ"],
    [/ja/g, "ꙗ"],
    [/jo/g, "ю"],
    [/ju/g, "ѵ"],
    [/ję/g, "ѩ"],
    [/ją/g, "ѭ"],

    [/y/g, "ꙑ"],
    [/e/g, "є"],
    [/a/g, "а"],
    [/o/g, "о"],
    [/u/g, "у"],
    [/ę/g, "ѧ"],
    [/ą/g, "ѫ"],

    [/p/g, "п"],
    [/b/g, "б"],
    [/f/g, "ф"],
    [/v/g, "в"],
    [/m/g, "м"],

    [/k/g, "к"],
    [/g/g, "г"],
    [/h/g, "х"],

    [/t/g, "т"],
    [/d/g, "д"],
    [/s/g, "с"],
    [/z/g, "з"],
    [/n/g, "н"],
    [/l/g, "л"],
    [/r/g, "р"],

    [/ǯ/g, "џ"],
    [/č/g, "ч"],
    [/š/g, "ш"],
    [/ž/g, "ж"],
    [/c/g, "ц"],
    [/ʒ/g, "ѕ"],

    [/j/g, "ь"],
    [/'/g, "ъ"],
  ]
    .map(([x, y]) =>
      [x, Array.isArray(y) ? y[mode] : y]
    )
    .reduce((acc, [x, y]) => acc.replace(x, y), s.normalize("NFC"))

*/

export default () => {
  const { convert } = new class extends Converter {
    wordRe = /[a-zęąóżłćśźń]+/ig
    locale = 'pl-PL'

    convertWord = (s: string) => replaceAll(s.normalize("NFC"), [
      [/ch/g, "h"],
      [/w/g, "v"],
      [/sz/g, "š"],
      [/cz/g, "č"],
      [/ż/g, "ž"],

      [/(?<=[tdr])(?=i)/g, "'"],

      [/l(?!i)/g, "lj"],
      [/łi/g, "l'i"],
      [/ł/g, "l"],
      [/rzy/g, "ri"],
      [/rz/g, "rj"],

      [/(?<=[sz])j/g, "'j"],
      [/ć|ci(?=[eaouęąó])/g, "tj"],
      [/ci/g, "ti"],
      [/dź|dzi(?=[eaouęąó])/g, "dj"],
      [/dzi/g, "di"],
      [/ś/g, "sj"],
      [/ź/g, "zj"],
      [/ń/g, "nj"],

      [/cji/g, "ci"],

      [/i(?=[eaouęąó])/g, "j"],
      [/i/g, "jy"],

      [/(?<=[sz])jr/g, "rj"],
      [/sjtj/g, "stj"],
      [/zjdj/g, "zdj"],

      [/^j(?=[ye])/g, ""],

      [/(?<![iyeaouęąó^])jy/g, "i"],
      [/(?<![iyeaouęąó^])je/g, "ě"],
    ])
  }()

  return <>
    <h2>polish</h2>
    <Textareas lang='pl' convert={convert}>{
      `POWSZECHNA DEKLARACJA PRAW CZŁOWIEKA
Artykuł 1
Wszyscy ludzie rodzą się wolni i równi pod względem swej godności i swych praw.
Są oni obdarzeni rozumem i sumieniem i powinni postępować wobec innych w duchu braterstwa.`
    }</Textareas>
    <a href='https://unicode.org/udhr/d/udhr_pol.html'>source of default text</a>
  </>
}