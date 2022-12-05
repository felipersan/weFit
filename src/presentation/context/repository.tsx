import React, { createContext, useState } from 'react'
import { useEffect } from 'react'
import { repositorie } from '../../@types/repositories'
import { useGetAllRepositoriesByNickName } from '../../infrastructure/http/repositories/GET/useGetAllRepositories'
import UserSelectionModal from '../components/UserSelectionModal'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { KeyValuePair } from '@react-native-async-storage/async-storage/lib/typescript/types'

type Children = { children: JSX.Element }

type Repository = {
  id: number
  name: string
  owner: { name: string; avatar: string }
  description: string
  url: string
  language: string
  stars: number
  favorite: boolean
}

export type RepositoryContextData = {
  repositories: Array<repositorie> | undefined
  favorites: readonly KeyValuePair[] | undefined
  getUserRepositories: (user: string) => Promise<void>
  toggleUserSelectionModal: () => void
  addFavoriteRepository: (name: string, repository: repositorie) => void
  removeFavoriteRepository: (repository: string) => void
  getFavoriteRepository: () => void
}

export const RepositoryContext = createContext<RepositoryContextData>(
  {} as RepositoryContextData
)

export const RepositoryProvider = ({ children }: Children) => {
  const [showModal, setShowModal] = useState(false)
  const [favorites, setFavorites] = useState<readonly KeyValuePair[]>()
  const [repositories, setRepositories] = useState<Array<repositorie>>()
  const [repositoryOwner, setRepositoryOwner] = useState('appswefit')

  const toggleUserSelectionModal = () => setShowModal(value => !value)

  const addFavoriteRepository = async (
    name: string,
    repositorie: repositorie
  ) => {
    await AsyncStorage.setItem(name, JSON.stringify(repositorie))
    let keys: readonly string[] = []
    let values: readonly KeyValuePair[] = []
    try {
      keys = await AsyncStorage.getAllKeys()
      try {
        values = await AsyncStorage.multiGet(keys)
        setFavorites(values)
      } catch (e) {}
    } catch (e) {}
  }

  const removeFavoriteRepository = async (repositoryName: string) => {
    await AsyncStorage.removeItem(repositoryName)
  }

  async function getFavoriteRepository() {
    let keys: readonly string[] = []
    let values: readonly KeyValuePair[] = []
    try {
      keys = await AsyncStorage.getAllKeys()
      try {
        values = await AsyncStorage.multiGet(keys)
        setFavorites(values)
      } catch (e) {}
    } catch (e) {}
  }

  const getUserRepositories = async (user: string) => {}

  const { allRepositories } = useGetAllRepositoriesByNickName(repositoryOwner)

  useEffect(() => {
    setRepositories(allRepositories)
  }, [allRepositories])

  return (
    <RepositoryContext.Provider
      value={{
        repositories,
        favorites,
        getUserRepositories,
        toggleUserSelectionModal,
        addFavoriteRepository,
        removeFavoriteRepository,
        getFavoriteRepository
      }}
    >
      {children}
      <UserSelectionModal
        visible={showModal}
        onClose={() => setShowModal(false)}
        onSearch={(nickName: string) => {
          setRepositoryOwner(nickName)
        }}
      />
    </RepositoryContext.Provider>
  )
}
