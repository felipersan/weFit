import React, { useContext, useRef } from 'react'
import { QueryClient, useQueryClient } from 'react-query'

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
import {
  RepositoryContext,
  RepositoryProvider
} from '../../../context/repository'
import { useNavigation } from '@react-navigation/native'

interface props {
  data: repositorie
  marginTop: boolean
  changeFavorite: () => void
}

const CardRepository = ({ data, marginTop, changeFavorite }: props) => {
  const queryClient = useQueryClient()
  const { addFavoriteRepository } = useContext(RepositoryContext)

  const navigation = useNavigation()

  async function setRepoInAsyncStorage(key: string, value: any) {
    addFavoriteRepository(key, value)
  }

  return (
    <Container
      marginTop={marginTop}
      onPress={() => {
        navigation.navigate('Details', { params: { id: data } })
      }}
    >
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
            {data?.description ?? 'Esse repositório não possui descrição'}
          </RepositoryDescription>
          <FavoriteAndLanguageArea>
            <Button
              icon={require('../../../assets/images/star.png')}
              font="bold"
              full={false}
              bgColor="#fff"
              color="#000"
              Press={() => {
                setRepoInAsyncStorage(data?.full_name, data)
              }}
              iconPosition={'left'}
              title={'Favoritar'}
            />

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

export default CardRepository
