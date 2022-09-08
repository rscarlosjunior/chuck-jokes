<script setup lang="ts">
import { ref, reactive } from "vue";

import useVuelidate from "@vuelidate/core"
import { minLength, maxLength } from '@vuelidate/validators'

import { useFactStore } from "@/stores/factStore";
const fact = useFactStore();

const form = reactive({search: ''})

const rules = {
  search: { minLength: minLength(3), maxLength: maxLength(120)}
}

const v$ = useVuelidate(rules, form)

async function onSubmit() {
  fact.getData(form.search);
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
      <form>
        <input type="text" v-model="form.search" placeholder="yes, FACTS. not JOKES." />
        <button type="button" @click='onSubmit' :disabled="v$.$invalid" :class="v$.$invalid ? 'btn-disable' : ''">Search</button>
      </form>
      <p v-if="v$.$invalid" class="error"> Type between 3 and 120 characters, or remove all to reset the search </p>
    </div>
  </section>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 1.5rem;
  top: -10px;
}
.header {
    width: 100%;
    max-width: 640px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.search {
  display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
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
  cursor: pointer;
}
form button:hover {
  transition-delay: 0.1s;
  background: #eabfff;
  color: #9900e6;
  cursor: pointer;
}

.btn-disable{
  background: #808080;
  cursor: no-drop;
}
.btn-disable:hover{
  background: #808080;
  cursor: no-drop;
  color: white;
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

.error {
  color: red;
  font-size: 12px;
}
</style>
