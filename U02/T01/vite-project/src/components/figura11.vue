<!-- Acessando o estado counter do Vuex Store -->
<template>
  <div>
    <p>Counter: {{ counter }}</p>
    <button @click="incrementCounter">Incrementar contador</button>
    <button @click="incrementCounterAsync">Incrementar contador async</button>
  </div>
</template>

<script>
 import { mapState, mapActions } from 'vuex';

 export default {
  name: 'MyComponent',
  computed: {
    ...mapState(['counter']),
  },
  methods: {
    ...mapActions(['incrementCounterAsync']),
    incrementCounter() {
    this.$store.commit('increment', 1);
  },
  incrementCounterAsync() {
    this.incrementCounterAsync(1);
  },
  },
 }
</script>
