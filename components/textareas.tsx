import { useState } from 'react'

export default ({ children, ...props }) => {
  console.log(children)

  const [text, setText] = useState({
    datum: props.convert(children)
  })

  const onChange = (event) => {
    setText({ datum: props.convert(event.target.value) })
  }

  return <div className='textareas'>
    <textarea onChange={onChange} {...props}>
      {children}
    </textarea>
    <textarea value={text.datum} readOnly></textarea>
  </div>
}