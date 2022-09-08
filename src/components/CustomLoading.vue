<template>
  <div class="loading">
    <img alt="Unicorn logo" src="@/assets/image/cry.png" width="200" height="200" />
    <p class="loading__message">Chuck Norris likes his meat so rare; he only eats unicorns.</p>
  </div>
</template>

<style lang="scss" scoped>
.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  margin-top: 50px;
  -webkit-animation: fadeinout 3s linear forwards;
  animation: fadeinout 3s infinite forwards;
  opacity: 0;
  &__message {
    text-align: center;
  }
}

@-webkit-keyframes fadeinout {
  50% {
    opacity: 1;
  }
}

@keyframes fadeinout {
  50% {
    opacity: 1;
  }
}
p {
  font-size: 1.3rem;
  font-weight: 700;
}
</style>
