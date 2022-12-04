import React from 'react'
import { StatusBar } from 'react-native'
import { Container, Text, Button, SettingsIcon, SafeArea } from './styles'

type Props = {
  title: string
  onPress: () => void
}

const Header = (props: Props) => {
  return (
    <SafeArea>
      <Container>
        <Text>{props.title}</Text>

        <Button
          onPress={() => {
            props.onPress()
          }}
        >
          <SettingsIcon />
        </Button>
      </Container>
    </SafeArea>
  )
}

export default Header
