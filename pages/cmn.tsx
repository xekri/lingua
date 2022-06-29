import { useState } from 'react';
import convert from '../utils/convert-cmn'
import style from '../styles/cmn.module.sass'

export default () => {
  const defaultText =
    `世界人權宣言
第一條
人人生而自由，在尊嚴和權利上一律平等。
他們賦有理性和良心，並應以兄弟關係的精神相對待。`

  const [data, setData] = useState({ content: convert(defaultText) })
  const onChange = (event) => {
    setData({ content: convert(event.target.value) })
  }

  return <div className='textareas'>
    <textarea defaultValue={defaultText} onChange={onChange}></textarea>
    <div className={style.out}>{
      data.content.map((textOrHan, i) =>
        'han' in textOrHan ?
          <span key={i} className={textOrHan.romans.length > 1 ? style.multiple : ''}>
            {textOrHan.romans.join('|')}
          </span>
          : textOrHan.text
      )
    }</div>
  </div>
}