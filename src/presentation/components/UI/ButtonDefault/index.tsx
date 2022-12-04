import { ReactNode } from 'react'
import { Image, Text, View } from 'react-native'
import { ButtonContainer, ImageIcon, TextButton } from './styles'

interface IProps {
  bgColor: string
  color: string
  icon?: ReactNode
  iconPosition?: 'left' | 'rigth'
  shadow?: boolean
  Press: () => void
  full: boolean
  title: string
  font: 'bold' | 'regular' | 'medium'
}

const Button = ({
  bgColor,
  color,
  shadow,
  icon,
  iconPosition,
  Press,
  full,
  font,
  title
}: IProps) => {
  return (
    <ButtonContainer
      font={font}
      full={full}
      bgColor={bgColor && bgColor}
      color={color && color}
      shadow={shadow}
      onPress={Press}
    >
      {icon && iconPosition === 'left' && <ImageIcon source={icon} />}
      <TextButton>{title}</TextButton>
      {icon && iconPosition === 'rigth' && <ImageIcon source={icon} />}
    </ButtonContainer>
  )
}

export default Button
