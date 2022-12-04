import React, { useEffect } from 'react'
import { Container, Logo } from './styles'
import { useNavigation } from '@react-navigation/native'
import { Text } from 'react-native'

export const Splash = () => {
  const navigation = useNavigation()

  useEffect(() => {
    setTimeout(() => {
      // navigation.navigate('/BottomRouter')
      // console.log('teste')
    }, 2000)
  }, [])

  return (
    <Container>
      <Text>Teste</Text>
      <Logo />
    </Container>
  )
}
