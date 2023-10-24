<template>
  <div>
    <child-component @increment="updateCounter" />
    <p>Counter: {{ counter }}</p>
  </div>
</template>

<script>
import ChildComponent from "./figura07.vue"; // Nome do arquivo para o componente filho

export default {
  name: "ParentComponent", // Nome do componente pai

  components: {
    ChildComponent
  },

  data() {
    return {
      counter: 0
    };
  },
  methods: {
    updateCounter(value) {
      this.counter = value;
    }
  }
};
</script>
