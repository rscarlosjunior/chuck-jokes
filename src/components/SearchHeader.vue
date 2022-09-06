<script setup lang="ts">
import { ref } from "vue";
import { useFactStore } from "@/stores/factStore";

const fact = useFactStore();

const search = ref("");

async function onSubmit() {
  fact.getData(search.value);
}
</script>
<template>
  <section class="header">
    <img
      alt="ChuckNoris logo"
      class="logo"
      src="@/assets/chucknoris_unicorn.png"
      width="300"
      height="250"
    />
    <div class="search">
      <h1 class="purple">Search Chuck Norris Facts</h1>
      <form @submit.prevent.stop="onSubmit">
        <input type="text" v-model="search" placeholder="yes, FACTS not JOKES." />
        <button type="submit">Search</button>
      </form>
    </div>
  </section>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 1.5rem;
  top: -10px;
}
.search {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
form {
  display: flex;
  width: 100%;
}

form button {
  width: 30%;
  padding: 10px;
  background: #9900e6;
  color: white;
  font-size: 14px;
  border: unset;
  border-left: none;
  cursor: pointer;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
form button:hover {
  transition-delay: 0.1s;
  background: #eabfff;
  color: #9900e6;
}

textarea:focus,
input:focus {
  outline: none;
}

form input {
  padding: 10px;
  font-size: 17px;
  border: unset;
  width: 70%;
  height: 45px;
  background: #f1f1f1;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
</style>
