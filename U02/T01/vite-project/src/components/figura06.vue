
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

  },
  data() {
    return {
      // data properties
    };
  }
}
</script>