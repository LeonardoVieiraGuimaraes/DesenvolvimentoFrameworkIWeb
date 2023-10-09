<template>
    <ul>
        <task-item v-for="task in tasks" :key="task" :task="task" />
    </ul>
</template>
  
  <script>
import TaskItem from './TaskItem.vue'; // Importa o componente TaskItem

export default {
  components: {
    'task-item': TaskItem // Registra o componente TaskItem
  },
  data() {
    return {
      tasks: ['Fazer compras', 'Estudar Vue.js', 'Passear com o cachorro'] // Dados de exemplo
    };
  }
};
  </script>
  