<!-- Componente Filho -->
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

<template>
  <div>
    <button @click="incrementCount">Count</button>
    <!-- <p>{{ counter }}</p> -->
  </div>
</template>

