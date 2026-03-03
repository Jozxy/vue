<template>
  <div class="page-container">
    <h1>Directiva v-show</h1>
    <p>A diferencia de v-if, v-show no elimina el elemento del DOM, solo cambia su estilo CSS (display: none).</p>

    <label>
      <input type="checkbox" v-model="mostrarCaja"> Mostrar / Ocultar Caja
    </label>

    <!-- Aquí aplicamos v-show -->
    <div v-show="mostrarCaja" class="caja-azul">
      <p>¡Hola! Si desmarcas el checkbox, desaparezco pero sigo existiendo en el código.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mostrarCaja: true
    }
  }
}
</script>

<style scoped>
.page-container { padding: 20px; }
.caja-azul { 
  border: 2px solid blue; 
  background-color: #e0f7fa; 
  padding: 20px; 
  margin-top: 20px; 
}
</style>