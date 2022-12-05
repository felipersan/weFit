import React from 'react'
import { View } from 'react-native'
import { repositorie } from '../../../../@types/repositories'
import Button from '../../../components/UI/ButtonDefault'
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
  const data: repositorie = route.params.params.id

  console.log(data)

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
        <ButtonView>
          <Button
            Press={() => {}}
            bgColor={'transparent'}
            color={'#1976D2'}
            full={true}
            font={'bold'}
            title={'VER REPOSITÓRIO'}
            size={'15px'}
            icon={require('../../../assets/images/link.png')}
            iconPosition={'rigth'}
          />
        </ButtonView>
        <Button
          Press={() => {}}
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
      </BottomButtons>
    </>
  )
}

export default Details
