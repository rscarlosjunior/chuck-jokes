<script setup lang="ts">
import { computed } from "vue";
import FactsItem from "@/components/FactsItem.vue";
import { useFactStore } from "@/stores/factStore";
import NoResults from "@/components/NoResults.vue";

const fact = useFactStore();

const list = computed(() => {
  return fact.data;
});
</script>

<template>
  <div v-if="list.length">
    <FactsItem
      v-for="(item, index) of list"
      v-bind:key="item.id"
      :fact="item.value"
      :id="item.id"
      :index="index"
    />
  </div>
  <div v-else>
    <NoResults/>
  </div>
</template>
