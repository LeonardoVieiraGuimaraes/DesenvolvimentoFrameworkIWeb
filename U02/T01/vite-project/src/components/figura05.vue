
<template>
  <div>
    <child-component :name="name" :age="age" />
  </div>
</template>

<script>
export default {
  name: "ParentComponent",
  componentes: {
    ChildComponent
  },
  data() {
    return {
      name: "john",
      age: 30
    }
  },
}
</script>