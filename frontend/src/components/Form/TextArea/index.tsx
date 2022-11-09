import React from 'react'

import * as C from './style'

interface TextAreaProps {
  name: string
  cols?: number
  rows?: number
  text?: string
  placeholder?: string
  handleOnCheange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const TextArea: React.FC<TextAreaProps> = ({
  name,
  cols,
  rows,
  text,
  handleOnCheange,
  placeholder,
}) => {
  return (
    <C.StyledComponent>
      <label htmlFor={name}>{text}</label>
      <textarea
        id={name}
        name={name}
        cols={cols}
        rows={rows}
        onChange={handleOnCheange}
      >
        {placeholder}
      </textarea>
    </C.StyledComponent>
  )
}

export default TextArea
