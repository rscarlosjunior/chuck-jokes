<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>

<template>
  <div class="greetings">
    <h1 class="orange">{{ msg }}</h1>
    <form>
      <input type="text" placeholder="so... i'm waiting a joke!" />
      <button type="submit"><i class="fa fa-search"></i></button>
    </form>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

form {
  display: flex;
  width: 100%;
}

form button {
  width: 10%;
  padding: 10px;
  background: orangered;
  color: white;
  font-size: 17px;
  border: 1px solid grey;
  border-left: none;
  cursor: pointer;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

form input {
  padding: 10px;
  font-size: 17px;
  border: 1px solid grey;
  width: 90%;
  height: 35px;
  background: #f1f1f1;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
