import styled from 'styled-components/native'

export const Container = styled.View`
  margin-top: 16px;
  height: 167px;
`

export const Card = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.WHITE};
  border-radius: ${({ theme }) => theme.radius.SMALL};
  box-shadow: ${({ theme }) => theme.shadow.DEFAULT};
`