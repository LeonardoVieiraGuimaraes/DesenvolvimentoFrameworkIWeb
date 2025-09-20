<!-- Emitindo um evento de um componente filho para o pai – parte 1 -->
<!-- Componente Filho -->

<template>
  <div>
    <button @click="incrementCount">Count</button>
    <!-- <p>{{ counter }}</p> -->
  </div>
</template>

<script>
export default {
  name: "ChildComponent",

  data() {
    return {
      counter: 0
    };
  },
  methods: {
    incrementCount() {
      this.counter++;
      this.$emit("increment", this.counter);
    }
  }
}
</script>
