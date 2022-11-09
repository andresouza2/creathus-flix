import React from 'react'

import { ContainerStyle } from './style'
interface ContainerProps {
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <ContainerStyle>{children}</ContainerStyle>
}

export default Container
