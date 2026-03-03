<template>
  <div class="page-container">
    <h1>Directiva v-if / v-else-if / v-else</h1>
    <p>Esta directiva renderiza el elemento solo si la condición es verdadera. Si es falsa, el elemento se elimina del DOM.</p>
    
    <div class="controls">
      <button @click="nivel = 1">Nivel 1</button>
      <button @click="nivel = 2">Nivel 2</button>
      <button @click="nivel = 3">Nivel 3</button>
    </div>

    <div class="resultado">
      <!-- Aquí aplicamos la lógica -->
      <p v-if="nivel === 1" class="verde">Nivel Bajo: Estás empezando.</p>
      <p v-else-if="nivel === 2" class="naranja">Nivel Medio: Vas bien.</p>
      <p v-else class="rojo">Nivel Alto: ¡Experto!</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nivel: 1
    }
  }
}
</script>

<style scoped>
.page-container { padding: 20px; }
.controls button { margin-right: 10px; padding: 8px; cursor: pointer; }
.verde { color: green; font-weight: bold; }
.naranja { color: orange; font-weight: bold; }
.rojo { color: red; font-weight: bold; }
</style>