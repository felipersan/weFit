import styled from 'styled-components/native'

interface props {
  marginTop: boolean
}

export const Container = styled.View<props>`
  margin-top: ${({ marginTop }) => (marginTop ? '16px' : '0px')};
  height: 167px;
`

export const Card = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.WHITE};
  border-radius: ${({ theme }) => theme.radius.SMALL};
  box-shadow: ${({ theme }) => theme.shadow.DEFAULT};
`
