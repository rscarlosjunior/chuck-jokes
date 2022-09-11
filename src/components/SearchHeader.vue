<script setup lang="ts">
import { reactive } from 'vue'

import { useFactStore } from '@/stores/factStore'

import useVuelidate from '@vuelidate/core'
import { minLength, maxLength } from '@vuelidate/validators'

const fact = useFactStore()

const form = reactive({ search: '' })

const rules = {
  search: { minLength: minLength(3), maxLength: maxLength(120) },
}

const v$ = useVuelidate(rules, form)

function onSubmit() {
  fact.getData(form.search)
}

function onFellingLucky() {
  form.search = ''
  fact.getRandom()
}
</script>
<template>
  <section class="header">
    <img
      alt="ChuckNoris logo"
      src="@/assets/image/chucknoris_unicorn.png"
      width="300"
      height="250"
    />
    <div class="header__search">
      <h1 class="header__search--title">Search Chuck Norris Facts</h1>
      <form @submit.prevent.stop="onSubmit" class="header__search__form">
        <input
          type="text"
          class="header__search__form__input"
          v-model="form.search"
          placeholder="yes, FACTS. not JOKES."
        />
        <button
          type="submit"
          class="header__search__form__button"
          :disabled="v$.$invalid"
          :class="v$.$invalid ? 'header__search__form__button--disabled' : ''"
        >
          Search
        </button>
      </form>
      <p v-if="v$.$invalid" class="header__search--error">
        Type between 3 and 120 characters, or remove all to reset the search
      </p>
      <button @click="onFellingLucky" type="button" class="header__search__lucky">
        I'm feeling lucky today
        <img
          alt="ChuckNoris logo"
          class="header__search__lucky--image"
          src="@/assets/image/trevo.png"
          width="20"
          height="20"
        />
      </button>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.header {
  width: 100%;
  max-width: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__search {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    align-items: center;
    &--error {
      color: red;
    }
    &--title {
      text-decoration: none;
      color: #3f00a1;
      transition: 0.4s;
      font-weight: 500;
      font-size: 1.5rem;
      top: -0.85rem;
    }
    &__form {
      display: flex;
      width: 100%;
      &__input {
        padding: 0.85rem;
        font-size: 1.1rem;
        border: unset;
        width: 70%;
        height: 3rem;
        background: #f1f1f1;
        border-top-left-radius: 0.3rem;
        border-bottom-left-radius: 0.3rem;
        &:focus {
          outline: none;
        }
      }
      &__button {
        width: 30%;
        padding: 0.85rem;
        background: #9900e6;
        color: white;
        font-size: 1rem;
        border: unset;
        border-left: none;
        border-top-right-radius: 0.3rem;
        border-bottom-right-radius: 0.3rem;
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
    &__lucky {
      width: 100%;
      background-color: #c9eede;
      padding: 0.85rem;
      font-size: 1rem;
      border-radius: 0.3rem;
      margin-top: 0.85rem;
      border: unset;
      color: #6e6e6e;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      &--image {
        margin-left: 0.5rem;
      }
    }
  }
}
</style>
