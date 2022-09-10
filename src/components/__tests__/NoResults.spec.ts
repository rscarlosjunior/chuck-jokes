import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'
import { mount, shallowMount } from '@vue/test-utils'
import { createPinia } from 'pinia'

import NoResults from '@/components/NoResults.vue'

const pinia = createPinia();

describe('NoResults', () => {
  const wrapper = shallowMount(NoResults, {
    global: {
        plugins: [pinia],
    },
  });
  it('render component without results', () => {
    expect(wrapper.text()).toContain('No results here')
  })

})
