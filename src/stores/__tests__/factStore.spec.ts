import { beforeEach, describe, expect, it } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useFactStore } from '@/stores/factStore'

describe('Fact Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  const res = {
    result: [
      {
        icon_url: '1',
        id: '',
        url: '',
        value: 'Lorem ipsum',
      },
      {
        icon_url: '1',
        id: '',
        url: '',
        value: 'Lorem ipsum',
      },
    ],
    total: 14,
  }

  it('counter state', () => {
    const fact = useFactStore()
    expect(fact.counter).toBe(0)

    fact.counter = res.total

    expect(fact.counter).toBe(14)
  })

  it('verify data array', () => {
    const fact = useFactStore()

    expect(fact.data.length).toBe(0)

    fact.data = res.result

    expect(fact.data.length).toBe(2)
  })
})
