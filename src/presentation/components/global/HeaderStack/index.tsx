import { useNavigation } from '@react-navigation/native'
import { Image } from 'react-native'
import { ComeBack, Container, TextHeader } from './styles'

export default function HeaderStack({ ...props }) {
  const navigation = useNavigation()

  return (
    <Container>
      <ComeBack
        onPress={() => {
          navigation.goBack()
        }}
      >
        <Image source={require('../../../assets/images/arrowLeft.png')} />
        <TextHeader>Detalhes</TextHeader>
      </ComeBack>
    </Container>
  )
}
