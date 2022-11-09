import React from 'react'

import * as C from './style'

interface ImputProps {
  type: string
  text?: string
  name: string
  placeholder?: string
  handleOnCheange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
  width?: string
}

const Imput: React.FC<ImputProps> = ({
  type,
  text,
  name,
  value,
  placeholder,
  handleOnCheange,
  width,
}) => {
  return (
    <C.StyledComponent>
      <label htmlFor={name}>{text}</label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        placeholder={placeholder}
        onChange={handleOnCheange}
        style={{ width: `${width}` }}
      />
    </C.StyledComponent>
  )
}

export default Imput
