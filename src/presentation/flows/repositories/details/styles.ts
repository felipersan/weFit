import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.WHITE};
  padding: 16px;
  position: relative;
`

export const RepositoryName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.BLACK};
`

export const RepositoryNameBold = styled.Text`
  font-family: ${({ theme }) => theme.fonts.BOLD};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.BLACK};
`

export const RepositoryDescription = styled.Text`
  margin-top: 16px;
  color: ${({ theme }) => theme.colors.GRAY_4};
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  font-size: 16px;
  line-height: 19px;
`

export const RepositoryLanguage = styled.View`
  margin-top: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const CircleLanguageColorize = styled.View`
  width: 12px;
  height: 12px;
  border-radius: ${({ theme }) => theme.radius.MEDIUM};
  background-color: ${({ theme }) => theme.colors.RED};
`

export const TextLanguage = styled.Text`
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.GRAY_4};
  margin-left: 6px;
  line-height: 16.94px;
`

export const BottomButtons = styled.View`
  position: absolute;
  width: 100%;
  height: 56px;
  bottom: 0;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.WHITE};
  display: flex;
  flex-direction: column;
  height: auto;
`

export const ButtonView = styled.View`
  margin-top: 10px;
  height: 56px;
`
