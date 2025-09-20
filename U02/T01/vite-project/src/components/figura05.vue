<!-- Passando props entre componentes pai e filho – parte 1 -->
<template>
  <div>
    <child-component :name="name" :age="age" />
  </div>
</template>

<script>
import ChildComponent from "./figura06.vue";
export default {
  name: "ParentComponent",
  components: {
    ChildComponent,
  },
  data() {
    return {
      name: "john",
      age: 30,
    };
  },
};
</script>
