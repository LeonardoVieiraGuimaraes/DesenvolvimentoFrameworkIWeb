<template>
  <div>
    <!-- Exibe o valor da propriedade "title" interpolando a string -->
    <h1>{{ title }}</h1>

    <!-- Exibe o texto apenas se "showText" for verdadeiro -->
    <p v-if="showText">{{ text }}</p>

    <!-- Itera sobre a matriz "itens" e aplica uma classe se o índice for igual ao valor de "activeIndex" -->
    <ul>
      <li v-for="(item, index) in itens" :class="{ active: index === activeIndex }">{{ item }}</li>
    </ul>

    <!-- Vincula o valor do input ao dado "inputText" -->
    <input type="text" v-model="inputText" @change="handleInputChange" />

    <!-- Define um ouvinte de evento de clique e previne o comportamento padrão do botão (se existir) -->
    <button @click.prevent="metodoParaChamar">Clique-me</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Exemplo de diretivas Vue.js',
      showText: true,
      text: 'Texto a ser exibido se showText for verdadeiro',
      itens: ['Item 1', 'Item 2', 'Item 3'],
      activeIndex: 1,
      inputText: ''
    };
  },
  methods: {
    handleInputChange() {
      // Exibe o texto de entrada no console quando o evento "change" ocorre
      console.log('Texto de entrada:', this.inputText);
    },
    metodoParaChamar() {
      // Coloque o código que você deseja executar quando o botão for clicado aqui
    }
  }
};
</script>
