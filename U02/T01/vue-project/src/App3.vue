<template>
  <div>
    <!-- Uso de "props" para passar dados do pai para o filho -->
    <child-component :message="messageFromParent" />

    <!-- Uso de "slots" para inserir conteúdo personalizado no filho -->
    <child-component>
      <p>Este é um conteúdo personalizado inserido pelo pai.</p>
    </child-component>

    <!-- Uso de "eventos" para permitir que o filho notifique o pai -->
    <child-component @custom-event="handleCustomEvent" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      messageFromParent: 'Olá, filho!'
    };
  },
  methods: {
    handleCustomEvent(dataFromChild) {
      // Manipulando dados recebidos do filho após o evento
      console.log('Evento personalizado foi acionado pelo filho:', dataFromChild);
    }
  }
};
</script>

<style>
/* Estilos podem ser adicionados aqui se necessário */
</style>

<!-- Definindo um componente filho -->
<template id="child-component">
  <div>
    <!-- Usando "props" para exibir a mensagem do pai -->
    <p>{{ message }}</p>

    <!-- Usando "slots" para exibir o conteúdo personalizado do pai -->
    <slot></slot>

    <!-- Usando "eventos" para emitir um evento personalizado para o pai -->
    <button @click="emitCustomEvent">Emitir Evento</button>
  </div>
</template>

<script>
export default {
  props: {
    message: String
  },
  methods: {
    emitCustomEvent() {
      // Emissão de um evento personalizado para o pai
      this.$emit('custom-event', 'Dados enviados pelo filho');
    }
  }
};
</script>

<style scoped>
/* Estilos específicos do componente filho */
div {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
}
</style>
