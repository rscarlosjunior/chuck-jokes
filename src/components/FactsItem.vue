<script setup lang="ts">
import CommunityIcon from "./icons/IconCommunity.vue";

defineProps<{
  fact: string;
  id: string;
}>();
</script>

<template>
  <div class="item">
    <div class="icon">
      <img alt="Unicorn logo" class="icon" src="@/assets/unicorn.png" width="45" height="45" />
    </div>
    <p>{{ fact }}</p>
  </div>
</template>

<style scoped>
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
}
.item .icon {
  margin-right: 15px;
}
</style>
