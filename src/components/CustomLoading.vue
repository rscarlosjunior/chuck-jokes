<template>
  <div class="loading wrapper">
    <img alt="Unicorn logo" class="icon" src="@/assets/cry.png" width="200" height="200" />
    <p>Chuck Norris likes his meat so rare; he only eats unicorns.</p>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.loading {
  width: 200px;
  height: 200px;
  margin-top: 50px;
  width: 100%;
  -webkit-animation: fadeinout 3s linear forwards;
  animation: fadeinout 3s infinite forwards;
  opacity: 0;
}

p {
  text-align: center;
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
