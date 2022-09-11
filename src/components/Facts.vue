<script setup lang="ts">
import { computed } from 'vue'

import { useFactStore } from '@/stores/factStore'

import FactsItem from '@/components/FactsItem.vue'
import NoResults from '@/components/NoResults.vue'
import BackToTopButton from '@/components/BackToTopButton.vue'

const fact = useFactStore()

const list = computed(() => {
  return fact.data
})

const counter = computed(() => {
  return fact.counter
})

const isRandom = computed(() => {
  return fact.isRandom
})
</script>

<template>
  <div v-if="list.length" class="fact">
    <FactsItem
      v-for="(item, index) of list"
      v-bind:key="item.id"
      :fact="item.value"
      :isRandom="isRandom"
      :index="index"
    />
    <BackToTopButton v-if="counter > 15" />
  </div>
  <div v-else>
    <NoResults />
  </div>
</template>

<style lang="scss">
.fact {
  position: relative;
}
</style>
