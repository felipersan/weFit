import React from 'react'
import { StatusBar } from 'react-native'
import { Card, Container } from './styles'

interface props {
  data: any
}

const CardRepository = ({ data }: props) => {
  return (
    <Container>
      <Card></Card>
    </Container>
  )
}

export default CardRepository
