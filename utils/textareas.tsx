import { useState } from 'react'

export default ({ children, convert, ...props }) => {
  const [text, setText] = useState({
    datum: convert(children)
  })

  const onChange = (event) => {
    setText({ datum: convert(event.target.value) })
  }

  return <div className='textareas'>
    <textarea onChange={onChange} {...props}>
      {children}
    </textarea>
    <textarea value={text.datum} readOnly></textarea>
  </div>
}