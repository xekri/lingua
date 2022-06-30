import { useState } from "react"
import style from '../../styles/zh.module.sass'

import show from './show.mjs'
import yue from './yue.json'

const toData = (s: string) =>
  [...s].map(c =>
    c in yue
      ? { char: c, yues: yue[c] }
      : { char: c }
  )

const defaultInput = `零一二三四五六七八九十

春曉
春眠不覺曉
處處聞啼鳥
夜來風雨聲
花落知多少

世界人權宣言 第一條
人人生而自由，
在尊嚴和權利上一律平等。
他們賦有理性和良心，
並應以兄弟關係的精神相對待。
`

export default () => {
  const [data, setData] = useState({
    format: 'unicode',
    input: defaultInput,
    output: toData(defaultInput)
  })

  const onChange = (event) => {
    const input = event.target.value;
    setData({
      format: data.format,
      input,
      output: toData(input),
    })
  }

  const onChangeSelect = (event) => {
    setData({
      format: event.target.value,
      ...data,
    })
  }

  return <>
    <select onChange={onChangeSelect}>{
      ['unicode', 'ascii'].map((format, i) =>
        <option key={i} value={format}>{format}</option>)
    }</select>
    <div className='textareas'>
      <textarea value={data.input} onChange={onChange}></textarea>
      <div className={style.out}>{
        data.output.map((datum, i) => {
          if ('yues' in datum)
            if (datum.yues.length == 1) {
              return <span key={`${datum.char}-${data.format}-${i}`}>{
                datum.yues.map(({ initial, final, tone, roman, emcNum }, j) => {
                  return (emcNum == 0 ? '*' : '') + show[data.format](initial, final, tone)
                })[0]
              }</span>
            } else {
              return <select key={`${datum.char}-${data.format}-${i}`}>{
                datum.yues.map(({ initial, final, tone, roman, emcNum }, j) =>
                  <option key={`${datum.char}-${data.format}-${i}-${j}`}>{
                    (emcNum == 0 ? '*' : '') + show[data.format](initial, final, tone)
                  }</option>
                )
              }</select>
            }
          else
            return datum.char
        })
      }</div>
      <div className={style.out}>not implemented</div>
    </div>

    <div>
      <div className='tables'>
        <table>
          <caption>initial</caption>
          <tr className='v-parent'>
            <th></th>
            <th colSpan={2}>labial</th>
            <th colSpan={3}>dental</th>
            <th colSpan={2}>palatal</th>
            <th colSpan={2}>velar</th>
            <th colSpan={2}>labiovelar</th>
          </tr>
          <tr>
            <th>tenuis</th>
            <td>p</td>
            <td>pv</td>
            <td>t</td>
            <td>ţ</td>
            <td>s</td>
            <td>tj</td>
            <td>sj</td>
            <td>k</td>
            <td>q</td>
            <td>kv</td>
            <td>xv</td>
          </tr>
          <tr>
            <th>aspirated</th>
            <td>ꝑ</td>
            <td>ꝑv</td>
            <td>ŧ</td>
            <td>ṯ</td>
            <td>ŧj</td>
            <td></td>
            <td>ꝁ</td>
            <td>x</td>
            <td>ꝁv</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>low</th>
            <td>b</td>
            <td>bv</td>
            <td>d</td>
            <td>ḑ</td>
            <td>z</td>
            <td>dj</td>
            <td>zj</td>
            <td>c</td>
            <td>h</td>
            <td>cv</td>
            <td>hv</td>
          </tr>
          <tr>
            <th>sonorant</th>
            <td>m</td>
            <td>v</td>
            <td>n</td>
            <td>l</td>
            <td></td>
            <td>nj</td>
            <td>j</td>
            <td>g</td>
            <td>∅</td>
            <td></td>
            <td></td>
          </tr>
        </table>

        <table>
          <caption>final</caption>
          <tr>
            <th></th>
            <th>∅</th>
            <th>j</th>
            <th>v</th>
            <th>g</th>
            <th>n</th>
            <th>m</th>
          </tr>
          <tr>
            <th>i</th>
            <td>i</td>
            <td></td>
            <td>iv</td>
            <td>ig</td>
            <td>in</td>
            <td>im</td>
          </tr>
          <tr>
            <th>u</th>
            <td>u</td>
            <td>uj</td>
            <td></td>
            <td>ug</td>
            <td>un</td>
            <td>um</td>
          </tr>
          <tr>
            <th>y</th>
            <td>y</td>
            <td></td>
            <td></td>
            <td></td>
            <td>yn</td>
            <td></td>
          </tr>
          <tr>
            <th>e</th>
            <td>e</td>
            <td>ej</td>
            <td></td>
            <td>eg</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>o</th>
            <td>o</td>
            <td>oj</td>
            <td>ov</td>
            <td>og</td>
            <td>on</td>
            <td>om</td>
          </tr>
          <tr>
            <th>w</th>
            <td>w</td>
            <td>wj</td>
            <td></td>
            <td>wg</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>r</th>
            <td></td>
            <td>rj</td>
            <td>rv</td>
            <td>rg</td>
            <td>rn</td>
            <td>rm</td>
          </tr>
          <tr>
            <th>a</th>
            <td>a</td>
            <td>aj</td>
            <td>av</td>
            <td>ag</td>
            <td>an</td>
            <td>am</td>
          </tr>
        </table>

        <table>
          <caption>tone</caption>
          <tr>
            <th colSpan={2}></th>
            <th>平</th>
            <th>上</th>
            <th>去</th>
            <th>入</th>
          </tr>
          <tr>
            <th colSpan={2}>number</th>
            <td>an0</td>
            <td>an1</td>
            <td>an2</td>
            <td>an3</td>
          </tr>
          <tr>
            <th colSpan={2}>unicode</th>
            <td>an</td>
            <td>án</td>
            <td>ȧn</td>
            <td>at</td>
          </tr>
          <tr>
            <th colSpan={2}>ASCII</th>
            <td>an</td>
            <td>anq</td>
            <td>ans</td>
            <td>at</td>
          </tr>
        </table>
      </div>

      <div className='tables'>
        <table>
          <caption>low aspiration</caption>
          <tr className='v-parent'>
            <th></th>
            <th>平上</th>
            <th>去入</th>
          </tr>
          <tr>
            <th>tenuis</th>
            <td>dh</td>
            <td>d</td>
          </tr>
          <tr>
            <th>aspirated</th>
            <td>d</td>
            <td>dx</td>
          </tr>
        </table>

        <table>
          <caption>sonorant lowness</caption>
          <tr>
            <th>high</th>
            <th>low</th>
          </tr>
          <tr>
            <td>qn</td>
            <td>n</td>
          </tr>
        </table>
      </div>

      <ul>
        <li>‘w’ for [œ]</li>
        <li>‘r’ for [ɐ] (Cf english ‘er’ [ə])</li>
        <li>‘c’ for [g] (Cf old latin ‘C’, greek ‘Γ’)</li>
        <li>‘g’ for [ŋ]</li>
      </ul>

      <ul>
        <li>-on and *-wn are in complementary distribution therefore uniformly written -on.</li>
        <li>(q)w- is written (q)jo-.</li>
      </ul>
    </div>
  </>
}