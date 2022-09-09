<script setup lang="ts">
defineProps<{
  fact: string;
  id: string;
}>();
</script>

<template>
  <div class="item">
    <img
      alt="Unicorn logo"
      class="item__icon"
      src="@/assets/image/unicorn.png"
      width="45"
      height="45"
    />
    <p class="item__fact">{{ fact }}</p>
  </div>
</template>

<style lang="scss" scoped>
.item {
  display: flex;
  align-items: center;
  border: 0.2rem solid #d8bfff;
  background: #f1f1f1;
  border-radius: 0.65rem;
  padding: 1.2rem;
  margin-top: 0.85rem;
  margin-bottom: 0.85rem;
  width: 100%;
  max-width: 30rem;
  margin: 0.85rem auto;
  &__icon {
    margin-right: 1rem;
  }
  &__fact {
    word-wrap: anywhere;
  }
}
</style>
