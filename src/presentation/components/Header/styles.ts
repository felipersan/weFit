import { MaterialIcons } from '@expo/vector-icons'
import styled from 'styled-components/native'

export const SafeArea = styled.SafeAreaView``

export const Container = styled.View`
  width: 100%;
  height: 56px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 8px 12px 16px;
  background-color: ${({ theme }) => theme.colors.GRAY_2};
`

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.BOLD};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.BLACK};
`

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 1
})``

export const SettingsIcon = styled(MaterialIcons).attrs(({ theme }) => ({
  name: 'settings',
  size: 24
}))``
