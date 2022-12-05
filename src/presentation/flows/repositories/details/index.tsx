import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Linking, View } from 'react-native'
import { useSafeAreaFrame } from 'react-native-safe-area-context'
import { repositorie } from '../../../../@types/repositories'
import Button from '../../../components/UI/ButtonDefault'
import { RepositoryContext } from '../../../context/repository'
import {
  BottomButtons,
  ButtonView,
  CircleLanguageColorize,
  Container,
  RepositoryDescription,
  RepositoryLanguage,
  RepositoryName,
  RepositoryNameBold,
  TextLanguage
} from './styles'

const Details = ({ route }: any) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false)

  const data: repositorie = route.params.params.id

  const {
    favorites,
    getFavoriteRepository,
    removeFavoriteRepository,
    addFavoriteRepository
  } = useContext(RepositoryContext)
  useEffect(() => {
    getFavoriteRepository()
  }, [])

  useEffect(() => {
    isFavoriteRepository(data?.full_name)
  }, [favorites])

  function isFavoriteRepository(repositoryName: string) {
    const isFavoriteRepo = favorites?.filter((row: any) => {
      if (row[1].includes(repositoryName) === true) {
        setIsFavorite(true)
      } else {
        setIsFavorite(false)
      }
    })
  }
  ;('')
  return (
    <>
      <Container>
        <RepositoryName>
          {data?.full_name?.split('/')[0]}/
          <RepositoryNameBold>
            {data?.full_name?.split('/')[1]}
          </RepositoryNameBold>
        </RepositoryName>
        <RepositoryDescription>
          {data?.description ?? 'Esse repositório não possui descrição'}
        </RepositoryDescription>
        <RepositoryLanguage>
          <CircleLanguageColorize />
          <TextLanguage>{data?.language}</TextLanguage>
        </RepositoryLanguage>
      </Container>
      <BottomButtons>
        <Button
          Press={async () => {
            await Linking.openURL(data?.html_url)
          }}
          bgColor={'transparent'}
          color={'#1976D2'}
          full={true}
          font={'bold'}
          title={'VER REPOSITÓRIO'}
          size={'15px'}
          icon={require('../../../assets/images/link.png')}
          iconPosition={'rigth'}
        />
        <ButtonView>
          {isFavorite === true ? (
            <Button
              Press={() => {
                removeFavoriteRepository(data?.full_name)
                getFavoriteRepository()
              }}
              bgColor={'transparent'}
              borderColor={'#000'}
              borderSize={'1px'}
              color={'#000'}
              full={true}
              font={'bold'}
              title={'DESFAVORITAR'}
              shadow
              size={'15px'}
              icon={require('../../../assets/images/blackStar.png')}
              iconPosition={'rigth'}
            />
          ) : (
            <Button
              Press={() => {
                addFavoriteRepository(data?.full_name, data)
                getFavoriteRepository()
              }}
              bgColor={'#FFD02C'}
              color={'#000'}
              full={true}
              font={'bold'}
              title={'FAVORITAR'}
              shadow
              size={'15px'}
              icon={require('../../../assets/images/blackStar.png')}
              iconPosition={'rigth'}
            />
          )}
        </ButtonView>
      </BottomButtons>
    </>
  )
}

export default Details
