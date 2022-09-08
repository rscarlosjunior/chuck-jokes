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
  <div v-if="counter" class="error wrapper">
    <img
      alt="Unicorn Rejectable"
      class="icon"
      src="@/assets/rejectable_unicorn.png"
      width="200"
      height="200"
    />
    <p>No results here, go away fast or chuck is gonna kill you</p>

    <p>{{counter}}</p>
  </div>
  <div class="error wrapper" v-else>
    <img
      alt="Chuck killing you"
      class="icon"
      src="@/assets/gif_chuck.gif"
      width="200"
      height="200"
    />
    <p>Ok, you died.</p>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.error {
  width: 200px;
  height: 200px;
  margin-top: 100px;
  width: 100%;
  justify-content: center;
  align-items: center;
}
p {
  font-size: 1.3rem;
  font-weight: 700;
  text-align: center;
}
</style>
