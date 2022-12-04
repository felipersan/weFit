import { AxiosResponse } from 'axios'
import { api } from '../GitHubApi'

class SearchClass {
  async getAllRepositories(nickName?: string) {
    try {
      const { data } = await api.get(`${nickName}/repos`)
      return data
    } catch (err) {
      console.error(err)
    }
  }
}
export default new SearchClass()
