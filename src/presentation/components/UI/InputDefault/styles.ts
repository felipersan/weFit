import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.06);
  padding: 9px 12px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-color: rgba(0, 0, 0, 0.42);
  border-bottom-width: 1px;
  border-bottom-style: solid;
`

export const TitleContainer = styled.Text`
  font-family: ${({ theme }) => theme.fonts.MEDIUM};
  color: rgba(0, 0, 0, 0.6);
  font-size: 12px;
  line-height: 12px;
`

export const Input = styled.TextInput`
  width: 100%;
  height: 24px;
  font-family: ${({ theme }) => theme.fonts.MEDIUM};
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.87);
  margin-bottom: 7px;
`
