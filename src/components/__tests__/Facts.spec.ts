import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { useFactStore } from '@/stores/factStore'
import { createPinia } from 'pinia'

import Facts from '@/components/Facts.vue'
import FactsItem from '@/components/FactsItem.vue'
import BackToTopButton from '@/components/FactsItem.vue'
import NoResults from '@/components/FactsItem.vue'

const pinia = createPinia()

describe('Facts', () => {
  const wrapper = mount(Facts, {
    global: {
      plugins: [pinia],
    },
  })

  const fact = useFactStore()

  fact.data = [
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
  ]

  fact.counter = 15

  it('verify if a child component exists', () => {
    expect(wrapper.findComponent(FactsItem).exists()).toBeTruthy()
  })

  it('child quantity', () => {
    expect(wrapper.findAllComponents(FactsItem).length).toBe(2)
  })

  it('verify if float button exists', () => {
    expect(wrapper.findComponent(BackToTopButton).exists()).toBeTruthy()
  })
})
