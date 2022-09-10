export function memorizedCache(dataList: any, searchParams?: string) {
  const dataFormatter = JSON.parse(dataList)

  if (!searchParams || searchParams === 'all') return dataFormatter

  const result = dataFormatter.result

  const filter = result.filter((o: any) =>
    Object.keys(o).some(
      (k) => typeof o[k] === 'string' && o[k].toLowerCase().includes(searchParams.toLowerCase()),
    ),
  )

  const data = {
    result: filter,
    total: filter.length,
  }

  return data
}

export function getRandomByCache(dataList: any) {
  const dataFormatter = JSON.parse(dataList)

  if(!dataFormatter) return dataList

  const result = dataFormatter.result
  const number = Math.floor(Math.random() * (result.length - 1 + 1)) + 1

  const data = {
    result: [result[number]],
    total: 1,
  }

  return data
}
