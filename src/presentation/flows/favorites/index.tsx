import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { RepositoryContext, RepositoryProvider } from '../../context/repository'
import { Container } from './styles'
import CardFavoriteRepository from '../../components/cards/CardFavoriteRepository'
import { KeyValuePair } from '@react-native-async-storage/async-storage/lib/typescript/types'

const Home = ({ props }: any) => {
  const { favorites, getFavoriteRepository } = useContext(RepositoryContext)

  useEffect(() => {
    getFavoriteRepository()
  }, [])

  return (
    <Container>
      {favorites?.map((row: any, index: number) => {
        console.log('row ==============>', row)
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
