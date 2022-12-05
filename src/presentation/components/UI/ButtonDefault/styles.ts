import styled, { css } from 'styled-components/native'

interface IProps {
  bgColor?: string
  color: string
  shadow?: boolean
  full: boolean
  font: 'bold' | 'regular' | 'medium'
  size?: string
  borderSize?: '1px' | '2px' | '3px'
  borderColor?: string
}

export const ButtonContainer = styled.TouchableOpacity<IProps>`
  padding: 8px 10px;
  background-color: ${({ bgColor }) => bgColor};
  ${({ full }) =>
    full &&
    css`
      flex: 1;
    `}
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radius.SMALL};

  border-color: ${({ borderColor }) => borderColor};
  border-width: ${({ borderSize }) => borderSize};
  border-style: solid;
`

export const ImageIcon = styled.Image`
  width: 20px;
  height: 20px;
  margin-left: 16px;
  margin-right: 16px;
`

export const TextButton = styled.Text<IProps>`
  font-family: ${({ theme }) => theme.fonts.BOLD};
  margin-left: 10px;
  color: ${({ color }) => color};
  ${({ size }) =>
    size === '15px' &&
    css`
      font-size: 15px;
      line-height: 26px;
    `}
`
