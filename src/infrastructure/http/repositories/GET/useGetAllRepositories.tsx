import { useQuery } from 'react-query'
import { repositorie } from '../../../../@types/repositories'
import SearchClass from '../index'

export const useGetAllRepositoriesByNickName = (nickName?: string) => {
  const { data, isLoading, isError, isSuccess } = useQuery(
    ['allSearches', nickName],
    async () => {
      const data = await SearchClass.getAllRepositories(nickName)
      const apiResponse: Array<repositorie> = []
      data.map((row: any) => {
        const newPositionInApiResponseArray = {
          full_name: row.full_name,
          description: row.description,
          avatar_url: row.owner.avatar_url,
          stargazers_count: row.stargazers_count,
          language: row.language,
          html_url: row.html_url
        }
        apiResponse.push(newPositionInApiResponseArray)
      })
      return apiResponse as Array<repositorie>
    }
  )
  return {
    allRepositories: data as Array<repositorie>,
    isLoadingAllSearches: isLoading as boolean,
    isErrorAllSearches: isError as boolean,
    isSuccessAllSearches: isSuccess as boolean | number
  }
}
