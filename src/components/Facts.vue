<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import FactsItem from '@/components/FactsItem.vue'
import CustomLoading from '@/components/CustomLoading.vue'
import { useFactStore } from '@/stores/factStore'

const fact = useFactStore();

onMounted(() => {
  fact.getData()
})

const list = computed(() => {
  return fact.data
})
</script>

<template>
  <div v-if="list.length">
    <div v-for="(item, index) of list" v-bind:key="item.id">
      <FactsItem :fact="item.value" :id="item.id" :index="index" />
    </div>
  </div>
  <div v-else>
    <CustomLoading/>
  </div>
</template>

<style></style>
