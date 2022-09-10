import { createPinia, setActivePinia } from 'pinia'
import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'

import SearchHeader from '@/components/SearchHeader.vue'
const pinia = createPinia();

describe('SearchHeader', () => {
  const wrapper = mount(SearchHeader, {
    global: {
        plugins: [pinia],
    },
  });
  it('render component', () => {
    expect(wrapper.find('h1').exists()).toBeTruthy()
    expect(wrapper.find('input[type="text"]').exists()).toBeTruthy()
    expect(wrapper.find('button').exists()).toBeTruthy()
  })
})
