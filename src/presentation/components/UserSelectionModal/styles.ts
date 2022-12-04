import styled from 'styled-components/native'
import { Modalize } from 'react-native-modalize'

export const Container = styled(Modalize).attrs({
  adjustToContentHeight: true,
  handlePosition: 'inside',
  childrenStyle: {
    padding: 24
  }
})`
  background-color: ${({ theme }) => theme.colors.GRAY_2};
`

export const TitleModal = styled.Text`
  font-family: ${({ theme }) => theme.fonts.MEDIUM};
  font-size: 16px;
  line-height: 28px;
  color: rgba(0, 0, 0, 0.87);
  margin-bottom: 10px;
`

export const AreaButons = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 16px;
`
