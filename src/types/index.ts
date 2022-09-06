export interface IFacts {
  icon_url: string
  id: string
  url: string
  value: string
}

export interface IFactsList {
  result: IFacts[]
  total: number
}
