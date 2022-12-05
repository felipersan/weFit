import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  height: 56px;
  padding-left: 16px;
  background-color: ${({ theme }) => theme.colors.BLACK};
`

export const ComeBack = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const TextHeader = styled.Text`
  font-family: ${({ theme }) => theme.fonts.MEDIUM};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.WHITE};
`
