<script setup lang="ts">
import { provide } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import SearchHeader from './components/SearchHeader.vue'

</script>

<template>
  <div class="wrapper">
    <SearchHeader />
    <RouterView />
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
