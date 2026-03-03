<template>
  <div class="page-container">
    <h1>Directiva v-for</h1>
    <p>Itera sobre un array para renderizar una lista de elementos repetidos.</p>

    <ul>
      <!-- Aquí aplicamos v-for -->
      <li v-for="fruta in frutas">
        {{ fruta.nombre }} - Precio: ${{ fruta.precio }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      frutas: [
        { nombre: 'Manzana', precio: 1.50 },
        { nombre: 'Pera', precio: 2.00 },
        { nombre: 'Naranja', precio: 1.20 }
      ]
    }
  }
}
</script>

<style scoped>
.page-container { padding: 20px; }
ul { list-style-type: none; padding: 0; }
li { background: #eee; margin: 5px 0; padding: 10px; border-radius: 4px; }
</style>