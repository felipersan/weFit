import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { RepositoryContext, RepositoryProvider } from '../../context/repository'
import { Container } from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import CardFavoriteRepository from '../../components/cards/CardFavoriteRepository'

const Home = ({ props }: any) => {
  const { favorites } = useContext(RepositoryContext)

  // useEffect(() => {
  //   remove()
  // }, [])

  // async function remove() {
  //   let keys = await AsyncStorage.getAllKeys()
  //   console.log(keys)
  //   let remove = await AsyncStorage.multiRemove(keys).then(() => {
  //     console.log('removeu')
  //   })
  // }

  return (
    <Container>
      {favorites?.map((row: any, index: number) => {
        return (
          <CardFavoriteRepository
            key={index}
            data={JSON.parse(row[1])}
            marginTop={index !== 0}
          />
        )
      })}
    </Container>
  )
}

export default Home
