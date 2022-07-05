import Converter from '../utils/Converter'
import Textareas from '../components/textareas'
import { replaceAll } from '../utils/util'

export default () => {
  const { convert } = new class extends Converter {
    wordRe = /\S+/iug
    locale = 'ar'
    hasCase = false

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

      [/\u064e/g, "ӑ"],
      [/\u064f/g, "u"],
      [/\u0650/g, "i"],

      [/\u064bӑ?/g, "ą"],
      [/\u064c/g, "ų"],
      [/\u064d/g, "į"],

      [/[ء\u0654\u0655]/g, "ọ"], // hamza
      [/\u0652/g, ""],

      [/ӑa(?![ӑuiāūīąųį])/g, "ā"],
      [/uv(?![ӑuiāūīąųį])/g, "ū"],
      [/ij(?![ӑuiāūīąųį])/g, "ī"],

      [/([^ӑuiāūīąųį])([ӑuiāūīąųį]*)\u0651/g, "$1$1"],

      [/،/g, ","],
    ]).normalize('NFKC')
  }()

  return <>
    <h2>arabic</h2>
    <Textareas lang="ar" dir='rtl' convert={convert}>{
      `ا ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن ه و ي

الإعلان العالمي لحقوق الإنسان
المادة 1
يولد جميع الناس أحرارًا متساوين في الكرامة والحقوق.
وقد وهبوا عقلاً وضميرًا وعليهم أن يعامل بعضهم بعضًا بروح الإخاء.`
    }</Textareas>
    <a href='https://unicode.org/udhr/d/udhr_arb.html'>source of default text</a>
  </>
}
