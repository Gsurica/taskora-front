import { useQuery } from "react-query"
import axios from 'axios'

export const useFetch = <T>(key: string, url: string, token: string) => {

  const { data, isLoading } = useQuery<T>(key, async () => {
    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + token,
      }
    })
    return response.data
  })

  return { data, isLoading }
}

