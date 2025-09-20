<<<<<<< HEAD
<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import 'bulma/css/bulma.css'
=======
<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
>>>>>>> 70107d9bec1f90e9feb499cb70565ef8a5ad66a6
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
<<<<<<< HEAD
  
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
  
      <button class="button">
        Button
      </button>

      <button class="button is-primary">Botão Bulma</button>
    </div>
  </header>
  
=======

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

>>>>>>> 70107d9bec1f90e9feb499cb70565ef8a5ad66a6
  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
