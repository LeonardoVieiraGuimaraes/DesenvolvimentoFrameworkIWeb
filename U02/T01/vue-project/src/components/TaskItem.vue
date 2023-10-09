<template>
    <li>{{ task }}</li>
</template>
  
  <script>
export default {
  props: {
    task: String // Define uma propriedade chamada "task" que recebe uma string
  }
};
  </script>
  
  <style scoped>
/* Estilos específicos do componente TaskItem */
li {
    margin-bottom: 5px;
}
</style>
  