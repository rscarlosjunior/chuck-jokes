<script setup lang="ts">
defineProps<{
  fact: string
  id: string
}>()
</script>

<template>
  <div class="item">
    <img alt="Unicorn logo" class="item__icon" src="@/assets/unicorn.png" width="45" height="45" />
    <p>{{ fact }}</p>
  </div>
</template>

<style lang='scss' scoped>
.item {
  display: flex;
  align-items: center;
  border: 1px solid #d8bfff;
  background: #f1f1f1;
  border-radius: 8px;
  padding: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  max-width: 640px;
  margin: 10px auto;
  &__icon {
    margin-right: 15px;
  }
}
</style>
