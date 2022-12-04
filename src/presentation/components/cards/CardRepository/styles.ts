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
  padding: 12px 16px;
  display: flex;
`

export const TopView = styled.View`
  height: 29px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`

export const RepositoryName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.REGULAR};
`

export const RepositoryNameBold = styled.Text`
  font-family: ${({ theme }) => theme.fonts.BOLD};
`

export const ImageLamp = styled.Image``

export const ElementSeparator = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.GRAY_3};
  margin-bottom: 16px;
`

export const BottomView = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const RepositoryDescription = styled.Text`
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  color: ${({ theme }) => theme.colors.GRAY_4};
  margin-bottom: 16px;
  font-size: 12px;
  line-height: 14.52px;
  height: 30px;
  text-overflow: ellipsis;
`

export const FavoriteAndLanguageArea = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const FavoritesArea = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const ImageIcon = styled.Image`
  width: 20px;
  height: 20px;
`

export const FavoriteTextValue = styled.Text`
  margin-left: 6px;
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  color: ${({ theme }) => theme.colors.GRAY_4};
  font-size: 12px;
`

export const RepositoryLanguage = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const CircleLanguageColorize = styled.View`
  width: 8px;
  height: 8px;
  border-radius: ${({ theme }) => theme.radius.SMALL};
  background-color: ${({ theme }) => theme.colors.RED};
`

export const TextLanguage = styled.Text`
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.GRAY_4};
  margin-left: 6px;
`
