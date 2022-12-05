import { all } from 'axios'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useGetAllRepositoriesByNickName } from '../../../../infrastructure/http/repositories/GET/useGetAllRepositories'
import CardRepository from '../../../components/cards/CardRepository'
import { RepositoryContext } from '../../../context/repository'
import { Container } from './styles'
import { repositorie } from '../../../../@types/repositories'

const Home = ({ props }: any) => {
  const [favoriteRepos, setFavoritesRepos] = useState<Array<repositorie>>([])
  const [favoriteReposKeys, setFavoritesReposKeys] = useState<any>([])

  const { repositories, favorites } = useContext(RepositoryContext)

  useEffect(() => {
    getReposKeys()
  }, [favorites])

  async function getReposKeys() {
    let keys = await AsyncStorage.getAllKeys()
    setFavoritesReposKeys(keys)
  }

  return (
    <Container>
      {repositories?.map((row: repositorie, index: number) => {
        const isFavorite = favoriteReposKeys.includes(row?.full_name)
        if (!isFavorite) {
          return (
            <CardRepository
              key={index}
              data={row}
              marginTop={index !== 0}
              changeFavorite={getReposKeys}
            />
          )
        }
      })}
    </Container>
  )
}

export default Home
