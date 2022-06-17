import { useState } from 'react';
import style from '../styles/style.module.sass'

const replaceAll = (s: string, map: Array<[RegExp, string]>) =>
  map.reduce((acc, [x, y]) => acc.replace(x, y), s)

const convertWord = (word: string) => {
  const map: Array<[RegExp, string]> = [
    [/ı/g, "í"],
    [/i/g, "ì"],
    [/a/g, "á"],
    [/e/g, "à"],
    [/o/g, "ó"],
    [/ö/g, "ò"],
    [/u/g, "ú"],
    [/ü/g, "ù"],
  ]

  let r = '';
  let state = 0;
  for (const c of replaceAll(word, map)) {
    const stateNew =
      /[áíóú]/i.test(c) ?
        0
        : /[àìòù]/i.test(c) ?
          1
          :
          state

    const vowelMap: Array<[RegExp, string]> = [
      [/[áà]/g, "a"],
      [/[óò]/g, "o"],
      [/[íì]/g, "i"],
      [/[úù]/g, "u"],
    ]

    if (state == stateNew)
      r += replaceAll(c, vowelMap)
    else {
      r += c;
      state = stateNew;
    }
  }

  return r;
}

enum Kase {
  Low,
  Cap,
  Up,
  Other,
}

const applyKase = (kase: Kase, s) => {
  switch (kase) {
    case Kase.Up:
      return s.toLocaleUpperCase('TR')
    case Kase.Cap:
      return s.slice(0, 1).toLocaleUpperCase('TR') + s.slice(1)
    default:
      return s.toLocaleLowerCase('TR')
  }
}

const getKase = s => {
  for (const kase of [Kase.Up, Kase.Cap, Kase.Low]) {
    if (s == applyKase(kase, s))
      return kase;
  }
  return Kase.Other;
}

const convert = text => {
  return text.replace(/[a-zçğıöşü]+/ig, word =>
    applyKase(getKase(word), convertWord(word.toLocaleLowerCase('TR')))
  )
}

const defaultValue =
  `İnsan hakları evrensel beyannamesi
Madde 1
Bütün insanlar hür, haysiyet ve haklar bakımından eşit doğarlar.
Akıl ve vicdana sahiptirler ve birbirlerine karşı kardeşlik zihniyeti ile hareket etmelidirler.
`

export default () => {
  const [text, setText] = useState({
    datum: convert(defaultValue)
  })

  const onChange = (event) => {
    setText({ datum: convert(event.target.value) })
  }

  return <>
    <h2>turkish </h2>

    <table>
      <tr>
        <th>updated at</th>
        <td></td>
      </tr>
    </table>

    <div className={style.textareas} >
      <textarea onChange={onChange} lang="tr" defaultValue={defaultValue}></textarea>
      <textarea value={text.datum} readOnly></textarea>
    </div>
    <aside>
      <a href='https://unicode.org/udhr/d/udhr_tur.html'>source of default value</a>
    </aside>
  </>
}
