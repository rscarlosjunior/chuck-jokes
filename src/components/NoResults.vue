<script setup lang="ts">
import { ref, onMounted } from 'vue'

const counter = ref(5)

onMounted(() => {
  chuckIsComming()
})

function chuckIsComming() {
  if (counter.value >= 1) {
    setTimeout(() => {
      counter.value -= 1
      chuckIsComming()
    }, 1000)
  } else {
    setTimeout(() => {
      location.reload();
    }, 3000)
  }
}
</script>
<template>
  <div v-if="counter" class="noResults">
    <img
      alt="Unicorn Rejectable"
      class="icon"
      src="@/assets/image/rejectable_unicorn.png"
      width="200"
      height="200"
    />
    <p class="noResults__message">No results here, go away fast or chuck is gonna kill you</p>

    <p>{{ counter }}</p>
  </div>
  <div class="noResults" v-else>
    <img
      alt="Chuck killing you"
      class="icon"
      src="@/assets/image/gif_chuck.gif"
      width="200"
      height="200"
    />
    <p class="noResults__message">Ok, you died.</p>
  </div>
</template>

<style lang="scss" scoped>
.noResults {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  margin-top: 100px;
  width: 100%;
  justify-content: center;
  align-items: center;
  &__message {
    font-size: 1.3rem;
    font-weight: 700;
    text-align: center;
  }
}
</style>
