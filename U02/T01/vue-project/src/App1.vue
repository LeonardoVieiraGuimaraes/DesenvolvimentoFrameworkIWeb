<template>
  <div>
    <!-- Header compartilhado -->
    <header>
      <h1>Meu Aplicativo</h1>
    </header>

    <!-- Conteúdo variável -->
    <main>
      <!-- Botão com ação e conteúdo diferentes -->
      <button @click="mostrarMensagem">Clique-me</button>

      <!-- Input de formulário com variações de valores e atributos -->
      <input :type="inputType" :placeholder="inputPlaceholder" v-model="inputValue" />

      <!-- Exibição condicional de texto -->
      <p v-if="mostrarTexto">{{ texto }}</p>
    </main>

    <!-- Footer compartilhado -->
    <footer>
      <p>Rodapé comum a todas as páginas</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputType: 'text',
      inputPlaceholder: 'Digite algo...',
      inputValue: '',
      mostrarTexto: false,
      texto: 'Texto a ser exibido',
    };
  },
  methods: {
    mostrarMensagem() {
      this.mostrarTexto = !this.mostrarTexto;
    },
  },
};
</script>

<style>
/* Estilos específicos para o header, main e footer */
header {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1rem;
}

main {
  padding: 1rem;
}

footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1rem;
}
</style>
