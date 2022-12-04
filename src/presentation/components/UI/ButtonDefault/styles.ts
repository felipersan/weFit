import styled from 'styled-components/native'

interface IProps {
  bgColor?: string
  color?: string
  shadow?: boolean
  full: boolean
  font: 'bold' | 'regular' | 'medium'
}

export const ButtonContainer = styled.TouchableOpacity<IProps>`
  padding: 8px 10px;
  background-color: ${({ theme }) => theme.colors.LIGTH_YELLOW};
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: ${({ theme }) => theme.radius.SMALL};
`

export const ImageIcon = styled.Image`
  width: 20px;
  height: 20px;
`

export const TextButton = styled.Text`
  color: ${({ theme }) => theme.colors.YELLOW};
  font-family: ${({ theme }) => theme.fonts.BOLD};
  margin-left: 10px;
  font-size: 12px;
`
