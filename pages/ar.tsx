import Converter from '../utils/Converter'
import Textareas from '../components/textareas'
import { replaceAll } from '../utils/util'

export default () => {
  const { convert } = new class extends Converter {
    wordRe = /\S+/iug
    locale0 = 'ar'
    locale1 = 'en-GB'

    convertWord = (word: string) => replaceAll(word.normalize('NFKD'), [
      [/ا/g, "a"],
      [/ب/g, "b"],
      [/ج/g, "c"],
      [/د/g, "d"],
      [/ذ/g, "ḋ"],
      [/ه/g, "e"],
      [/و/g, "v"],
      [/ز/g, "z"],
      [/ح/g, "h"],
      [/خ/g, "ḣ"],
      [/ط/g, "x"],
      [/ظ/g, "ẋ"],
      [/ي/g, "j"],
      [/ك/g, "k"],
      [/ل/g, "l"],
      [/م/g, "m"],
      [/ن/g, "n"],
      [/ع/g, "o"],
      [/غ/g, "ȯ"],
      [/ف/g, "p"],
      [/ص/g, "š"],
      [/ض/g, "ṧ"],
      [/ق/g, "q"],
      [/ر/g, "r"],
      [/س/g, "s"],
      [/ش/g, "ṡ"],
      [/ت/g, "t"],
      [/ث/g, "ṫ"],

      [/ة/g, "ṭ"],

      [/ى/g, "ā"],
      [/آ/g, "ā"],

      [/\u064e/g, "ạ"],
      [/\u064f/g, "u"],
      [/\u0650/g, "i"],

      [/\u064bạ?/g, "ą"],
      [/\u064c/g, "ų"],
      [/\u064d/g, "į"],

      [/[ء\u0654\u0655]/g, "ọ"], // hamza
      [/\u0652/g, ""],

      [/ạa(?![ạuiāūīąųį])/g, "ā"],
      [/uv(?![ạuiāūīąųį])/g, "ū"],
      [/ij(?![ạuiāūīąųį])/g, "ī"],

      [/([^ạuiāūīąųį])([ạuiāūīąųį]*)\u0651/g, "$1$1"],

      [/،/g, ","],
    ]).normalize('NFKC')
  }()

  return <>
    <h2>arabic</h2>
    <Textareas lang="ar" dir='rtl' convert={convert}>{
      `ي و ه ن م ل ك ق ف غ ع ظ ط ض ص ش س ز ر ذ د خ ح ج ث ت ب ا

الإعلان العالمي لحقوق الإنسان
المادة 1
يولد جميع الناس أحرارًا متساوين في الكرامة والحقوق.
وقد وهبوا عقلاً وضميرًا وعليهم أن يعامل بعضهم بعضًا بروح الإخاء.
`
    }</Textareas>

    <a href='https://unicode.org/udhr/d/udhr_arb.html'>source of default text</a>
  </>
}
