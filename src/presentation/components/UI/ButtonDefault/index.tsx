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
  borderSize?: '1px' | '2px' | '3px'
  borderColor?: string
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
  size,
  borderColor,
  borderSize
}: IProps) => {
  return (
    <ButtonContainer
      borderColor={borderColor}
      borderSize={borderSize}
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
