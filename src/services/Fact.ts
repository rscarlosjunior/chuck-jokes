import type { IFacts, IFactsList } from "@/types"

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
  return fetch(`${API_URL}/search?query=${params}`)
    .then((response) => response.json())
    .then((data) => {
      return data
    })
    .catch((error) => {
      return error
    })
}
