import type { IFactsList } from '@/types'
import { getRandomByCache, memorizedCache } from '@/utils/utils'

const API_URL = 'https://api.chucknorris.io/jokes'

export const getRandomFact = (): Promise<IFactsList> => {
  const serializedData = sessionStorage.getItem('data')
  if (serializedData) {
    return getRandomByCache(serializedData)
  }

  // fallback if data serialize is fail
  return fetch(`${API_URL}/random`)
    .then((response) => response.json())
    .then((data) => {
      const formatter = {
        result: [data],
        total: 1,
      }
      return formatter
    })
    .catch((error) => {
      return error
    })
}

export const getFactByText = (params?: string): Promise<IFactsList> => {
  const serializedData = sessionStorage.getItem('data')

  if (serializedData) {
    return memorizedCache(serializedData, params)
  }

  // Frist entry into app
  return fetch(`${API_URL}/search?query=${params}`)
    .then((response) => response.json())
    .then((data) => {
      const serializedData = JSON.stringify(data)
      sessionStorage.setItem('data', serializedData)
      return data
    })
    .catch((error) => {
      return error
    })
}
