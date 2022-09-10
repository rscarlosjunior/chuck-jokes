import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import CustomLoading from '@/components/CustomLoading.vue'

describe('CustomLoading', () => {
  it('renders properly', () => {
    const wrapper = mount(CustomLoading)
    expect(wrapper.text()).toContain('Chuck Norris')
  })
})
