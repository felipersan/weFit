import React from 'react'
import { Container, Input, TitleContainer } from './styles'

interface IProps {
  title: string
  value: string
  change: (e: string) => void
  placeholder: string
}

const InputDefault = ({ title, value, change, placeholder }: IProps) => {
  return (
    <Container>
      <TitleContainer>{title}</TitleContainer>
      <Input
        placeholder={placeholder}
        onChangeText={(e: string) => {
          change(e)
        }}
        value={value}
      />
    </Container>
  )
}

export default InputDefault
