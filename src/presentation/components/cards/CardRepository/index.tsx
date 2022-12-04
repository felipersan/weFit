import React from 'react'
import { StatusBar } from 'react-native'
import { Card, Container } from './styles'

interface props {
  data: any
  marginTop: boolean
}

const CardRepository = ({ data, marginTop }: props) => {
  return (
    <Container marginTop={marginTop}>
      <Card></Card>
    </Container>
  )
}

export default CardRepository
