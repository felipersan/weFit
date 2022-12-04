import { useQuery } from 'react-query'
import SearchClass from '../index'

export const useGetAllRepositoriesByNickName = (nickName?: string) => {
  const { data, isLoading, isError, isSuccess } = useQuery(
    ['allSearches', nickName],
    async () => {
      return await SearchClass.getAllRepositories(nickName)
    }
  )
  return {
    allRepositories: data as any,
    isLoadingAllSearches: isLoading as boolean,
    isErrorAllSearches: isError as boolean,
    isSuccessAllSearches: isSuccess as boolean | number
  }
}
