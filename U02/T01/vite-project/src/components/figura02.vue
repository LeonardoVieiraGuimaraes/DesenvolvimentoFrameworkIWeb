<!-- Diretivas em código Vue.js -->
<template>
    <div>
        <!-- exibe o valor da propriedade title no elemento hl usando interpolacao de string title -->
        <h1>{{ title }}</h1>
        <!-- exibe o texto apnes se showText for verdadei, mas mantem o elemento no DOM -->
        <p v-show="showText">Este texto e exibido de showText for verdadeio</p>
        <ul>
            <!-- itera sobre as matriz items e exibe cada item como um elemento de lista, adicionado a classe "active" ao item atual se o indice for igual ao valor de activeIndex  -->
            <li v-for="(item, index) in items" :key="index">{{ item }} </li>
        </ul>
        <!-- vincula o valor do inputText a entrada do usuario no compo de texto, mas atualiza somente depois que o evento "change" ocorre  -->
        <input type="text" v-model.lazy="inputText">
        <!-- adiciona um ouvente de evento de clique para chmar o metodo submitform quando o botao e clicado, e usa ".prevent" para evitar o comportamento padrao do botao de enviar um formulario -->
    
        <button @click.prevent="submitForm">Clique Aqui</button>
        <p>{{ userInputText }}</p>
    </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Outro exemplo de diretivas Vue.js",
      showText: true,
      items: ["item 1", "item 2", "item 3"],
      activeIndex: 2,
      inputText: "",
      userInputText: "",
    }
  },
  methods: {
    submitForm() {
      // exibe o texto de entrada no console
      console.log("Texto de ebtrada: ", this.inputText);
       // Exibe o texto de entrada na página
       this.userInputText = this.inputText;
    }
  }
}
</script>