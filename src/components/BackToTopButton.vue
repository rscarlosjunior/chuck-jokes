<script setup lang="ts">
function toTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <button class="top" type="button" @click="toTop">
    <img alt="top" src="@/assets/image/up-arrow.png" width="30" height="30" />
  </button>
</template>

<style lang="scss" scoped>
.top {
  position: fixed;
  border-radius: 30px;
  width: 50px;
  height: 50px;
  background-color: #d8bfff;
  border: unset;
  bottom: 0.2rem;
  right: 0.2rem;
}
</style>
