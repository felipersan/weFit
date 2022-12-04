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
  size?: string
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
  title,
  size
}: IProps) => {
  return (
    <ButtonContainer
      font={font}
      full={full}
      bgColor={bgColor && bgColor}
      color={color}
      shadow={shadow}
      onPress={() => {
        Press()
      }}
    >
      {icon && iconPosition === 'left' && <ImageIcon source={icon} />}
      <TextButton
        font={font}
        full={full}
        bgColor={bgColor && bgColor}
        color={color}
        shadow={shadow}
        onPress={() => {
          Press()
        }}
        size={size}
      >
        {title}
      </TextButton>
      {icon && iconPosition === 'rigth' && <ImageIcon source={icon} />}
    </ButtonContainer>
  )
}

export default Button
