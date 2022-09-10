import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { getFactByText, getRandomFact } from '@/services/Fact'

export const useFactStore = defineStore({
  id: 'factStore',
  state: () =>
    reactive({
      data: Array(),
      counter: 0,
    }),
  actions: {
    async getData(params?: string) {
      this.counter = 0
      const res = await getFactByText(params || 'all')
      this.data = res.result
      this.counter = res.total
    },

    async getRandom() {
      const res = await getRandomFact()
      this.data = res.result
      this.counter = 1
    },
  },
})
