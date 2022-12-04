import { all } from 'axios'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'react-native'
import { useGetAllRepositoriesByNickName } from '../../../../infrastructure/http/repositories/GET/useGetAllRepositories'
import CardRepository from '../../../components/cards/CardRepository'
import { CardAreaScroll, Container } from './styles'

const Home = () => {
  const [userNickName, setUserNickName] = useState<string>('felipersan')

  let cards = [1, 2, 3, 4, 5, 6]

  const { allRepositories } = useGetAllRepositoriesByNickName(userNickName)

  return (
    <Container>
      {allRepositories?.map((row: any, index: number) => {
        return <CardRepository data={row} marginTop={index !== 0} />
      })}
    </Container>
  )
}

export default Home
