<!-- Passando props entre componentes pai e filho – parte 2 -->
<template>
  <div>
    <p Name:> {{ name }}</p>
    <p Age:> {{ age }}</p>
  </div>
</template>

<script>
export default {
  name: "ChildComponent",

  props: {
    name: String,
    age: Number
  }
}
</script>