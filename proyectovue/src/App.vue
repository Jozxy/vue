<template>
  <header>
    <div class="logo">Vue Directivas Demo</div>
    <nav>
      <router-link to="/">v-if / v-else</router-link>
      <router-link to="/v-show">v-show</router-link>
      <router-link to="/v-for">v-for</router-link>
      <router-link to="/keys">v-bind:key</router-link>
    </nav>
  </header>

  <main>
    <div class="card">
      <router-view />
    </div>
  </main>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Estilos del Header */
header {
  background-color: var(--white);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: var(--shadow);
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo {
  font-weight: 600;
  font-size: 1.2rem;
  color: var(--primary);
}

nav {
  display: flex;
  gap: 20px;
}

nav a {
  text-decoration: none;
  color: var(--dark);
  font-weight: 500;
  padding: 8px 12px;
  border-radius: 6px;
  transition: all 0.3s ease;
}

nav a:hover {
  background-color: #e8f5e9;
  color: var(--primary);
}

nav a.router-link-active {
  background-color: var(--primary);
  color: white;
}

/* Contenedor Principal */
main {
  max-width: 800px;
  margin: 40px auto;
  padding: 0 20px;
}

.card {
  background: var(--white);
  padding: 40px;
  border-radius: 12px;
  box-shadow: var(--shadow);
}
</style>