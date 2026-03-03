<template>
  <div class="page-container">
    <h1>Uso correcto de v-bind:key</h1>
    <p>Vue necesita una clave única (key) para rastrear cada nodo y reutilizar elementos eficientemente al modificar la lista.</p>

    <button @click="agregarUsuario">Agregar Usuario</button>

    <ul>
      <!-- Aquí aplicamos v-bind:key (sintaxis corta :key) -->
      <li v-for="usuario in usuarios" :key="usuario.id">
        ID: {{ usuario.id }} - Nombre: {{ usuario.nombre }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuarios: [
        { id: 1, nombre: 'Ana' },
        { id: 2, nombre: 'Carlos' }
      ],
      contador: 3
    }
  },
  methods: {
    agregarUsuario() {
      this.usuarios.push({ id: this.contador++, nombre: 'Nuevo Usuario' });
    }
  }
}
</script>

<style scoped>
.page-container { padding: 20px; }
button { background: purple; color: white; padding: 10px; border: none; cursor: pointer; }
</style>