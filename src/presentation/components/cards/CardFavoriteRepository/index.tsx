import { useQueryClient } from 'react-query'

import { repositorie } from '../../../../@types/repositories'
import Button from '../../UI/ButtonDefault'
import {
  BottomView,
  Card,
  CircleLanguageColorize,
  Container,
  ElementSeparator,
  FavoriteAndLanguageArea,
  FavoritesArea,
  FavoriteTextValue,
  ImageIcon,
  ImageLamp,
  RepositoryDescription,
  RepositoryLanguage,
  RepositoryName,
  RepositoryNameBold,
  TextLanguage,
  TopView
} from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface props {
  data: repositorie
  marginTop: boolean
}

const CardFavoriteRepository = ({ data, marginTop }: props) => {
  return (
    <Container marginTop={marginTop}>
      <Card>
        <TopView>
          <RepositoryName>
            {data?.full_name?.split('/')[0]}/
            <RepositoryNameBold>
              {data?.full_name?.split('/')[1]}
            </RepositoryNameBold>
          </RepositoryName>
          <ImageLamp source={require('../../../assets/images/lamp.png')} />
        </TopView>
        <ElementSeparator />
        <BottomView>
          <RepositoryDescription>
            {data?.description ?? 'Esse repositótio não possui descrição'}
          </RepositoryDescription>
          <FavoriteAndLanguageArea>
            <FavoritesArea>
              <ImageIcon source={require('../../../assets/images/star.png')} />
              <FavoriteTextValue>{data?.stargazers_count}</FavoriteTextValue>
            </FavoritesArea>
            <RepositoryLanguage>
              <CircleLanguageColorize />
              <TextLanguage>{data?.language}</TextLanguage>
            </RepositoryLanguage>
          </FavoriteAndLanguageArea>
        </BottomView>
      </Card>
    </Container>
  )
}

export default CardFavoriteRepository
