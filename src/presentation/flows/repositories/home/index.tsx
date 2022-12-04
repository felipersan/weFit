import { all } from 'axios'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { StatusBar } from 'react-native'
import { useGetAllRepositoriesByNickName } from '../../../../infrastructure/http/repositories/GET/useGetAllRepositories'
import CardRepository from '../../../components/cards/CardRepository'
import { RepositoryContext } from '../../../context/repository'
import { CardAreaScroll, Container } from './styles'

const Home = ({ props }: any) => {
  const [userNickName, setUserNickName] = useState<string>('felipersan')

  const { repositories } = useContext(RepositoryContext)

  return (
    <Container>
      {repositories?.map((row: any, index: number) => {
        return <CardRepository data={row} marginTop={index !== 0} />
      })}
    </Container>
  )
}

export default Home
