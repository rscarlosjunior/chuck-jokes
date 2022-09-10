import type { IFacts, IFactsList } from '@/types'
import { memorizedCache } from '@/utils/utils'

const API_URL = 'https://api.chucknorris.io/jokes'

export const getRandomFact = (): Promise<IFacts> => {
  return fetch(`${API_URL}/random`)
    .then((response) => response.json())
    .then((data) => {
      return data
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
