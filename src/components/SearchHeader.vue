<script setup lang="ts">
import { ref, reactive } from 'vue'

import useVuelidate from '@vuelidate/core'
import { minLength, maxLength } from '@vuelidate/validators'

import { useFactStore } from '@/stores/factStore'
const fact = useFactStore()

const form = reactive({ search: '' })

const rules = {
  search: { minLength: minLength(3), maxLength: maxLength(120) },
}

const v$ = useVuelidate(rules, form)

async function onSubmit() {
  fact.getData(form.search)
}
</script>
<template>
  <section class="header">
    <img alt="ChuckNoris logo" src="@/assets/chucknoris_unicorn.png" width="300" height="250" />
    <div class="header__search">
      <h1 class="header__search--title">Search Chuck Norris Facts</h1>
      <form class="header__search__form">
        <input
          type="text"
          class="header__search__form__input"
          v-model="form.search"
          placeholder="yes, FACTS. not JOKES."
        />
        <button
          type="button"
          class="header__search__form__button"
          @click="onSubmit"
          :disabled="v$.$invalid"
          :class="v$.$invalid ? 'header__search__form__button--disabled' : ''"
        >
          Search
        </button>
      </form>
      <p v-if="v$.$invalid" class="header__search--error">
        Type between 3 and 120 characters, or remove all to reset the search
      </p>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.header {
  width: 100%;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__search {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    align-items: center;
    &--error{
      color: red;
    }
    &--title {
      text-decoration: none;
      color: #3f00a1;
      transition: 0.4s;
      font-weight: 500;
      font-size: 1.5rem;
      top: -10px;
    }
    &__form {
      display: flex;
      width: 100%;
      &__input {
        padding: 10px;
        font-size: 17px;
        border: unset;
        width: 70%;
        height: 45px;
        background: #f1f1f1;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        &:focus {
          outline: none;
        }
      }
      &__button {
        width: 30%;
        padding: 10px;
        background: #9900e6;
        color: white;
        font-size: 14px;
        border: unset;
        border-left: none;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        cursor: pointer;
        &--disabled {
          background: #808080;
          cursor: no-drop;
          &:hover {
            background: #808080;
            cursor: no-drop;
            color: white;
          }
        }
        &:hover {
          transition-delay: 0.1s;
          background: #eabfff;
          color: #9900e6;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
