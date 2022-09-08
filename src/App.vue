<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { RouterView } from "vue-router";
import { useFactStore } from "@/stores/factStore";
import SearchHeader from "./components/SearchHeader.vue";
import CustomLoading from "@/components/CustomLoading.vue";

const fact = useFactStore();

onMounted(() => {
  fact.data = [""];
  fact.getData();
});

const isLoading = computed(() => {
  return fact.counter === 0 && fact.data.length;
});

</script>

<template>
  <div class="wrapper">
    <SearchHeader />
    <CustomLoading v-if="isLoading" />
    <RouterView v-else />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
