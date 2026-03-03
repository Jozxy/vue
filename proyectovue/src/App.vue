<template>
  <!-- Menú de Navegación -->
  <nav>
    <router-link to="/">v-if / v-else</router-link>
    <router-link to="/v-show">v-show</router-link>
    <router-link to="/v-for">v-for</router-link>
    <router-link to="/keys">v-bind:key</router-link>
  </nav>

  <!-- Aquí se cargan las páginas -->
  <main>
    <router-view />
  </main>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Estilos básicos para que se vea bien */
nav {
  background-color: #333;
  padding: 1rem;
  display: flex;
  gap: 20px;
}
nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}
nav a.router-link-active {
  color: #42b983; /* Color verde Vue */
  text-decoration: underline;
}
main {
  padding: 20px;
  font-family: Arial, sans-serif;
}
</style>