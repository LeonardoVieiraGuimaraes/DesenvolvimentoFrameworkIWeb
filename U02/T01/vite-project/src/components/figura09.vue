<!-- Passando conteúdo personalizado através de slots – parte 1 -->
<template>
  <div>
    <child-component>
      <p>
        Este parágrafo será insreido no slot padrão do componente filho.
      </p>
      <template #header>
        <h2>Título personlizado do slot header.</h2>
      </template>
      <template #footer>
        <h2>Título personlizado do slot footer.</h2>
      </template>
    </child-component>
  </div>
</template>

<script>
import ChildComponent from "./figura10.vue"; // Nome do arquivo para o componente filho

export default {
  name: "ParentComponent", // Nome do componente pai

  components: {
    ChildComponent
  }
}
</script>
