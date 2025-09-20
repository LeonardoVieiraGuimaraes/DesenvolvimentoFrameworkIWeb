<!-- Passando conteúdo personalizado através de slots – parte 2 -->
<template>
  <div>
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="default">
      <slot></slot>
    </div>
    <div>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChildComponent",
}
</script>
